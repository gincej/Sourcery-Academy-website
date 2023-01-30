import classNames from 'classnames';
import PropTypes from 'prop-types';
import styles from './PlayerBtn.module.scss';

const PlayerBtn = (props) => {
  const {
    btnType,
    isVolumeHovered,
    isSettingsOpen,
    clickHandler,
    playerState,
    btnRef,
    isVideoHovered,
  } = props;

  const playPauseClass = classNames([
    styles.btn,
    !playerState.isPlaying && styles['btn--play'],
    playerState.isPlaying && styles['btn--pause'],
  ]);

  const volumeClass = classNames([
    styles.btn,
    !playerState.isMuted && styles['btn--unmuted'],
    playerState.isMuted && styles['btn--muted'],
    isVolumeHovered && styles['btn--hovered'],
  ]);

  const settingsClass = classNames([
    styles.btn,
    styles['btn--settings'],
    isSettingsOpen && styles['btn--hovered'],
  ]);

  const fullScreenClass = classNames([styles.btn, styles['btn--fullscreen']]);

  const tabIndexHandler = isVideoHovered ? 0 : -1;

  if (btnType === 'play-pause') {
    return (
      <button
        className={playPauseClass}
        onClick={clickHandler}
        aria-label={playerState.isPlaying ? 'Pause' : 'Play'}
        tabIndex={tabIndexHandler}
      />
    );
  }

  if (btnType === 'volume') {
    return (
      <button
        className={volumeClass}
        onClick={clickHandler}
        aria-label={playerState.isMuted ? 'Unmute' : 'Mute'}
        tabIndex={tabIndexHandler}
      />
    );
  }

  if (btnType === 'fullscreen') {
    return (
      <button
        className={fullScreenClass}
        onClick={clickHandler}
        aria-label="Fullscreen"
        tabIndex={tabIndexHandler}
      />
    );
  }

  if (btnType === 'settings') {
    return (
      <button
        ref={btnRef}
        className={settingsClass}
        onClick={clickHandler}
        aria-label="Settings"
        tabIndex={tabIndexHandler}
      />
    );
  }
};

PlayerBtn.propTypes = {
  btnType: PropTypes.string.isRequired,
  btnRef: PropTypes.shape({ current: PropTypes.instanceOf(Element) }),
  isVolumeHovered: PropTypes.bool,
  clickHandler: PropTypes.func,
  isSettingsOpen: PropTypes.bool,
  playerState: PropTypes.shape({
    isPlaying: PropTypes.bool,
    isMuted: PropTypes.bool,
  }),
};

export default PlayerBtn;
