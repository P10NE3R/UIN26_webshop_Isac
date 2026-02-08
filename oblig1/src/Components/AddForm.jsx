import "../style/form.scss" 

export default function AddForm({shoppingItem, setShoppingItem, setShoppingList}){
    
    //Håndterer verdiene puttet inn i feltene 
    const handleChange = (e) => {
        const{ name, value } = e.target
        console.log(name, value)
    
        
        setShoppingItem((prev) => ({
            ...prev,
            [name]: value
        }))
    
    }


    
   

    const handleClick = (e)=>{
        e.preventDefault()
        const uniqId = crypto.randomUUID()
        setShoppingList((prev) => ([...prev, {id:uniqId,...shoppingItem}]))
        console.log(shoppingItem)
    }



    return(
        <form className="itemform" onSubmit={handleClick}>
            <label htmlFor='itemname'>Vare</label>
            {

            }
            
            <input 
                name='title'
                type="text"
                id='itemname'
                placeholder='Egg..'
                required
                onChange={handleChange}
            />
            
            <label htmlFor='count'>Antall</label>
            {

            }
            <input
                name="count" 
                type="number"

                placeholder={2}
                min={1}
                required
                onChange={handleChange}
            /> 
            
        
        <button>Legg til vare</button>
      </form>
    )
}