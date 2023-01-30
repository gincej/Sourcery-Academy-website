import classNames from 'classnames';
import PropTypes from 'prop-types';
import styles from './LoadingSpinner.module.scss';
import { useEffect } from 'react';

const LoadingSpinner = (props) => {
  const { size } = props;

  return (
    <div
      className={classNames(styles.spinner, styles[`spinner--${size}`])}
    ></div>
  );
};

LoadingSpinner.propTypes = {
  size: PropTypes.oneOf(['small', 'medium', 'large']).isRequired,
};

export default LoadingSpinner;
