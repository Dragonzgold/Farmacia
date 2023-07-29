import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from "./components/Home";
import MenuOpcionesA from './components/MenuOpcionesA';
import MenuOpcionesE from './components/MenuOpcionesE';
import Almacen from './components/Almacen';

function Route() {
  const router = createBrowserRouter([
    {
      path: '/Almacen',
      element: <Almacen />
    },
    {
      path: '/MenuOpcionesE',
      element: <MenuOpcionesE />
    },
    {
      path: '/MenuOpcionesA',
      element: <MenuOpcionesA />
    },
    {
      path: '/',
      element: <Home />,
    },
  ]);

  return (
    <RouterProvider router={router}/>
  );
}

export default Route;
