metro.factory('Piques', function() {


  var piqueFactory = {};

  piqueFactory.all = function () {


        return   [
                  {pique:"Irarrazaval",tipo_pique:"Estacion"},
                  {pique:"Salvador",tipo_pique:"Construcción"},
                  {pique:"Monseñor Eyzaguirre",tipo_pique:"Estacion"},
                  {pique:"Antonio Varas",tipo_pique:"Construcción"},
                  {pique:"Chile España",tipo_pique:"Estacion"},
                  {pique:"Casa de la Cultura",tipo_pique:"Construcción"},
                  {pique:"Diagonal Oriente",tipo_pique:"Estacion"},
                  {pique:"Plaza Egaña",tipo_pique:"Estacion"},
                  {pique:"Lynch Sur",tipo_pique:"Construcción"},
                  {pique:"Fernando Castillo Velasco",tipo_pique:"Estacion"}
                ];


  };


  return piqueFactory;


})