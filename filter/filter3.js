/*
Given a list of comments and a specific post, return just the content about the post
*/
var post = { id:4, title:'new post'};
var comments = [
  { postID: 4, content: ' awesome post' },
  { postID: 1, content: ' ugly hair' },
  { postID: 2, content: ' thats fat1' },
  { postID: 4, content: ' very neat trick' }
];

var commentsForPost = (comments, post) => {
   return comments.filter( comment => {
    return post.id === comment.postID;
  });
}

console.log(commentsForPost(comments,post));

