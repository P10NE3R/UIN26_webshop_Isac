import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import{Routes, Route} from "react-router-dom"

import Layout from './components/Layout'
import Home from './pages/Home'
import Character from './pages/Character'
import Characters from './pages/Characters'

function App() {
  

  return (
  <Layout>
    <Routes>
      <Route index element={<Home />}/>
      <Route path='/characters' element={<Characters />} />
      <Route path='/character/:id' element={<Character />} />
    </Routes>
  </Layout>
    
    

 
    
  
  )
}

export default App
