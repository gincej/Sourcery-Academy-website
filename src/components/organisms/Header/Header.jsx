import { useEffect, useState } from 'react';
import classNames from 'classnames';
import CloseIcon from '../../atoms/Icons/CloseIcon';
import Logo from '../../../assets/images/Logo.svg';
import MenuBurgerIcon from '../../atoms/Icons/MenuBurgerIcon';
import Navigation from '../../molecules/Navigation';
import styles from './Header.module.scss';
import { useNavigate } from 'react-router-dom';

const hasShadow = (setShadowClass) => {
  window.onscroll = () => {
    setShadowClass(document.documentElement.scrollTop > 0 ? styles.shadow : '');
  };
};

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [shadowClass, setShadowClass] = useState('');
  const navigate = useNavigate();
  const handleToggle = () => setIsMenuOpen(!isMenuOpen);
  const onLogoClick = () => {
    navigate('/');
    scrollTo(0, 0);
  };

  const disableScroll = () =>
    isMenuOpen
      ? (document.body.style.overflow = 'hidden')
      : (document.body.style.overflow = 'unset');

  useEffect(() => {
    disableScroll();
    hasShadow(setShadowClass);
  }, [isMenuOpen]);

  return (
    <header className={classNames(styles.header, shadowClass)}>
      <div className={styles['header__layout']}>
        {isMenuOpen && <div className={styles.overlay}></div>}
        <div onClick={() => onLogoClick()} className={styles['header__logo']}>
          <Logo />
          <h1>Sourcery Academy</h1>
        </div>
        <button
          onClick={handleToggle}
          className={styles['header__burger-menu']}
        >
          {isMenuOpen ? <CloseIcon /> : <MenuBurgerIcon />}
        </button>
        <Navigation isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      </div>
    </header>
  );
};

export default Header;
