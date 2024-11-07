import { BrowserRouter as Router, Link } from "react-router-dom";
import './header.scss'
const Header = () =>{
    return(
        <header className="header">
            <Link to='/'> Regresar </Link>    
            <p>Fuego y Maíz</p>
        </header>
        
    )
}

export default Header