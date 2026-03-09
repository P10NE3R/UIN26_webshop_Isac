import { use, useState } from "react"
import CharacterCard from "../components/CharacterCard"
import { data } from "react-router-dom"
import { useEffect } from 'react'

export default function Characters(){
    

    const [characters, setCharacters] = useState([])
   


    
    const getAllCharacters = async()=>{
        
        try {
            const response = await fetch(`https://rickandmortyapi.com/api/character`)
        
            const data = await response.json()
            setCharacters(data.results)
            console.log("Funksjon", data)
        } catch (err) {
            console.error(err)
        }
    }
    console.log(characters)
   
    useEffect(()=>{
       getAllCharacters()
    },[])
    

    
    return(
        
        <main>
            <h1>Characters</h1>
            <section>
                {characters?.map((char) => <CharacterCard char={char} />)}  
            </section>
        </main>
            
      
    )


}

