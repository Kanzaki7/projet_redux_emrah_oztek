import { useState } from 'react'
import { RouterProvider, createBrowserRouter, } from 'react-router-dom';
import './App.css'
import Home from './components/Home/Home';
import LogIn from './components/LogIn/LogIn';
import Cart from './components/Cart/Cart';
import Ollivanders from './components/Ollivanders/Ollivanders';
import Honeydukes from './components/Honeydukes/Honeydukes';
import Menagerie from './components/Menagerie/Menagerie';
import Quidditch from './components/Quidditch/Quidditch';

const routeur = createBrowserRouter([
  {
    path:"/",
    element: <Home/>,
    // errorElement: <Erreur />
  },
  {
    path:"/ollivanders",
    element: <Ollivanders/>
    // errorElement: <Erreur />
  },
  {
    path:"/honeydukes",
    element: <Honeydukes/>
    // errorElement: <Erreur />
  },
  {
    path:"/menagerie",
    element: <Menagerie/>
    // errorElement: <Erreur />
  },
  {
    path:"/quidditch",
    element: <Quidditch/>
    // errorElement: <Erreur />
  },
  {
    path:"/logIn",
    element: <LogIn/>,
    // errorElement: <Erreur />
  },
  {
    path:"/cart",
    element: <Cart/>,
    // errorElement: <Erreur />
  },
])

function App() {


  return (
    <>
      <RouterProvider router={routeur}/>
    </>
  )
}

export default App
