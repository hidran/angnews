app.factory('Auth',['$firebaseSimpleLogin', 'FIREBASE_URL', '$rootScope',
                    function($firebaseSimpleLogin, FIREBASE_URL, $rootScope){
                        var ref = new Firebase(FIREBASE_URL);
                        var auth = $firebaseSimpleLogin(ref);
                        var Auth = {
                                register: function(user){
                                   
                                    return auth.$createUser(user.email, user.password);
                                },
                                signedIn : function(){
                                    return auth.user!==null;
                                },
                                logout : function(){
                                    auth.$logout();
                                },
                                login : function(user){
                                   return auth.$login('password', user);
                                }
                        };
                        $rootScope.signedIn = function(){
                            return Auth.signedIn();
                        }
                        return Auth;
                    }
                    ]);