import React from 'react';
import { RouterProvider } from 'react-router-dom';
import { router } from './Router';
import { HomeProvider } from './contexts/HomeContext';
import { CollectionProvider } from './contexts/CollectionContext';
import ScrollToTop from './components/ScrollToTop';

const App = () => {
  return (
    <HomeProvider>
      <CollectionProvider>
      <RouterProvider
          router={router}
          fallbackElement={
            <>
              <ScrollToTop /> 
            </>
          }
        />
      </CollectionProvider>
    </HomeProvider>
  );
};

export default App;
