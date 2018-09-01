var products = [
  { name: 'cucumber', type: 'vegetable'},
  { name: 'banana', type: 'fruit'},
  { name: 'celery', type: 'vegetable'},
  { name: 'orange', type: 'fruit'}
];

// say a user only wants to see vegetable and not fruits.
// how would we display this list?

// ES5
var filteredProd = [];
for(var i = 0; i<products.length; i++)
{
  if(products[i].type == 'vegetable')
    filteredProd.push(products[i]);
}
console.log(filteredProd);

// ES6 - USING filter
// like map, filter returns and array

var filtered = products.filter(product => {
  return product.type === 'fruit';
});
console.log(filtered);

