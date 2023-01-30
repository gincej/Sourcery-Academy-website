import { useContext, useId, useState } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { registrationContext } from '../../context/registrationContext';
import styles from './RadioBtn.module.scss';

const RadioBtn = (props) => {
  const { name, value, labelTitle } = props;
  const id = useId();
  const formik = useContext(registrationContext);

  const [focused, setFocused] = useState(false);

  const handleKeyboardPress = () => {
    setFocused(true);
  };

  const handleBlur = () => {
    setFocused(false);
  };

  return (
    <div className={styles['radio-btn-container']}>
      <label
        className={classNames(styles['radio-btn'], {
          ['RadioBtn__radio-btn--focused-visible']: focused,
        })}
      >
        <input
          onKeyUp={handleKeyboardPress}
          onBlur={handleBlur}
          type="radio"
          value={value}
          name={name}
          id={id}
          className={styles['radio-btn__input']}
          onChange={formik.handleChange}
          defaultChecked={formik.values.city === value}
        />
        <span className={styles['radio-btn__checkmark']}></span>
      </label>
      <label className={styles['radio-btn__label']} htmlFor={id}>
        {labelTitle}
      </label>
    </div>
  );
};

RadioBtn.propTypes = {
  name: PropTypes.string,
  value: PropTypes.string,
  labelTitle: PropTypes.string,
};

export default RadioBtn;
