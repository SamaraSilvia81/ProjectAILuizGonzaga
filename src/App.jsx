import React from 'react';
import {BrowserRouter as Router, Routes,Route} from 'react-router-dom'
import Navbar from './components/NavBar'
import Home from './pages/Home'
import About from './pages/About'
import './App.css'

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} > </Route>
          <Route path="/About" element={<About />} > </Route>
        </Routes>
      </Router>
    </div>
  )
}

export default App