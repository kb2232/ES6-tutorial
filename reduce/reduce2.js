var colors = [
  { color: ' red ', id: 1},
  { color: ' blue ', id: 2},
  { color: ' yellow ', id: 3},
  { color: ' pink ', id: 4}
];

/*
array.reduce((variable-for-initial-value, each-element)=>{
  return (iterator function);
},initial-value)
*/

// goal - obtain: ['red','blue','yellow','pink'];
const arr = colors.reduce((accumulator,color) => {
  accumulator.push(color.color);
  return accumulator;
},[]);
console.log("arr=",arr);
