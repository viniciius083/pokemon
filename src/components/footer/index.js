import React, { Fragment} from "react";
import './index.css'


const Footer = () =>{
    return <Fragment>
        <nav>
            <div className="flex-item">
                <img src="https://media.discordapp.net/attachments/411736681885073437/948667919087337522/pokemon-logo.png" className="nav-header-img"></img>
            </div>
            <div className="flex-item">
                <h3 className="nav-header-text">PokemonAPI</h3>
            </div>
            
        </nav>
    </Fragment>
}

export default Footer;