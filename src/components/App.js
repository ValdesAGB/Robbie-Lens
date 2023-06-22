import React from 'react'
import Header from './Header'
import Footer from './Footer'
import { Routes, Route } from 'react-router-dom'
import Home from '../pages/Home'
import About from '../pages/A Propos'
import Portfolio from '../pages/Portfolio'
import ScrollToTopOnPageChange from './ScrollToTopOnPageChange'

function App() {
  return (
    <React.Fragment>
      <Header />
      <ScrollToTopOnPageChange />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/portfolio" element={<Portfolio />} />
      </Routes>
      <Footer />
    </React.Fragment>
  )
}

export default App
