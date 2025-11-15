document.addEventListener("DOMContentLoaded", () => {
  const categoryContainer = document.getElementById("category-list");
  const sectionContainer = document.getElementById("product-sections");
  const searchBar = document.getElementById("search-bar");

  let allProducts = [];
  let allCategories = [];

  fetch("data/products.json")
    .then(res => res.json())
    .then(data => {
      allProducts = data.products;
      allCategories = data.categories;
      renderCategories(allCategories);
      renderProductSections(allProducts, allCategories);
    });

 // Function to render category buttons in the horizontal scroll bar
function renderCategories(categories) {
  categories.forEach(cat => {
    const btn = document.createElement("a");
    btn.classList.add("category-btn");
    btn.href = `#cat-${cat.id}`;
    btn.innerHTML = `
          <img src="${cat.image}" alt="${cat.name}">
      `;
    categoryContainer.appendChild(btn);
  });
}

  // Function to render all product sections with their respective products
  function renderProductSections(products, categories) {
    sectionContainer.innerHTML = ""; // Clear existing content
    categories.forEach(cat => {
      const section = document.createElement("div");
      section.classList.add("section");
      section.id = `cat-${cat.id}`;
      section.innerHTML = `
          <h2>${cat.name} <a href="#">see all</a></h2>
          <div class="product-grid" id="grid-${cat.id}"></div>
      `;
      sectionContainer.appendChild(section);

      const grid = section.querySelector(`#grid-${cat.id}`);
      products
        .filter(p => p.category === cat.id)
        .forEach(product => {
          renderProductCard(grid, product);
        });
    });
  }

  // Function to render a single product card
  function renderProductCard(container, product) {
    const card = document.createElement("div");
    card.classList.add("product-card");
    card.innerHTML = `
        <img src="${product.image}" alt="${product.name}">
        <h3>${product.name}</h3>
        <p>₹${product.price}</p>
        <button class="add-btn" data-id="${product.id}">ADD</button>
    `;
    card.querySelector(".add-btn").addEventListener("click", () => {
      addToCart(product.id);
    });
    container.appendChild(card);
  }

  // SEARCH FUNCTIONALITY
  searchBar.addEventListener("input", e => {
    const query = e.target.value.toLowerCase();
    const filteredProducts = allProducts.filter(product =>
      product.name.toLowerCase().includes(query)
    );

    // If the search bar is not empty, show a single search results section
    if (query.length > 0) {
      sectionContainer.innerHTML = ""; // Clear all category sections
      const searchSection = document.createElement("div");
      searchSection.classList.add("section");
      searchSection.innerHTML = `
          <h2>Search Results for "${query}"</h2>
          <div class="product-grid" id="search-grid"></div>
      `;
      sectionContainer.appendChild(searchSection);

      const searchGrid = searchSection.querySelector("#search-grid");
      if (filteredProducts.length > 0) {
        filteredProducts.forEach(product => {
          renderProductCard(searchGrid, product);
        });
      } else {
        searchGrid.innerHTML = "<p>No products found.</p>";
      }
    } else {
      // If the search bar is empty, re-render all product categories
      renderProductSections(allProducts, allCategories);
    }
  });

  function addToCart(productId) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    const existing = cart.find(item => item.id == productId);
    if (existing) {
      existing.qty += 1;
    } else {
      cart.push({ id: productId, qty: 1 });
    }
    localStorage.setItem("cart", JSON.stringify(cart));
    alert("Added to cart!");
  }

  // The slider code is removed as it doesn't match the Blinkit design.
  // The hero section will now be a static banner as per the CSS modifications.
});