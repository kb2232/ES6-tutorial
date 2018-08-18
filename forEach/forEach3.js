function handlePosts() {
  var posts = [
    { id: 23, title: 'Daily JS News' },
    { id: 52, title: 'Code Refactor City' },
    { id: 105, title: 'The Brightest Ruby' }
  ];
  
  // ES5
  for (var i = 0; i < posts.length; i++) {
   savePost[posts[i]];
  }

  // ES6
  posts.forEach(post => {
    savePost(post);
  })

}