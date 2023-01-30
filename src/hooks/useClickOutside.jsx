import { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

const useClickOutside = (handler) => {
  const domRef = useRef();

  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (!domRef.current.contains(e.target)) {
        handler();
      }
    };

    document.addEventListener('mousedown', handleOutsideClick);

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, []);

  return domRef;
};

useClickOutside.propTypes = {
  handler: PropTypes.func,
};

export default useClickOutside;
