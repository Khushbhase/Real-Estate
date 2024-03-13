import React from 'react'
import {BrowserRouter,Route, Routes}  from 'react-router-dom'
import Home from './pages/Home'

import SignUp from './pages/SignUp'
import About from './pages/About'
import Profile from './pages/Profile'
import Navbar from './componenets/Navbar'
import SignIn from './pages/SignIn'

const App = () => {
  return (
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/sign-in' element={<SignIn/>} /> 
      <Route path='/sign-up' element={<SignUp/>} />
      <Route path='/about' element={<About />} />
      <Route path='/profile' element={<Profile />} />
    </Routes>
    </BrowserRouter>
  )
}

export default App