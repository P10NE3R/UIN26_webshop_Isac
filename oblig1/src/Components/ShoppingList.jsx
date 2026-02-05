import "../style/ShoppingList.scss"
import ShoppingItem from "./ShoppingItem"
export default function ShoppingList({shoppingList, setShoppingList, shoppingItems}){



    return(
        /*
        <ul>
            <li>
                
                <input 
                    aria-label="Check if item is bought"
                    type="checkbox"
                    id="boxitembought"
                    
                />
                <p>Melk</p>
                <input
                    aria-label="item amount"
                    type="number"
                    id="itemamount"
                    placeholder={2}
                    />
            </li>
            <li>
                
                <input 
                    aria-label="Check if item is bought"
                    type="checkbox"
                    id="boxitembought"
                    checked
                />
                <p>Egg</p>
                <input
                    aria-label="item amount"
                    type="number"
                    id="itemamount"
                    placeholder={1}
                    
                    />
            </li>
        </ul>
*/

<section>
    <ul>
        {shoppingItems.map((shoppingItem) => <ShoppingItem key={shoppingItem.id} title={shoppingItem.title} count={shoppingItem.count} id={shoppingItem.id} setShoppingList={setShoppingList} />)}
    </ul>
</section>
    
    )
}