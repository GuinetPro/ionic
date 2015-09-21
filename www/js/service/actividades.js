metro.factory('Actividades', function() {


  var actividadesFactory = {};

  actividadesFactory.all = function () {


        return   [
              { id: "86" ,  nombre:"Excavación" },
              { id: "185" , nombre:"Proyección de sello" },
              { id: "196" , nombre:"Instalación 1° Malla" },
              { id: "186" , nombre:"Instalación 1° de armadura" },
              { id: "199" , nombre:"Instalación de marco" },
              { id: "187" , nombre:"Proyección shotcrete Hp1" },
              { id: "188" , nombre:"Instalación 2° Malla" },
              { id: "189" , nombre:"Instalación 2° de armadura" },
              { id: "190" , nombre:"Proyección shotcrete Hp2" },
              { id: "191" , nombre:"Instalación 3° Malla" },
              { id: "195" , nombre:"Instalación 3° de armadura" },
              { id: "194" , nombre:"Proyección shotcrete Hp3" },
              { id: "247" , nombre:"Demolición" },
              { id: "231" , nombre:"Espera suministro hormigón" },
              { id: "232" , nombre:"Falta de materiales" },
              { id: "233" , nombre:"Falta mano de obra" },
              { id: "234" , nombre:"Reproceso" },
              { id: "235" , nombre:"Panne de maquinaria" },
              { id: "236" , nombre:"Acumulación de marina" },
              { id: "237" , nombre:"Cortes de Energía" },
              { id: "238" , nombre:"Sin actividad programada" },
              { id: "239" , nombre:"Coordinación de trabajos" },
              { id: "240" , nombre:"Accidente o indecente" },
              { id: "241" , nombre:"Colación" },
              { id: "242" , nombre:"Otros" }
    ];


  };

  actividadesFactory.pique = function () {


        return   [
              { id:250  , name:"Hormigón brocal"},
              { id:251  , name:"Armadura Brocal"},
              { id:86   , name:"Excavación"},
              { id:185  , name:"Proyección de sello"},
              { id:196  , name:"Instalación 1° malla"},
              { id:187  , name:"Proyección shotcrete Hp1"},
              { id:188  , name:"Instalación 2° malla"},
              { id:190  , name:"Proyección shotcrete Hp2"},
              { id:256  , name:"Instalación de armadura"},
              { id:252  , name:"Excavación pique 1"},
              { id:253  , name:"Excavación pique 2"},
              { id:254  , name:"Excavación pique 3"},
              { id:255  , name:"Excavación pique 4"},
              { id:257  , name:"Armadura pique 1"},
              { id:258  , name:"Armadura pique 2"},
              { id:259  , name:"Armadura pique 3"},
              { id:260  , name:"Armadura pique 4"},
              { id:261  , name:"Hormigón Pique 1"},
              { id:262  , name:"Hormigón Pique 2"},
              { id:263  , name:"Hormigón Pique 3"},
              { id:264  , name:"Hormigón Pique 4"},
              { id:247  , name:"Demolición"},
              { id:231  , name:"Espera suministro hormigón"},
              { id:232  , name:"Falta de materiales"},
              { id:233  , name:"Falta mano de obra"},
              { id:234  , name:"Reproceso"},
              { id:235  , name:"Panne de maquinaria"},
              { id:236  , name:"Acumulación de marina"},
              { id:237  , name:"Cortes de Energía"},
              { id:237  , name:"sin actividad programada"},
              { id:239  , name:"coordinacion de trabajos"},
              { id:240  , name:"accidente o incidente"},
              { id:241  , name:"colación"},
              { id:242  , name:"otros"}
    ];


  };

  actividadesFactory.pernos = function () {


        return   [
            { id:265 , name:"Perforación"},
            { id:266 , name:"Inyección de lechada"},
            { id:267 , name:"Calafateo"},
            { id:268 , name:"Inyección de resina"}
    ];


  };


  actividadesFactory.ventilacion = function () {


        return   [

                { id:86 , name:"Excavación"},
                { id:185 , name:"Proyección de sello"},
                { id:196 , name:"Instalación 1° Malla"},
                { id:186 , name:"Instalación 1° de armadura"},
                { id:199 , name:"Instalación de marco"},
                { id:187 , name:"Proyección shotcrete Hp1"},
                { id:188 , name:"Instalación 2° Malla"},
                { id:189 , name:"Instalación 2° de armadura"},
                { id:190 , name:"Proyección shotcrete Hp2"},
                { id:191 , name:"Instalación 3° Malla"},
                { id:195 , name:"Instalación 3° de armadura"},
                { id:194 , name:"Proyección shotcrete Hp3"},
                { id:247 , name:"Demolición"},
                { id:231 , name:"Espera suministro hormigón"},
                { id:232 , name:"Falta de materiales"},
                { id:233 , name:"Falta mano de obra"},
                { id:234 , name:"Reproceso"},
                { id:235 , name:"Panne de maquinaria"},
                { id:236 , name:"Acumulación de marina"},
                { id:237 , name:"Cortes de Energía"},
                { id:238 , name:"Sin actividad programada"},
                { id:239 , name:"Coordinación de trabajos"},
                { id:240 , name:"Accidente o indecente"},
                { id:241 , name:"Colación"},
                { id:242 , name:"Otros"}
    ];


  };

  actividadesFactory.secundaria = function () {


        return   [

                { id:86 , name:"Excavación"},
                { id:185 , name:"Proyección de sello"},
                { id:196 , name:"Instalación 1° Malla"},
                { id:186 , name:"Instalación 1° de armadura"},
                { id:199 , name:"Instalación de marco"},
                { id:187 , name:"Proyección shotcrete Hp1"},
                { id:188 , name:"Instalación 2° Malla"},
                { id:189 , name:"Instalación 2° de armadura"},
                { id:190 , name:"Proyección shotcrete Hp2"},
                { id:191 , name:"Instalación 3° Malla"},
                { id:195 , name:"Instalación 3° de armadura"},
                { id:247 , name:"Demolición"},
                { id:194 , name:"Proyección shotcrete Hp3"},
                { id:231 , name:"Espera suministro hormigón"},
                { id:232 , name:"Falta de materiales"},
                { id:233 , name:"Falta mano de obra"},
                { id:234 , name:"Reproceso"},
                { id:235 , name:"Panne de maquinaria"},
                { id:236 , name:"Acumulación de marina"},
                { id:237 , name:"Cortes de Energía"},
                { id:238 , name:"Sin actividad programada"},
                { id:239 , name:"Coordinación de trabajos"},
                { id:240 , name:"Accidente o indecente"},
                { id:241 , name:"Colación"},
                { id:242 , name:"Otros"},
                { id:243 , name:"Demoliciones"},
                { id:244 , name:"Instalación 4° Armadura"},
                { id:245 , name:"Proyección de shotcrete Hp4"},
                { id:246 , name:"inyección de resina"}
    ];


  };



  actividadesFactory.bombeo1 = function () {


        return   [
                  { id:86 , name:"Demolición"},
                  { id:86 , name:"Excavación"},
                  { id:86 , name:"proyección de sello"},
                  { id:86 , name:"instalación 1° malla"},
                  { id:86 , name:"instalación 1° armadura"},
                  { id:86 , name:"Instalación"},
                  { id:86 , name:"Proyección shotcrete Hp1"},
                  { id:86 , name:"instalación 2° malla"},
                  { id:86 , name:"instalación 2° armadura"},
                  { id:86 , name:"Proyección shotcrete Hp2"}
          ];


  };

  actividadesFactory.bombeo2 = function () {


        return   [
              { id:86 , name:"Demolición"},
              { id:86 , name:"Excavación"},
              { id:86 , name:"proyección de sello"},
              { id:86 , name:"instalación 1° malla"},
              { id:86 , name:"instalación 1° armadura"},
              { id:86 , name:"Instalación"},
              { id:86 , name:"Proyección shotcrete Hp11"},
              { id:86 , name:"instalación 2° malla"},
              { id:86 , name:"instalación 2° armadura"},
              { id:86 , name:"Proyección shotcrete Hp2"}
      ];


  };

  actividadesFactory.bombeo3 = function () {


        return   [
          { id:86 , name:"instalación 1° armadura"},
          { id:86 , name:"instalación 1° armadura"},
          { id:86 , name:"Hormigón moldeado"},
        ];


  };









  return actividadesFactory;


})