import { Children } from "react"
import {Link} from "react-router-dom"
export default function Layout({children}){
    return(
        <>
            <nav className="main-nav">
                <Link to="/">Hjem</Link>                               
                <Link to="categories">Kategorier</Link>
                <Link to="About">About</Link>
            </nav>     
            {children}
            <footer>
                <p>
                    2026 Utvikling a interaktive nettsider - React router
                </p>
            </footer>   
        </>
    )
}