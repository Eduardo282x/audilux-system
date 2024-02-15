import {createBrowserRouter,RouterProvider,} from "react-router-dom";
import './App.css';
import { Layout } from "./components/layouts/Layout";
import { Home } from "./components/home/Home.jsx";
import { Location } from "./components/location/Location.jsx";
import { Luminaires } from "./components/luminaires/Luminaires.jsx";
import { BombsMotors } from "./components/bombs/BombsMotors.jsx";

function App() {

  const router = createBrowserRouter([
    {
      element: <Layout/>,
      children:[
        {
          path: '/',
          element: <Home/>
        },
        {
          path: '/ubicacion',
          element: <Location/>
        },
        {
          path: '/luminaria',
          element: <Luminaires/>
        },
        {
          path: '/bombas',
          element: <BombsMotors/>
        },
      ]
    },
  ]);

  return (
    <>
      {/* <div className='flex items-center justify-center w-full h-screen'>
        <h1>Vite + React</h1>
      </div> */}
      <RouterProvider router={router} />
    </>
  )
}

export default App
