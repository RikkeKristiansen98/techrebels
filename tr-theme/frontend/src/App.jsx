import React from 'react';
import { RouterProvider } from 'react-router-dom';
import { router } from './Router';
import { HomeProvider } from './contexts/HomeContext';

const App = () => {
  return (
    <HomeProvider>
      {/* <CollectionProvider> */}
        <RouterProvider router={router} />
      {/* </CollectionProvider> */}
    </HomeProvider>
  );
};

export default App;
