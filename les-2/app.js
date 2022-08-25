class Burger {
    constructor(name) {
        this.name = name; //Наименование бургера
        this.sumPrice = price; //Общая стоимость
    }

}

class BurgerSize extends Burger {
    constructor(size, price, calories) {
        this.size = size; //размер бургера 
        this._price = price; //цена 
        this._calories = calories;//кол-во калорий
    }
}

class BurgerDop extends Burger {
    constructor(type, price, calories) {
        this.type = type; //вид добавки  
        this._price = price; //цена 
        this._calories = calories;//кол-во калорий
    }
}

class BurgerNachinka extends Burger {
    constructor(type, price, calories) {
        this.type = type; //вид добавки
        this._price = price; //цена 
        this._calories = calories;//кол-во калорий
    }
}

