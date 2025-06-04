import { useState } from 'react'
import {BrowserRouter,Routes,Route } from 'react-router-dom'
import Login from './pages/Login'
import Home from './pages/Home'
import Fail from './pages/Fail'


import './App.css'

function App() {


  return (
   <BrowserRouter>
   <Routes>
    <Route path='/' element={<Login />}/>
    <Route path='/home' element={<Home />} />
    <Route path='/fail' element={<Fail />}/>
   </Routes>
   </BrowserRouter>
  )
}

export default App
