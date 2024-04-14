const searchInput = document.querySelector("#search-input");
const products = document.querySelectorAll(".product-item");
const buttons = document.querySelectorAll(".filter");
const priceButton = document
  .getElementById("search-price")
  .querySelector("button");

const changeClass = (filter) => {
  buttons.forEach((button) => {
    button.dataset.filter === filter
      ? button.classList.add("selected")
      : button.classList.remove("selected");
  });
};

const searchHandler = (event) => {
  const serachValue = event.target.value.toLowerCase().trim();
  products.forEach((product) => {
    const productName = product.children[1].innerText.toLowerCase();
    productName.includes(serachValue)
      ? (product.style.display = "block")
      : (product.style.display = "none");
  });
};

const filterHandler = (event) => {
  const filter = event.target.dataset.filter;
  changeClass(filter);
  products.forEach((product) => {
    const category = product.dataset.category;
    if (filter === "all") {
      product.style.display = "block";
    } else {
      filter === category
        ? (product.style.display = "block")
        : (product.style.display = "none");
    }
  });
};

const searchPriceHandler = (event) => {
  const searchPrice = +event.target.parentElement.children[0].value;

  products.forEach((product) => {
    const productPrice = product.children[2].innerText;
    const purePrice = +productPrice.split(" ")[1];
    if (!searchPrice) {
      product.style.display = "block";
    } else {
      searchPrice === purePrice
        ? (product.style.display = "block")
        : (product.style.display = "none");
    }
  });
};
const loadWindow = () => {
  buttons.forEach((button) => {
    button.addEventListener("click", filterHandler);
  });
  searchInput.addEventListener("keyup", searchHandler);
  priceButton.addEventListener("click", searchPriceHandler);
};

window.addEventListener("load", loadWindow);
