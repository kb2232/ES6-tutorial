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
  1. const - is used when we expect the variable to never change;
  2. let - is used when we expect the variable to change;
  3. we do not use VAR any more
# Back Ticks
  ```javascript
  // 1. back ticks
  const yer = ()=>{
    const yr = new Date().getFullYear();
    return `the year is ${yr}`;
  }
  console.log(yer());
  ```
# Array functions
```javascript
    // ES5
      // Below is a single expression.
    function sum(a,b)
    {
      return a+b;
    }
    console.log("sum=",sum(1,2));

    // ES6
      // single expression - implicit return;
    const sum1 = (a,b) => (a+b);
    console.log("sum1(es6)=",sum1(1,2));

    // ES6
      // single expression - implicit return - self called
    const sum2 = ((a,b) => (a+b))(1,2);
    console.log("sum2=",sum2);

    // takes a num and returns double of it;
    const double = (num => (2*num))(2);
    console.log(double);

    // advance use
    const res = numbers.map(num=>2*num);
    console.log(res);
```
# Enchanced object Literals
  ```javascript
  // no literal 
  function createbookshop(inventory)
  {
    return {
      inventory: inventory,
      inventoryValue: function()
      {
        return this.inventory.reduce((initial, element)=> initial+element.price,0);
      },
      priceFortiTle: function(title){
        return this.inventory.find(book =>book.title === title).price;
      }
    }
  }
  const inventory = [
    {title: "harry potter", price: 10},
    {title: "kunle the man",price:25},
  ];
  const bookshop = createbookshop(inventory);
  const value = bookshop.inventoryValue();
  const price = bookshop.priceFortiTle("kunle the man");
  console.log("value = ",value,"\ntitle price = ",price);

  ///////////////////////////////////////////////////////
  // 1. whenever a key and value (key : value) have same name, you can condense to just key name
  //2. whenever a key and value (key : value) and value is function, you can omit the colon and word "funciton";
  function createbookshop2(inventory)
  {
    return {
      inventory,
      inventoryValue()
      {
        return this.inventory.reduce((initial, element)=> initial+element.price,0);
      },
      priceFortiTle(title){
        return this.inventory.find(book =>book.title === title).price;
      }
    }
  }
  const bookshop2 = createbookshop2(inventory);
  const value2 = bookshop2.inventoryValue();
  const price2 = bookshop2.priceFortiTle("kunle the man");
  console.log("value2 = ",value2,"\ntitle price2 = ",price2)
  ```
  # default function arguments
  ```javascript
      // node default method
    function makeAjaxRequest(url, method)
    {
      if(!method) method='GET';
      //login to make request
      console.log(method);

    }

    // Default argument methods
    function makeAjaxRequest2(url, method='GET')
    {
      //login to make request
      console.log(method);
    }

    //test
    makeAjaxRequest('google.com');
    makeAjaxRequest('google.com','POST');
    makeAjaxRequest2('google.com');
    makeAjaxRequest2('google.com','POST');

    /// more pronounced cases;
    class User
    {
      constructor(id)
      {
        this.id = id;
      }
      generateId()
      {
        return Math.random()*9999999;
      }
      createAdmin(userid = this.generateId(),type=0)
      {
        newuser = {
          id:userid
        };
        (type===1)?newuser.admin=true:newuser.admin = false;
        console.log(newuser);
      }
    }

    let newuser = new User();

    newuser.createAdmin(newuser.generateId(),1);
  ```
  # rest and spread operator
  ```javascript
    function addnumbers(numbers)
    {
      return numbers.reduce((initial,number)=>initial+number,0);
    }
    console.log(addnumbers([1,2,3,4,5,6]));

    // using "..." - this is called "spread" operator
    // below is the REST method - using it in a function
    function addnumbers2( ...numbers)
    {
      return numbers.reduce((initial,number)=>initial+number,0);
    }
    console.log(addnumbers2(1,2,3,4,5,6));
    // using the spread operator and why it is important
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
  ```
  # DESTRUCTING 
  ```javascript
    /////DESTRUCTING

    const expense = {
      type:'Business',
      amount:'$50.00 USD',
      type1:'Business',
      amount1:'$55.00 USD',
      type2:'Business',
      amount2:'$60.00 USD',
    }

    // using es5
    var type = expense.type;
    var amount = expense.amount;

    // using es6
    const { type1 } = expense;
    const { amount1 } = expense;

    // using ES6 and destructing
    // the name of the variable MUST equal to the property names in 'expense'
    const { type2, amount2 } = expense;

    console.log(type2,"\n",amount2);
  ```
  * more on destructing
``` javascript
    //// more realistic example
    /// pulling properties of objects
    const savedFile = {
      name:'repost',
      size: 140,
      extension: 'jpg',
    }

    // using es6 without destructing
    const filesummary = file =>`The file ${file.name}.${file.extension} is of size ${file.size}.`;
    console.log(filesummary(savedFile));
    // using es6 with destructing
    const filesummary2 = ({name, size,extension})=>`The file ${name}.${extension} is of size ${size}.`; 
    console.log(filesummary2(savedFile));
```
  * pulling properties of arrays
  ```javascript
    const company = [
    'google',
    'facebook',
    'Uber',
    ]
    const [n1,n2,n3] = company;
    console.log(n1,n2,n3);
  ```
  * pulling properties of arrays and objects
  ```javascript
    const companies = [
      { name: 'google', location:'mountain view'},
      { name: 'facebook', location:'menlo park'},
      { name: 'uber', location:'san francisco'},
    ];

    const [{name, location}] = companies;
    console.log(`${name}'s location is at ${location}`);
  ```
# classes
```javascript
  class Car
  {
    constructor({ title })
    {
      this.title = title;
    }
    drivesound()
    {
      return 'vrroooom';
    }
    summary({make,year,price})
    {
      const user = {
        title: this.title,
        sound:this.drivesound(),
        make,
        year,
        price,
      }
      return user;
    }
  }

  options = {
    title: 'honda 2019 x1',
    make:'honda',
    year:2019,
    price:'$40000 USD',
  }

  let car1 = new Car(options);

  console.log(car1);
  console.log(car1.summary(options));
```
  * inheritance
  ```javascript
    const options2 = {
      title:"toyota llx 2020",
    }

    class toyota extends Car{
      constructor(options2,price)
      {
        super(options2);
        this.price = price;
      }
    }
    let toyota1 = new toyota(options2,'$43000');
    console.log("toyota: ",toyota1);
  ```
# generators
  * for..of loop: iterating through array of data
    ```javascript
    const colors = [
    'red', 'blue','yellow','green'
    ];
    for(let color of colors)
    {
      console.log(color);
    }
    ```
  * generators 1
    ```javascript
    // creating generators
    /*
      1. put a star by the name of the function
      2. 
    */


    function *numbers()
    {
      yield;
    }

    const gen = numbers();
    console.log(gen.next());
    console.log(gen.next());

    //more example
    // example 2

    function *add(n)
    {
      yield n;
      yield n + 10;
    }
    const gen = add(5);
    console.log(gen.next());
    console.log(gen.next());
    console.log(gen.next());

    //output of above
    /*
    { value: 5, done: false }
    { value: 15, done: false }
    { value: undefined, done: true }
    */
    ```
    * generators 2
    ```javascript
    // let us image we have a list of stuff but we want to iterate over just a few of those stuffs

    const team = {
      size: 6,
      department: 'engineer',
      lead: 'Anthony',
      manager: 'Kunle',
      engineers: 'anthony, kunle, michael, sean, ronak, yesenia, rommel, george, etc.',
    };
    function *nameIter({lead,manager,engineers})
    {
      yield lead;
      yield manager;
      yield engineers;
    }
    const myteam = [];
    for(let x of nameIter(team))
    {
      myteam.push([x]);
    }
    console.log(myteam);
    ```
  * mulltiple generators
  ```javascript
  const testTeam = {
  lead: 'ronak',
  testers: 'Shiela, max, john, amrry',
  }
  const team2 = {
    testTeam,
    size: 6,
    department: 'engineer',
    lead: 'Anthony',
    manager: 'Kunle',
    engineers: 'anthony, kunle, michael, sean, ronak, yesenia, rommel, george, etc.',
  };

  // iterate over lead, manager, engineers and entire testing team;
  function *team2Iter(team2)
  {
    yield team2.lead;
    yield team2.manager;
    yield team2.engineers;
    yield *testTeamIter(team2.testTeam);
  }
  // iterate over test team data structure
  function *testTeamIter({lead, testers})
  {
    yield lead;
    yield testers;
  }
  const container = [];

  for(let it of team2Iter(team2))
  {
    container.push([it]);
  }
  console.log(container);
  ```
  * symbol iterator
  ```javascript
    // symbol iterator - helps with refactor

  const testTeam = {
    lead: 'ronak',
    testers: 'Shiela, max, john, amrry',
    //just incase you try to iterate this - i will only give you access to testers;
    [Symbol.iterator]: function* (){
      yield this.testers;
    }
  }
  const team2 = {
    testTeam,
    size: 6,
    department: 'engineer',
    lead: 'Anthony',
    manager: 'Kunle',
    engineers: 'anthony, kunle, michael, sean, ronak, yesenia, rommel, george, etc.',
    [Symbol.iterator]: function* (){
      yield this.lead;
      yield this.manager;
      yield this.engineers;
      yield *this.testTeam;
    }
  };

  const container = [];

  for(let it of team2)
  {
    container.push([it]);
  }
  console.log(container);
  ```
  * Tree-Generator-Recursion
  ```javascript
    class Comment {
    constructor(content,children)
    {
      this.content = content;
      this.children = children
    }

    *[Symbol.iterator]()
    {
      yield this.content;
      for(let child of this.children)
      {
        yield* child;
      }
    }
  }
  const childs = {
    child1 : new Comment('child1',[]),
    child2 : new Comment('child2',[]),
    child3 : new Comment('child3',[]),
    child4 : new Comment('child4',[]),
  }

  const children = ({child1,child2,child3,child4})=>
  {
    return [
      child1,
      child2,
      child3,
      child4
    ];
  }

  const root = new Comment('test post', children(childs));

  const values = [];
  for( let child of root)
  {
    values.push(child);
  }
  console.log(values);
  ```
# PROMISES AND FETCH
  * promise terminology
  ```
    Javascript executes your code line by line WITH no pauses.
    Promises allows you to wait OR pause before executing the next code

    There are tree states of Promise:
    1. unresolved - waiting for something to finish
    2. resolved - something finished and all went well
      a. then() - this is a callback to CATCH the result of what went well.
    3. rejected - something finished and something went bad
      a. catch() - this is a callback to CATCH something that went bad.
  ```
  * simply promise
  ```javascript
  // the browser supports the term 'promise'
  // the browser also knows terms resolved and reject
  promise = new Promise((resolve,reject)=>{
    resolve();
  });
  // i am basically telling the browser that everything went well.
  console.log(promise);
  ```
  * .then()
  ```javascript
  // the browser supports the term 'promise'
  // the browser also knows terms resolved and reject
  promise = new Promise((resolve,reject)=>{
    resolve();
  });
  // i am basically telling the browser that everything went well.
  // and only run functions passed into it with .then()
  promise
    .then(()=>console.log("all went well"))
    .then(()=>console.log("this was also done"))
    .catch(()=>console.log("something went wrong"));
  ```
  * .catch() 
  ```javascript
  // the browser supports the term 'promise'
  // the browser also knows terms resolved and reject
  promise = new Promise((resolve,reject)=>{
    reject();
  });
  // i am basically telling the browser that everything went well.
  // and only run functions passed into it with .then()
  promise
    .then(()=>console.log("all went well"))
    .then(()=>console.log("this was also done"))
    .catch(()=>console.log("something went wrong"));
  ```
  * simulate long running process
  ```javascript
  // the browser supports the term 'promise'
  // the browser also knows terms resolved and reject
  promise = new Promise((resolve,reject)=>{
  // wait three seconds
  setTimeout(()=>{
    resolve();
  },3000)
  });
  // i am basically telling the browser that everything went well.
  // and only run functions passed into it with .then()
  promise
    .then(()=>console.log("all went well"))
    .then(()=>console.log("this was also done"))
    .catch(()=>console.log("something went wrong"));
  ```