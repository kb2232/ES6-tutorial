# **ES6 TUTORIAL**

# ECMASCRIPT
  - it is a description of a scripting language;
  - Javascript is just the implementation of ECMASCRIPT;
  * ES6
    - es6 stands for ECMASCRIPT version 6. It is the new implementation of javascript.
    - es6 version came at 2015
  * babel
    - most browsers around the entire world cannot run ES6. 
    - browsers can only read es5
    - As a result, babel is a library that transpile ES6 to ES5 so that all browsers can use it.
# ES6 - ARRAY HELPER METHODS
 * forEach
  ```javascript
    // 1.  example with color array

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
    //explaining...
    /*
    The way the above function works is simple:
    colors is an array with 3 elements.
    Each element is passed to an iterator function all the way until there is no more elements -
    (color)=>{
      ...
    };
    // 2. more examples with number array
    */
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

    // 3. finding area of an image.
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
```
  * Map helper method
    - difference betwee Map() and forEach();
    ```
    Well, the forEach() method doesn’t actually return anything. It simply calls a provided function on each element in your array. This callback is allowed to mutate the calling array.
    Meanwhile, the map() method will also call a provided function on every element in the array. The difference is that map() utilizes return values and actually returns a new Array of the same size.``
    ```
    - examples of using map below
    ```javascript
    var numbers = [1,2,3];
    //ES5 - double the array numbers and stuff it into
    //doublenumbers [];


    var doublenumbers = [];
    for( var i = 0; i <numbers.length; i++)
      doublenumbers.push(numbers[i]*2);
    console.log(doublenumbers);

    // ES6


    var doubled = numbers.map( num => {
      return num*2;
    });
    console.log(doubled);
    /*
    notice that map returns an array with the above example. In the for loop, we had to define the array initially;
    */

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
    ```