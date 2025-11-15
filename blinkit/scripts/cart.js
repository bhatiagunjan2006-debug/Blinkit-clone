document.addEventListener("DOMContentLoaded", () => {
  const cartContainer = document.getElementById("cart-items");
  const totalPriceEl = document.getElementById("total-price");

  fetch("data/products.json")
    .then(res => res.json())
    .then(data => {
      let cart = JSON.parse(localStorage.getItem("cart")) || [];

      if (cart.length === 0) {
        cartContainer.innerHTML = "<p>Your cart is empty.</p>";
        totalPriceEl.textContent = "₹0";
        return;
      }

      let total = 0;

      cart.forEach(item => {
        const product = data.products.find(p => p.id == item.id);
        const itemTotal = product.price * item.qty;
        total += itemTotal;

        const row = document.createElement("div");
        row.classList.add("cart-row");
        row.innerHTML = `
          <img src="${product.image}" alt="${product.name}">
          <span>${product.name}</span>
          <span>₹${product.price}</span>
          <span>Qty: ${item.qty}</span>
          <span>₹${itemTotal}</span>
        `;
        cartContainer.appendChild(row);
      });

      totalPriceEl.textContent = `₹${total}`;
    });
});
