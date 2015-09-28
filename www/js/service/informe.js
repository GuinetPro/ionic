metro.factory('Informe', function( $rootScope, $cordovaSQLite, $rootScope, $q) {


  var informeFactory = {};

  informeFactory.modelo = function(){

    return {
      informe_id:"",codigo:"",created_at:"",updated_at:"",estado:"",contratista:"",numero:"",tramo:"",hash:"",turno:"",proyecto:"",fecha:"",ito:""
    }
  };

  informeFactory.all = function () {

        var informeList = [];

        var query = "SELECT * FROM informe";
        $cordovaSQLite.execute($rootScope.db, query, []).then(function(res) {

            if(res.rows.length > 0) {

              for(var i = 0; i < res.rows.length; i++){

                informeList.push(res.rows.item(i));
              }

            }
        }, function (err) {
            console.error(err);
        });

        return informeList;

  };

  informeFactory.Populate = function(){

    var informeList = [
      {
        codigo : "codigo 1",
        created_at : moment().format('YYYY-MM-DD hh:mm:ss'),
        updated_at : moment().format('YYYY-MM-DD hh:mm:ss'),
        estado : 1,
        contratista: "ohl",
        numero : 12,
        tramo :  "Plaza Egaña",
        hash :   "adadaf2441231223ad",
        turno : 1,
        proyecto : 421,
        fecha  : moment().format('YYYY-MM-DD hh:mm:ss'),
        ito : window.localStorage.getItem("idpersona")
      },
      {
        codigo : "codigo 2",
        created_at : moment().format('YYYY-MM-DD hh:mm:ss'),
        updated_at : moment().format('YYYY-MM-DD hh:mm:ss'),
        estado : 1,
        contratista: "ohl",
        numero : 12,
        tramo :  "Chile España",
        hash :   "adadaf2441231223ad",
        turno : 1,
        proyecto : 421,
        fecha  : moment().format('YYYY-MM-DD hh:mm:ss'),
        ito : window.localStorage.getItem("idpersona")
      },
      {
        codigo : "codigo 3",
        created_at : moment().format('YYYY-MM-DD hh:mm:ss'),
        updated_at : moment().format('YYYY-MM-DD hh:mm:ss'),
        estado : 1,
        contratista: "ohl",
        numero : 12,
        tramo :  "Salvador",
        hash :   "adadaf2441231223ad",
        turno : 1,
        proyecto : 421,
        fecha  : moment().format('YYYY-MM-DD hh:mm:ss'),
        ito : window.localStorage.getItem("idpersona")
      },
        {
        codigo : "codigo 4",
        created_at : moment().format('YYYY-MM-DD hh:mm:ss'),
        updated_at : moment().format('YYYY-MM-DD hh:mm:ss'),
        estado : 1,
        contratista: "ohl",
        numero : 12,
        tramo :  "Irarrazaval",
        hash :   "adadaf2441231223ad",
        turno : 1,
        proyecto : 421,
        fecha  : moment().format('YYYY-MM-DD hh:mm:ss'),
        ito : window.localStorage.getItem("idpersona")
      }

    ];

    angular.forEach(informeList, function(value, key) {

        var query = "INSERT INTO informe (codigo,created_at,updated_at,estado,contratista,numero,tramo,hash,turno,proyecto,fecha,ito) VALUES (?,?,?,?,?,?,?,?,?,?,?,?)";

        $cordovaSQLite.execute($rootScope.db, query, [value.codigo,value.created_at,value.updated_at,value.estado,value.contratista,value.numero,value.tramo,value.hash,value.turno,value.proyecto,value.fecha,value.ito]).then(function(res) {
          console.log("insertId: " + res.insertId);
        }, function (err) {
          console.error(err);
        });

    });

    return informeList;
  }


  informeFactory.get = function(id){


  }

  informeFactory.update = function(){


  }


  informeFactory.add = function(data){

        var defered = $q.defer();
        var promise = defered.promise;

        var query = "INSERT INTO informe (codigo,created_at,updated_at,estado,ito) VALUES (?,?,?,?,?)";

        $cordovaSQLite.execute($rootScope.db, query, data ).then(function(res) {

           defered.resolve(res.insertId);

        }, function (err) {
            defered.reject(err);
        });

         return promise;

  }


  return informeFactory;


})