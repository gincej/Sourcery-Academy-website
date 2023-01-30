import { useEffect, useState } from 'react';
import classNames from 'classnames';
import LoadingSpinner from '../../atoms/LoadingSpinner';
import styles from './TestimonialSection.module.scss';
import TestimonialCard from '../../molecules/TestimonialCard';
import TestimonialSlider from '../../molecules/TestimonialSlider/TestimonialSlider';
import { useLocation } from 'react-router-dom';

const TESTIMONIAL_DATA = 'https://www.jurele.lt/testimonials.json';

const filterData = (dataList, pageLocation) => {
  let academy;
  switch (pageLocation) {
    case 'developers-academy':
      academy = 'Sourcery for Developers Graduate';
      break;
    case 'frontend-academy':
      academy = 'Sourcery for Front-End Graduate';
      break;
    case 'testers-academy':
      academy = 'Sourcery for Testers Graduate';
      break;
    case 'theme-kids':
      academy = 'Sourcery for Testers Graduate';
      break;
    default:
      academy = '';
  }
  const filteredData = dataList.filter((item) => item.academy === academy);
  return filteredData;
};

const pickTestimonials = (dataList) => {
  const selectedData = [];
  const tempAcademies = [dataList[0]];

  dataList.map((testimonial) => {
    if (!tempAcademies.includes(testimonial.academy)) {
      selectedData.push(testimonial);
      tempAcademies.push(testimonial.academy);
    }
  });
  return selectedData;
};

const shuffleData = (dataList) => {
  for (let i = dataList.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = dataList[i];
    dataList[i] = dataList[j];
    dataList[j] = temp;
  }
};

const TestimonialSection = () => {
  const [testimonials, setTestimonials] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const location = useLocation().pathname.split('/')[1];

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(TESTIMONIAL_DATA);
        const data = await response.json();
        selectPageData(data);
      } catch (error) {
        setError(error);
      }
      setIsLoading(false);
    };
    fetchData();
  }, [location]);

  const selectPageData = (dataList) => {
    shuffleData(dataList);

    const selectedData = location
      ? filterData(dataList, location)
      : pickTestimonials(dataList);
    setTestimonials(selectedData);
  };

  const windowWidth = 500;
  const [isMobile, setIsMobile] = useState(window.innerWidth < windowWidth);

  const renderWidth = () => {
    setIsMobile(window.innerWidth < windowWidth);
  };

  useEffect(() => {
    window.addEventListener('resize', renderWidth);

    return () => window.removeEventListener('resize', renderWidth);
  });

  const cards = testimonials?.map((item, index) => (
    <TestimonialCard
      name={item.name}
      message={item.message}
      picture={item.photo}
      academy={item.academy}
      key={`testimonial-${item.name}-${index}`}
    />
  ));

  return (
    <section className={styles['testimonial-section']}>
      <h2 className={styles['testimonial-section__title']}>Testimonials</h2>
      <div
        className={classNames(styles['testimonial-section__content'], {
          [styles['testimonial-section__content--loading-error']]:
            isLoading || error,
        })}
      >
        {isLoading ? (
          <LoadingSpinner size="medium" />
        ) : error ? (
          <p>Unable to load testimonials data.</p>
        ) : isMobile ? (
          <TestimonialSlider data={testimonials}>{cards}</TestimonialSlider>
        ) : (
          <div
            className={classNames(styles['testimonial-section__content'], {
              [styles['testimonial-section__content--loading-error']]:
                isLoading || error,
            })}
          >
            {cards.slice(0, 3)}
          </div>
        )}
      </div>
    </section>
  );
};
export default TestimonialSection;
