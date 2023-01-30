import PropTypes, { oneOf } from 'prop-types';
import Button from '../../../components/atoms/Button';
import styles from './AcademiesDescription.module.scss';

const AcademiesDescription = (props) => {
  const {
    image: Image,
    accentImage: AccentImage,
    children,
    imgClass,
    reverse,
    url,
    state,
  } = props;

  return (
    <div
      className={
        reverse
          ? styles['academies-description--reverse']
          : styles['academies-description']
      }
    >
      <div
        className={
          reverse
            ? styles['academies-description__description--reverse']
            : styles['academies-description__description']
        }
      >
        {children}
        <Button to={url} state={state}>
          Learn more
        </Button>
      </div>
      <div className={styles['academies-description__image']}>
        {Image && <Image className={styles['academy-image']} />}
        {AccentImage && (
          <AccentImage className={styles[`accent-image__${imgClass}`]} />
        )}
      </div>
    </div>
  );
};

AcademiesDescription.propTypes = {
  image: PropTypes.elementType,
  accentImage: PropTypes.elementType,
  children: PropTypes.node,
  reverse: PropTypes.bool,
  url: PropTypes.string,
  state: oneOf([
    'developers-academy',
    'testers-academy',
    'frontend-academy',
    'kids-academy',
  ]),
  imgClass: oneOf(['sourcery', 'testers', 'front', 'kids']),
};

export default AcademiesDescription;
