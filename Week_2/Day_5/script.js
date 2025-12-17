const productList = document.getElementById("product-list");
const searchInput = document.getElementById("search");
const sortSelect = document.getElementById("sort");

let products = [];

// Fetch products
fetch("https://dummyjson.com/products")
  .then(res => res.json())
  .then(data => {
    products = data.products;
    renderProducts(products);
  });

// Render products
function renderProducts(items) {
  productList.innerHTML = "";

  items.forEach(product => {
    const card = document.createElement("div");
    card.className = "card";

    card.innerHTML = `
      <img src="${product.thumbnail}" alt="${product.title}">
      <h4>${product.title}</h4>
      <p>₹ ${product.price}</p>
    `;

    productList.appendChild(card);
  });
}

// Search
searchInput.addEventListener("input", () => {
  const value = searchInput.value.toLowerCase();

  const filtered = products.filter(p =>
    p.title.toLowerCase().includes(value)
  );

  renderProducts(filtered);
});

// Sort
sortSelect.addEventListener("change", () => {
  let sorted = [...products];

  if (sortSelect.value === "high") {
    sorted.sort((a, b) => b.price - a.price);
  }

  if (sortSelect.value === "low") {
    sorted.sort((a, b) => a.price - b.price);
  }

  renderProducts(sorted);
});
