import { Coffee } from "../models/Coffee";
import { coffeeList } from "../data/coffees";
import { addToCart } from "../cart/addToCart";
import { renderCartFromStorage } from "../cart/cartRender";

// Function to create HTML for products

export function renderProducts(): void {
  const productContainer = document.getElementById("productContainer");

  if (!productContainer) return;
  productContainer.innerHTML = "";

  coffeeList.forEach((coffee) => {
    const productCard = createProductCard(coffee);
    productContainer.appendChild(productCard);
  });
}

// This function creates the actual HTML for the individual product cards

function createProductCard(coffee: Coffee): HTMLElement {
  const card = document.createElement("div");
  card.className = "productCard";
  card.innerHTML = `
  <img src="${coffee.image}" alt="${coffee.name}" class="productImage"/>
    <div class="productInfo">
        <span class="productName"><strong>${
          coffee.name
        } </strong></span><span class="productDescription">${
          coffee.description
        }</span><span class="productPrice"><strong>${coffee.price}:-</strong></span>
        <div class="stockStatus ${coffee.inStock ? "inStock" : "outOfStock"}">
        <span class="stockCircle"></span>
        <span class="inStockText">${
          coffee.inStock ? "Finns i lager" : "Finns ej i lager"
        }</span>
            </div>
            <button class="addToCart">Lägg i varukorgen
            <span class="addToCartIcon">
  <img src="/assets/icons/icon-cart.svg" alt="a cart icon" />
</span></button>
    </div>`;

  // Click function for the add to cart button

  const button = card.querySelector(".addToCart") as HTMLButtonElement;

  button.addEventListener("click", () => {
    /* Check if product is in stock, return if not */
    if (!coffee.inStock) {
      alert("Produkten finns ej i lager");
      return;
    }
    /* Create object for cart item */
    const cartItem = {
      id: coffee.name,
      name: coffee.name,
      price: coffee.price,
      quantity: 1,
      thumbnail: coffee.image,
    };
    addToCart(cartItem);
    renderCartFromStorage();
  });
  return card;
}
