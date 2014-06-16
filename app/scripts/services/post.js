/**
 * Created by arias on 11/06/14.
 */
'use strict';

app.factory('Post', ['$firebase','FIREBASE_URL','User',  function($firebase, FIREBASE_URL,User) {


   var ref = new Firebase(FIREBASE_URL+ 'posts'); 
   console.log(ref);


   var posts = $firebase(ref);   
   var Post = {
           all: posts,
           create: function(post){
               var user = User.getCurrentUser();
               console.log(user)
               alert(User.signedIn())
               post.owner = user.username;
               return posts.$add(post).then(function(ref){
                  var postId = ref.name();
                   user.$child('posts').$child(postId).$set(postId);
                   return postId;

               });
           },
           find: function(postId){
             return  posts.$child(postId);
           },
           delete: function(postId){
               if(!User.signedIn()){
                   return false;
               }
               var post = Post.find(postId);
               post.$on('loaded', function(){
                   var user = User.findByUserName(post.owner || post.username);

                   posts.$remove(postId).then(function(ref){
                       user.$child('posts').$remove(postId);
                   });

               });


           },
       addCommnet : function(postId, comment){
           if(!User.signedIn()){
               return false;
           }
           var user = User.getCurrentUser();
           comment.username = user.username;
           comment.postId = postId;
           posts.$child(postId).$child('comments').$add($comment).then(function(ref){
               user.$child('comments').$child($ref.name()).$set({id : ref.name(), postId : postId});
           });

       }
   }
   return Post;
}])
