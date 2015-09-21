metro.controller('AppCtrl', function($scope, $ionicModal, $timeout, $cordovaSQLite) {

})




metro.controller('ProyectosCtrl', function($scope, $ionicModal, $timeout, $cordovaSQLite) {

    $scope.lista = [

      { name:"Proyecto 1",image:"food-drink-17.jpg"},
      { name:"Proyecto 2",image:"pro.jpg"},
      { name:"Proyecto 3",image:"food-drink-17.jpg"},
      { name:"Proyecto 4",image:"pro.jpg"},
      { name:"Proyecto 4",image:"food-drink-17.jpg"},
      { name:"Proyecto 6 ",image:"pro.jpg"},
      { name:"Proyecto 7 ",image:"food-drink-17.jpg"},
      { name:"Proyecto 8 ",image:"pro.jpg"}
    ];
})

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