import type { CartItem } from "./CartItem";

// Creates an HTML element for a single cart item
export const cartItemHtml = (item:CartItem): HTMLDivElement => {
    const itemEl = document.createElement("div");
    itemEl.className = "cartItem";
    itemEl.dataset.id = item.id; // Store item ID for later use (example: updating quantity or removing item)

    // Product thumbnail
    const img = document.createElement("img");
    img.src = item.thumbnail;
    img.alt = item.name;
    img.className = "thumbnail";

    // Product name
    const name = document.createElement("p");
    name.textContent = item.name;

    // Product price
    const price = document.createElement("p");
    price.className = "cartItemPrice";
    price.textContent = `${item.price * item.quantity}kr`;
    
    // Controls container for quantity: minus button, quantity display and plus button
    const controls = document.createElement("div");
    controls.className = "cartItemControls";

    // SVG Icons for minus- and plus-buttons
    const minusSVG = `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <rect width="24" height="24" fill="transparent"></rect> <path fill-rule="evenodd" clip-rule="evenodd" d="M8 12C8 11.4477 8.44772 11 9 11H15C15.5523 11 16 11.4477 16 12C16 12.5523 15.5523 13 15 13H9C8.44772 13 8 12.5523 8 12ZM7.25007 2.38782C8.54878 2.0992 10.1243 2 12 2C13.8757 2 15.4512 2.0992 16.7499 2.38782C18.06 2.67897 19.1488 3.176 19.9864 4.01358C20.824 4.85116 21.321 5.94002 21.6122 7.25007C21.9008 8.54878 22 10.1243 22 12C22 13.8757 21.9008 15.4512 21.6122 16.7499C21.321 18.06 20.824 19.1488 19.9864 19.9864C19.1488 20.824 18.06 21.321 16.7499 21.6122C15.4512 21.9008 13.8757 22 12 22C10.1243 22 8.54878 21.9008 7.25007 21.6122C5.94002 21.321 4.85116 20.824 4.01358 19.9864C3.176 19.1488 2.67897 18.06 2.38782 16.7499C2.0992 15.4512 2 13.8757 2 12C2 10.1243 2.0992 8.54878 2.38782 7.25007C2.67897 5.94002 3.176 4.85116 4.01358 4.01358C4.85116 3.176 5.94002 2.67897 7.25007 2.38782Z"></path> </g></svg>`;
    const plusSVG = `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <rect width="24" height="24" fill="transparent"></rect> <path fill-rule="evenodd" clip-rule="evenodd" d="M13 9C13 8.44772 12.5523 8 12 8C11.4477 8 11 8.44772 11 9V11H9C8.44772 11 8 11.4477 8 12C8 12.5523 8.44772 13 9 13H11V15C11 15.5523 11.4477 16 12 16C12.5523 16 13 15.5523 13 15V13H15C15.5523 13 16 12.5523 16 12C16 11.4477 15.5523 11 15 11H13V9ZM7.25007 2.38782C8.54878 2.0992 10.1243 2 12 2C13.8757 2 15.4512 2.0992 16.7499 2.38782C18.06 2.67897 19.1488 3.176 19.9864 4.01358C20.824 4.85116 21.321 5.94002 21.6122 7.25007C21.9008 8.54878 22 10.1243 22 12C22 13.8757 21.9008 15.4512 21.6122 16.7499C21.321 18.06 20.824 19.1488 19.9864 19.9864C19.1488 20.824 18.06 21.321 16.7499 21.6122C15.4512 21.9008 13.8757 22 12 22C10.1243 22 8.54878 21.9008 7.25007 21.6122C5.94002 21.321 4.85116 20.824 4.01358 19.9864C3.176 19.1488 2.67897 18.06 2.38782 16.7499C2.0992 15.4512 2 13.8757 2 12C2 10.1243 2.0992 8.54878 2.38782 7.25007C2.67897 5.94002 3.176 4.85116 4.01358 4.01358C4.85116 3.176 5.94002 2.67897 7.25007 2.38782Z"></path> </g></svg>`;
    
    // Creates minus button containing the minusSVG
    const minus = document.createElement("button");
    minus.innerHTML = minusSVG;

    // Creates span element to display the current quantity of the cart item
    const quantity = document.createElement("span");
    // Set the text content of the span to the item's quantity of the cart
    //Convert the number to a string, textContent must be a string
    quantity.textContent = item.quantity.toString();

    // Creates plus button containing the plusSVG
    const plus = document.createElement("button");
    plus.innerHTML = plusSVG;

    minus.className = "cartMinus";
    plus.className = "cartPlus";
    quantity.className = "cartQuantity";

    // Append controls to the control container
    controls.append(minus, quantity, plus);
    // Append image, name and control container to the cart item element
    itemEl.append(img, name, price, controls);

    return itemEl;
}

// Creates the entire shopping cart in the DOM based on an array of CartItem
export const cartHtml = (cartItems: CartItem[]) => {
    const cartContainer = document.getElementById("cartContainer") as HTMLDivElement;
    if (!cartContainer) return; // Exit if container is missing

    cartContainer.innerHTML = "";
    // Create sections for header, price summary and checkout button
    const cartHeader = document.createElement("section");
    const cartPriceSummary = document.createElement("section");
    const totalContainer = document.createElement("div");
    const cartBttn = document.createElement("div");

    // Create container for cart close button
    const cartCloseContainer = document.createElement("div");
    const cartCloseSpan1 = document.createElement("span");
    const cartCloseSpan2 = document.createElement("span");

    // Create Cart title, "Total" text, and link to the checkout page
    const cartTitle = document.createElement("h2");
    const totalText = document.createElement("h3");
    const momsText = document.createElement("p");
    const checkoutLink = document.createElement("a");

    // Assign IDs for styling and later DOM reference
    cartHeader.id = "cartHeader";
    cartCloseContainer.id = "cartCloseContainer";
    cartCloseSpan1.id = "cartCloseSpan1";
    cartCloseSpan2.id = "cartCloseSpan2";
    cartPriceSummary.id = "cartPriceSummary";
    totalContainer.id = "totalHeader";
    cartTitle.id = "cartTitle";
    totalText.id = "totalText";
    momsText.id = "momsText";
    cartBttn.id = "cartBttn";
    checkoutLink.id = "checkoutLink";

    // Set text for cart heading, total text, checkout link and href for checkout link
    cartTitle.textContent = "Varukorg";
    totalText.textContent = "Totalt";
    momsText.textContent = "(inkl. moms)";
    checkoutLink.href = "checkout.html";
    checkoutLink.textContent = "Till kassan";

    // Append spans to container close and heading + close container to the cart header
    cartCloseContainer.append(cartCloseSpan1, cartCloseSpan2);
    cartHeader.append(cartTitle, cartCloseContainer);

    // Loop thourgh cart items and append each to the section cartPriceSummary
    cartItems.forEach(item => {
            const itemEl = cartItemHtml(item);
            cartPriceSummary.appendChild(itemEl);
        });
    
    // Append total and checkout button
    totalContainer.append(totalText, momsText);
    cartPriceSummary.appendChild(totalContainer);
    cartBttn.appendChild(checkoutLink);
    cartContainer.append(cartHeader, cartPriceSummary, cartBttn);
}
