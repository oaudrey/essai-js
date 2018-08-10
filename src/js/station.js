function StationVelov (latitude,longitude,espaceDispo,nombreVelo) {
this.latitude = latitude;
this.longitude = longitude;
this.espaceDispo = espaceDispo;
this.nombreVelo = nombreVelo;
}

var stationVelov1 = new StationVelov (45.7712918,4.828083099999958,20,0);
var stationVelov2 = new StationVelov (45.7699424,4.80371839999998,20,3);
var stationVelov3 = new StationVelov (45.7477113,4.824099899999965,15,10);
var stationVelov4 = new StationVelov (45.78095219999999,4.824349100000063,30,2);


// Dans var StationVelov il faudrait plutot mettre tous les objets définis au dessus (l.8 à l.11).
// En fait tu repetes 2 fois la même chose dans ton code.
// par exemple:
// var StationVelov = [StationVelov1, StationVelov2, etc...]

var StationVelov =[stationVelov1, stationVelov2, stationVelov3, stationVelov4];

// Ajout d'un icone
var Icon = L.icon({
            iconUrl: 'src/img/icon.png',
            iconSize: [30, 30],
            popupAnchor:  [0, -20]});

// Boucle pour afficher les markers

StationVelov.forEach(function(element) {
  console.log(element);
  console.log(element.latitude);
  console.log(element.longitude);

L.marker([element.latitude, element.longitude], {icon: Icon}).addTo(mymap);

});


  // Maintenant que tu as element tu peux appeler la latitude et longitude
  //  Avec ces 2 données tu construit le marker  en remplacant StationVelov1.latitude par element.latitude etc..


// Pour mettre les infos dans l'HTML c'est un peu plus compliqué on va procéder par étape.
// D'abord tu vas faire en sorte que qd on clique sur un station, tu tu récupères l'element qui sur lequel on a cliqué puis tu l'affiches dans la console
// Je te laisse chercher sur internet comment faire
//  Essaie de googeliser ça en mettant de l'anglais de préférence ;)

mymap.addEventListener('click', function(){
  console.log($(this));

});





