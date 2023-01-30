import { useEffect, useState } from 'react';
import AccentImage from '../../atoms/images/AdmissionAccent';
import AdmissionDatesList from '../../molecules/AdmissionDatesList';
import { admissionData as data } from '../../../app/admissionData';
import MainImage from '../../atoms/images/AdmissionImage';
import styles from './AdmissionSection.module.scss';
import { useLocation } from 'react-router-dom';

const AdmissionSection = () => {
  const [academyData, setAcademyData] = useState([]);
  const academy = useLocation().pathname.split('/')[1];

  useEffect(() => {
    const academyData = data[academy];
    setAcademyData(academyData);
  }, [academy]);

  const learnList = academyData.learnContent;

  const generateKey = (pre) => `${pre}_${new Date().getTime()}`;

  return (
    <section className={styles['admission-section']}>
      <div className={styles['admission-section__left']}>
        <h2>The Admission</h2>
        <h3>{academyData.introTitle}</h3>
        <p>{academyData.introContent}</p>
        <h4>{academyData.learnTitle}</h4>
        <ul className={styles['learn-list']}>
          {learnList &&
            learnList.map((item) => (
              <li
                className={styles['learn-list__item']}
                key={generateKey(item)}
              >
                {item}
              </li>
            ))}
        </ul>
        <h5>{academyData.interviewTitle}</h5>
        <p>{academyData.interviewContent}</p>
      </div>
      <div className={styles['admission-section__right']}>
        <AdmissionDatesList />
        <AccentImage primary="--color-primary-text" />
        <MainImage
          primary="--color-primary-text"
          secondary="--color-secondary-svg"
        />
      </div>
    </section>
  );
};

export default AdmissionSection;
