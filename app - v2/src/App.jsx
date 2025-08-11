
import './App.css'
import Layout from './Components/Layout/Layout'
import { createBrowserRouter, Route, RouterProvider, Routes } from 'react-router-dom'
import AllCars from './Components/AllCars/AllCars'
import ThisCar from './Components/ThisCar/ThisCar';
import Pagination from './Components/Pagination/Pagination';
import NotFound from './Components/NotFound/NotFound';

function App() {
 
  const routes = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement:<NotFound/> 
   
  },
  {
    path: '/allCars',
    element: <AllCars/> // صفحة منفصلة بدون Layout
  },
  {
    path:"/thisCar",
    element:<ThisCar/>
  }
]);



  return (
   
    <>
    <RouterProvider router={routes}></RouterProvider>
      
   </>
  )
}

export default App
