import PropTypes from 'prop-types';
import styles from './TestimonialCard.module.scss';

const TestimonialCard = (props) => {
  const { name, message, picture, academy } = props;

  return (
    <div className={styles.card}>
      <img
        className={styles.card__image}
        src={picture}
        alt="Academy graduate"
      />
      <div className={styles.card__body}>
        <div
          className={`${styles.card__quotation} ${styles['card__quotation--top']}`}
        >
          “
        </div>
        <p className={styles.card__text}>{message}</p>
        <div
          className={`${styles.card__quotation} ${styles['card__quotation--bottom']}`}
        >
          „
        </div>
      </div>
      <div className={styles.card__author}>
        <p className={styles.card__name}>{name}</p>
        <p className={styles.card__academy}>{academy}</p>
      </div>
    </div>
  );
};

TestimonialCard.propTypes = {
  name: PropTypes.string,
  message: PropTypes.string,
  picture: PropTypes.string,
  academy: PropTypes.string,
};

export default TestimonialCard;
