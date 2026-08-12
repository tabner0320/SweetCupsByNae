const cart = [];

const orderButtons = document.querySelectorAll(".order-button");
const bundleButtons = document.querySelectorAll(".bundle-button");

const cartElement = document.getElementById("cart");
const cartTotalElement = document.getElementById("cartTotal");
const checkoutButton = document.getElementById("checkoutButton");

const orderFormSection = document.getElementById("orderFormSection");
const orderForm = document.getElementById("orderForm");


orderButtons.forEach((button) => {
    button.addEventListener("click", () => {
        const product = button.dataset.product;
        const price = Number(button.dataset.price);

        cart.push({
            product,
            price
        });

        displayCart();
    });
});


bundleButtons.forEach((button) => {
    button.addEventListener("click", () => {
        const quantity = Number(button.dataset.quantity);
        const price = Number(button.dataset.price);

        cart.push({
            product: `${quantity} Cup Bundle`,
            price
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

            <button type="button" onclick="removeItem(${index})">
                Remove
            </button>
        `;

        cartElement.appendChild(itemElement);
    });

    if (cart.length === 0) {
        cartElement.innerHTML = "<p>Your order is empty.</p>";
    }

    cartTotalElement.textContent = total.toFixed(2);

    checkoutButton.disabled = cart.length === 0;
}


function removeItem(index) {
    cart.splice(index, 1);

    displayCart();
}


checkoutButton.addEventListener("click", () => {
    if (cart.length === 0) {
        alert("Please add an item to your order first.");
        return;
    }

    orderFormSection.hidden = false;

    orderFormSection.scrollIntoView({
        behavior: "smooth"
    });
});


orderForm.addEventListener("submit", async (event) => {
    event.preventDefault();

    const customerName =
        document.getElementById("customerName").value.trim();

    const customerPhone =
        document.getElementById("customerPhone").value.trim();

    const pickupDate =
        document.getElementById("pickupDate").value;

    const orderNotes =
        document.getElementById("orderNotes").value.trim();

    const order = {
        customerName,
        customerPhone,
        pickupDate,
        orderNotes,
        items: cart
    };

    try {
        const response = await fetch(
            "http://localhost:5142/api/orders",
            {
                method: "POST",

                headers: {
                    "Content-Type": "application/json"
                },

                body: JSON.stringify(order)
            }
        );

        if (!response.ok) {
            throw new Error(
                "The order could not be submitted."
            );
        }

        const savedOrder = await response.json();

        alert(
            `Thank you, ${customerName}! ` +
            `Your order #${savedOrder.id} has been received.`
        );

        cart.length = 0;

        displayCart();

        orderForm.reset();

        orderFormSection.hidden = true;
    }
    catch (error) {
        console.error(error);

        alert(
            "Something went wrong while submitting your order."
        );
    }
});

displayCart();