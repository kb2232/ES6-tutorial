// node default method
function makeAjaxRequest(url, method)
{
  if(!method) method='GET';
  //login to make request
  console.log(method);

}

// Default argument methods
function makeAjaxRequest2(url, method='GET')
{
  //login to make request
  console.log(method);
}

//test
makeAjaxRequest('google.com');
makeAjaxRequest('google.com','POST');
makeAjaxRequest2('google.com');
makeAjaxRequest2('google.com','POST');