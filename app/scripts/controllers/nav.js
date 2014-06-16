app.controller('NavCtrl', ['$scope', '$location', 'Post','Auth', function($scope, $location, Post, Auth){
    
    
   
        $scope.post = {url: 'http://', title: ''};

        $scope.logout = function(){
            Auth.logout();
            $location.path('/login');
        };

        $scope.submitPost = function () {


          Post.create($scope.post).then(function (postId) {
            $scope.post = {url: 'http://', title: ''};
            $location.path('/posts/' + postId);

          });

        };
     
     
}])