//create array of numbers
//create variable to hold sum
//loop over the array, incrementing sum
//print sum

var numbers = [1,2,3,4,5];

//ES5
var sum = 0;
for(var i = 0; i<numbers.length; i++)
{
  sum += numbers[i];
}
console.log("ES5(sum) = ", sum,"\n");

//ES6;
var sum = 0;
numbers.forEach(num=>{
  sum += num;
});
console.log("ES6(sum) = ",sum);
