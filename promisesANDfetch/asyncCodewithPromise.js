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