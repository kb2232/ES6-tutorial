// ES5
  // Below is a single expression.
function sum(a,b)
{
  return a+b;
}
console.log("sum=",sum(1,2));

// ES6
  // single expression - implicit return;
const sum1 = (a,b) => (a+b);
console.log("sum1(es6)=",sum1(1,2));

// ES6
  // single expression - implicit return - self called
const sum2 = ((a,b) => (a+b))(1,2);
console.log("sum2=",sum2);