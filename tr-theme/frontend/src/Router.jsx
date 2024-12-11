import { createBrowserRouter, Navigate } from 'react-router-dom';
import Rolemodels from './Pages/Rolemodels';
import Rolemodel from './pages/Rolemodel';
import { Faq } from './pages/Faq';
import Layout from './pages/Layout';
import Home from './pages/Home';
import NotFound from './Pages/NotFound';
import { Register } from './pages/Register';
import { Login } from './pages/Login';
import { Policy } from './pages/Policy';
import { Books } from './pages/Books';
import Toys from './pages/Toys';
import TipsaOss from './pages/Tipsaoss';
import Media from './pages/Media';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <NotFound />,
    children: [
      {
        index: true, // Detta laddar default-komponenten för roten "/"
        element: <Home />,
      },
      {
        path: 'home',
        element: <Home />,
      },
      {
        path: 'faq',
        element: <Faq />,
      },
      {
        path: 'tipsaoss',
        element: <TipsaOss />,
      },
      {
        path: 'rolemodels',
        element: <Rolemodels />,
      },
      {
        path: 'register',
        element: <Register />,
      },
      {
        path: 'login',
        element: <Login />,
      },
      {
        path: 'policy',
        element: <Policy />,
      },
      {
        path: 'books',
        element: <Books />,
      },
      {
        path: 'rolemodel',
        element: <Rolemodels />,
      },
      {
        path: 'rolemodel/:slug',
        element: <Rolemodel />,
      },
      {
        path: 'toys',
        element: <Toys />,
      },
      {
        path: 'media',
        element: <Media />,
      },
    ],
  },
]);
