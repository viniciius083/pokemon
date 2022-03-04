import React, { Fragment, useState, useEffect} from "react";
import { getAllPokemon, getPokemon } from "../../service/pokemon";
import Card from "../card/card";
import './pokemon.css'


const Pokemon = () =>{

    const [pokemons, setPokemons] = useState([])
    const [nextUrl, setNextUrl] = useState('')
    const [prevUrl, setPrevUrl] = useState('')
    const [loading, setLoading] = useState(true)
    const initialUrl = "https://pokeapi.co/api/v2/pokemon"
    
    
    const getDataPokemon = async data =>{
        let _pokemons = await Promise.all(data.map(async poke => {
            let pokeSave = await getPokemon(poke.url)
            return pokeSave
        }))

        setPokemons(_pokemons)
 
    }


    useEffect( () => {
        async function fetchData() {
            let data = await getAllPokemon(initialUrl)
            setNextUrl(data.next)
            setPrevUrl(data.previous)
            await getDataPokemon(data.results)
            setLoading(false)
        }
    
     fetchData()
    }, [])

    const next = async () => {
        if (!nextUrl) return
        setLoading(true)
        let data = await getAllPokemon(nextUrl)
        setNextUrl(data.next)
        setPrevUrl(data.previous)
        await getDataPokemon(data.results)
        setLoading(false)
    }

    const prev = async () => {
        if (!prevUrl) return
        setLoading(true)
        let data = await getAllPokemon(prevUrl)
        setNextUrl(data.next)
        setPrevUrl(data.previous)
        await getDataPokemon(data.results)
        setLoading(false)
    }

    return (
    <>
        {loading ? (
            <h1>Carregando...</h1>
        ): (
            <div className="background-container">
                <div className="buttons">
                <button onClick={prev}>ANTERIOR</button>
                <button onClick={next}>PRÓXIMO</button>
                </div>

                <div className="pokemon-container">
                {pokemons.map( (poke, index) => {
                    return (
                        <div className="flex-item">
                            <Card key={index} poke={poke} />
                        </div>
                    )
                })}
                </div>
            </div>
        )}
    </>
    )
}

export default Pokemon