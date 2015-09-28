metro.controller('loginCtrl', function($scope, $stateParams , $rootScope, User , $state, $ionicPopup) {

    $scope.loginData = {};
    $scope.spinner = false;

    $scope.ingresar= function(){

        $scope.spinner = true;

        User.validateUser($scope.loginData)
           .success(function (data) {

                if( data.error ){


                    var alertPopup = $ionicPopup.alert({
                       title: 'Error!',
                       template: data.error
                     });


                }else{

                    window.localStorage.setItem("idpersona", data.idpersona);
                    window.localStorage.setItem("password", data.password);

                    angular.forEach(data.sitios, function(value, key) {
                         window.localStorage.setItem('sitio_'+value, value);
                    });

                    $state.go('app.proyectos');
                }

                $scope.spinner = false;
            })
            .error(function (error) {
               console.log(error);
               $scope.spinner = false;
            });


        $scope.loginData = {};

    }
});

