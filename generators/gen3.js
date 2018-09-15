///////////////////////////////////////////////////////////////////////////////////////
// simple example
console.log("=----------------------------------------=");
function* idMaker() {
  var index = 0;
  while (index < index+1)
    yield index++;
}

var gen = idMaker();

console.log(gen.next()); // 0
console.log(gen.next()); // 1
console.log(gen.next()); // 2
console.log(gen.next()); // 3
console.log(gen.next()); // 4
// ...
///////////////////////////////////////////////////////////////////////////////////////
console.log("=----------------------------------------=");
///using yield*
function* anotherGenerator(i) {
  yield i + 1;
  yield i + 2;
  yield i + 3;
}

function* generator(i) {
  yield i;
  yield* anotherGenerator(i);
  yield i + 10;
}

var gen = generator(10);

console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
///////////////////////////////////////////////////////////////////////////////////////
console.log("=----------------------------------------=");
//passing arguments
function* logGenerator() {
  console.log(0);
  console.log(1, yield);
  console.log(2, yield);
  console.log(3, yield);
}

var gen = logGenerator();

// the first call of next executes from the start of the function
// until the first yield statement
gen.next();             // 0
gen.next('kunle');    
gen.next('taleisia'); 
gen.next('wesley'); 
///////////////////////////////////////////////////////////////////////////////////////
console.log("=----------------------------------------=");
//return statments
function* yieldAndReturn() {
  yield "Y";
  return "R";
  yield "unreachable";
}

var gen = yieldAndReturn()
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
///////////////////////////////////////////////////////////////////////////////////////
