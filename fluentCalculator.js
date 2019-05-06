var FluentCalc = function() {
  var initialValue = 0;

  var calcOperators = {
    plus: (a, b) => a + b,
    minus: (a, b) => a - b,
    times: (a, b) => a * b,
    divided_by: (a, b) => a / b
  };

  var numbers = [
    'zero',
    'one',
    'two',
    'three',
    'four',
    'five',
    'six',
    'seven',
    'eight',
    'nine',
    'ten'
  ];

  Object.keys(calcOperators).forEach(operator => {
    var operatorFunction = calcOperators[operator];
    var operatorObject = {};

    numbers.forEach((num, index) => {
      Object.defineProperty(operatorObject, num, {
        get: () => (initialValue = operatorFunction(initialValue, index))
      });
    });

    Number.prototype[operator] = operatorObject;
  });

  numbers.forEach((num, index) => {
    Object.defineProperty(this, num, {
      get: () => {
        initialValue = index;
        return Number(index);
      }
    });
  });
};

var Calc = { new: new FluentCalc() };

console.log(Calc.new.one.plus.two);
console.log(Calc.new.five.minus.six);
console.log(Calc.new.seven.times.two);
console.log(Calc.new.nine.divided_by.three);
