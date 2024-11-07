import { BrowserRouter as Router, Link } from "react-router-dom";
import logo from '../../assets/logo-header.jpg'
import back from '../../assets/back-icon.svg'
import './header.scss'
const Header = () =>{
    return(
        <header className="header">
            <Link className="header-back" to='/'>
            <img src={back} alt="" />
             Inicio 
            </Link>    
            <img className="header-logo" src={logo} alt="" />
        </header>
        
    )
}

export default Header