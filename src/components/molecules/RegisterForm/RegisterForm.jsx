import { checkboxInputsData, formInputsData } from '../Form/FormData';
import FormCheckBox from '../../atoms/FormCheckBox';
import FormInput from '../../atoms/FormInput';
import styles from './RegisterForm.module.scss';

const RegisterForm = () => (
  <div className={styles.form}>
    {formInputsData.map((input, i) => (
      <FormInput
        key={input.name + input.inputPlaceholder + i}
        name={input.name}
        required={input.required}
        labelTitle={input.labelTitle}
        inputType={input.inputType}
        inputPlaceholder={input.inputPlaceholder}
      />
    ))}
    {checkboxInputsData.map((input, i) => (
      <FormCheckBox
        name={input.name}
        content={input.content}
        key={input.name + i}
      />
    ))}
  </div>
);

export default RegisterForm;
