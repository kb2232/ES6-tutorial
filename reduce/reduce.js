var numbers = [ 10, 20, 30];

/*
array.reduce((variable-for-initial-value, each-element)=>{
  return (iterator function);
},initial-value)
*/

const total = numbers.reduce((sum,num)=>{
  return sum+num;
},0);
console.log("total=",total);