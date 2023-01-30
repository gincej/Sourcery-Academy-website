import { useContext, useId } from 'react';
import PropTypes from 'prop-types';
import { registrationContext } from '../../context/registrationContext';
import styles from './FormCheckBox.module.scss';

const FormCheckBox = (props) => {
  const id = useId();
  const { content, name } = props;
  const formik = useContext(registrationContext);

  return (
    <>
      <div className={styles.checkbox}>
        <input
          type="checkbox"
          className={styles['checkbox__hidden-input']}
          id={id}
          name={name}
          onChange={formik.handleChange}
        />
        <label className={styles['checkbox__input']} htmlFor={id}>
          <span className={styles['checkbox__label']}>{content}</span>
        </label>
      </div>
      {formik.errors[name] && formik.touched[name] ? (
        <p className={styles.error}>{formik.errors[name]}</p>
      ) : null}
    </>
  );
};

FormCheckBox.propTypes = {
  content: PropTypes.string,
  name: PropTypes.string,
};

export default FormCheckBox;
