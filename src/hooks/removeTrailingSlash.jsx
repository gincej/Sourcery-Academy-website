import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function RemoveTrailingSlash() {
  const { pathname } = useLocation();

  useEffect(() => {
    const newPath = pathname.replace(/\/+$/, '');
    if (newPath !== pathname) {
      window.history.replaceState({}, '', newPath);
    }
  }, [pathname]);

  return null;
}

export default RemoveTrailingSlash;
