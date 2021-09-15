import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import Navbar from './Navbar'
import Hero from './Hero'
import Sidebar from './Sidebar'
import Submenu from './Submenu'
function App() {
  return (
    <Router>
      <Navbar />
      <Sidebar />
      <Hero />
      <Submenu />
    </Router>
  )
}

export default App
