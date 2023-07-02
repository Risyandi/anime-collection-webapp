import { lazy } from "react";

const HomePage = lazy(() => import("./pages/Home"));
const CollectionPage = lazy(() => import("./pages/Collection"));
const ErrorPage = lazy(() => import("./components/ErrorPage"));

const routes = [
  {
    path: "/collections",
    element: <CollectionPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "*",
    element: <HomePage />,
    errorElement: <ErrorPage />,
  },
];

export default routes;
