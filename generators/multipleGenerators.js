//////////////////////////////////////// multiple generators
console.log("=----------------------------------------=");
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
console.log("=----------------------------------------=");