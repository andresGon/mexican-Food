import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

const LinkTree = () => {
    return(
        <>
            <h1>Restaurante mexicano</h1>
            <p>Siguenos:</p>
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