import classNames from 'classnames';
import { PropTypes } from 'prop-types';
import routes from '../../app/routes';
import styles from './DefaultPageLayout.module.scss';
import useDocumentTitle from '../../hooks/useDocumentTitle';
import { useLocation } from 'react-router-dom';

const DefaultPageLayout = ({ children }) => {
  const { pathname } = useLocation();
  let title;
  let theme;

  switch (pathname.split('/')[1]) {
    case routes.devAcademy.path:
      theme = 'theme-dev';
      title = routes.devAcademy.title;
      break;
    case routes.FEAcademy.path:
      theme = 'theme-fe';
      title = routes.FEAcademy.title;
      break;
    case routes.QAAcademy.path:
      theme = 'theme-qa';
      title = routes.QAAcademy.title;
      break;
    case routes.kidsAcademy.path:
      title = routes.kidsAcademy.title;
      theme = 'theme-kids';
      break;
    case routes.register.path:
      title = routes.register.title;
      break;
    case routes.questions.path:
      title = routes.questions.title;
      break;
    case '':
      title = routes.home.title;
      break;
    default:
      title = routes.pageNotFound.title;
      theme = '';
  }

  if (pathname.split('/').length > 2) {
    title = routes.pageNotFound.title;
    theme = '';
  }

  useDocumentTitle(title);
  return <main className={classNames(styles.content, theme)}>{children}</main>;
};

DefaultPageLayout.propTypes = {
  children: PropTypes.node,
};

export default DefaultPageLayout;
