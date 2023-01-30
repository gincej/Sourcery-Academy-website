import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import DefaultPageLayout from '../templates/DefaultPageLayout';
import Footer from '../molecules/Footer';
import Header from '../organisms/Header';
import LoadingSpinner from '../atoms/LoadingSpinner';
import PropTypes from 'prop-types';
import RemoveTrailingSlash from '../../hooks/removeTrailingSlash';
import routes from '../../app/routes';
import ScrollToTop from '../atoms/ScrollToTop/ScrollToTop';

export default function App() {
  return (
    <>
      <RemoveTrailingSlash />
      <ScrollToTop />
      <Header />
      <DefaultPageLayout>
        <Suspense fallback={<LoadingSpinner size="large" />}>
          <Routes>
            {Object.values(routes).map(({ path, getComponent }) => {
              const LazyRouteComponent = lazy(getComponent);
              return (
                <Route
                  key={path}
                  path={path}
                  element={<LazyRouteComponent />}
                />
              );
            })}
          </Routes>
        </Suspense>
      </DefaultPageLayout>
      <Footer />
    </>
  );
}

App.propTypes = {
  prop: PropTypes.string,
};
