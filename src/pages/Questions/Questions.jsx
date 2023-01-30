import FAQ from '../../components/atoms/FAQ';
import FAQdata from '../../app/FAQdata';
import styles from './Questions.module.scss';

const Questions = () => (
  <div className={styles.questions}>
    <h2 className={styles['questions__title']}>Frequently asked questions</h2>
    {FAQdata.frontEnd.map((item, i) => (
      <FAQ title={item.title} answer={item.answer} key={item.title + i} />
    ))}
  </div>
);

export default Questions;
