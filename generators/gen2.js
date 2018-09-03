// example 2

function *add(n)
{
  yield n;
  yield n + 10;
}
const gen = add(5);
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());