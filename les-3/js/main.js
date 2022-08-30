const API = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses';



class ProductsList {
    constructor(container = '.products') {
        this.container = container;
        this.goods = [];//массив товаров из JSON документа
        this._getProducts()
            .then(data => { //data - объект js
                this.goods = data;
                //                 console.log(data);
                this.render()
            });
    }

    _getProducts() {

        return fetch(`${API}/catalogData.json`)
            .then(result => result.json())
            .catch(error => {
                console.log(error);
            });

    }
    calcSum() {
        return this.allProducts.reduce((accum, item) => accum += item.price, 0);
    }
    render() {
        const block = document.querySelector(this.container);
        for (let product of this.goods) {
            const productObj = new ProductItem(product);

            block.insertAdjacentHTML('beforeend', productObj.render());
        }

    }
}


class ProductItem {
    constructor(product, img = 'https://via.placeholder.com/200x150') {
        this.title = product.product_name;
        this.price = product.price;
        this.id = product.id_product;
        this.img = img;
    }
    render() {
        return `<div class="product-item" data-id="${this.id}">
                <img src="${this.img}" alt="Some img">
                <div class="desc">
                    <h3>${this.title}</h3>
                    <p>${this.price} $</p>
                    <button class="buy-btn">Купить</button>
                </div>
            </div>`
    }
}

let list = new ProductsList();



class Basket {
    constructor(container = '.cart') {
        this.container = container;
        this.goods = [];
        this.showBasket();
        this._getItemBasket()
            .then(data => { //data - объект js
                this.goods = data.contents;
                console.log(data);
                this._render();
            });


    }
    _getItemBasket() {

        return fetch(`${API}/getBasket.json`)
            .then(result => result.json())
            .catch(error => {
                console.log(error);
            });
    }
    showBasket() {
        document.querySelector('.btn-cart').addEventListener('click', () => document.querySelector('.cart').classList.toggle('hidden'));
    }
    _render() {
        const block = document.querySelector(this.container);
        for (let product of this.goods) {
            const productObj = new BasketItem();
            block.insertAdjacentHTML('beforeend', productObj.render(product));
        }
    }
}
class BasketItem {
    render(product, img = 'https://via.placeholder.com/200x150') {
        return `<div class="itemsBasket">
                <img src=${img} alt="">
                <div class="infoProd">
                <p>Id product: ${product.id_product}</p>
                <p>Product name: ${product.product_name}</p>
                <p>Price: ${product.price}$</p>
                </div>
                </div>`
    }
}

new Basket();
