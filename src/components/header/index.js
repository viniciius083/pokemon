import React, { Component, Fragment, useState, useEffect} from "react";
import './index.css'


const Header = () =>{
    return <Fragment>
        <nav>
            <div>
                <img src="https://media.discordapp.net/attachments/411736681885073437/948667919087337522/pokemon-logo.png" className="nav-header-img"></img>
            </div>
            
            <div className="flex-item">
                <h3 className="nav-header-text">PokemonAPI</h3>
            </div>
           
        </nav>
    </Fragment>
}

export default Header;