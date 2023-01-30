import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import styles from './SliderArrow.module.scss';

const SliderArrow = (props) => {
  const { position, showarrow } = props;

  return (
    <svg
      className={classNames(
        styles.arrow,
        position === 'left' ? styles['arrow--left'] : styles['arrow--right'],
        showarrow == 'true' ? styles['show-arrow'] : ''
      )}
      height="6rem"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 473.654 473.654"
      xmlSpace="preserve"
      {...props}
    >
      <path
        d="M366.553 238.843c-35.885-35.889-71.766-71.77-107.651-107.655-10.837-10.845-28.907-10.549-39.666.213-35.885 35.881-71.77 71.77-107.651 107.655-25.564 25.56 14.259 65.08 39.879 39.456l87.712-87.712c29.311 29.307 58.614 58.618 87.925 87.929 25.563 25.56 65.083-14.259 39.452-39.886z"
        fill="var(--color-primary-text)"
      />
    </svg>
  );
};

SliderArrow.propTypes = {
  position: PropTypes.string,
  showarrow: PropTypes.string,
};

export default SliderArrow;
