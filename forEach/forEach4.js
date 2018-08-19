var images = [
  { height: 10, width: 30 },
  { height: 20, width: 90 },
  { height: 54, width: 32 }
];
var areas = [];
//calculate the area of each image and store result inside areas;

// ES6
images.forEach(image => {
  areas.push(image.height*image.width);
});
console.log(areas);

// ES5
//reset the areas
areas = [];
for(var i = 0; i < images.length; i++)
{
  areas.push(images[i].height*images[i].width);
}
console.log(areas);