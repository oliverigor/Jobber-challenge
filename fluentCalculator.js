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

  
};

var Calc = { new: new FluentCalc() };

console.log(Calc.new.one.plus.two);
console.log(Calc.new.five.minus.six);
console.log(Calc.new.seven.times.two);
console.log(Calc.new.nine.divided_by.three);
