const products = [
  { id: 1, title: 'Notebook', price: 2000, img: `src="img/item.svg"` },
  { id: 2, title: 'Mouse', price: 20, img: `src="img/item.svg"` },
  { id: 3, title: 'Keyboard', price: 200, img: `src="img/item.svg"` },
  { id: 4, title: 'Gamepad', price: 50, img: `src="img/item.svg"` },
];
const renderProduct = (x) => {
  return `<div class="products-item">
          <img ${x.img} alt="svg">
          <h3 class="products-title">${x.title}</h3>
          <p class="products-text">${x.price} <span>$</span></p>
          <button class="products-btn">Buy</button>
          </div>`;
};
const renderPage = list => {
  let productsList = list.map((item) => renderProduct(item));
  console.log(productsList);
  document.querySelector(".products").innerHTML = productsList.join("");
};
renderPage(products);
