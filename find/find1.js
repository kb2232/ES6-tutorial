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