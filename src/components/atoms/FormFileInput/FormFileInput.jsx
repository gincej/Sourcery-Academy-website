import { useContext, useEffect, useId, useState } from 'react';
import LoadingSpinner from '../../atoms/LoadingSpinner';
import PropTypes from 'prop-types';
import { registrationContext } from '../../context/registrationContext';
import styles from './FormFileInput.module.scss';
import UploadIcon from '../Icons/UploadIcon';

const FormFileInput = (props) => {
  const id = useId();
  const { inputPlaceholder, name } = props;
  const formik = useContext(registrationContext);

  const [isUploading, setIsUploading] = useState(false);

  useEffect(() => {
    if (
      formik.values.resumeFile &&
      formik.values.resumeFile.name !== 'Upload your resume'
    ) {
      setIsUploading(true);
      let uploading = setTimeout(() => setIsUploading(false), 1000);
      return () => {
        clearTimeout(uploading);
      };
    }
  }, [formik.values.resumeFile]);

  return (
    <>
      <label className={styles['file-input']} htmlFor={id}>
        {isUploading ? (
          <LoadingSpinner size="small" />
        ) : (
          <p className={styles['file-input__placeholder']}>
            {formik.values[name] &&
            formik.values[name].name !== 'Upload your resume'
              ? formik.values[name].name
              : 'Upload your resume'}
          </p>
        )}
        <input
          type="file"
          name={name}
          id={id}
          placeholder={inputPlaceholder}
          onChange={(e) =>
            formik.setFieldValue('resumeFile', e.currentTarget.files[0])
          }
        />
        <UploadIcon />
      </label>
      {formik.errors[name] && formik.touched[name] ? (
        <p className={styles.error}>{formik.errors[name]}</p>
      ) : null}
    </>
  );
};

FormFileInput.propTypes = {
  inputPlaceholder: PropTypes.string,
  name: PropTypes.string,
};

export default FormFileInput;
