export default function ShoppingItem({title, count, id, setShoppingList, setShoppingItem}){
    
    
    const handleClick = ()=>{
        setShoppingList((prev) => prev.filter(shoppingItem => shoppingItem.id !== id))
        console.log(id)
    }

    const handleChange = (e) => {
        const{value} = e.target
        
    
        
        setShoppingItem((prev) => ({
            ...prev,
            count: Number(value)
        }))
    
    }


    return(
        <li>
                
                <input 
                    aria-label="Check if item is bought"
                    type="checkbox"
                    id="boxitembought"
                    onClick={handleClick}
          
                    
                />
                <p>{title}</p>
                {

                }
                <input
                    aria-label="item amount"
                    name="count" 
                    type="number"
                    id="count"
                    value={count}
                    min={1}
                    onChange={handleChange}
                    />
            </li>
    )

    
}