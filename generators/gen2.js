// example 2

function *add(n)
{
  const y = yield n + 10;
  return y;
}
const gen = add(5);
console.log(gen.next());
console.log(gen.next(2));