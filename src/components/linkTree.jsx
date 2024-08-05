import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

const LinkTree = () => {
    return(
        <>
            <div className="mainWrap">
                <div className="linktree-background">
                    <div className="linktree-colTxt">
                        <h1>Fuego y Maíz</h1>
                        <p>Comida mexicana</p>
                    </div>
                    <div className="linktree-social">
                        <a>Instagram</a>
                        <a>TikTok</a>
                        <a>X</a>
                    </div>
                    <Link to="/menu" className="btnMenu">Menú Digital </Link>
                </div>
            </div> 
        </>
    )
}

export default LinkTree