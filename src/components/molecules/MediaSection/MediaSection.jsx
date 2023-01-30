import { useEffect, useState } from 'react';
import LineDefaultImg from '../../atoms/images/LineDefaultImg';
import LineImg from '../../atoms/images/LineImg';
import Modal from '../Modal';
import PlayIcon from '../../../assets/icons/PlayIcon.svg';
import PropTypes from 'prop-types';
import reconstructData from './reconstructData';
import styles from './MediaSection.module.scss';
import VideoPlayer from '../../organisms/VideoPlayer/VideoPlayer';

const REACT_APP_MEDIA_API =
  'https://sfe-2022-data.netlify.app/static/media.json';

const MediaSection = ({ theme }) => {
  const [data, setData] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalSrc, setModalSrc] = useState('');
  const [modalIsImg, setModalIsImg] = useState(true);

  const handleModalOpen = (src, isImg) => {
    setModalSrc(src);
    setModalIsImg(isImg);
    setIsModalOpen(!isModalOpen);
  };

  const handleKeyUp = (e, src) => {
    if (e.keyCode === 13) handleModalOpen(src, e.target.nodeName === 'IMG');
  };

  const handleClick = (e, src) => {
    handleModalOpen(src, e.target.nodeName === 'IMG');
  };

  useEffect(() => {
    const fetchImages = async () => {
      const response = await fetch(REACT_APP_MEDIA_API);
      const data = await response.json();
      reconstructData(data, theme, setData);
    };
    fetchImages();
  }, []);

  return (
    <section className={styles.media} id="media">
      <h2>Media</h2>
      <div className={styles.media__container}>
        {data?.images.map((item, i) => (
          <div key={item.thumbnail + i}>
            <img
              tabIndex="0"
              src={item.src}
              className={styles['media__img']}
              onClick={(e) => handleClick(e, e.target.src)}
              onKeyUp={(e) => handleKeyUp(e, e.target.src)}
            />
          </div>
        ))}
        {data?.video.map((item, i) => (
          <div
            tabIndex="0"
            onClick={(e) =>
              handleClick(
                e,
                e.target.closest('div').attributes.getNamedItem('data-src')
                  .value
              )
            }
            onKeyUp={(e) =>
              handleKeyUp(
                e,
                e.target.closest('div').attributes.getNamedItem('data-src')
                  .value
              )
            }
            data-src={item.src}
            key={item.thumbnail + i}
            style={{ backgroundImage: `url(${item.thumbnail})` }}
            className={styles['media__video']}
          >
            <PlayIcon />
          </div>
        ))}
        <Modal
          isModalOpen={isModalOpen}
          handleClose={() => setIsModalOpen(!isModalOpen)}
        >
          {modalIsImg ? (
            <img className={styles['modal__img']} src={modalSrc} />
          ) : (
            <VideoPlayer videoUrl={modalSrc} />
          )}
        </Modal>
      </div>
      {theme ? <LineImg /> : <LineDefaultImg />}
    </section>
  );
};

MediaSection.propTypes = {
  theme: PropTypes.string,
};

export default MediaSection;
