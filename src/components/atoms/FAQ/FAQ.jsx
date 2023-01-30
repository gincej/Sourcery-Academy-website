import { useRef, useState } from 'react';
import Arrow from '../icons/Arrow';
import PropTypes from 'prop-types';
import styles from './FAQ.module.scss';

const FAQ = (props) => {
  const { title, answer } = props;
  const [showAnswer, setShowAnswer] = useState(false);
  const showAnswerRef = useRef();

  return (
    <div className={styles['faq-container']}>
      <button
        style={showAnswer ? { borderRadius: '0.5rem 0.5rem 0 0' } : null}
        className={styles['faq-card']}
        onClick={() => setShowAnswer(!showAnswer)}
      >
        <p className={styles['faq-card__title']}>{title}</p>
        {<Arrow width={21} height={13.5} rotate={showAnswer} />}
      </button>
      <div
        ref={showAnswerRef}
        className={styles['answer']}
        style={
          showAnswer
            ? {
                height: showAnswerRef.current.scrollHeight + 'px',
              }
            : {
                height: '0px',
              }
        }
      >
        <p className={styles['answer__text']}>{answer}</p>
      </div>
    </div>
  );
};

FAQ.propTypes = {
  title: PropTypes.string,
  answer: PropTypes.string,
};

export default FAQ;
