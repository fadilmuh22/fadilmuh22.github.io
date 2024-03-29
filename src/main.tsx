import { ChakraProvider } from '@chakra-ui/react';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { createHashRouter, RouterProvider } from 'react-router-dom';

import { MainTemplate } from './components/templates/MainTemplate';
import { ArticlesPage } from './pages/ArticlesPage';
import { ErrorPage } from './pages/ErrorPage';
import { HomePage } from './pages/HomePage';

import { createClient } from '@supabase/supabase-js';
import { Provider } from 'react-supabase';
import './index.css';
import { MyBeloved } from './pages/MyBeloved';
import { ProjectsPage } from './pages/ProjectsPage';
import { myTheme } from './utils/theme';

const supabaseClient = createClient(
  import.meta.env.VITE_SUPABASE_URL,
  import.meta.env.VITE_SUPABASE_KEY
);

const myFavoriteKey = import.meta.env.VITE_MY_FAVORITE_KEY;

export const router = createHashRouter([
  {
    path: '/',
    element: <MainTemplate />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      { path: 'projects', element: <ProjectsPage /> },
      { path: 'articles', element: <ArticlesPage /> },
    ],
  },
  { path: myFavoriteKey, element: <MyBeloved /> },
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider value={supabaseClient}>
      <ChakraProvider theme={myTheme} resetCSS>
        <RouterProvider router={router} />
      </ChakraProvider>
    </Provider>
  </React.StrictMode>
);
