import React from "react";
import './card.css'


function Card(props){
    return (
        <>
            <div className="card-container">
                <h4 className="card-tittle">#{props.poke.id}</h4>
                <img src={props.poke.sprites.other.dream_world.front_default} className="card-img"/>
                <h4 className="card-poke-name">{props.poke.name[0].toUpperCase() + props.poke.name.substr(1)}</h4>
                <div className="card-stats">
                    {props.poke.stats.map((status, key) => {
                        { return (
                            <> 
                           
                            <h5 className="statName">{status.stat.name.toUpperCase()}</h5>
                            <div className="skill-bar">
                                <div className="skill-per" per={status.base_stat} style={{maxWidth: status.base_stat + "%"}}>
                                {/* <h4>{status.base_stat}</h4> */}
                                </div>
                            </div>
                            </>
                        )
                    }})} 
                </div>
            </div>
        </>
    )
}

export default Card