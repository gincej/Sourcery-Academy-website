import { useEffect, useRef, useState } from 'react';
import classNames from 'classnames';
import ErrorMessage from '../../atoms/VideoPlayer/ErrorMessage';
import LoadingSpinner from '../../atoms/LoadingSpinner';
import PlayerBtn from '../../atoms/VideoPlayer/PlayerBtn';
import ProgressBar from '../../atoms/VideoPlayer/ProgressBar';
import PropTypes from 'prop-types';
import styles from './VideoPlayer.module.scss';
import useVideoPlayer from './useVideoPlayer';
import VideoSettings from '../../atoms/VideoPlayer/VideoSettings';
import VolumeSlider from '../../atoms/VideoPlayer/VolumeSlider';

const VideoPlayer = ({ videoUrl }) => {
  const videoElementRef = useRef(null);
  const progressRef = useRef(null);
  const settingsRef = useRef(null);
  const btnRef = useRef(null);
  const videoRef = useRef(null);
  const [error, setError] = useState(false);
  const [isVolumeHovered, setIsVolumeHovered] = useState(false);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [isVideoHovered, setIsVideoHovered] = useState(false);
  const [touchCaptured, setTouchCaptured] = useState(false);
  const [volumeFocused, setVolumeFocused] = useState(false);

  const {
    playerState,
    togglePlay,
    handleOnTimeUpdate,
    handleVideoProgress,
    handleVideoSpeed,
    handleVideoVolume,
    toggleMute,
    handleEnterFullScreen,
    handleExitFullScreen,
  } = useVideoPlayer(videoElementRef, videoRef);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        !settingsRef.current.contains(e.target) &&
        !btnRef.current.contains(e.target)
      ) {
        setIsSettingsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const toggleSettingsOpen = () => {
    setIsSettingsOpen(!isSettingsOpen);
  };

  useEffect(() => {
    if (playerState.urlError) {
      setError(true);
    } else {
      setError(false);
    }
  }, [playerState.urlError]);

  const playerClass = classNames([
    styles['player-controls'],
    isVideoHovered && styles['player-controls--visible'],
    !playerState.isPlaying && styles['player-controls--visible'],
  ]);

  const iconsClass = classNames([
    styles.icon,
    playerState.showPlayIcon && styles['icon--play'],
    playerState.showPauseIcon && styles['icon--pause'],
  ]);

  const mouseLeave = () => {
    setIsVolumeHovered(false);
    setVolumeFocused(false);
  };

  return (
    <div
      className={styles['player-wrapper']}
      onMouseOver={() => setIsVideoHovered(true)}
      onMouseOut={() => setIsVideoHovered(false)}
      onFocus={() => setIsVideoHovered(true)}
      onBlur={() => setIsVideoHovered(false)}
      ref={videoRef}
      tabIndex="0"
    >
      {!playerState.isLoaded ? (
        <div className={styles.loading}>
          <div className={styles['loading__spinner']}>
            <LoadingSpinner size="small" />
          </div>
        </div>
      ) : null}
      {playerState.showPlayIcon && <div className={iconsClass} />}
      {playerState.showPauseIcon && <div className={iconsClass} />}
      <video
        style={{ display: playerState.isLoaded && !error ? 'block' : 'none' }}
        src={videoUrl && videoUrl}
        ref={videoElementRef}
        onTimeUpdate={handleOnTimeUpdate}
        onClick={error ? null : togglePlay}
        onError={() => setError(true)}
      />
      {error && <ErrorMessage />}
      <div className={playerClass} tabIndex="-1">
        <PlayerBtn
          playerState={playerState}
          btnType="play-pause"
          clickHandler={error ? null : togglePlay}
          isVideoHovered={isVideoHovered}
        />
        <ProgressBar
          progressRef={progressRef}
          playerState={playerState}
          handleVideoProgress={handleVideoProgress}
          videoElementRef={videoElementRef}
          isVideoHovered={isVideoHovered}
        />
        <div
          onMouseEnter={() => setIsVolumeHovered(true)}
          onMouseLeave={mouseLeave}
          onTouchStartCapture={() => setTouchCaptured(true)}
          onFocus={() => setVolumeFocused(true)}
          onBlur={() => setVolumeFocused(false)}
        >
          <PlayerBtn
            btnType="volume"
            clickHandler={toggleMute}
            playerState={playerState}
            isVolumeHovered={isVolumeHovered}
            isVideoHovered={isVideoHovered}
          />
          {!touchCaptured && (
            <VolumeSlider
              isVolumeHovered={isVolumeHovered}
              handleVideoVolume={handleVideoVolume}
              playerState={playerState}
              videoElementRef={videoElementRef}
              isVideoHovered={isVideoHovered}
              volumeFocused={volumeFocused}
            />
          )}
        </div>
        <PlayerBtn
          playerState={playerState}
          btnType="settings"
          isSettingsOpen={isSettingsOpen}
          clickHandler={toggleSettingsOpen}
          btnRef={btnRef}
          isVideoHovered={isVideoHovered}
        />
        <VideoSettings
          playerState={playerState}
          handleVideoSpeed={handleVideoSpeed}
          isSettingsOpen={isSettingsOpen}
          settingsRef={settingsRef}
          isVideoHovered={isVideoHovered}
        />
        <PlayerBtn
          btnType="fullscreen"
          playerState={playerState}
          {...(playerState.isFullScreen
            ? { clickHandler: handleExitFullScreen }
            : { clickHandler: handleEnterFullScreen })}
          isVideoHovered={isVideoHovered}
        />
      </div>
    </div>
  );
};

VideoPlayer.propTypes = {
  videoUrl: PropTypes.string.isRequired,
};

export default VideoPlayer;
