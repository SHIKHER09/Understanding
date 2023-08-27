import React from 'react'
import './App.css'

import Lnading from './Screens/Lnading'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Nav from './Component/Nav'
import Login from './Screens/Login'
import Register from './Screens/Register'



export default function App() {
  return (

    <BrowserRouter>
    <Nav></Nav>
    <Routes>
      <Route path='/'element={<Lnading/>}/>
      <Route path='/Login'element={<Login/>}/>
      <Route path='/Register'element={<Register/>}/>

    </Routes>
    
    </BrowserRouter>


  )
}

