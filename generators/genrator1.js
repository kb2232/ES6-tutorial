// creating generators
/*
  1. put a star by the name of the function
  2. 
*/
function *numbers()
{
  yield;
}

const gen = numbers();
console.log(gen.next());
console.log(gen.next());