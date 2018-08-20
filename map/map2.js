var cars = [
  {model:"black",price:"cheap"},
  {model:"camaro",price:"expensive"}
];

// let's say we just want to pluck out the prices of each car
var prices = cars.map(car => {
  return car.price;
})
console.log(prices);
