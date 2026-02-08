import './App.css'
import "./style/layout.scss"
import AddForm from './Components/AddForm'
import ShoppingList from './Components/ShoppingList'
import { use, useState } from 'react'

function App() {
  /*Lager en liste med predefinerte ting*/
  const shoppingItems = [
      {
        id:0,
        title:"Melk",
        count: 2
      },
      
      {
        id:1,
        title:"Egg",
        count: 1
      }
  ]
  
  /*Holder på listen med alle varene*/
  const [shoppingList, setShoppingList] = useState(shoppingItems)

  const [shoppingItem, setShoppingItem] = useState()
  
  
  return(
    
    <main>
      <h1>Handleliste</h1>
      
    
    
      
      <AddForm shoppingItem={shoppingItem} setShoppingItem={setShoppingItem} setShoppingList={setShoppingList}/>
      <ShoppingList shoppingItems={shoppingList} setShoppingItem={setShoppingItem}/>
      
    </main>
  )
}

export default App
