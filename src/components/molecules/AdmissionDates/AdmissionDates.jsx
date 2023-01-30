import { getDay, getMonth } from '../../../utils/dateConverter';
import classNames from 'classnames';
import LocationIcon from '../../atoms/icons/LocationIcon.jsx';
import PropTypes from 'prop-types';
import styles from './AdmissionDates.module.scss';

const AdmissionDates = (props) => {
  const {
    startDate,
    endDate,
    title,
    locationIcon,
    locationUrl,
    cardExpanded,
  } = props;

  return (
    <div className={styles.adm}>
      <div className={styles.dates}>
        <div className={styles.dates__date}>
          <span className={styles.dates__month}>{getMonth(startDate)}</span>
          <span className={styles.dates__day}>{getDay(startDate)}</span>
        </div>
        {endDate && (
          <>
            <div className={styles.spacer}>
              <div className={styles.spacer__dash}>-</div>
            </div>
            <div className={styles.dates__date}>
              <span className={styles.dates__month}>{getMonth(endDate)}</span>
              <span className={styles.dates__day}>{getDay(endDate)}</span>
            </div>
          </>
        )}
      </div>
      <div
        className={classNames(styles.adm__title, {
          [styles['adm__title--link']]: locationIcon,
        })}
      >
        {locationIcon && <LocationIcon />}
        {locationUrl ? (
          <a
            href={locationUrl}
            target="_blank"
            rel="noreferrer"
            onKeyDown={(e) => e.stopPropagation()}
            tabIndex={cardExpanded ? 0 : -1}
          >
            {title}
          </a>
        ) : (
          <div>{title}</div>
        )}
      </div>
    </div>
  );
};

AdmissionDates.propTypes = {
  startDate: PropTypes.instanceOf(Date).isRequired,
  endDate: PropTypes.instanceOf(Date),
  title: PropTypes.string.isRequired,
  locationIcon: PropTypes.bool,
  locationUrl: PropTypes.string,
  cardExpanded: PropTypes.bool,
};

export default AdmissionDates;
