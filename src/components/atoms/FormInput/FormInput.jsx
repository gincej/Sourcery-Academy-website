import { useContext, useId } from 'react';
import classNames from 'classnames';
import FormFileInput from '../FormFileInput';
import PropTypes from 'prop-types';
import { registrationContext } from '../../context/registrationContext';
import styles from './FormInput.module.scss';

const FormInput = (props) => {
  const id = useId();
  const formik = useContext(registrationContext);
  const { labelTitle, inputPlaceholder, inputType, name, required } = props;
  const cx = classNames.bind(styles);

  return (
    <div className={styles['form-input']}>
      <label
        className={cx(styles['form-input__label'], {
          'FormInput__form-input__label--required': required,
        })}
        htmlFor={id}
      >
        {labelTitle}
      </label>
      {inputType === 'file' ? (
        <FormFileInput name={name} inputPlaceholder={inputPlaceholder} />
      ) : (
        <>
          <input
            id={id}
            name={name}
            type={inputType}
            className={cx(styles['form-input__input'])}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            placeholder={inputPlaceholder}
          />
          {formik.errors[name] && formik.touched[name] ? (
            <p className={styles.error}>{formik.errors[name]}</p>
          ) : null}
        </>
      )}
    </div>
  );
};

FormInput.propTypes = {
  labelTitle: PropTypes.string,
  required: PropTypes.bool,
  name: PropTypes.string,
  inputType: PropTypes.string,
  inputPlaceholder: PropTypes.string,
};

export default FormInput;
