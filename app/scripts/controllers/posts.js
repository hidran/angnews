/**
 * Created by arias on 11/06/14.
 */
'use strict';

app.controller('PostsCtrl', ['$scope','Post','$location', function($scope, Post, $location){
    $scope.posts = Post.all;
   console.log(  $scope.posts);
     $scope.resetPost = function(){
        $scope.post ={url:'http://www.test.it', title:'test'};
    } ;
    $scope.resetPost();
    
   
    $scope.deletePost = function(idx){

       Post.delete(idx); 
    };   
}
    ]);
