import { useState } from 'react'

import './App.css'
import Navbar from './components/navBar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div>hola</div>
      <Navbar/>
    </>
  )
}

export default App
