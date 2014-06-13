app.factory('User', ['$location','$rootScope','$firebase','FIREBASE_URL', 'Auth',
             function($location, $rootScope,$firebase,FIREBASE_URL, Auth){
      var ref = new Firebase(FIREBASE_URL+ 'users');
      
      var users = $firebase(ref);
      
      var User = {
              createUser : function(authUser, username){
                  users [username] = {
                          md5_has : authUser.md5_hash,
                          username : username,
                          $priority : authUser.uid
                  };
                  users.$save(username).then(function(){
                      User.setCurrentUser(username);
                  });
              },
              findByUserName: function (username){
                  return users.$child(username);
              },
              setCurrentUser : function(username){
                  $rootScope.currentUser = User.findByUserName(username);
              },
              getCurrentUser : function(){
                  return $rootScope.currentUser;
              },
              signedIn : function(){
                  return $rootScope !== undefined;
              }
      }
      
      $rootScope.$on('$firebaseSimpleLogin:login', function (e, authUser) {
          console.log(e,authUser);
         alert(authUser.uid)
          var query = $firebase(ref.startAt(authUser.uid).endAt(authUser.uid));
         
          query.$on('loaded', function (ql) {
              console.log('queryload', ql);
              console.log(query.$getIndex());
            User.setCurrentUser(query.$getIndex()[0]);
          });
        });
      
      $rootScope.$on('$firebaseSimpleLogin:logout', function() {
          delete $rootScope.currentUser;
            $location.path('/login');
        });
      
      return User;
}]);