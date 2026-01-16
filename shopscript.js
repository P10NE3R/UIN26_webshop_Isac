document.getElementById("cart-button").addEventListener("click", function() {
    document.getElementById("cart").classList.toggle("hidden")
})

//funksjon for produktopplisting:
function fetchProducts() {
    let productHTML = ""

    products.map(p => productHTML += `<article class="product-card">
                <img src="website_images/PROD_${p.imagefile}" alt="${p.title}" />
                <a href="#">${p.category}</a>
                <h3>${p.title}</h3>
                <p>Kr. ${p.price},-</p>
                <button onClick="addToCart(${p.prodid})">Legg til handlevogn</button>
            </article>`)

    document.getElementById("product-list").innerHTML = productHTML
}

fetchProducts()
//Vis handlevogn
function showCart(){
    
    //Unike produkter
    let uniqueItems = new Set(cart)
    let uniqueArray = [...uniqueItems]
    
    //Oversikt over antall per produkt
    let cartItems = []

    //map gårgjnneom listen
    uniqueArray.map(item => {
        cartItems.push({prodid: item, quantity: cart.filter(i => i === item).length})
        
    })

    //Gå igjennom cart items for å lage HTML til handlekurven og regne ut totalpris
    let cartHTML = ""
    let totalPrice = 0
    
    cartItems.map(ci => {
        //Hente produktinformasjon
        let product = products.find(i => i.prodid === ci.prodid)
        //Skrive ut HTML
        cartHTML += `<tr>
                <td class="title">${product.title}</td>
                <td class="price">${product.price}</td>
                <td class="quantity">${ci.quantity}</td>
                <td class="delete"><button>x</button></td>
            </tr>`

        //Summere totalpris
        totalPrice += ci.quantity * product.price
    })
    document.getElementById("cart-items").innerHTML = cartHTML
}



//Legg til i handlevogn
function addToCart(prodid) {
    console.log("Legg til produkt med id: " + prodid)
    cart.push(prodid)
    console.log(cart)
    document.getElementById("cart-quantity").innerHTML = cart.length
    
    
    showCart()

}