import { Link } from "react-router-dom"
export default function Type({type}){
    
    
    return(
        <>
            <article key={type.name + "xt"} className={`type-${type.name} type-card`}>
                <Link to={`/types/${type.name}`} className="type-link">
                <p>{type.name}</p>
                <img src={`type_img/${type.name}.png`} alt={type.name} />
                </Link>
            </article>
        </>
    )
}