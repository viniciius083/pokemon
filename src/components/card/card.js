import React from "react";
import './card.css'


const typeColors = {
    bug: '#729f3f',
    dragon: '#53a4cf',
    fairy: '#fdb9e9',
    fire: '#fd7d24',
    ghost: '#7b62a3',
    ground: '#d47b4a',
    normal: '#a4acaf',
    psychic: '#f366b9',
    steel: '#9eb7b',
    dark: '#707070',
    electric: '#eed535',
    fighting: '#d56723',
    flying: '#3dc7ef',
    grass: '#9bcc50',
    ice: '#51c4e7',
    poison: '#b97fc9',
    rock: '#a38c21',
    water: '#4592c4'
}


function Card(props){
    return (
        <>
            <div className="card-container">
                <h4 className="card-tittle">#{props.poke.id}</h4>
                <img src={props.poke.sprites.other.dream_world.front_default} className="card-img" alt={props.poke.name}/>
                <h4 className="card-poke-name">{props.poke.name[0].toUpperCase() + props.poke.name.substr(1)}</h4>
                <div className="card-types">
                    {
                        props.poke.types.map(type => {
                            return (
                                <div className="type" style={{backgroundColor: typeColors[type.type.name]}}>
                                    {type.type.name.toUpperCase()}
                                </div>
                            )
                        })
                    }
                </div>
                <div className="card-stats">
                    {props.poke.stats.map((status) => {
                         return (
                            <>   
                            <h5 className="statName">{status.stat.name.toUpperCase()}</h5>
                            <div className="skill-bar">
                                <div className="skill-per" per={status.base_stat} style={{maxWidth: status.base_stat + "%"}}>
                                </div>
                            </div>
                            </>
                        )
                    })} 
                </div>
            </div>
        </>
    )
}

export default Card