import styles from './ErrorMessage.module.scss';

const ErrorMessage = () => (
  <div className={styles['error-message']}>
    <p>Sorry, something went wrong.</p>
  </div>
);

export default ErrorMessage;
