import React from 'react'
import LoginForm from './components/LoginForm'
import Registration from './components/Registration'
import Admin from "./components/Admin";

import {Route,Routes } from 'react-router-dom'


const App = () => {
  return (
    
      <>
      <Routes> 
        <Route path='/' element={<LoginForm/>}/>
        <Route path='/Registration' element={<Registration/>}/>
        <Route path='/admin' element={<Admin />} />
      </Routes>
      </>
    
  )
}

export default App
