// creating generators
/*
  1. put a star by the name of the function
  2. 
*/
function *numbers()
{
  yield;
}

const gens = numbers();
console.log(gens.next());
console.log(gens.next());