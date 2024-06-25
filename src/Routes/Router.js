import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import AnimeList from '../Components/AnimeList/AnimeList';
import AnimeDisplay, {loader as AnimeDisplayLoader} from '../Components/AnimeDisplay/AnimeDisplay';
//TODO: ADD AUTH MIDDLEWARE
const Router = createBrowserRouter([
    {
      path: '/',
      element: <App/>,
      //TODO: Agregar pagina de error
      errorElement: <h1>Internal null pointer exception</h1>,
    },
    {
      path:'/animes',
      element: <App/>,
      errorElement: <h1>Internal null pointer exception</h1>,
    },
    {
      path:'/animes/:id',
      element: <AnimeDisplay/>,
      errorElement: <h1>Internal null pointer exception</h1>,
      loader: AnimeDisplayLoader
    }
  ])

export default Router;




