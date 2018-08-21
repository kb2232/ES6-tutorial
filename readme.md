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
  * filter helper method
    - examples
  ```javascript
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

  // more hard example:
  /*
  Given a list of comments and a specific post, return just the content about the post
  */
  var post = { id:4, title:'new post'};
  var comments = [
    { postID: 4, content: ' awesome post' },
    { postID: 1, content: ' ugly hair' },
    { postID: 2, content: ' thats fat1' },
    { postID: 4, content: ' very neat trick' }
  ];

  var commentsForPost = (comments, post) => {
    return comments.filter( comment => {
      return post.id === comment.postID;
    });
  }

  console.log(commentsForPost(comments,post));
    ```
  * find help method
  ```javascript
  // search through an array to find an element
  var users = [
    { name:"kunle", id:2},
    { name:"alex", id:3},
    { name:"jack", id:1},
    { name:"alex",id:4}
  ];

  // ES5
  // search for Alex
  // the for loop method will look for all occurrences;
  founded = [];
  for( var i = 0; i<users.length; i++)
  {
    if(users[i].name === "alex")
    {
      founded.push(users[i]);
    }
  }
  console.log(founded);

  // ES6
  // .find() requires a return statement; it returns the element once it finds it;
  // the find method only returns the first case;
  const newuser = users.find( user => {
    return user.name === "alex";
  });
  console.log(newuser);
  ```
  * "every" helper method
  ```javascript
  // it is like "AND" condition; if x && y && z && ...
  const bool = computers.every( comp => {
    return comp.ram > 16;
  });
  console.log("bool: ",bool);
  ```

  * "some" helper method
  ```javascript
  // it is like "OR" condition; if x || y || z || ...
  var computers = [
    { name:'apple',ram:20},
    { name:'compaq',ram:4},
    { name:'acer',ram:32}
  ]

  const bool = computers.some( comp => {
    return comp.ram > 16;
  });
  console.log("bool: ",bool);
  ```
  * REDUCE helper method - last helper method 
  ```javascript
  var numbers = [ 10, 20, 30];

  /*
  numbers.reduce((variable-for-initial-value, each-element)=>{
    return (iterator function);
  },initial-value)
  */

  const total = numbers.reduce((sum,num)=>{
    return sum+num;
  },0);
  console.log("total=",total);

  var colors = [
  { color: ' red ', id: 1},
  { color: ' blue ', id: 2},
  { color: ' yellow ', id: 3},
  { color: ' pink ', id: 4}
  ];

  /*
  array.reduce((variable-for-initial-value, each-element)=>{
    return (iterator function);
  },initial-value)
  */

  // goal - obtain: ['red','blue','yellow','pink'];
  const arr = colors.reduce((accumulator,color) => {
    accumulator.push(color.color);
    return accumulator;
  },[]);
  console.log("arr=",arr);

  // balance paranthesis example
  function balanceParen(str)
  {
    return !str.split("").reduce((acc,char)=>{
      if(acc < 0) return acc;
      if(char === "(") ++acc;
      if(char === ")") --acc;
      return acc;
    },0);
  }
  console.log(balanceParen("()()"))
  ```
# Const and LET
