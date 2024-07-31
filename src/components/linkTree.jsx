import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

const LinkTree = () => {
    return(
        <>
            <h1>Nombre del restaurante</h1>
            <p>Redes sociales</p>
            <ul>
                <li>Instagram</li>
                <li>TikTok</li>
                <li>X</li>
            </ul>
            <Link to="/menu">Menú Digital</Link>
        </>
    )
}

export default LinkTree