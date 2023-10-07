import { useState } from 'react'
import { RouterProvider } from 'react-router-dom'
import router from "./pages/router.jsx"



import './App.css'
import Navbar from './components/navBar'

function App() {


  return (
    <Provider store={store}>
    <RouterProvider router={router}/>
    </Provider>
  )
}

export default App
