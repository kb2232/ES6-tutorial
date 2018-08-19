var colors = ["blue", "yello", "green"];

// ES5 for loop below;
for(var i = 0; i<colors.length; i++)
{
  console.log(colors[i]);
}

//to help with iteration over an array - we have;
//forEach is an array method used for arrays.
colors.forEach((color)=>{
  console.log(color);
});
/*
The way the above function works is simple:
colors is an array with 3 elements.
Each element is passed to an iterator function all the way until there is no more elements -
(color)=>{
  ...
};
*/