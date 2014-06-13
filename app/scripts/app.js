
'use strict';
/* global app:true */
var app = angular.module('angNewsApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute',
  'firebase'
]);

app.config(function ($routeProvider) {
    $routeProvider
      .when('/',  {
        templateUrl: 'views/posts.html',
        controller: 'PostsCtrl'
      })
       .when('/register',  {
        templateUrl: 'views/register.html',
        controller: 'AuthCtrl'
      })
       .when('/login',  {
        templateUrl: 'views/login.html',
        controller: 'AuthCtrl'
      })
       .when('/posts/:postId',  {
        templateUrl: 'views/postview.html',
        controller: 'PostViewCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
   });
  
app.constant('FIREBASE_URL', 'https://ngnewshidran.firebaseIO.com/');