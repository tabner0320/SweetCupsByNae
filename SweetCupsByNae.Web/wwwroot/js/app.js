const cart = [];

const orderButtons = document.querySelectorAll(".order-button");
const bundleButtons = document.querySelectorAll(".bundle-button");

const cartElement = document.getElementById("cart");
const cartTotalElement = document.getElementById("cartTotal");
const checkoutButton = document.getElementById("checkoutButton");

orderButtons.forEach(button => {
    button.addEventListener("click", () => {
        const product = button.dataset.product;
        const price = Number(button.dataset.price);

        cart.push({
            product: product,
            price: price
        });

        displayCart();
    });
});

bundleButtons.forEach(button => {
    button.addEventListener("click", () => {
        const quantity = Number(button.dataset.quantity);
        const price = Number(button.dataset.price);

        cart.push({
            product: `${quantity} Cup Bundle`,
            price: price
        });

        displayCart();
    });
});

function displayCart() {
    cartElement.innerHTML = "";

    let total = 0;

    cart.forEach((item, index) => {
        total += item.price;

        const itemElement = document.createElement("div");

        itemElement.classList.add("cart-item");

        itemElement.innerHTML = `
            <span>
                ${item.product} - $${item.price.toFixed(2)}
            </span>

            <button onclick="removeItem(${index})">
                Remove
            </button>
        `;

        cartElement.appendChild(itemElement);
    });

    if (cart.length === 0) {
        cartElement.innerHTML = "<p>Your order is empty.</p>";
    }

    cartTotalElement.textContent = total.toFixed(2);

    if (checkoutButton) {
        checkoutButton.disabled = cart.length === 0;
    }
}

function removeItem(index) {
    cart.splice(index, 1);
    displayCart();
}

displayCart();