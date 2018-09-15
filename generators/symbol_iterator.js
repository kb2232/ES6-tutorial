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