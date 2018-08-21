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