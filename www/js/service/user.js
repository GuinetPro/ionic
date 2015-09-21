metro.factory('User', function($rootScope,$http) {


  var userFactory = {};

  userFactory.validateUser = function (user) {


        return  $http({
                    method: "post",
                    url: $rootScope.api_base+"/login",
                    data: {
                        user: user.user,
                        pass: user.pass
                    },
                    headers: {'Content-Type': 'application/x-www-form-urlencoded'}
                });


  };


  return userFactory;


})