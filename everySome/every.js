var computers = [
  { name:'apple',ram:20},
  { name:'compaq',ram:4},
  { name:'acer',ram:32}
]

// The goal - write a code to find if there exist a code that can run a 
// computer with 16 rams or lower.
// from the above array of objects, we can clearly see that there exist one, so your code should return true;

// ES5 for loop method
var canRunProgram = true;
var cannotRunProgram = false;
for(var i=0; i<computers.length; i++)
{
  var computer = computers[i];
  (computer.ram < 16)?canRunProgram=false:cannotRunProgram=true;
}

// ES6 - Every helper method
// if every element in the array meets the condition, then it returns true;
// if just one element fails, then it will return false;
// it is like "AND" condition; if x && y && z && ...
const bool = computers.every( comp => {
  return comp.ram > 16;
});
console.log("bool: ",bool);
