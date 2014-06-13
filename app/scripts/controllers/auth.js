'use strict';
app.controller('AuthCtrl',[
                           '$scope','$location', 'Auth', 'User',
                   function($scope,$location, Auth, User){
                               if(Auth.signedIn()){
                                   $location.path('/');
                               }
                               
                               $scope.$on('$firebaseSimpleLogin:login', function () {
                                   $location.path('/');
                                 });
                               
                               $scope.login = function(){
                                   return Auth.login($scope.user).then(function(res){
                                       console.log(res)
                                       $location.path('/');
                                   },function(err){
                                       $scope.error = err.toString();
                                   }
                                   );
                               }
                               
                               $scope.register = function(){
                                  
                                   Auth.register($scope.user).then(function(authUser){
                                       console.log(authUser);
                                       User.createUser(authUser, $scope.user.username);
                                       $scope.login();
                                     
                                       $location.path('/');
                                   },function(err){
                                       console.log(err)
                                       $scope.error = err.message;
                                   });
                               }
                           }
                           
                           ]);