import { useEffect, useRef, useState } from 'react';
import Arrow from '../../atoms/icons/Arrow';
import { Link } from 'react-router-dom';
import NavDropdown from '../../atoms/NavDropdown';
import PropTypes from 'prop-types';
import styles from './Navigation.module.scss';
import useClickOutside from '../../../hooks/useClickOutside';
import { useLocation } from 'react-router-dom';

const Navigation = ({ isMenuOpen, setIsMenuOpen }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMediaDisplayed, setIsMediaDisplayed] = useState(true);
  const dropdownRef = useRef();

  const location = useLocation().pathname.substring(1);

  const closeNav = () => {
    setIsMenuOpen(false);
    setIsDropdownOpen(false);
  };

  const domRef = useClickOutside(() => {
    closeNav();
  });

  const closeMenu = (e) => {
    if (
      domRef.current.contains(e.target) ===
      !dropdownRef.current.contains(e.target)
    ) {
      closeNav();
    }
  };

  useEffect(() => {
    if (location == 'register' || location == 'questions')
      setIsMediaDisplayed(false);
    else setIsMediaDisplayed(true);
  }, [location]);

  return (
    <div className={styles.nav} ref={domRef}>
      <nav className={`${isMenuOpen ? '' : styles.nav__toggleMenu}`}>
        <ul className={styles.nav__list} onClick={(e) => closeMenu(e)}>
          <li>
            <Link to="/">About Us</Link>
          </li>
          <li onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
            <button className={styles.nav__academies} ref={dropdownRef}>
              Academies <Arrow rotate={isDropdownOpen} />
            </button>
            {isDropdownOpen && <NavDropdown />}
          </li>
          {isMediaDisplayed && (
            <li>
              <a href="#media">Media</a>
            </li>
          )}
          <li>
            <Link to="/register">Register</Link>
          </li>
          <li>
            <Link to="/questions">Questions</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

Navigation.propTypes = {
  action: PropTypes.func,
  isMenuOpen: PropTypes.bool,
  setIsMenuOpen: PropTypes.func,
};

export default Navigation;
