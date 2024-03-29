import { Suspense, lazy } from 'react';
import { Navigate, useRoutes } from 'react-router-dom';

import DashboardLayout from '../layouts/dashboard';

import { DEFAULT_PATH } from '../config/config';

import LoadingScreen from '../components/LoadingScreen';

const Loadable = (Component) => (props) => {
  return (
    <Suspense fallback={<LoadingScreen />}>
      <Component {...props} />
    </Suspense>
  );
};

export default function Router() {
  return useRoutes([
    {
      path: '/',
      element: <DashboardLayout />,
      children: [
        { element: <Navigate to={DEFAULT_PATH} replace />, index: true },
        { path: 'app', element: <MainApp /> },
        { path: 'conversation', element: <Conversation /> },
        { path: 'chats', element: <Chats /> },
        { path: 'contact', element: <Contact /> },
        { path: '404', element: <Page404 /> },
        { path: '*', element: <Navigate to="/404" replace /> },
      ],
    },
    { path: '*', element: <Navigate to="/404" replace /> },
  ]);
}

const MainApp = Loadable(lazy(() => import('../pages/dashboard/MainApp')));
const Conversation = Loadable(lazy(() => import('../pages/dashboard/Conversation')));
const Chats = Loadable(lazy(() => import('../pages/dashboard/Chats')));
const Contact = Loadable(lazy(() => import('../pages/dashboard/Contact')));
const Page404 = Loadable(lazy(() => import('../pages/Page404')));
