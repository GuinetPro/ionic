metro.controller('InformeListCtrl', function($scope,Informe) {

    $scope.informes = Informe.all();
})





metro.controller('InformeAddCtrl', function($scope,Piques,Actividades,Secuencia,SideDrift, $ionicActionSheet) {

  /* datos de los formualrios que seran guardados */

  $scope.piques         = Piques.all();
  $scope.actividades    = Actividades.all() ;
  $scope.secuencias     = Secuencia.all();
  $scope.side           = SideDrift.all() ;

  $scope.guardarInforme = function(){

     $scope.$broadcast('crearInforme');
  }

  $scope.toggleGroup = function(group) {
    if ($scope.isGroupShown(group)) {
      $scope.shownGroup = null;
    } else {
      $scope.shownGroup = group;
    }
  };
  $scope.isGroupShown = function(group) {
    return $scope.shownGroup === group;
  };


})



metro.controller('informeBitacoraCtrl', function($scope,Informe) {


    $scope.BitacoraZona   = [];

    $scope.agregarZona = function(){

      data = {};
      data.zona = "";
      data.observacion ="";
      $scope.BitacoraZona.push(data);
    }

    $scope.eliminarZona = function (obj){

      if(obj != -1)
        $scope.BitacoraZona.splice(obj, 1);
    }

    $scope.$on('crearInforme', function(event, obj) {
       console.log($scope.BitacoraZona);

       Informe.add();

    })

})


metro.controller('informeGaleriaAccesoCtrl', function($scope, $ionicActionSheet, $timeout) {

  $scope.actividad          = {};
  $scope.secuenciaGaleria   = [];
  $scope.actividadesGaleria = [];
  $scope.relacion           = {side_drift:"",secuencia:""};


  $scope.$on('crearInforme', function(event, obj) {
       console.log($scope.secuenciaGaleria);
  })

  $scope.agregarSecuencia = function(){

      data = {}
      data.side_drift = "";
      data.secuencia="";
      $scope.secuenciaGaleria.push(data);

  }

  $scope.agregarActividades = function(){

      if( $scope.relacion.side_drift == "" && $scope.relacion.secuencia == ""){

          // Show the action sheet
         var hideSheet = $ionicActionSheet.show({

           titleText: 'Debes seleccionar una Relacion con Informacion',
           cancelText: 'OK',
           cancel: function() {
                // add cancel code..
              },
           buttonClicked: function(index) {
             return true;
           }
         });

          return;
      }

      data = {}
      data.actividad     = $scope.actividad.nombre;
      data.marco_inicial = "";
      data.hora_inicial  = "";
      data.marco_final   = "";
      data.hora_final    = "";
      data.distancia     = "";
      data.side_drift    = $scope.relacion.side_drift;
      data.secuencia     = $scope.relacion.secuencia;
      $scope.actividadesGaleria.push(data);

  }

  $scope.relacionar = function(obj){

      $scope.relacion.side_drift  = $scope.secuenciaGaleria[obj].side_drift;
      $scope.relacion.secuencia   = $scope.secuenciaGaleria[obj].secuencia;
  }

  $scope.eliminarActividad = function (obj){

      if(obj != -1)
        $scope.actividadesGaleria.splice(obj, 1);
  }

})




metro.controller('informeTunelInterestacionOrienteCtrl', function($scope, $ionicActionSheet, $timeout) {

  $scope.actividad          = {};
  $scope.secuenciaTunelIntOriente   = [];
  $scope.actividadesTunelIntOriente = [];
  $scope.relacion           = {secuencia:""};


  $scope.agregarSecuencia = function(){

      data = {}
      data.secuencia="";
      $scope.secuenciaTunelIntOriente.push(data);

  }

  $scope.agregarActividades = function(){

      if( $scope.relacion.side_drift == "" && $scope.relacion.secuencia == ""){

          // Show the action sheet
         var hideSheet = $ionicActionSheet.show({

           titleText: 'Debes seleccionar una Relacion con Informacion',
           cancelText: 'OK',
           cancel: function() {
                // add cancel code..
              },
           buttonClicked: function(index) {
             return true;
           }
         });

          return;
      }

      data = {}
      data.actividad     = $scope.actividad.nombre;
      data.marco_inicial = "";
      data.hora_inicial  = "";
      data.marco_final   = "";
      data.hora_final    = "";
      data.distancia     = "";
      data.secuencia     = $scope.relacion.secuencia;
      $scope.actividadesTunelIntOriente.push(data);

  }

  $scope.relacionar = function(obj){

      $scope.relacion.secuencia   = $scope.secuenciaTunelIntOriente[obj].secuencia;
  }

  $scope.eliminarActividad = function (obj){

      if(obj != -1)
        $scope.actividadesTunelIntOriente.splice(obj, 1);
  }

})


metro.controller('informeTunelInterestacionPonienteCtrl', function($scope, $ionicActionSheet, $timeout) {

  $scope.actividad          = {};
  $scope.secuenciaTunelIntPoniente   = [];
  $scope.actividadesTunelIntPoniente = [];
  $scope.relacion           = {secuencia:""};


  $scope.agregarSecuencia = function(){

      data = {}
      data.secuencia="";
      $scope.secuenciaTunelIntPoniente.push(data);

  }

  $scope.agregarActividades = function(){

      if( $scope.relacion.side_drift == "" && $scope.relacion.secuencia == ""){

          // Show the action sheet
         var hideSheet = $ionicActionSheet.show({

           titleText: 'Debes seleccionar una Relacion con Informacion',
           cancelText: 'OK',
           cancel: function() {
                // add cancel code..
              },
           buttonClicked: function(index) {
             return true;
           }
         });

          return;
      }

      data = {}
      data.actividad     = $scope.actividad.nombre;
      data.marco_inicial = "";
      data.hora_inicial  = "";
      data.marco_final   = "";
      data.hora_final    = "";
      data.distancia     = "";
      data.secuencia     = $scope.relacion.secuencia;
      $scope.actividadesTunelIntPoniente.push(data);

  }

  $scope.relacionar = function(obj){

      $scope.relacion.secuencia   = $scope.secuenciaTunelIntPoniente[obj].secuencia;
  }

  $scope.eliminarActividad = function (obj){

      if(obj != -1)
        $scope.actividadesTunelIntPoniente.splice(obj, 1);
  }

})



metro.controller('informeTunelEstacionOrienteCtrl', function($scope, $ionicActionSheet, $timeout) {

  $scope.actividad                  = {};
  $scope.secuenciaTunelEstOriente   = [];
  $scope.actividadesTunelEstOriente = [];
  $scope.relacion                   = {side_drift:"",secuencia:""};


  $scope.agregarSecuencia = function(){

      data = {}
      data.side_drift = "";
      data.secuencia="";
      $scope.secuenciaTunelEstOriente.push(data);

  }

  $scope.agregarActividades = function(){

      if( $scope.relacion.side_drift == "" && $scope.relacion.secuencia == ""){

          // Show the action sheet
         var hideSheet = $ionicActionSheet.show({

           titleText: 'Debes seleccionar una Relacion con Informacion',
           cancelText: 'OK',
           cancel: function() {
                // add cancel code..
              },
           buttonClicked: function(index) {
             return true;
           }
         });

          return;
      }

      data = {}
      data.actividad     = $scope.actividad.nombre;
      data.marco_inicial = "";
      data.hora_inicial  = "";
      data.marco_final   = "";
      data.hora_final    = "";
      data.distancia     = "";
      data.side_drift    = $scope.relacion.side_drift;
      data.secuencia     = $scope.relacion.secuencia;
      $scope.actividadesTunelEstOriente.push(data);

  }

  $scope.relacionar = function(obj){

      $scope.relacion.side_drift  = $scope.secuenciTunelEstOriente[obj].side_drift;
      $scope.relacion.secuencia   = $scope.secuenciaTunelEstOriente[obj].secuencia;
  }

  $scope.eliminarActividad = function (obj){

      if(obj != -1)
        $scope.actividadesTunelEstOriente.splice(obj, 1);
  }

})




metro.controller('informeTunelEstacionPonienteCtrl', function($scope, $ionicActionSheet, $timeout) {

  $scope.actividad                  = {};
  $scope.secuenciaTunelEstPoniente   = [];
  $scope.actividadesTunelEstPoniente = [];
  $scope.relacion                   = {side_drift:"",secuencia:""};


  $scope.agregarSecuencia = function(){

      data = {}
      data.side_drift = "";
      data.secuencia="";
      $scope.secuenciaTunelEstPoniente.push(data);

  }

  $scope.agregarActividades = function(){

      if( $scope.relacion.side_drift == "" && $scope.relacion.secuencia == ""){

          // Show the action sheet
         var hideSheet = $ionicActionSheet.show({

           titleText: 'Debes seleccionar una Relacion con Informacion',
           cancelText: 'OK',
           cancel: function() {
                // add cancel code..
              },
           buttonClicked: function(index) {
             return true;
           }
         });

          return;
      }

      data = {}
      data.actividad     = $scope.actividad.nombre;
      data.marco_inicial = "";
      data.hora_inicial  = "";
      data.marco_final   = "";
      data.hora_final    = "";
      data.distancia     = "";
      data.side_drift    = $scope.relacion.side_drift;
      data.secuencia     = $scope.relacion.secuencia;
      $scope.actividadesTunelEstPoniente.push(data);

  }

  $scope.relacionar = function(obj){

      $scope.relacion.side_drift  = $scope.secuenciaTunelEstPoniente[obj].side_drift;
      $scope.relacion.secuencia   = $scope.secuenciaTunelEstPoniente[obj].secuencia;
  }

  $scope.eliminarActividad = function (obj){

      if(obj != -1)
        $scope.actividadesTunelEstPoniente.splice(obj, 1);
  }

})



metro.controller('informePersonalObraCtrl', function($scope) {

    $scope.indirecta = {}

    $scope.directa   = {}

    $scope.total_indirecta = 0;

    $scope.total_directa = 0;

   $scope.$watchCollection('indirecta', function (newVal, oldVal) {

        $scope.total_indirecta = 0;

        angular.forEach(newVal, function(value, key) {
             $scope.total_indirecta =  $scope.total_indirecta + parseInt(value);
        });
   });



   $scope.$watchCollection('directa', function (newVal, oldVal) {

        $scope.total_directa = 0;

        angular.forEach(newVal, function(value, key) {
             $scope.total_directa =  $scope.total_directa + parseInt(value);
        });
   });


})



metro.controller('informeMaquinariaCtrl', function($scope, $ionicPopup, MaquinariaFactory) {


    $scope.current     = { index: "", field: "" };
    $scope.maquinarias = MaquinariaFactory.formData();

    $scope.fieldCurrent = function(obj,field){
        $scope.current.index  = obj;
         $scope.current.field  = field;
    }

    /* creamos el observador de la collecion de maquinarias */
    $scope.$watchCollection('maquinarias', function (newVal, oldVal) {

        console.log(newVal);
        angular.forEach(newVal, function(value, key) {

        });
    });

    /* creamos el scope para las fechas */

    $scope.timePickerObject24Hour = {
      inputEpochTime: ((new Date()).getHours() * 60 * 60),  //Optional
      step: 15,  //Optional
      format: 24,  //Optional
      titleLabel: 'Selecciona la Hora',  //Optional
      closeLabel: 'Cancel',  //Optional
      setLabel: 'Select',  //Optional
      setButtonType: 'button-balanced',  //Optional
      closeButtonType: 'button-positive',  //Optional
      callback: function (val) {    //Mandatory


        if( val === undefined ){
            return;
        }

        var campo  = $scope.current.field ;

        if( campo == "op_inicio" ){

          timePicker24Callback(val);

        }else if( campo == "op_termino" ){

          timePicker24Callback2(val);

        }else if( campo == "panne_inicio" ){

          timePicker24Callback3(val);

        }else if( campo == "panne_termino" ){

          timePicker24Callback4(val);

        }else if( campo == "stand_inicio" ){

          timePicker24Callback5(val);

        }else if( campo == "stand_termino" ){

          timePicker24Callback6(val);
        }

      }

    };



    function timePicker24Callback(val) {

        var selectedTime = new Date(val * 1000);
        var segundos = selectedTime.getUTCMinutes();
        if( segundos == 0){
            segundos = segundos+"0";
        }
        $scope.timePickerObject24Hour.inputEpochTime = val;

        $scope.maquinarias[$scope.current.index].op_inicio = selectedTime.getUTCHours()+ ':'+ segundos;


        var value1 = $scope.maquinarias[$scope.current.index].op_inicio ;
        var value2 = $scope.maquinarias[$scope.current.index].op_termino ;


          if(  value1 !== undefined  && value2 !== undefined   ){

              value1 = value1.split(":");
              value2  = value2.split(":");

              var dateA = moment({hour :value1[0], minute :value1[1]});
              var dateB = moment({hour :value2[0], minute :value2[1]});

              var minutos =  value2[1] -  value1[1];
              if( minutos < 0 ){

                  minutos  = minutos + 60 ;
                  minutos = 60-minutos ;

              }else if( minutos < 10 ){

                  minutos  =  "0"+minutos  ;
              }



              var resultado  = dateB.diff(dateA, 'hours')+":"+minutos;



             $scope.maquinarias[$scope.current.index].total_op = resultado;
          }

//total_panne
//total_stand
    }


    function timePicker24Callback2(val) {

        var selectedTime = new Date(val * 1000);
        var segundos = selectedTime.getUTCMinutes();
        if( segundos == 0){
            segundos = segundos+"0";
        }
        $scope.timePickerObject24Hour.inputEpochTime = val;

        $scope.maquinarias[$scope.current.index].op_termino = selectedTime.getUTCHours()+ ':'+ segundos;

          var value1 = $scope.maquinarias[$scope.current.index].op_inicio ;
        var value2 = $scope.maquinarias[$scope.current.index].op_termino ;


          if(  value1 !== undefined  && value2 !== undefined   ){

              value1 = value1.split(":");
              value2  = value2.split(":");

              var dateA = moment({hour :value1[0], minute :value1[1]});
              var dateB = moment({hour :value2[0], minute :value2[1]});

              var minutos =  value2[1] -  value1[1];
              if( minutos < 0 ){

                  minutos  = minutos + 60 ;
                  minutos = 60-minutos ;

              }else if( minutos < 10 ){

                  minutos  =  "0"+minutos  ;
              }



              var resultado  = dateB.diff(dateA, 'hours')+":"+minutos;



             $scope.maquinarias[$scope.current.index].total_op = resultado;
          }
    }

    function timePicker24Callback3(val) {

        var selectedTime = new Date(val * 1000);
        var segundos = selectedTime.getUTCMinutes();
        if( segundos == 0){
            segundos = segundos+"0";
        }
        $scope.timePickerObject24Hour.inputEpochTime = val;

        $scope.maquinarias[$scope.current.index].panne_inicio = selectedTime.getUTCHours()+ ':'+ segundos;
    }

    function timePicker24Callback4(val) {

        var selectedTime = new Date(val * 1000);
        var segundos = selectedTime.getUTCMinutes();
        if( segundos == 0){
            segundos = segundos+"0";
        }
        $scope.timePickerObject24Hour.inputEpochTime = val;

        $scope.maquinarias[$scope.current.index].panne_termino = selectedTime.getUTCHours()+ ':'+ segundos;
    }

    function timePicker24Callback5(val) {

        var selectedTime = new Date(val * 1000);
        var segundos = selectedTime.getUTCMinutes();
        if( segundos == 0){
            segundos = segundos+"0";
        }
        $scope.timePickerObject24Hour.inputEpochTime = val;

        $scope.maquinarias[$scope.current.index].stand_inicio = selectedTime.getUTCHours()+ ':'+ segundos;
    }

    function timePicker24Callback6(val) {

        var selectedTime = new Date(val * 1000);
        var segundos = selectedTime.getUTCMinutes();
        if( segundos == 0){
            segundos = segundos+"0";
        }
        $scope.timePickerObject24Hour.inputEpochTime = val;

        $scope.maquinarias[$scope.current.index].stand_termino = selectedTime.getUTCHours()+ ':'+ segundos;
    }




})


metro.controller('InformeImageCtrl', function($scope,$cordovaCamera) {



  document.addEventListener("deviceready", function () {

    $scope.images = [];
    $scope.zonas = ["zona1","zona2","zona3","zona4","zona5","perno","pique","galeria_ventilacion","galeria_secundaria","galeria_terciaria"];


    $scope.upload = function() {
        var options = {
            quality : 75,
            destinationType : Camera.DestinationType.DATA_URL,
            sourceType : Camera.PictureSourceType.CAMERA,
            allowEdit : true,
            encodingType: Camera.EncodingType.JPEG,
            targetWidth: 500,
            popoverOptions: CameraPopoverOptions,
            targetHeight: 500,
            saveToPhotoAlbum: false
        };
        $cordovaCamera.getPicture(options).then(function(imageData) {

            $scope.images.push( { src:"data:image/jpeg;base64," + imageData, zona:"", actividad:"", observacion:"" } );

        }, function(error) {
            console.error(error);
        });
    }



  }, false);




})



metro.controller('InformeHormigonCtrl', function($scope) {

    $scope.hormigones = [];
    $scope.hormigones.push({ cono:"", mixer:"", proveedor:"", hora_salida:"", llegada:"",
                  inicio:"", termino:"", guia:"", temperatura:"", transportado:"", volcado:""

               });

  $scope.agregarHormigon = function(){

    $scope.hormigones.push({ cono:"", mixer:"", proveedor:"", hora_salida:"", llegada:"",
                  inicio:"", termino:"", guia:"", temperatura:"", transportado:"", volcado:""

               });

  }
  $scope.eliminarActividad = function (obj){

      if(obj != -1)
        $scope.hormigones.splice(obj, 1);
  }

})



metro.controller('InformeMarinaCtrl', function($scope) {

  $scope.marinas= [];

  $scope.marinas.push({
      modelo :"",
      numero :"",
      tonelaje :"",
      destino :"",
      total :""
  });

  $scope.agregarMarina = function(){

      $scope.marinas.push({
          modelo :"",
          numero :"",
          tonelaje :"",
          destino :"",
          total :""
      });
  }

  $scope.eliminarMarina = function (obj){

      if(obj != -1)
        $scope.marinas.splice(obj, 1);
  }




})

metro.controller('InformePernosCtrl', function($scope,Actividades) {

  $scope.actividadesPerno = [];

  $scope.actividades = Actividades.pernos();

  $scope.eliminarActividad = function (obj){

      if(obj != -1)
        $scope.actividadesPerno.splice(obj, 1);
  }


  $scope.agregarActividades = function(){

      if( $scope.zona == "" && $scope.tipo_perno == ""){

          // Show the action sheet
         var hideSheet = $ionicActionSheet.show({

           titleText: 'Debes seleccionar una una Zona/Tipo Perno',
           cancelText: 'OK',
           cancel: function() {
                // add cancel code..
              },
           buttonClicked: function(index) {
             return true;
           }
         });

          return;
      }

      var act = $scope.actividades.filter(function(item){ return item.id ==  $scope.actividad;  });

      data = {}
      data.actividad      = act[0];
      data.numero_perno   = "";
      data.zona           = $scope.pernos.zona;
      data.tipo_perno     = $scope.pernos.tipo_perno;
      data.hora_final     = "";
      data.distancia      = "";

      $scope.actividadesPerno.push(data);
  }

})


metro.controller('InformePiqueCtrl', function($scope,Actividades) {


  $scope.actividadesPique = [];

  $scope.actividades = Actividades.pique();

  $scope.eliminarActividad = function (obj){

      if(obj != -1)
        $scope.actividadesPique.splice(obj, 1);
  }

  $scope.agregarActividades = function(){

      var act = $scope.actividades.filter(function(item){ return item.id ==  $scope.actividad;  });

      data = {}
      data.actividad      = act[0];
      data.etapa          = "";
      data.profundidad    = "";
      data.hora_inicial   = "";
      data.hora_final     = "";


      $scope.actividadesPique.push(data);
  }

})




metro.controller('InformeGaleriaVentilacionCtrl', function($scope,Actividades) {



  $scope.actividadesGaleria = [];

  $scope.actividades = Actividades.ventilacion();

  $scope.eliminarActividad = function (obj){

      if(obj != -1)
        $scope.actividadesGaleria.splice(obj, 1);
  }

  $scope.agregarActividades = function(){

      var act = $scope.actividades.filter(function(item){ return item.id ==  $scope.actividad;  });

      data = {}
      data.actividad      = act[0];
      data.marco_inicial= "";
      data.marco_final= "";
      data.hora_final= "";
      data.distancia= "";
      data.secuencia= $scope.galeria.secuencia;

      $scope.actividadesGaleria.push(data);
  }

})

metro.controller('InformeGaleriaSecundariaCtrl', function($scope,Actividades) {


  $scope.actividadesGaleria = [];

  $scope.actividades = Actividades.secundaria();

  $scope.eliminarActividad = function (obj){

      if(obj != -1)
        $scope.actividadesGaleria.splice(obj, 1);
  }

  $scope.agregarActividades = function(){

      var act = $scope.actividades.filter(function(item){ return item.id ==  $scope.actividad;  });

      data = {}
      data.actividad      = act[0];
      data.marco_inicial  = "";
      data.marco_final    = "";
      data.hora_final     = "";
      data.distancia      = "";
      data.direccion      = $scope.galeria.direccion;
      data.secuencia      = $scope.galeria.secuencia;
      data.subsecuencia   = $scope.galeria.subsecuencia;


      $scope.actividadesGaleria.push(data);
  }

})

metro.controller('InformeGaleriaTerciariaCtrl', function($scope,Actividades) {

  $scope.actividadesGaleria = [];

  $scope.actividades = Actividades.secundaria();

  $scope.eliminarActividad = function (obj){

      if(obj != -1)
        $scope.actividadesGaleria.splice(obj, 1);
  }

  $scope.agregarActividades = function(){

      var act = $scope.actividades.filter(function(item){ return item.id ==  $scope.actividad;  });

      data = {}
      data.actividad      = act[0];
      data.marco_inicial  = "";
      data.marco_final    = "";
      data.hora_final     = "";
      data.distancia      = "";
      data.secuencia      = $scope.galeria.secuencia;
      data.subsecuencia   = $scope.galeria.subsecuencia;


      $scope.actividadesGaleria.push(data);
  }

})


metro.controller('InformeNichosCtrl', function($scope,Actividades) {

  $scope.actividad          = {};
  $scope.secuenciaGaleria   = [];
  $scope.actividadesGaleria = [];
  $scope.relacion           = {secuencia:""};


  $scope.agregarSecuencia = function(){

      data = {}
      data.elemento = "";
      data.secuencia="";
      $scope.secuenciaGaleria.push(data);

  }

  $scope.agregarActividades = function(){

      if(   $scope.relacion.secuencia == ""){

          // Show the action sheet
         var hideSheet = $ionicActionSheet.show({

           titleText: 'Debes seleccionar una Relacion con Informacion',
           cancelText: 'OK',
           cancel: function() {
                // add cancel code..
              },
           buttonClicked: function(index) {
             return true;
           }
         });

          return;
      }

      var act = $scope.actividades.filter(function(item){ return item.id ==  $scope.actividad;  });


      data = {}
      data.actividad     =  act[0];
      data.marco_inicial = "";
      data.hora_inicial  = "";
      data.marco_final   = "";
      data.hora_final    = "";
      data.distancia     = "";
      data.secuencia     = $scope.relacion.secuencia;
      $scope.actividadesGaleria.push(data);

  }

  $scope.relacionar = function(obj){

      $scope.relacion.secuencia   = $scope.secuenciaGaleria[obj].secuencia;
  }

  $scope.eliminarActividad = function (obj){

      if(obj != -1)
        $scope.actividadesGaleria.splice(obj, 1);
  }

  $scope.fillActividades= function (obj){

       if( obj.elemento == "Galeria"){

          $scope.actividades          = Actividades.bombeo1();

       }else if( obj.elemento == "Timpano"){

          $scope.actividades          = Actividades.bombeo1();

       }else if( obj.elemento == "Radier"){

          $scope.actividades          = Actividades.bombeo3();

       }else if( obj.elemento == "Pique"){

          $scope.actividades          = Actividades.bombeo2();
       }
  }

})



metro.controller('InformeBombeoCtrl', function($scope,Actividades) {


  $scope.actividad          = {};
  $scope.secuenciaGaleria   = [];
  $scope.actividadesGaleria = [];
  $scope.relacion           = {secuencia:""};


  $scope.agregarSecuencia = function(){

      data = {}
      data.elemento = "";
      data.secuencia="";
      $scope.secuenciaGaleria.push(data);

  }

  $scope.agregarActividades = function(){

      if(   $scope.relacion.secuencia == ""){

          // Show the action sheet
         var hideSheet = $ionicActionSheet.show({

           titleText: 'Debes seleccionar una Relacion con Informacion',
           cancelText: 'OK',
           cancel: function() {
                // add cancel code..
              },
           buttonClicked: function(index) {
             return true;
           }
         });

          return;
      }

      var act = $scope.actividades.filter(function(item){ return item.id ==  $scope.actividad;  });


      data = {}
      data.actividad     =  act[0];
      data.marco_inicial = "";
      data.hora_inicial  = "";
      data.marco_final   = "";
      data.hora_final    = "";
      data.distancia     = "";
      data.secuencia     = $scope.relacion.secuencia;
      $scope.actividadesGaleria.push(data);

  }

  $scope.relacionar = function(obj){

      $scope.relacion.secuencia   = $scope.secuenciaGaleria[obj].secuencia;
  }

  $scope.eliminarActividad = function (obj){

      if(obj != -1)
        $scope.actividadesGaleria.splice(obj, 1);
  }

  $scope.fillActividades= function (obj){

       if( obj.elemento == "Galeria"){

          $scope.actividades          = Actividades.bombeo1();

       }else if( obj.elemento == "Timpano"){

          $scope.actividades          = Actividades.bombeo1();

       }else if( obj.elemento == "Radier"){

          $scope.actividades          = Actividades.bombeo3();

       }else if( obj.elemento == "Pique"){

          $scope.actividades          = Actividades.bombeo2();
       }
  }

})






