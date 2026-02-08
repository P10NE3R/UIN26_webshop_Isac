import ShoppingList from "./ShoppingList"

export default function ShoppingItem({title, count, id, setShoppingList, bought, shoppingItem}){
    
    
 const handleChange = (e) => {
    //Her lages det en ny verdi som oppdateres ettersom brukers input endrer verdien i listen
    const newCount = Number(e.target.value)
    //Denne håndterer endringen av antall i handle objekt listen
    setShoppingList(prev => 
        prev.map(item => item.id === id ? 
            { ...item, count: newCount }: item)
    )
}

    //Dette referer mer til listen som vises på bunnen. 
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