import classNames from 'classnames';
import HeroCardVideoLine from '../../../assets/images/hero-section/HeroCardVideoLine.svg';
import Modal from '../../molecules/Modal';
import PlayIcon from '../../../assets/icons/PlayIcon.svg';
import PropTypes from 'prop-types';
import styles from './HeroCardVideo.module.scss';
import { useState } from 'react';
import VideoPlayer from '../../organisms/VideoPlayer/VideoPlayer';

const HeroCardVideo = ({ videoSrc, videoThumbnail, imageDescription }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className={styles['preview-section']}>
      <img
        src={videoThumbnail}
        alt={imageDescription}
        className={styles['video-placeholder']}
      />
      <button
        className={classNames(styles['play-button'])}
        onClick={() => setIsModalOpen(!isModalOpen)}
      >
        <PlayIcon className={styles['play-button__play-icon']} />
      </button>
      <HeroCardVideoLine className={styles['bg-line']} />
      <Modal
        isModalOpen={isModalOpen}
        handleClose={() => setIsModalOpen(!isModalOpen)}
      >
        <VideoPlayer videoUrl={videoSrc} />
      </Modal>
    </div>
  );
};
HeroCardVideo.propTypes = {
  videoSrc: PropTypes.string,
  videoThumbnail: PropTypes.elementType,
  imageDescription: PropTypes.string,
};

export default HeroCardVideo;
