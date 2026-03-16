export default function Pokemon({pokemon}){
    return(
        <>
            <h3>{pokemon?.name}</h3>
            <img src={pokemon?.sprites?.front_default} alt={pokemon?.name} />
            <p>#00{pokemon?.id}</p>
        </>
    )
}