//////////////////////////////////////////////////////////////////////////////////////////
// generators works well with for of loops
/*
for (let i of array)
{
  ...
}
*/
function *colours()
{
  yield "green";
  yield "white";
  yield "black";
}
const col = [];
for(let color of colours())
{
  // runs through each function per yield
  col.push([color]);
}
console.log(col);
console.log("=----------------------------------------=");
//////////////////////////////////////////////////////////////////////////////////////////
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
console.log("=----------------------------------------=");
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////