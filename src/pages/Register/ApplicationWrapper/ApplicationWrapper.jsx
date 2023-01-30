import ApplicationFormImage from '../../../components/atoms/images/ApplicationFormSvgs/ApplicationFormImage';
import ApplicationParticles from '../../../components/atoms/images/ApplicationFormSvgs/ApplicationParticles';
import Form from '../../../components/molecules/Form';
import styles from './ApplicationWrapper.module.scss';

const ApplicationWrapper = () => (
  <div className={styles.application}>
    <h1 className={styles.application__title}>Sourcery Academy Application</h1>
    <div className={styles.application__content}>
      <div className={styles.application__left}>
        <div className={styles['application__form-container']}>
          <Form />
        </div>
      </div>
      <div className={styles.application__right}>
        <ApplicationFormImage
          customFill={'--color-primary-svg'}
          style={styles.application__image}
        />
      </div>
    </div>
    <ApplicationParticles style={styles.particles} />
  </div>
);

export default ApplicationWrapper;
