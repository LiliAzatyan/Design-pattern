//The factory method with classes
class Fabrica {
    constructor(product, name, price) {
        this.product = product;
        this.name = name;
        this.price = price;
    }
};
class FactoryMethod { 
    createProduct(product, name, price) {
        return new Fabrica(product, name, price)
    }
};
const car = new FactoryMethod();
console.log(car.createProduct("Car", "BMW", "$8000")); // Fabrica { name: 'name', price: 500 }
const ship = new FactoryMethod();
console.log(ship.createProduct("Ship", "Angel", "$12000")); // Fabrica { name: 'Ship', price: '$12000' }

//The factory method with functions
function Fabrica (product, name, price) {
    this.product = product;
    this.name = name;
    this.price = price;
}
function FactoryMethod() {}
FactoryMethod.prototype.createProduct = function(product, name, price) {
    return new Fabrica(product, name, price);
}
const car = new FactoryMethod();
console.log(car.createProduct("Car", "BMW", "$80000"));
