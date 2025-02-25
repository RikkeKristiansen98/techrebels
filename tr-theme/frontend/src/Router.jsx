import { createBrowserRouter, Navigate } from "react-router-dom";
import RolemodelsPage from "./Pages/RolemodelsPage";
import RolemodelPage from "./pages/RolemodelPage";
import { Faq } from "./pages/Faq";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import NotFound from "./Pages/NotFound";
import { Books } from "./pages/Books";
import TipsaOss from "./pages/Tipsaoss";
import CollectionItemPage from "./pages/CollectionItemPage";
import CollectionPage from "./pages/CollectionPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <NotFound />,
    children: [
      {
        index: true, // Detta laddar default-komponenten för roten "/"
        element: <Home />,
      },
      {
        path: "home",
        element: <Home />,
      },
      {
        path: "tipsbanken",
        element: <CollectionPage />,
      },
      {
        path: "collection",  // Dynamisk ruta för collection
        element: <CollectionPage />,
      },
      {
        path: "faq",
        element: <Faq />,
      },
      {
        path: "tipsaoss",
        element: <TipsaOss />,
      },
      {
        path: "rolemodels",
        element: <RolemodelsPage />,
      },
      {
        path: "register",
        element: <Register />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "policy",
        element: <Policy />,
      },
      {
        path: "books",
        element: <Books />,
      },
      {
        path: "collection-item-page",
        element: <CollectionItemPage />,
      },
      {
        path: "collection-page",
        element: <CollectionPage />,
      },
      {
        path: "rolemodel",
        element: <RolemodelsPage />,
      },
      {
        path: "rolemodel/:slug",
        element: <RolemodelPage />,
      },
      {
        path: "toys",
        element: <Toys />,
      },
      {
        path: "media",
        element: <Media />,
      },
    ],
  },
]);
