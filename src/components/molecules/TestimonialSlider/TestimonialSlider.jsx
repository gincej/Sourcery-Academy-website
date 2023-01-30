import { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import SliderArrow from '../../atoms/Icons/SliderArrow/SliderArrow';
import styles from './TestimonialSlider.module.scss';

const TestimonialSlider = ({ data, children }) => {
  const [current, setCurrent] = useState(null);
  const [touchPosition, setTouchPosition] = useState(null);
  const [showArrow, setShowArrow] = useState(true);
  const el = useRef(null);

  useEffect(() => {
    if (el.current) {
      el.current.scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',
        inline: 'center',
      });
    }
  }, [current]);

  const length = data.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
    setShowArrow(false);
    const timeout = setTimeout(() => setShowArrow(true), 800);

    return () => {
      clearTimeout(timeout);
    };
  };
  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
    setShowArrow(false);
    const timeout = setTimeout(() => setShowArrow(true), 800);

    return () => {
      clearTimeout(timeout);
    };
  };

  const handleTouch = (e) => {
    const touchDown = e.touches[0].clientX;
    setTouchPosition(touchDown);
  };

  const handleTouchMove = (e) => {
    const touchDown = touchPosition;
    if (touchDown === null) {
      return;
    }

    const currentTouch = e.touches[0].clientX;
    const diff = touchDown - currentTouch;
    const swipeLength = 7;
    if (diff > swipeLength) {
      nextSlide();
    }

    if (diff < -Number(swipeLength)) {
      prevSlide();
    }
    setTouchPosition(null);
  };

  return (
    <section
      onTouchMove={handleTouchMove}
      onTouchStart={handleTouch}
      className={styles['card-slider']}
    >
      {children.map((child, index) => (
        <div
          className={styles.slide}
          key={`card-${index}`}
          ref={index === current ? el : null}
        >
          <SliderArrow
            showarrow={`${showArrow}`}
            onClick={prevSlide}
            position="left"
          />
          {child}
          <SliderArrow
            showarrow={`${showArrow}`}
            onClick={nextSlide}
            position="right"
          />
        </div>
      ))}
    </section>
  );
};

TestimonialSlider.propTypes = {
  data: PropTypes.array,
  children: PropTypes.any,
};

export default TestimonialSlider;
