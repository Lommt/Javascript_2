class ProductList {
    constructor(container = '.products') {
        this.container = container;
        this.goods = [];
        this._fetchProducts();//рекомендация, чтобы метод был вызван в текущем классе
        this.render();//вывод товаров на страницу
        this.showSumGoods();//вывод суммы всех товаров
    }
    _fetchProducts() {
        this.goods = [
            { id: 1, title: 'Notebook', price: 2000 },
            { id: 2, title: 'Mouse', price: 20 },
            { id: 3, title: 'Keyboard', price: 200 },
            { id: 4, title: 'Gamepad', price: 50 },
        ];
    }

    render() {
        const block = document.querySelector(this.container);
        for (let product of this.goods) {
            const item = new ProductItem(product);
            block.insertAdjacentHTML("beforeend", item.render());
            //              block.innerHTML += item.render();
        }
    }



    showSumGoods() {
        // this.goods.forEach(price => console.log(price));
        const sumAll = this.goods.map(item => item.price).reduce((prev, curr) => prev + curr, 0);
        alert(`Сумма всех товаров = ${sumAll}`);
    };

}

class ProductItem {
    constructor(product, img = 'https://via.placeholder.com/200x150') {
        this.title = product.title;
        this.id = product.id;
        this.price = product.price;
        this.img = img;
    }
    render() {
        return `<div class="product-item">
                <img src="${this.img}">
                <h3>${this.title}</h3>
                <p>${this.price}</p>
                <button class="buy-btn">Купить</button>
            </div>`
    }
}

class Basket {
    constructor(container = '.Basket') {
        this.container = container;
        this.goods = [];
        this.totalPrice;
        this.render();//Отрисовка корзины
        this.deleteProduct();//Удаление товара из корзины
        this._sumTotalPrice();//Общая сумма товаров в корзине
        this.chockout();//Оформление заказа
    }
}

class BasketItem {
    constructor(item) {
        this.title = product.title;
        this.id = product.id;
        this.price = product.price;
        this.numberOfGoods;
        this.totalPrice;
        this.plusProduct();//Увеличение количества товара в корзине
        this.minusProduct();//Уменьшение количества товара в корзине
        this._sumTotalPrice();//Сумма за один товар 
    }
}
let list = new ProductList();



//const products = [
//    {id: 1, title: 'Notebook', price: 2000},
//    {id: 2, title: 'Mouse', price: 20},
//    {id: 3, title: 'Keyboard', price: 200},
//    {id: 4, title: 'Gamepad', price: 50},
//];
//
//const renderProduct = (product,img='https://placehold.it/200x150') => {
//    return `<div class="product-item">
//                <img src="${img}">
//                <h3>${product.title}</h3>
//                <p>${product.price}</p>
//                <button class="buy-btn">Купить</button>
//            </div>`
//};
//const renderPage = list => document.querySelector('.products').innerHTML = list.map(item => renderProduct(item)).join('');
//
//renderPage(products);