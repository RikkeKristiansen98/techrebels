import { createBrowserRouter } from 'react-router-dom';
import Rolemodels from './pages/Rolemodels';
import Rolemodel from './pages/Rolemodel';
import { Faq } from './pages/Faq';
import Layout from './pages/Layout';
import Home from './Pages/Home';
import NotFound from './Pages/NotFound';
import { Register } from './pages/Register'
import { Login } from './pages/Login'
import { Policy } from './pages/Policy'
import { Books } from './pages/Books'
import Toys from './pages/Toys';

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
      {
        path: 'register',
        element: <Register />
      },
      {
        path: 'login',
        element: <Login />
      },
      {
      path: 'policy',
      element: <Policy />
      },
      {
        path: 'books',
        element: <Books />
      },
      {
        path: 'rolemodels',
        element: <Rolemodels />
      },
  

      {
        path: 'rolemodel',
        element: <Rolemodel />
      }
      
    ],
  },
]);
