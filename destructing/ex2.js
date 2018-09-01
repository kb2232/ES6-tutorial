/// list
 const savedFile = {
   name:'repost',
   size: 140,
   extension: 'jpg',
 }

 // using es6 without destructing
 const filesummary = file =>`The file ${file.name}.${file.extension} is of size ${file.size}.`;
 console.log(filesummary(savedFile));
 // using es6 with destructing
 const filesummary2 = ({name, size,extension})=>`The file ${name}.${extension} is of size ${size}.`; 
 console.log(filesummary2(savedFile));