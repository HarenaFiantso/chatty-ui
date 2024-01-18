import { Navigate, useRoutes } from "react-router-dom";

import DashboardLayout from "../layouts/dashboard/DashboardLayout";

import MainApp from "../pages/dashboard/MainApp";

import Page404 from "../pages/Page404";

const Loadable = (Component) => (props) => {
  return (
    <Suspense fallback="Loading..">
      <Component {...props} />
    </Suspense>
  );
};

export default function Router() {
  return useRoutes([
    {
      path: "/",
      element: <DashboardLayout />,
      children: [
        { element: <Navigate to="/app" replace />, index: true },
        { path: "app", element: <MainApp /> },

        { path: "404", element: <Page404 /> },
        { path: "*", element: <Navigate to="/404" replace /> },
      ],
    },

    { path: "*", element: <Navigate to="/404" replace /> },
  ]);
}

const MainApp = Loadable(
  lazy(() => import("../pages/dashboard/MainApp"))
);
