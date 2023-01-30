import Button from '../../components/atoms/Button';
import PageNotFoundParticles from '../../components/atoms/images/PageNotFoundParticles';
import styles from './PageNotFound.module.scss';

const PageNotFound = () => (
  <div className={styles['page-wrapper']}>
    <div className={styles['page-not-found']}>
      <div className={styles['page-not-found__message']}>
        Oops, it seems you took a wrong turn!
      </div>
      <h1 className={styles['page-not-found__error']}>404</h1>
      <div className={styles['page-not-found__explained']}>
        <a
          rel="noreferrer"
          target="_blank"
          href="https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/404?retiredLocale=de"
        >
          Learn what 404 actually means
        </a>
      </div>
      <Button to={'/'} className={styles['page-not-found__button']}>
        Homepage
      </Button>
    </div>
    <PageNotFoundParticles />
  </div>
);

export default PageNotFound;
