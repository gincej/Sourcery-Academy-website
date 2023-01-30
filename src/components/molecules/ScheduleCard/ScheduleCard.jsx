import { academiesLinks } from '../../../app/scheduleData';
import AdmissionDates from '../AdmissionDates';
import Arrow from '../../atoms/icons/Arrow';
import classNames from 'classnames';
import ClockIcon from '../../../assets/icons/schedule-svg/ClockIcon.svg';
import PersonIcon from '../../../assets/icons/schedule-svg/PersonIcon.svg';
import PropTypes from 'prop-types';
import styles from './ScheduleCard.module.scss';
import { useState } from 'react';

const ScheduleCard = (props) => {
  const {
    title,
    lecturers,
    time,
    duration,
    scheduleCities,
    isExpanded,
  } = props;

  const [expanded, setExpanded] = useState(isExpanded);

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      setExpanded(!expanded);
    }
  };

  return (
    <div tabIndex={0} onKeyDown={handleKeyDown} className={styles.card}>
      <div
        onClick={() => setExpanded(!expanded)}
        className={styles.card__header}
      >
        <h4 className={styles.card__title}>{title}</h4>
        <Arrow rotate={expanded} width={20} height={12} fill={'white'} />
      </div>
      <div
        className={classNames(
          styles['card__expandable-container'],
          expanded
            ? styles['card__expandable-container--expanded']
            : styles['card__expandable-container--closed']
        )}
      >
        <div className={styles['card__info-container']}>
          <div className={styles['card__info-item']}>
            <PersonIcon />
            <p className={styles['card__lecturers']}>{lecturers}</p>
          </div>
          <div className={styles['card__info-item']}>
            <ClockIcon />
            <p className={styles.card__time}>{time}</p>
            <div className={styles.card__divider}></div>
            <p className={styles.card__time}>{duration}</p>
          </div>
        </div>
        <div className={styles.card__dates}>
          {scheduleCities.map((academyCity, index) => (
            <AdmissionDates
              startDate={new Date(academyCity.date)}
              title={academyCity.city}
              locationIcon={true}
              key={index + academyCity.city + academyCity.date}
              locationUrl={academiesLinks[academyCity.city]}
              cardExpanded={expanded}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

ScheduleCard.propTypes = {
  title: PropTypes.string,
  lecturers: PropTypes.string,
  time: PropTypes.string,
  duration: PropTypes.string,
  scheduleCities: PropTypes.array,
  isExpanded: PropTypes.bool,
};

export default ScheduleCard;
