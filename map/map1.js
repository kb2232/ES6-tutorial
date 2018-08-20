var numbers = [1,2,3];

// ES5 - double the array numbers and stuff it into
// doublenumbers [];
var doublenumbers = [];
for( var i = 0; i <numbers.length; i++)
  doublenumbers.push(numbers[i]*2);
console.log(doublenumbers);

// ES6
var doubled = numbers.map( num => {
  return num*2;
});
console.log(doubled);
/*
notice that map returns an array with the above example. In the for loop, we had to define the array initially;
*/