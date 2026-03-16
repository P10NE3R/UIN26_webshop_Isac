import PokemonCard from "./PokemonCard";

export default function PokemonList({pokemons}){
    console.log("Pokemons",pokemons)
    
    return (
        <section className="flexs">
            <h2>Pokemons</h2>
            {pokemons?.map((pokemon) => (<PokemonCard key={pokemon.id + pokemon?.url} pokemonUrl={pokemon?.url} />)
            )}
            
        </section>
    )
}