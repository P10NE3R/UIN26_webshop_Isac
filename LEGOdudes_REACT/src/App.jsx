import './style/lego.css'
import Header from './components/header.jsx'
import Nav from "./components/Nav.jsx"
import Cart from './components/Cart.jsx'
import ProductCard from './components/ProductCard.jsx'
import Products from './components/Products.jsx'
import CartItem from './components/CartItem.jsx'
import { products } from './assets/legodudes'
import { useEffect, useState } from 'react'
function App() {

  const [isOpen, setIsOpen] = useState(false)
  const [cart, setCart] = useState([])
  const [cartQuantity, setCartQuantity] = useState(0)
  const [totalSum, setTotalSum] = useState(0)


  console.log("Cart",cart)

//Her så smekkes alle ekstra ting du du legger til i listen til et tiem istedne for å ha 30 rader med samme ting

useEffect(()=>{
  //reduce() summerer alle tall i en array, nice for å summere en array meld verdier. 
    const totalQuantity = cart.reduce((sum,item) => sum + item.quantity, 0)
    setCartQuantity(totalQuantity)
    
    //Her legger vi sammen pris
    //Dette gjøre ved å legge sammen vare pris og antall i tilegg til sum 
    const total = cart.reduce(
      (sum, item) => sum + (item.price * item.quantity),
       0)
    setTotalSum(total)

  },[cart])

  

  


  function CategoryTitle(){
    return (<h2>Ninjago</h2>)
  }





  



  return (
    <div id="container">
      <Header setIsOpen={setIsOpen} cartQuantity={cartQuantity} />
      <Nav />
      <main>
        <CategoryTitle />
        <Products products={products} setCart={setCart} />
      </main>
      <Cart isOpen={isOpen} cart={cart} setCart={setCart} totalSum={totalSum}/>
    </div>
  )
}

export default App
