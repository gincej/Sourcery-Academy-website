import * as constants from './constants';
import AcademyTypeSelector from '../AcademyTypeSelector';
import Button from '../../atoms/Button';
import RadioForm from '../../atoms/RadioForm';
import RegisterForm from '../RegisterForm';
import { registrationContext } from '../../context/registrationContext';
import registrationSchema from '../../../validations/RegistrationValidation';
import { send } from 'emailjs-com';
import styles from './Form.module.scss';
import SuccessIcon from '../../atoms/Icons/SuccessIcon';
import { useFormik } from 'formik';
import { useState } from 'react';

const Form = () => {
  const [isRegistered, setIsRegistered] = useState(false);
  const [fetchError, setFetchError] = useState(false);

  const sendEmail = (template) => {
    const dataToSend = {
      ...formik.values,
      resumeFile: formik.values.resumeFile.name,
    };
    send(
      constants.REACT_APP_EMAILJS_SERVICE_ID,
      template,
      dataToSend,
      constants.REACT_APP_EMAILJS_USER_ID
    ).then(
      (result) => setIsRegistered({ isRegistered: true }),
      (err) => {
        setFetchError(true);
      }
    );
  };

  const onSubmit = () => {
    sendEmail(constants.REACT_APP_EMAILJS_TEMPLATE_ID_REPLY);
    sendEmail(constants.REACT_APP_EMAILJS_TEMPLATE_ID_RECIEVE);
  };

  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      city: 'Kaunas',
      resumeFile: { name: 'Upload your resume' },
      policy: false,
      academies: 'Full-Stack',
    },
    validationSchema: registrationSchema,
    onSubmit,
  });

  return (
    <>
      {isRegistered ? (
        <div className={styles.registered}>
          <SuccessIcon className={styles.registered__svg} />
          <h3 className={styles.registered__heading}>Thank you!</h3>
          <p className={styles.registered__paragraph}>
            Your form was submitted
          </p>
        </div>
      ) : (
        <registrationContext.Provider value={formik}>
          <form onSubmit={formik.handleSubmit} className={styles.form}>
            <h2>Academy information</h2>
            <AcademyTypeSelector labelTitle="Academy type" required />
            <RadioForm />
            <h2>Personal information</h2>
            <RegisterForm />
            <Button type="submit" className={styles.submitbtn}>
              Register
            </Button>
            {fetchError && (
              <p className={styles.error}>
                Server error. Please try again later.
              </p>
            )}
          </form>
        </registrationContext.Provider>
      )}
    </>
  );
};

export default Form;
