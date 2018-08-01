function StationVelov (latitude,longitude,espaceDispo,nombreVelo) {
this.latitude = latitude;
this.longitude = longitude;
this.espaceDispo = espaceDispo;
this.nombreVelo = nombreVelo;
}

var StationVelov1 = new StationVelov (45.7712918,4.828083099999958,20,0);
var StationVelov2 = new StationVelov (45.7699424,4.80371839999998,20,3);
var StationVelov3 = new StationVelov (45.7477113,4.824099899999965,15,10);
var StationVelov4 = new StationVelov (45.78095219999999,4.824349100000063,30,2);


// Dans var StationVelov il faudrait plutot mettre tous les objets définis au dessus (l.8 à l.11).
// En fait tu repetes 2 fois la même chose dans ton code.
// par exemple:
// var StationVelov = [StationVelov1, StationVelov2, etc...]

var StationVelov =[
    {
        name: 'StationVelov1',
        latitude: '45.7712918',
        longitude: '4.828083099999958',
        espaceDispo: '20',
        nombreVelo: '0'
    },
    {
        name: 'StationVelov2',
        latitude: '45.7699424',
        longitude: '4.80371839999998',
        espaceDispo: '20',
        nombreVelo: '3'
    },
    {
        name: 'StationVelov3',
        latitude: '45.7477113',
        longitude: '4.824099899999965',
        espaceDispo: '15',
        nombreVelo: '10'
    },
    {
        name: 'StationVelov4',
        latitude: '45.78095219999999',
        longitude: '4.824349100000063',
        espaceDispo: '30',
        nombreVelo: '2'
    },
];


L.marker([StationVelov1.latitude,StationVelov1.longitude]).addTo(mymap)
L.marker([StationVelov2.latitude,StationVelov2.longitude]).addTo(mymap)
L.marker([StationVelov3.latitude,StationVelov3.longitude]).addTo(mymap)
L.marker([StationVelov4.latitude,StationVelov4.longitude]).addTo(mymap)

StationVelov.forEach(function(element) {
  console.log(element.latitude);
  console.log(element.longitude);
  console.log(element);
  // Maintenant que tu as element tu peux appeler la latitude et longitude
  //  Avec ces 2 données tu construit le marker  en remplacant StationVelov1.latitude par element.latitude etc..

});

// Pour mettre les infos dans l'HTML c'est un peu plus compliqué on va procéder par étape.
// D'abord tu vas faire en sorte que qd on clique sur un station, tu tu récupères l'element qui sur lequel on a cliqué puis tu l'affiches dans la console
// Je te laisse chercher sur internet comment faire
//  Essaie de googeliser ça en mettant de l'anglais de préférence ;)
