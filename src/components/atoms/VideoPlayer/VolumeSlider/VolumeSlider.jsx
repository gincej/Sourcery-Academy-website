import { useEffect, useRef, useState } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import styles from './VolumeSlider.module.scss';

const VolumeSlider = (props) => {
  const {
    isVolumeHovered,
    playerState,
    handleVideoVolume,
    videoElementRef,
    volumeFocused,
  } = props;

  const volumeRef = useRef(null);
  const value = playerState.isMuted ? 0 : playerState.volume * 100;
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setHidden(true);
    }, 500);
  }, []);

  useEffect(() => {
    const volume = videoElementRef.current.volume * 100;
    const color = `linear-gradient(90deg, #71a1f3 ${volume}%, #fff ${volume}%)`;
    if (playerState.isMuted) {
      volumeRef.current.style.background =
        'linear-gradient(90deg, #fff 0%, #fff 0%)';
    } else {
      volumeRef.current.style.background = color;
    }
  }, [playerState.isMuted, playerState.volume]);

  const volumeClass = classNames([
    styles.slider,
    isVolumeHovered && styles['slider--display'],
    volumeFocused && styles['slider--focused'],
  ]);

  const tabIndex = isVolumeHovered || volumeFocused ? 0 : -1;

  return (
    <div
      className={volumeClass}
      tabIndex={-1}
      style={{ visibility: hidden ? 'visible' : 'hidden' }}
    >
      <input
        ref={volumeRef}
        type="range"
        min="0"
        max="100"
        value={value}
        onChange={handleVideoVolume}
        tabIndex={tabIndex}
      />
    </div>
  );
};

VolumeSlider.propTypes = {
  isVolumeHovered: PropTypes.bool.isRequired,
  handleVideoVolume: PropTypes.func.isRequired,
  videoElementRef: PropTypes.shape({ current: PropTypes.instanceOf(Element) }),
  playerState: PropTypes.shape({
    isMuted: PropTypes.bool.isRequired,
    volume: PropTypes.number.isRequired,
  }).isRequired,
  volumeFocused: PropTypes.bool.isRequired,
};

export default VolumeSlider;
