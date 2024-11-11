import { useState } from 'react'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'

import './App.css'
import CreateProducts from './createProducts'
import Home from './Home'
import Header from './Header/Header'
import Footer from './Footer/Footer'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header/>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create-product" element={<CreateProducts />} />
      </Routes>
    </Router>
    <Footer/>
    </>
  )
}

export default App
