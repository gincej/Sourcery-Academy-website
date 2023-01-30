import ArrowDownCircle from '../icons/ArrowDownCircleIcon';
import clickContext from '../../context/clickContext';
import styles from './ScrollButton.module.scss';
import { useContext } from 'react';

const ScrollButton = () => {
  const { handleScroll } = useContext(clickContext);

  return (
    <div className={styles.scrollbutton}>
      <div className={styles.scrollbutton__line}></div>
      <div
        className={styles.scrollbutton__circle}
        onClick={() => handleScroll()}
      >
        <ArrowDownCircle />
      </div>
    </div>
  );
};

export default ScrollButton;
