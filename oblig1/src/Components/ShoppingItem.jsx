export default function ShoppingItem({title, count, id, setShoppingList}){
    
    
    const handleClick = ()=>{
        setShoppingList((prev) => prev.filter(shoppingItem => shoppingItem.id !== id))
        console.log(id)
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
                <input
                    aria-label="item amount"
                    type="number"
                    id="itemamount"
                    value={count}
                    />
            </li>
    )

    
}