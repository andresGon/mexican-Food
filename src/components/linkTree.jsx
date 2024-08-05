import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

const LinkTree = () => {
    return(
        <>
            <div className="mainWrap">
                <h1>Restaurante mexicano</h1>
                <p>hola</p>
                <ul>
                    <li>Instagram</li>
                    <li>TikTok</li>
                    <li>X</li>
                </ul>
                <Link to="/menu">Menú Digital </Link>
            </div> 
        </>
    )
}

export default LinkTree