import ShoppingList from "./ShoppingList"

export default function ShoppingItem({title, count, id, setShoppingList, bought, shoppingItem}){
    
    
 const handleChange = (e) => {
    const newCount = Number(e.target.value)

    setShoppingList(prev => 
        prev.map(item => item.id === id ? 
            { ...item, count: newCount }: item)
    )
}


    return(
        <li>
                <input 
                    key={id}
                    aria-label="Check if item is bought"
                    type="checkbox"
                    checked = {bought}
                />
                <p>{title}</p>
                {

                }
                <input
                    key={id}
                    aria-label="item amount"
                    name="count" 
                    type="number"
                    class="itemlistcount"
                    min={1}
                    onChange={handleChange}
                    value={count}
                    required
                />
            </li>
    )
}