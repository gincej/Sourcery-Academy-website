import CloseIcon from '../../atoms/Icons/CloseIcon';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';
import styles from './Modal.module.scss';
import { useEffect } from 'react';

const Modal = (props) => {
  const { children, handleClose, isModalOpen } = props;

  const disableScroll = () =>
    isModalOpen
      ? (document.body.style.overflow = 'hidden')
      : (document.body.style.overflow = 'unset');

  useEffect(() => {
    const handleEscPress = (e) => {
      if (e.key === 'Escape') handleClose();
    };

    disableScroll();

    if (isModalOpen) document.addEventListener('keydown', handleEscPress);

    return () => document.removeEventListener('keydown', handleEscPress);
  }, [isModalOpen]);

  return createPortal(
    <>
      {isModalOpen && (
        <div className={styles.overlay}>
          <div className={styles.modal}>
            <div className={styles.content}>
              {children}
              <span className={styles.icon} onClick={handleClose}>
                <CloseIcon color="#fff" />
              </span>
            </div>
          </div>
        </div>
      )}
    </>,
    document.getElementById('modal-portal')
  );
};

Modal.propTypes = {
  children: PropTypes.node,
  handleClose: PropTypes.func,
  isModalOpen: PropTypes.bool,
};

export default Modal;
