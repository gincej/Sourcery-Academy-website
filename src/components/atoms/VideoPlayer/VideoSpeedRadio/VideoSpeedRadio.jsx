import PropTypes from 'prop-types';
import styles from './VideoSpeedRadio.module.scss';

const VideoSpeedRadio = (props) => {
  const { handleVideoSpeed, tabIndex, id, children, checked } = props;

  const handleKeypress = (e) => {
    if (e.key === 'Enter') {
      handleVideoSpeed(id);
    }
  };

  return (
    <>
      <input
        className={styles['speed-radio']}
        name="speed-radio"
        type="radio"
        defaultChecked={checked && true}
        id={id}
        onClick={() => handleVideoSpeed(id)}
      />
      <label
        className={styles['speed-radio__label']}
        htmlFor={id}
        tabIndex={tabIndex}
        onKeyDown={handleKeypress}
      >
        {children}
      </label>
    </>
  );
};

VideoSpeedRadio.propTypes = {
  handleVideoSpeed: PropTypes.func.isRequired,
  tabIndex: PropTypes.number.isRequired,
  id: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
  checked: PropTypes.bool,
};

export default VideoSpeedRadio;
