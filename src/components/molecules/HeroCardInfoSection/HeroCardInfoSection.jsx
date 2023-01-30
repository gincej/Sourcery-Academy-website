import Button from '../../atoms/Button';
import PropTypes from 'prop-types';
import styles from './HeroCardInfoSection.module.scss';

const HeroCardInfoSection = ({ ...restProps }) => {
  const { cardData, isDescriptionTextBold, isMainTitleInPage } = restProps;

  return (
    <div className={styles['info-section']}>
      {isMainTitleInPage ? (
        <h1>{cardData.title}</h1>
      ) : (
        <h2>{cardData.title}</h2>
      )}

      <p className={isDescriptionTextBold && styles['info-section--text-bold']}>
        {cardData.description}
      </p>
      {cardData.buttonHref ? (
        <Button href={cardData.buttonHref}>{cardData.buttonTitle}</Button>
      ) : (
        <Button to={cardData.buttonTo}>{cardData.buttonTitle}</Button>
      )}
    </div>
  );
};
HeroCardInfoSection.propTypes = {
  restProps: PropTypes.shape({
    cardData: PropTypes.shape({
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      buttonTitle: PropTypes.string,
      buttonHref: PropTypes.string,
      buttonTo: PropTypes.string,
    }),
    isDescriptionTextBold: PropTypes.bool,
    isMainTitleInPage: PropTypes.bool,
  }),
};

export default HeroCardInfoSection;
