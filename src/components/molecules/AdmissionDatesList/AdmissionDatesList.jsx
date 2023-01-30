import { useEffect, useState } from 'react';
import AdmissionDates from '../AdmissionDates';
import { admissionData as data } from '../../../app/admissionData';
import styles from './AdmissionDatesList.module.scss';
import { useLocation } from 'react-router-dom';

const AdmissionDatesList = () => {
  const [academyData, setAcademyData] = useState([]);
  const academy = useLocation().pathname.split('/')[1];

  useEffect(() => {
    const academyData = data[academy]?.dates;
    setAcademyData(academyData);
  }, [academy]);

  return (
    <>
      {academyData && academyData.length > 0 ? (
        <div className={styles['list-container']}>
          <h3>Dates</h3>
          <ul className={styles.list}>
            {academyData.map((item) => (
              <li key={item.id} className={styles['list__item']}>
                <AdmissionDates
                  startDate={item.startDate}
                  endDate={item.endDate}
                  title={item.title}
                />
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <div className={styles['list-container--empty']}>
          <h3>Dates</h3>
          <p>
            <strong>
              Currently there are no upcoming dates available for this academy.
            </strong>
          </p>
        </div>
      )}
    </>
  );
};

export default AdmissionDatesList;
