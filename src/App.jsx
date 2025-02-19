import { useState } from 'react'
import './App.css'
import Navbar from './Components/Navbar.jsx'
import {Routes, Route} from 'react-router-dom'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Contact from './pages/Contact.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <header>
        <Navbar/>
      </header>
      <main className="topmain">
        <Routes>
          <Route path="/Home" element={<Home/>}/>
          <Route path="/About" element={<About/>}/>
          <Route path="/Contact" element={<Contact/>}/>
        </Routes>
      </main>
    </>
  )
}

export default App
