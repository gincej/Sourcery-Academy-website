import { Link } from 'react-router-dom';
import styles from './NavDropdown.module.scss';

const NavDropdown = () => (
  <div className={styles.dropdown}>
    <div className={styles.dropdown__arrowUp}></div>
    <ul className={styles.dropdown__list}>
      <li>
        <Link to="/developers-academy">Sourcery for Developers</Link>
      </li>
      <li>
        <Link to="/testers-academy">Sourcery for Testers</Link>
      </li>
      <li>
        <Link to="/frontend-academy">Sourcery for Front-End</Link>
      </li>
      <li>
        <Link to="/kids-academy">Sourcery for Kids</Link>
      </li>
    </ul>
  </div>
);

export default NavDropdown;
