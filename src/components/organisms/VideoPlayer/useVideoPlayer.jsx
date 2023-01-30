import { useEffect, useState } from 'react';

const useVideoPlayer = (videoElementRef, videoRef) => {
  const [playerState, setPlayerState] = useState({
    isPlaying: true,
    progress: 0,
    speed: 1,
    isMuted: false,
    volume: 1,
    isFullScreen: false,
    urlError: false,
    isLoaded: false,
    showPlayIcon: false,
    showPauseIcon: false,
  });

  useEffect(() => {
    const handleVideoLoaded = () => {
      setPlayerState((state) => ({
        ...state,
        isLoaded: true,
      }));
    };

    const canPlay = () =>
      videoElementRef?.current?.addEventListener('canplay', handleVideoLoaded);

    canPlay();

    return () =>
      videoElementRef?.current?.removeEventListener(
        'canplay',
        handleVideoLoaded
      );
  }, []);

  const togglePlay = () => {
    setPlayerState({
      ...playerState,
      isPlaying: !playerState.isPlaying,
    });

    if (!playerState.isPlaying) {
      setPlayerState({
        ...playerState,
        showPlayIcon: true,
      });

      setTimeout(() => {
        setPlayerState({
          ...playerState,
          isPlaying: !playerState.isPlaying,
          showPlayIcon: false,
        });
      }, 300);
    } else {
      setPlayerState({
        ...playerState,
        showPauseIcon: true,
      });

      setTimeout(() => {
        setPlayerState({
          ...playerState,
          isPlaying: !playerState.isPlaying,
          showPauseIcon: false,
        });
      }, 300);
    }
  };

  useEffect(() => {
    if (playerState.isPlaying) {
      videoElementRef.current.play().catch(() => {
        setPlayerState({
          ...playerState,
          urlError: true,
        });
      });
    } else {
      videoElementRef.current.pause();
    }
  }, [playerState.isPlaying, videoElementRef.current]);

  const handleOnTimeUpdate = () => {
    const progress =
      (videoElementRef.current.currentTime / videoElementRef.current.duration) *
      100;
    setPlayerState({
      ...playerState,
      progress,
    });
  };

  const handleVideoProgress = (event) => {
    const manualChange = Number(event.target.value);
    videoElementRef.current.currentTime =
      (videoElementRef.current.duration / 100) * manualChange;
    setPlayerState({
      ...playerState,
      progress: manualChange,
    });
  };

  const handleVideoSpeed = (speed) => {
    videoElementRef.current.playbackRate = speed;
    setPlayerState({
      ...playerState,
      speed,
    });
  };

  const handleVideoVolume = (event) => {
    const volume = Number(event.target.value) / 100;
    videoElementRef.current.volume = volume;
    setPlayerState({
      ...playerState,
      volume,
    });
  };

  const toggleMute = () => {
    setPlayerState({
      ...playerState,
      isMuted: !playerState.isMuted,
    });
  };

  useEffect(() => {
    setPlayerState({
      ...playerState,
      isMuted: playerState.volume === 0,
    });
  }, [playerState.volume]);

  useEffect(() => {
    if (playerState.isMuted) {
      videoElementRef.current.muted = true;
    } else {
      videoElementRef.current.muted = false;
    }
  }, [playerState.isMuted, videoElementRef]);

  const handleEnterFullScreen = () => {
    videoRef.current.requestFullscreen();
  };

  const handleExitFullScreen = () => {
    document.exitFullscreen().catch(() => {
      setPlayerState({
        ...playerState,
        isFullScreen: false,
      });
    });
  };

  useEffect(() => {
    const handleFullScreenChange = () => {
      if (document.fullscreenElement) {
        setPlayerState({
          ...playerState,
          isFullScreen: true,
        });
      } else {
        setPlayerState({
          ...playerState,
          isFullScreen: false,
        });
      }
    };

    document.addEventListener('fullscreenchange', handleFullScreenChange);

    return () => {
      document.removeEventListener('fullscreenchange', handleFullScreenChange);
    };
  }, [playerState]);

  return {
    playerState,
    togglePlay,
    handleOnTimeUpdate,
    handleVideoProgress,
    handleVideoSpeed,
    toggleMute,
    handleVideoVolume,
    handleEnterFullScreen,
    handleExitFullScreen,
  };
};

export default useVideoPlayer;
