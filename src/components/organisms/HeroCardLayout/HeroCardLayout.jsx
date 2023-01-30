import classNames from 'classnames';
import HeroCardImgLine from '../../../assets/images/hero-section/HeroCardImgLine.svg';
import HeroCardInfoLine from '../../../assets/images/hero-section/HeroCardInfoLine.svg';
import HeroCardInfoSection from '../../molecules/HeroCardInfoSection';
import PropTypes from 'prop-types';
import styles from './HeroCardLayout.module.scss';

const HeroCardLayout = ({
  children,
  bgStars,
  mb15,
  hasImageDecorationLine,
  className,
  hasDescriptionDecorationLine,
  ...restProps
}) => (
  <section
    className={classNames(className, styles.hero, {
      ['HeroCardLayout__hero--background-stars']: bgStars,
      ['HeroCardLayout__hero--margin-bottom-15']: mb15,
    })}
  >
    <HeroCardInfoSection {...restProps} />
    {children}
    {hasImageDecorationLine && (
      <HeroCardImgLine className={styles['image-decoration-line']} />
    )}
    {hasDescriptionDecorationLine && (
      <HeroCardInfoLine className={styles['description-decoration-line']} />
    )}
  </section>
);

HeroCardLayout.propTypes = {
  children: PropTypes.node,
  bgStars: PropTypes.bool,
  mb15: PropTypes.bool,
  hasImageDecorationLine: PropTypes.bool,
  className: PropTypes.string,
  restProps: PropTypes.node,
  hasDescriptionDecorationLine: PropTypes.bool,
};

export default HeroCardLayout;
