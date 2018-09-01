// ES6 - Some helper method
// if at least one element in the array meets the condition, then it returns true;
// if all element fails, then it will return false;
// it is like "OR" condition; if x || y || z || ...
var computers = [
  { name:'apple',ram:20},
  { name:'compaq',ram:4},
  { name:'acer',ram:32}
]

const bool = computers.some( comp => {
  return comp.ram > 16;
});
console.log("bool: ",bool);