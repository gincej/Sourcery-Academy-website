import { useEffect, useState } from 'react';
import ScheduleCard from '../../molecules/ScheduleCard';
import { scheduleData } from '../../../app/scheduleData';
import SchedulesLine from '../../../assets/images/SchedulesLine.svg';
import styles from './ScheduleSection.module.scss';
import { useLocation } from 'react-router-dom';

const getMiddleDate = (list) => {
  let startDate = new Date(list[0].schedule[0].date).getTime();
  let endDate = new Date(list[list.length - 1].schedule[0].date).getTime();
  return new Date((startDate + endDate) / 2);
};

const splitList = (list) => {
  let middleDate = getMiddleDate(list);
  let firstPart = list.filter(
    (lecture) => new Date(lecture.schedule[0].date) <= middleDate
  );
  let secondPart = list.filter(
    (lecture) => new Date(lecture.schedule[0].date) > middleDate
  );
  return [firstPart, secondPart];
};

const toMonth = (lecture) =>
  new Date(lecture.schedule[0].date).toLocaleString('en-us', {
    month: 'long',
  });

const getMonthList = (list) => {
  let monthArray = [];
  list.map((lecture) => {
    let month = toMonth(lecture);
    if (!monthArray.includes(month)) {
      monthArray.push(month);
    }
  });
  return monthArray;
};

const mobileWidth = 700;

const ScheduleSection = () => {
  const [scheduleList, setScheduleList] = useState([
    { id: 1, months: [], schedule: { left: [], right: [] } },
    { id: 2, months: [], schedule: { left: [], right: [] } },
  ]);
  const [mobileList, setMobileList] = useState([]);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= mobileWidth);

  const location = useLocation().pathname.split('/')[1];

  const renderWidth = () => {
    setIsMobile(window.innerWidth <= mobileWidth);
  };

  useEffect(() => {
    window.addEventListener('resize', renderWidth);
    return () => window.removeEventListener('resize', renderWidth);
  });

  useEffect(() => {
    setMobileList(scheduleData[location]);
    formScheduleList(scheduleData[location]);
  }, [location]);

  const formScheduleList = (dataList) => {
    const sortedScheduleData = [...dataList].sort(
      (a, b) => new Date(a.schedule[0].date) - new Date(b.schedule[0].date)
    );

    let listInHalf = splitList(sortedScheduleData);
    let scheduleInfo = [...scheduleList];

    listInHalf.map((half, index) => {
      scheduleInfo[index].schedule = splitList(half);
      scheduleInfo[index].months = getMonthList(half);
    });

    setScheduleList(scheduleInfo);
  };

  return (
    <section className={styles.schedule}>
      <h2 className={styles.schedule__title}>Schedule</h2>
      <div className={styles.schedule__content}>
        {isMobile
          ? getMonthList(mobileList).map((month, index) => (
              <div className={styles.schedule__wrapper} key={index + month}>
                <h3 className={styles.schedule__months}>{month}</h3>
                <div className={styles.schedule__lectures}>
                  {mobileList
                    .filter((schedule) => toMonth(schedule) === month)
                    .map((lecture) => (
                      <div
                        className={styles['schedule__lectures-split']}
                        key={lecture.id + lecture.title}
                      >
                        <ScheduleCard
                          title={lecture.title}
                          lecturers={lecture.lecturers.join(', ')}
                          time={lecture.time}
                          duration={lecture.duration}
                          scheduleCities={lecture.schedule}
                          key={lecture.id}
                          isExpanded={lecture.id === 1}
                        />
                      </div>
                    ))}
                </div>
              </div>
            ))
          : scheduleList.map((schedulePart) => (
              <div className={styles.schedule__wrapper} key={schedulePart.id}>
                <h3 className={styles.schedule__months}>
                  {schedulePart.months.join(' / ')}
                </h3>
                <div className={styles.schedule__lectures}>
                  {Object.keys(schedulePart.schedule).map((scheduleKey) => (
                    <div
                      className={styles['schedule__lectures-split']}
                      key={schedulePart.id + scheduleKey}
                    >
                      {schedulePart.schedule[scheduleKey].map((lecture) => (
                        <ScheduleCard
                          title={lecture.title}
                          lecturers={lecture.lecturers.join(', ')}
                          time={lecture.time}
                          duration={lecture.duration}
                          scheduleCities={lecture.schedule}
                          key={lecture.id}
                          isExpanded={lecture.id === 1}
                        />
                      ))}
                    </div>
                  ))}
                </div>
              </div>
            ))}
        <SchedulesLine className={styles.schedule__line} />
      </div>
    </section>
  );
};

export default ScheduleSection;
