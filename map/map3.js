// display the heights of each image below
var images = [
  { height: '34px', width: '39px' },
  { height: '54px', width: '19px' },
  { height: '83px', width: '75px' },
];

var heights = images.map( image =>{
  return image.height;
});
console.log("heights = ", heights);

// display speed of cars below: speed = distancee / time;
var trips = [
  { distance: 34, time: 10 },
  { distance: 90, time: 50 },
  { distance: 59, time: 25 }
];

var speeds = trips.map(trip => {
  return trip.distance/trip.time;
});
console.log("speed = ",speeds);