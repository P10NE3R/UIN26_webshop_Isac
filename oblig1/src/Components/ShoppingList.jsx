import "../style/ShoppingList.scss"
import ShoppingItem from "./ShoppingItem"
export default function ShoppingList({shoppingList, setShoppingList, shoppingItems, setShoppingItem}){



    return(


        <section>
            <ul>
                {shoppingItems.map((shoppingItem) => <ShoppingItem key={shoppingItem.id} title={shoppingItem.title} count={shoppingItem.count} id={shoppingItem.id} setShoppingList={setShoppingList} setShoppingItem={setShoppingItem}/>)}
            </ul>
        </section>
    )
}