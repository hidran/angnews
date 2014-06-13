'use strict';
app.controller(
        'PostViewCtrl',
        ['$routeParams',
         '$scope',
         'Post',
         function($routeParams,$scope,Post){
          
            $scope.post = Post.find($routeParams.postId);

        
}

]);