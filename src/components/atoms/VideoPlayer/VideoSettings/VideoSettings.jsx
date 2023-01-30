import { useEffect, useState } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import styles from './VideoSettings.module.scss';
import VideoSpeedRadio from '../VideoSpeedRadio/VideoSpeedRadio';

const Settings = (props) => {
  const { handleVideoSpeed, isSettingsOpen, settingsRef } = props;
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setHidden(true);
    }, 500);
  }, []);

  const settingsClass = classNames([
    styles.settings,
    isSettingsOpen && styles['settings--display'],
  ]);

  const tabIndex = isSettingsOpen ? 0 : -1;

  const videoSpeed = [
    { id: '0.75', speed: '0.75x' },
    { id: '1', speed: '1x', checked: true },
    { id: '1.25', speed: '1.25x' },
  ];

  return (
    <div
      ref={settingsRef}
      className={settingsClass}
      tabIndex={-1}
      style={{ visibility: hidden ? 'visible' : 'hidden' }}
    >
      <p>Playback speed:</p>
      {videoSpeed.map((speed, i) => (
        <VideoSpeedRadio
          handleVideoSpeed={handleVideoSpeed}
          tabIndex={tabIndex}
          id={speed.id}
          key={speed.id + i}
          checked={speed.checked}
        >
          {speed.speed}
        </VideoSpeedRadio>
      ))}
    </div>
  );
};

Settings.propTypes = {
  handleVideoSpeed: PropTypes.func.isRequired,
  isSettingsOpen: PropTypes.bool.isRequired,
  settingsRef: PropTypes.shape({ current: PropTypes.instanceOf(Element) }),
};

export default Settings;
