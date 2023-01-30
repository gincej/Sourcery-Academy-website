import classNames from 'classnames';
import PropTypes from 'prop-types';
import styles from './Arrow.module.scss';

const Arrow = (props) => {
  const { width, height, fill, rotate } = props;

  return (
    <svg
      className={classNames(styles.arrow, rotate && styles['arrow--rotate'])}
      width={width ? width : '14'}
      height={height ? height : '9'}
      viewBox="0 0 14 9"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6.86 6.08801L12.045 0.794008C12.2263 0.606291 12.476 0.500275 12.737 0.500275C12.998 0.500275 13.2477 0.606291 13.429 0.794008C13.8084 1.18975 13.8084 1.81427 13.429 2.21001L7.553 8.21001C7.18544 8.58753 6.58286 8.6 6.19999 8.23801L0.285999 2.21401C-0.0937053 1.81915 -0.0937053 1.19487 0.285999 0.800008C0.467278 0.612291 0.717033 0.506275 0.977992 0.506275C1.23895 0.506275 1.48871 0.612291 1.66999 0.800008L6.86 6.08801Z"
        fill={fill ? fill : '#3D3691'}
      />
    </svg>
  );
};

Arrow.propTypes = {
  height: PropTypes.number,
  width: PropTypes.number,
  fill: PropTypes.string,
  rotate: PropTypes.bool,
};

export default Arrow;
