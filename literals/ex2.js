function saveFile(url,data)
{
  $.ajax(
    {
      url,
      data,
      method:'POST'
    }
  );
}
const url = "https://fileupload.com";
const data = {
  color: ['red','blue','purple'],
}
saveFile(url,data);