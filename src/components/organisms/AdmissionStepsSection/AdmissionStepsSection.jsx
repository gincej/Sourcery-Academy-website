import { useEffect, useState } from 'react';
import AdmissionStep from '../../molecules/AdmissionStep';
import admissionStepsData from '../../../app/admissionStepsData';
import StepsSectionLine from '../../../assets/images/StepsSectionLine.svg';
import styles from './AdmissionStepsSection.module.scss';
import { useLocation } from 'react-router-dom';

const AdmissionStepsSection = () => {
  const [data, setData] = useState([]);
  const location = useLocation().pathname.split('/')[1];

  useEffect(() => {
    setData(admissionStepsData[location]);
  }, [location]);

  return (
    <section className={styles.wrapper}>
      <StepsSectionLine className={styles.line} />
      {data.map((item) => (
        <AdmissionStep
          marginTop={
            item.stepNumber === 3 || item.stepNumber === 4 ? true : false
          }
          reverseRow={item.stepNumber % 2 === 0 ? true : false}
          key={location + item.heading}
          heading={item.heading}
          content={item.content}
          image={item.image}
        />
      ))}
    </section>
  );
};

export default AdmissionStepsSection;
