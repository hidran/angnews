/**
 * Created by arias on 11/06/14.
 */
'use strict';

app.factory('Post', ['$firebase','FIREBASE_URL',  function($firebase, FIREBASE_URL) {
   
   var ref = new Firebase(FIREBASE_URL+ 'posts'); 
   console.log(ref)
   var posts = $firebase(ref);   
   var Post = {
           all: posts,
           create: function(post){
               return posts.$add(post);
           },
           find: function(postId){
             return  posts.$child(postId);
           },
           delete: function(postId){
               posts.$remove(postId);
           }
   }
   return Post;
}])
