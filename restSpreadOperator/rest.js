function addnumbers(numbers)
{
  return numbers.reduce((initial,number)=>initial+number,0);
}
console.log(addnumbers([1,2,3,4,5,6]));

// using ... rest method
function addnumbers2( ...numbers)
{
  return numbers.reduce((initial,number)=>initial+number,0);
}
console.log(addnumbers2(1,2,3,4,5,6));