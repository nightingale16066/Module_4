'use strict';

const Good = function(price, name, discount) {
  this.price = price;
  this.name = name;
  this.discount = discount;
}

const FoodGoods = function(price, name, discount, calories) {
  Good.call(this, price, name, discount);
  this.calories = calories;
}

const ClothingGoods = function(price, name, discount, material) {
  Good.call(this, price, name, discount);
  this.material = material;
}

const TechnicGoods = function(price, name, discount, gearType) {
  Good.call(this, price, name, discount);
  this.gearType = gearType;
}

const Cart = function(items = []) {
  this.goods = items;
  this.totalPrice = 0;
  this.count = 0;
}

Cart.prototype.calculateGoodsPrice = function() {
  return this.totalPrice = this.goods.reduce((acc, cur) => {
    return acc += cur.price * (cur.discount ? (1 - cur.discount/100) : 1)
  }, 0).toFixed(2);
};

Cart.prototype.addGoods = function(good) {
  this.goods.push(good); 
  this.increaseCount();
}

Cart.prototype.getTotalPrice = function() {
  return this.totalPrice;
}

Cart.prototype.increaseCount = function() {
  this.count += 1;
}

Cart.prototype.clear = function() {
  this.goods = [];
  this.totalPrice = 0;
  this.count = 0;
}

Cart.prototype.print = function() {
  console.log(JSON.stringify(this.goods));
  console.log(this.calculateGoodsPrice());
}

const apple = new FoodGoods(50, 'red apple', 15, 210);
const shirt = new ClothingGoods(1500, 'white plaid shirt', 5, 'silk');
const phone = new TechnicGoods(35000, 'Samsung Galaxy S22', 10, 'smartphone');

const myCart = new Cart();
myCart.addGoods(apple);
myCart.addGoods(shirt);
myCart.addGoods(phone);

myCart.print();
