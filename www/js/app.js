// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires', ['ngCordova']
var metro = angular.module('starter', ['ionic','ngCordova','ngResource', 'ionic-timepicker'])

metro.run(function($ionicPlatform, $cordovaSQLite,$rootScope, $state) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }

    /* iniciamos al base de datos al momento de ejecutar la app */
    if(window.cordova) {
      $rootScope.db = $cordovaSQLite.openDB("metro");
    } else {
      $rootScope.db = window.openDatabase("metro", "1.0", "Metro", -1);
    }

    /* creamos las tablas */

    $cordovaSQLite.execute($rootScope.db, "CREATE TABLE IF NOT EXISTS informe (informe_id integer primary key, codigo varchar(50),created_at datetime,estado int,updated datetime_at,contratista varchar(50),numero varchar(50),tramo varchar(50), hash text, proyecto int, fecha datetime,ito varchar(50), turno int)");


     /* variables globales */
     $rootScope.server_url   = "";
     $rootScope.user         = "";
     $rootScope.fecha_actual = moment().format('YYYY-MM-DD');
     $rootScope.api_base     = "https://www.pochrider.cl/rider_dev/igniter/api";


     /* si existe el usuario al iniciar la app ira a proyectos*/
     if( window.localStorage.getItem("idpersona") ){
        $state.go('app.proyectos');
     }

  });
})

/* creamos las Rutas */

metro.config(function($stateProvider, $urlRouterProvider ,$httpProvider) {


  $stateProvider
    .state('app', {
      url: "/app",
      abstract: true,
      templateUrl: "templates/menu.html",
      controller: 'AppCtrl'
    })

  .state('app.login', {
      url: "/login",
      views: {
        'menuContent' :{
          templateUrl: "templates/login.html",
          controller: 'loginCtrl'
        }
      }
  })


  .state('app.informes', {
      url: "/informes",
      views: {
        'menuContent' :{
          templateUrl: "templates/informe/list.html",
          controller: 'InformeListCtrl'
        }
      }
  })



  .state('app.addInforme', {
      url: "/informes/add",
      views: {
        'menuContent' :{
          templateUrl: "templates/informe/create.html",
          controller: 'InformeAddCtrl'
        }
      }
  })

  .state('app.editInforme', {
      url: "/informe/edit/:id",
      views: {
        'menuContent' :{
          templateUrl: "templates/informe/edit.html",
          controller: 'InformeEditCtrl'
        }
      }
  })

  .state('app.proyectos', {
      url: "/proyectos",
      views: {
        'menuContent' :{
          templateUrl: "templates/proyectos/list.html",
          controller: 'ProyectosListCtrl'
        }
      }
  });



  $urlRouterProvider.otherwise('/app/login');
})

/* controller por defecto */

metro.controller('AppCtrl', function($scope) {})