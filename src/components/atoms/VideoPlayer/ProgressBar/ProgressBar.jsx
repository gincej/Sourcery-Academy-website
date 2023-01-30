import PropTypes from 'prop-types';
import styles from './ProgressBar.module.scss';
import { timeConverter } from '../../../../utils/timeConverter';
import { useEffect } from 'react';

const ProgressBar = (props) => {
  const {
    videoElementRef,
    progressRef,
    playerState,
    handleVideoProgress,
    isVideoHovered,
  } = props;

  useEffect(() => {
    const progress =
      (videoElementRef.current.currentTime / videoElementRef.current.duration) *
      100;
    const color = `linear-gradient(90deg, #4d8af0 ${progress}%, #3e369185 ${progress}%)`;
    progressRef.current.style.background = color;
  }, [playerState.progress, videoElementRef]);

  const tabIndexHandler = isVideoHovered ? 0 : -1;

  return (
    <div className={styles.progress}>
      <p className={styles['progress__time']}>
        {videoElementRef.current
          ? timeConverter(videoElementRef.current.currentTime)
          : '0:00'}
      </p>
      <input
        ref={progressRef}
        type="range"
        min="0"
        max="100"
        step={1}
        value={playerState.progress.toString()}
        onChange={(e) => handleVideoProgress(e)}
        tabIndex={tabIndexHandler}
      />
    </div>
  );
};

ProgressBar.propTypes = {
  videoElementRef: PropTypes.object.isRequired,
  progressRef: PropTypes.object.isRequired,
  playerState: PropTypes.object.isRequired,
  handleVideoProgress: PropTypes.func.isRequired,
  isVideoHovered: PropTypes.bool.isRequired,
};

export default ProgressBar;
