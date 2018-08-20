var products2 = [
  { name: 'cucumber', type: 'vegetable', quantity: 0, price: 1},
  { name: 'banana', type: 'fruit', quantity: 10, price: 15},
  { name: 'celery', type: 'vegetable', quantity: 30, price: 9},
  { name: 'orange', type: 'fruit', quantity: 3, price: 5}
];

/* display a list to a user for friuts where quantity is greater than 0, price is less than 10;*/

var filtered2 = products2.filter( product => {
  return product.type === 'fruit'
  && product.quantity > 0
  && product.price < 10;
});
console.log("filtered2 = ",filtered2);