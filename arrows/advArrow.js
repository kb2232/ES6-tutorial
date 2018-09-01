
// takes a num and returns double of it;
const double = (num => (2*num))(2);
console.log(double);

numbers = [1,2,3];

const res = numbers.map(num=>2*num);
console.log(res);

// When not to use 'this' - team of people
const team = {
  members: ['kunle','jane'],
  teamname:"super squad",
  summary:function(){
    return this.members.map(function(member){
      return `${member} is on team ${this.teamname}.`;
    }.bind(this));
  }
};
console.log(team.summary());
// the above will give you error saying "Cannot read propert of map of undefined."
/*
We are passing the iterator function into map, which is not defined somewhere else we do not know.
So the value of 'this' within the map becomes LOST....
*/
// 1. one solution is to use .bind(this) and remove the arrow function. - this will bind the value of 'this' alongside.

// When not to use 'this' - team of people : using arrow function to solve it
const team = {
  members: ['kunle','jane'],
  teamname:"super squad",
  summary:function(){
    return this.members.map((member)=>{
      return `${member} is on team ${this.teamname}.`;
    });
  }
};