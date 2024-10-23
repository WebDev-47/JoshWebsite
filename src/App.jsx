import React from 'react'
import { BrowserRouter, Routes, Route  } from 'react-router-dom'
import Navbar from './Component/Home/Navbar'
import Home from './Component/Home/Home'
import PageNotFound from './Component/Home/PageNotFound'
import Footer from './Component/Home/Footer'


const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Navbar />
      <Routes>
              <Route path="/" element={<Home/>} />
              {/* <Route index path='*' element={<PageNotFound/>} /> */}
      </Routes>
      <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App