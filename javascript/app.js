const goods = [
  { title: "Shirt", price: 150, img: `src="img/item.svg"` },
  { title: "Socks", price: 50, img: `src="img/item.svg"` },
  { title: "Jacket", price: 350, img: `src="img/item.svg"` },
  { title: "Shoes", price: 250, img: `src="img/item.svg"` },
];
const renderGoodsItem = (x) => {
  return `<div class="goods-item">
          <img ${x.img} alt="svg">
          <h3 class="goods-title">${x.title}</h3>
          <p class="goods-text">${x.price} <span>$</span></p>
          <button class="goods-btn">Buy</button>
          </div>`;
};
const renderGoodsList = (list) => {
  let goodsList = list.map((item) => renderGoodsItem(item));
  document.querySelector(".goods-list").innerHTML = goodsList.join("");
};
renderGoodsList(goods);
