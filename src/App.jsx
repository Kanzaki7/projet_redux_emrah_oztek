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
import Products from './components/Products/Products';



function App() {

  const [total, setTotal] = useState(0)

  const routeur = createBrowserRouter([
  
  {
    path:"/",
    element: <Home total={total} setTotal={setTotal}/>,
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
    path:"/products/:id",
    element: <Products/>
    // errorElement: <Erreur />
  },
  {
    path:"/logIn",
    element: <LogIn/>,
    // errorElement: <Erreur />
  },
  {
    path:"/cart",
    element: <Cart total={total} setTotal={setTotal}/>,
    // errorElement: <Erreur />
  },
])

  return (
    <>
      <RouterProvider router={routeur}/>
    </>
  )
}

export default App
