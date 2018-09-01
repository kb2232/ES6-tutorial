//destructing arrays

const company = [
  'google',
  'facebook',
  'Uber',
]

const [n1,n2,n3] = company;
console.log(n1,n2,n3);


// destructing arrays and objects
const companies = [
  { name: 'google', location:'mountain view'},
  { name: 'facebook', location:'menlo park'},
  { name: 'uber', location:'san francisco'},
];

const [{name, location}] = companies;
console.log(`${name}'s location is at ${location}`);