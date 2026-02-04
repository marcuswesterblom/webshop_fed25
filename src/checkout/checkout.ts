import { cartItemHtml } from "../cart/cartHtml";
import { attachCartLogic } from "../cart/cartLogic";
import { loadCart } from "../cart/cartStorage";
import { confirmationHtml } from "./checkoutHtml";

// Handles the checkout form submission
export const checkout = () => {
    const cartItems = loadCart();

    // Render cart
    const checkoutCartContainer = document.getElementById("cartProductsContainer");
    if(checkoutCartContainer){
        cartItems.forEach(item => {
            const itemEl = cartItemHtml(item);
            checkoutCartContainer.appendChild(itemEl);
        });
        attachCartLogic(cartItems);
    }

    // Get a reference to the checkout form
    const checkoutForm = document.getElementById("checkoutForm") as HTMLFormElement;

    // Listen for the form submit event
    checkoutForm.addEventListener("submit", (e) => {
        e.preventDefault(); // Prevent page reload
        const darkOverlay = document.getElementById("darkOverlay");
        // Get the values from the input fields firtName and email
        const firstName = (document.getElementById("firstName") as HTMLInputElement).value;
        const email = (document.getElementById("email") as HTMLInputElement).value;
        
        // Create and display the order confirmation HTML element
        const orderConfirmation = confirmationHtml(firstName, email, cartItems);
        darkOverlay?.classList.add("show");
        // Click on the confirmation to remove it
        darkOverlay?.addEventListener("click", () => {
            darkOverlay.classList.remove("show");
            orderConfirmation.remove()
        });

        // Empties cart in localstorage
        localStorage.removeItem("cart");
        // Empties cart in UI
        const checkoutCartContainer = document.getElementById("cartProductsContainer");
        if (checkoutCartContainer) checkoutCartContainer.innerHTML = "";
        const totalText = document.getElementById("totalText");
        if (totalText) totalText.textContent = "0 kr";
        // Reset the form fields after submission
        checkoutForm.reset();
    });
}