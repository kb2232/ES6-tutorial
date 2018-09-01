// 1. back ticks
const yer = ()=>{
  const yr = new Date().getFullYear();
  return `the year is ${yr}`;
}
console.log(yer());