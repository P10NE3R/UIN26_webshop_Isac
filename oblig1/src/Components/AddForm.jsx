import "../style/form.scss" 

export default function AddForm({shoppingItem, setShoppingItem, setShoppingList}){
    
 
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
        
        //Her så settes prev på baksiden for å putte de nye objektene forran i listen
        setShoppingList((prev) => ([{id:uniqId, ...shoppingItem}, ...prev]))
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