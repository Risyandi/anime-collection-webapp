import { lazy } from "react";

const HomePage = lazy(() => import("./pages/Home"));
const DetailHomePage = lazy(() => import("./pages/Home/DetailHome"));
const CollectionPage = lazy(() => import("./pages/Collection"));
const ErrorPage = lazy(() => import("./components/ErrorPage"));
const NotFoundPage = lazy(() => import("./components/NotFoundPage"));

const routes = [
  {
    path: "/collections",
    element: <CollectionPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/anime-collection-webapp",
    element: <HomePage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "*",
    element: <NotFoundPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/detail/:id",
    element: <DetailHomePage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/detail/collections/:id",
    element: <DetailHomePage />,
    errorElement: <ErrorPage />,
  },
];

export default routes;
