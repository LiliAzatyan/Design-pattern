class Fabrica {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
};
class FactoryMethod { 
    createProduct(name, price) {
        return new Fabrica(name, price)
    }
};
const car = new FactoryMethod();
console.log(car.createProduct("BMW", "$8000")); // Fabrica { name: 'name', price: 500 }
const ship = new FactoryMethod();
console.log(ship.createProduct("Ship", "$12000")); // Fabrica { name: 'Ship', price: '$12000' }
