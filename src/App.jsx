import React from 'react'
import { BrowserRouter, Routes, Route  } from 'react-router-dom'
import Navbar from './Component/Home/Navbar'
import Home from './Component/Home/Home'
import PageNotFound from './Component/Home/PageNotFound'
import Footer from './Component/Home/Footer'
import Api from './Component/Api'
import TestRun from './Component/TestRun'



const App = () => {
  return (
    <div >
     
      <Navbar />
      <Routes>
              <Route path="/" element={<Home/>} />
              <Route path="/dogs" element={<TestRun/>} />
              <Route path="/api" element={<Api/>} />
              
              {/* <Route index path='*' element={<PageNotFound/>} /> */}
      </Routes>
      <Footer />
   
    </div>
  )
}

export default App