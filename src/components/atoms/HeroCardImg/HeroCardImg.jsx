import PropTypes from 'prop-types';
import styles from './HeroCardImg.module.scss';

const HeroCardImg = ({ image: Image, style }) => (
  <div className={styles['preview-section']}>
    <Image style={style} className={styles.image} />
  </div>
);

HeroCardImg.propTypes = {
  image: PropTypes.elementType.isRequired,
  style: PropTypes.object,
};

export default HeroCardImg;
