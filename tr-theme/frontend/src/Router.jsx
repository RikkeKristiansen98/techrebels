import { createBrowserRouter } from 'react-router-dom';
import Rolemodels from './pages/Rolemodels';
import { Faq } from './pages/Faq';
import Layout from './pages/Layout';
import Home from './Pages/Home';
import NotFound from './Pages/NotFound';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <NotFound/>,
    children: [
      {
        index: true,
        element: <Home/>
      },
      {
        path: 'faq', 
        element: <Faq />
      },
      {
        path: 'rolemodels',
        element: <Rolemodels />
      },
    ],
  },
]);
