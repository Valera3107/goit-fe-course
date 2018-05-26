class Hamburger {
  constructor({ size, stuffing }) {
    this.addTopping = function (topping) {
      if (!this.toppings.includes(topping)) {
        this.toppings.push(topping);
      }
    };

    this.removeTopping = function (topping) {
      if (this.toppings.length === 0) {
        return console.log('Nothing remove, first add you topping');
      }

      this.toppings = this.toppings.filter(key => key !== topping);
    };

    this.getToppings = function () {
      return this.toppings;
    };

    this.getSize = function () {
      return this.size;
    };

    this.getStuffing = function () {
      return this.stuffing;
    };

    this.calculatePrice = function () {
      let totalPrice = 0;
      let totalToppingsPrice = 0;
      const getToppingsValuePrice = this.toppings.filter(value => totalToppingsPrice += Hamburger.TOPPINGS[value].price);
      totalPrice += Hamburger.SIZES[this.size].price + Hamburger.STUFFINGS[this.stuffing].price + totalToppingsPrice;

      // const getToppingsValuePrice = this.toppings.reduce((accumulator, value) => {accumulator += Hamburger.TOPPINGS[value].price}, 0);
      // totalPrice += Hamburger.SIZES[this.size].price + Hamburger.STUFFINGS[this.stuffing].price + totalToppingsPrice;

      return totalPrice;
    };

    this.calculateCalories = function () {
      let totalCalories = 0;
      let totalToppingsCalories = 0;
      const getToppingsValueCalories = this.toppings.filter(value => totalToppingsCalories += Hamburger.TOPPINGS[value].price);
      totalCalories += Hamburger.SIZES[this.size].calories + Hamburger.STUFFINGS[this.stuffing].calories + totalToppingsCalories;

      return totalCalories;
    };

    this.size = size;
    this.stuffing = stuffing;
    this.toppings = [];
  }
}

Hamburger.SIZE_SMALL = 'SIZE_SMALL';
Hamburger.SIZE_LARGE = 'SIZE_LARGE';
Hamburger.SIZES = {
  [Hamburger.SIZE_SMALL]: {
    price: 30,
    calories: 50
  },
  [Hamburger.SIZE_LARGE]: {
    price: 50,
    calories: 100
  }
};
Hamburger.STUFFING_CHEESE = 'STUFFING_CHEESE';
Hamburger.STUFFING_SALAD = 'STUFFING_SALAD';
Hamburger.STUFFING_MEAT = 'STUFFING_MEAT';
Hamburger.STUFFINGS = {
  [Hamburger.STUFFING_CHEESE]: {
    price: 15,
    calories: 20
  },
  [Hamburger.STUFFING_SALAD]: {
    price: 20,
    calories: 5
  },
  [Hamburger.STUFFING_MEAT]: {
    price: 35,
    calories: 15
  }
};
Hamburger.TOPPING_SPICE = 'TOPPING_SPICE';
Hamburger.TOPPING_SAUCE = 'TOPPING_SAUCE';
Hamburger.TOPPINGS = {
  [Hamburger.TOPPING_SPICE]: {
    price: 10,
    calories: 0
  },
  [Hamburger.TOPPING_SAUCE]: {
    price: 15,
    calories: 5
  }
};
const hamburger = new Hamburger({
  size: Hamburger.SIZE_SMALL,
  stuffing: Hamburger.STUFFING_CHEESE
});

// Добавка из приправы
hamburger.addTopping(Hamburger.TOPPING_SPICE);

// Спросим сколько там калорий
console.log("Calories: ", hamburger.calculateCalories());

// Сколько стоит?
console.log("Price: ", hamburger.calculatePrice());

// Я тут передумал и решил добавить еще соус
hamburger.addTopping(Hamburger.TOPPING_SAUCE);

// А сколько теперь стоит?
console.log("Price with sauce: ", hamburger.calculatePrice());

// Проверить, большой ли гамбургер?
console.log("Is hamburger large: ", hamburger.getSize() === Hamburger.SIZE_LARGE); // -> false

// Убрать добавку
hamburger.removeTopping(Hamburger.TOPPING_SAUCE);

// Смотрим сколько добавок
console.log("Hamburger has %d toppings", hamburger.getToppings().length); // 1