'use strict';

const products = {
  bread: 10,
  milk: 15,
  apples: 20,
  chicken: 50,
  pork: 80,
  cheese: 60,
  tea: 20,
  candy: 25
};

function Cashier(name, products) {
  this.name = name;
  this.products = products;

  let totalPrice = 0;
  let changeAmount = 0;
  let customerMoney = 0;

  this.countTotalPrice = function () {
    for (const key in products) {
      if (products.hasOwnProperty(key)) {
        const productsKeys = key;
        const productsValues = products[key];
        for (const key in order) {
          if (order.hasOwnProperty(key)) {
            const orderKeys = key;
            const valueFromOrder = order[key];
            if (productsKeys === orderKeys) {
              const summOfCustomerProducts = productsValues * valueFromOrder;
              totalPrice += summOfCustomerProducts;
            }
          }
        }
      }
    }
    return totalPrice;
  };

  this.getCustomerMoney = function () {
    do {
      customerMoney = prompt(`Общая сумма ${totalPrice}, сколько денег вы дадите?`, '');
      const isNumber = !Number.isNaN(Number(customerMoney));
      const isInRange = totalPrice <= Number(customerMoney);
      let checkInput = isInRange && isNumber;
      if (customerMoney === null) {
        return null;
      };
      if (checkInput) {
        customerMoney = Number(customerMoney);
        break;
      }
    } while (true);

    return customerMoney;
  };

  this.countChange = function () {
    return changeAmount = customerMoney - totalPrice;
  };

  this.reset = function () {
    if (totalPrice > 0) {
      totalPrice = 0;
    };
    if (customerMoney > 0) {
      customerMoney = 0;
    };
    if (changeAmount > 0) {
      changeAmount = 0
    };
  };

  this.serve = function () {
    this.countTotalPrice(order);
    if (this.getCustomerMoney() === null) {
      this.reset();
      return alert('Очень жаль, что-то пошло не так, приходите еще');
    }
    this.countChange();
    alert(`Спасибо за покупку, ваша сдача ${changeAmount}`);
    this.reset();
  };
};

const order = {
  bread: 2,
  milk: 2,
  apples: 1,
  cheese: 1
};

const cashier = new Cashier('Mango', products);
cashier.serve(order);