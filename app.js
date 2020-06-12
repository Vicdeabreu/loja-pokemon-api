const cartBtn = document.querySelector(".cart-btn");
const closeCartBtn = document.querySelector(".close-cart");
const clearCartBtn = document.querySelector(".clear-cart");
const cartDOM = document.querySelector(".cart");
const cartOverlay = document.querySelector(".cart-overlay");
const cartItem = document.querySelector(".cart-item");
const cartTotal = document.querySelector(".cart-total");
const cartContent = document.querySelector(".cart-content");
const productsDOM = document.querySelector(".products-center");

// carrinho
let cart = [];

// obter os produtos
class Products{
  getProducts(){
    fetch(`https://pokeapi.co/api/v2/type/11/`)
      .then(response => {
        response.json()
          .then(lista => {
            var pokemones = lista.pokemon;
            pokemones.forEach(pokemon => {
              var link = pokemon.pokemon.url
              console.log(link) 
            });
          })
      })
  }

  getPokemonDetails(link) {
    new Promise((resolve,reject) => {
      fetch(link)
      .subscribe((response) => {
        console.log(response);
        resolve(response);
      })
      .error((err) => {
        console.log(err);
      })
    });
  }
}


// gerenciar produtos
class UI {
  displayProducts(data){
    let result = '';
    products.forEach(data => {
      result += `
      <article class="product">
        <div class="img-container">
          <img src=${data.sprites.front_default} alt="squirtle" class="product-img">
          <button class="bag-btn" data-id=${data.id}>
            <i class="fas fa-shopping-cart"></i>
            Adicionar ao carrinho
          </button>
        </div>
        <h3>${data.name}</h3>
        <h4>R$ 20</h4>
      </article>
      `
    });
    productsDOM.innerHTML = result;
  }
}

// local storage
class Storage{

}

document.addEventListener("DOMContentLoaded", () => {
const ui = new UI();
const products = new Products();
  products.getProducts().then(data => ui.displayProducts(data))
});