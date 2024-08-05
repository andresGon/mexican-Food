import { BrowserRouter as Router, Link } from "react-router-dom";
import './header.scss'
const Header = () =>{
    return(
        <header className="header">
            <p>header</p>
            <Link to='/'> Regresar </Link>    
        </header>
        
    )
}

export default Header