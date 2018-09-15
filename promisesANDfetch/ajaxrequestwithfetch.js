const url = "http://teachers-tool.com";

const fetch = (url)=>{
  new Promise((resolve,reject)=>{
    reject();
  })
  .then(response=>console.log(response))
  .catch(err=>console.log(err));
}

fetch(url);