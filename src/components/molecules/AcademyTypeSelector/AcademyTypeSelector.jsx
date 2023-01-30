import { useContext, useState } from 'react';
import academiesData from '../../../app/academiesData';
import academiesNames from '../../../app/academiesNames';
import AcademyInput from './AcademyInput';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { registrationContext } from '../../context/registrationContext';
import styles from './AcademyTypeSelector.module.scss';

const AcademyTypeSelector = (props) => {
  const { required, labelTitle } = props;
  const formik = useContext(registrationContext);
  const { FrontEnd, Testers, FullStack } = academiesNames;
  const [currrMovement, setCurrMovement] = useState(null);

  const movement = (value) => setCurrMovement((prevMovement) => value);

  const handleClick = (e) => {
    if (e.target.value === FrontEnd) movement('to-right');
    else if (e.target.value === Testers) movement('side-to-center');
    else if (e.target.value === FullStack) movement('to-left');
  };

  const academiesButton = academiesData.map((data) => (
    <AcademyInput
      key={data.id}
      name={data.value}
      id={data.value + data.id}
      htmlFor={data.value + data.id}
      handleClick={handleClick}
      handleChange={(e) => formik.setFieldValue('academies', e.target.value)}
      input={{
        value: data.value,
        className: styles['slider-button'],
      }}
      className={
        formik.values.academies === data.value
          ? classNames(styles['slider-button__label'], styles.active)
          : styles['slider-button__label']
      }
    />
  ));

  return (
    <div className={styles['academy-selector']}>
      <label
        className={classNames(styles['slider-label'], {
          'AcademyTypeSelector__slider-label--required': required,
        })}
      >
        {labelTitle}
      </label>
      <div className={styles.slider}>
        {academiesButton}
        <span
          className={classNames(
            styles['slider-button--selected'],
            styles[currrMovement]
          )}
        ></span>
      </div>
    </div>
  );
};

AcademyTypeSelector.propTypes = {
  required: PropTypes.bool,
  labelTitle: PropTypes.string,
};

export default AcademyTypeSelector;
