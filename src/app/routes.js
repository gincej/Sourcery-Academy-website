const routes = {
  home: {
    path: '',
    title: 'Sourcery Academy',
    getComponent: () => import('../pages/Home'),
  },
  devAcademy: {
    path: 'developers-academy',
    title: 'Sourcery Academy for Developers',
    getComponent: () => import('../pages/DevAcademy'),
  },
  FEAcademy: {
    path: 'frontend-academy',
    title: 'Sourcery Academy for Front-End',
    getComponent: () => import('../pages/FEAcademy'),
  },
  kidsAcademy: {
    path: 'kids-academy',
    title: 'Sourcery Academy for Kids',
    getComponent: () => import('../pages/KidsAcademy'),
  },
  QAAcademy: {
    path: 'testers-academy',
    title: 'Sourcery Academy for Testers',
    getComponent: () => import('../pages/QAAcademy'),
  },
  questions: {
    path: 'questions',
    title: 'FAQ | Sourcery Academy',
    getComponent: () => import('../pages/Questions'),
  },
  register: {
    path: 'register',
    title: 'Sourcery Academy Application',
    getComponent: () => import('../pages/Register'),
  },
  pageNotFound: {
    path: '*',
    title: 'Page Not Found',
    getComponent: () => import('../pages/PageNotFound'),
  },
};

export default routes;
