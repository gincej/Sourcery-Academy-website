import RadioBtn from '../RadioBtn';
import { radioBtnData } from '../../molecules/Form/FormData';
import styles from './RadioForm.module.scss';

const RadioForm = () => (
  <div className={styles['radio-form-container']}>
    <div className={styles['radio-form']}>
      <span className={styles['radio-form__span']}>*</span>
      <p className={styles['radio-form__title']}>Academy city</p>
      <div className={styles['radio-buttons-wrapper']}>
        {radioBtnData.map((input, i) => (
          <RadioBtn
            key={input.name + input.value + i}
            name={input.name}
            value={input.value}
            labelTitle={input.labelTitle}
          />
        ))}
      </div>
    </div>
  </div>
);

export default RadioForm;
