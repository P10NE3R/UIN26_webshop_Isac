
import { useEffect } from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'


// Layout tar imot children som prop
// children er det som ligger inni <Layout> ... </Layout> i App.jsx
export default function Layout({ children }){
    return (
        <>
        {/* Hovednavigasjon */}
        <nav className="main-nav">

            {

            }
           
            <Link to="/">Home</Link>
            
            {
            
            }
          <Link to="/characters">Characters</Link>

   
      
        </nav>

        {
        
        
        /* 
          Her rendres alt som ligger inni Layout i App.jsx
          
          I ditt tilfelle:
          <Layout>
              <Routes> ... </Routes>
          </Layout>

          Det betyr at alle routene vises her.
        */}
        {children}



        {/* Footer som vises på alle sider */}
        <footer>
            
        </footer>
        </>
    )
}
