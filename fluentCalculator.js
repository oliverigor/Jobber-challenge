var OliverigorFluentCalc = function() {
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

  //Defining the calc operators, to be called in Function method
  var calcOperators = {
    plus: (a, b) => a + b,
    minus: (a, b) => a - b,
    times: (a, b) => a * b,
    divided_by: (a, b) => a / b
  };

  //This line returns a matrix with all the names of the properties of the object
  Object.keys(calcOperators).forEach(operator => {
    var operatorFunction = calcOperators[operator];
    var operatorObject = {};

    //Add the property to the object wrapped
    numbers.forEach((num, index) => {
      Object.defineProperty(operatorObject, num, {
        get: () => (initialValue = operatorFunction(initialValue, index))
      });
    });

    // var Verify = Number.prototype;
    // console.log(Verify);

    // console.log({ operatorFunction });
    Number.prototype[operator] = operatorObject;
  });

  var initialValue = 0;
  numbers.forEach((number, index) => {
    Object.defineProperty(this, number, {
      get: () => {
        initialValue = index;
        return Number(index);
      }
    });
  });
};

var Calc = { new: new OliverigorFluentCalc() };

console.log(Calc.new.one.plus.two);
console.log(Calc.new.five.minus.six);
console.log(Calc.new.seven.times.two);
console.log(Calc.new.nine.divided_by.three);
// Let's blow this machine
console.log(Calc.new.zero.divided_by.zero);
