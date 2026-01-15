document.getElementById("cart-button").addEventListener("click",function(){
   document.getElementById("cart").classList.toggle("hidden");
});

//Funksjon for produkt opplisting:
function fetchProducts() {
    let productHTML = ""
    products.map(p => productHTML += `<article class="product-card">
                <img src="Website_images/PROD_${p.imagefile}" alt ="${p.title}">
                <a href="#">${p.category}</a>
                <h3>${p.title}</h3>
                <p>Kr.${p.price},-</p>
                <button onClick="addToCart(${p.prodid})">Legg til handleogn</button>

            </article>`)
    document.getElementById("product-list").innerHTML = productHTML}
fetchProducts()

//Legg til i handlevogn
function addToCart(prodid) {
    console.log("Legg til produkt med id: " + prodid)
    cart.push(prodid)
    console.log(cart)
    document.getElementById("cart-quantity").innerHTML = cart.length
}