import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import{Routes, Route, Outlet} from "react-router-dom"
import Categories from './components/Categories'
import About from './components/About'
import Home from './components/Home'
import Layout from './components/Layout'
import Category from './components/Category'

function App() {
    return (
    <Layout>
        <Routes>
            <Route index element={<Home/>} />
            
            <Route path='categories' element={<Outlet />}>
                <Route index element={<Categories />} />
                <Route path=':slug' element={<Category/>}/>
            </Route>
            
            <Route path='about' element={<About /> } />
        </Routes>    
    </Layout>
    
    )
}

 

export default App
