import classNames from 'classnames';
import PropTypes from 'prop-types';
import styles from './AdmissionStep.module.scss';

const AdmissionStep = (props) => {
  const { heading, content, image, reverseRow, marginTop } = props;

  return (
    <div
      className={classNames(
        styles.step,
        reverseRow && styles['reverse-step'],
        `${marginTop === true ? styles['margin-reduce'] : ''}`
      )}
    >
      <div
        className={classNames(
          styles.step__container,
          reverseRow && styles['reverse-container']
        )}
      >
        <div
          className={classNames(
            styles.step__heading,
            reverseRow && styles['reverse-heading']
          )}
        >
          <h3 className={styles.step__title}>{heading}</h3>
          <span className={styles.step__dash}></span>
        </div>

        <span
          className={classNames(
            styles.step__img,
            reverseRow && styles['reverse-img']
          )}
        >
          {image}
        </span>
      </div>
      <p
        className={classNames(
          styles.step__content,
          reverseRow && styles['reverse-content']
        )}
      >
        {content}
      </p>
    </div>
  );
};

AdmissionStep.propTypes = {
  heading: PropTypes.string,
  content: PropTypes.string,
  image: PropTypes.node,
  reverseRow: PropTypes.bool,
  marginTop: PropTypes.bool,
};

export default AdmissionStep;
