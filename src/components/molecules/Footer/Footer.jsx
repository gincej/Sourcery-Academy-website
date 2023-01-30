import Fb from '../../../assets/icons/socials/Fb.svg';
import Insta from '../../../assets/icons/socials/Insta.svg';
import Twitter from '../../../assets/icons/socials/Twitter.svg';
import './Footer.scss';

const Footer = () => {
  const currYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer__socials">
        <a
          href="https://www.facebook.com/devbridge/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Fb />
        </a>
        <a
          href="https://www.instagram.com/devbridge/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Insta />
        </a>
        <a
          href="https://twitter.com/devbridge/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Twitter />
        </a>
      </div>
      <small className="footer__copyright">
        Copyright © {currYear} Sourcery Academy
      </small>
    </footer>
  );
};

export default Footer;
