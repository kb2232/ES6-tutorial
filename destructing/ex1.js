/////DESTRUCTING

const expense = {
  type:'Business',
  amount:'$50.00 USD',
  type1:'Business',
  amount1:'$55.00 USD',
  type2:'Business',
  amount2:'$60.00 USD',
}

// using es5
var type = expense.type;
var amount = expense.amount;

// using es6
const { type1 } = expense;
const { amount1 } = expense;

// using ES6 and destructing
// the name of the variable MUST equal to the property names in 'expense'
const { type2, amount2 } = expense;

console.log(type2,"\n",amount2);