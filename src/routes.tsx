import { lazy } from "react";

const HomePage = lazy(() => import("./pages/Home"));
const CollectionPage = lazy(() => import("./pages/Collection"));

const routes = [
  {
    path: "/collections",
    element: <CollectionPage />,
  },
  {
    path: "*",
    element: <HomePage />,
  },
];

export default routes;
