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
      .then(function (response) {
        response.json()
          .then(function (lista) {
            var pokemones = lista.pokemon;
            console.log(pokemones);
            var listapokemones = pokemones.map(pokemon => {
              return listapokemones;
               const {pokeurl} = pokemon.url;
              // console.log(pokeurl)
            })

              // for(let i = 0; i <= lista.pokemon.length; i++) {
              //   let pokeInfo = lista.pokemon[i].pokemon;
              //     fetch(pokeInfo.url) 
              //       .then(function (response) {
              //         response.json()
              //           .then(function (infopokes) {
              //             let data = infopokes;
              //             return data;
              //           })
              //       })
              // } 
          })
      })
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



