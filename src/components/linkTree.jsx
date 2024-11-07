import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import linkTreeLogo from '../assets/fuego-y-maiz-linktree.png'
import instragramIcon from '../assets/instragram-icon.svg'
import tiktokIcon from '../assets/tiktok-icon.svg'
import xIcon from '../assets/X-icon.svg'

const LinkTree = () => {
    return(
        <>
            <div className="mainWrap">
                <div className="linktree-background">
                    <div className="linktree-colTxt">
                        <img className="linktree-logo" src={linkTreeLogo} alt="" />
                    </div>
                    <div className="linktree-social">
                        <a>
                            <img src={instragramIcon} alt="Instagram" />
                            Instagram
                        </a>
                        <a>
                            <img src={tiktokIcon} alt="TikTok" />
                            TikTok
                        </a>
                        <a>
                            <img src={xIcon} alt="X" />
                            X</a>
                    </div>
                    <Link to="/menu" className="btnMenu">Menú Digital </Link>
                </div>
            </div> 
        </>
    )
}

export default LinkTree