import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import Pokemon from "./Pokemon"
export default function PokemonCard({pokemonUrl, classN}){
    const [pokemon, setPokemon] = useState()

    const getPokemon = async() =>{
        const response = await fetch(pokemonUrl)
        const data = await response.json()
        setPokemon(data)
        console.log("classN", pokemon)
        
    }
    
    useEffect(()=>{
        getPokemon()
        const types = pokemon?.Types
    },[])
    
    return (
       
        <article className={`pokemon-card type-${classN}`}>
            <Link to={`/pokemons/${pokemon?.id}`} className="pokemon-link">
            
            <Pokemon pokemon={pokemon}/>
            </Link>
        </article>

    )
}