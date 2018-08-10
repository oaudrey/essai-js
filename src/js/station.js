// Prendre le meme wording que l'API JCDECAUX
//  "bike_stands": 20,
//  "available_bike_stands": 15,
//  "available_bikes": 5,
// On va ajouter un ID
// "number": 123,

function StationVelov (latitude,longitude,espaceDispo,nombreVelo) {
this.latitude = latitude;
this.longitude = longitude;
this.espaceDispo = espaceDispo;
this.nombreVelo = nombreVelo;
}

// Créer des objets avec les données de l'API une fois qu'on a récupéré les données

var stationVelov1 = new StationVelov (45.7712918,4.828083099999958,20,0);
var stationVelov2 = new StationVelov (45.7699424,4.80371839999998,20,3);
var stationVelov3 = new StationVelov (45.7477113,4.824099899999965,15,10);
var stationVelov4 = new StationVelov (45.78095219999999,4.824349100000063,30,2);

var StationVelov =[stationVelov1, stationVelov2, stationVelov3, stationVelov4];


// Ajout d'un icone
var Icon = L.icon({
            iconUrl: 'src/img/icon.png',
            iconSize: [30, 30],
            popupAnchor:  [0, -20]});

// Boucle pour afficher les markers
// on ajoute un texte au marker avec le nombre de bornes et  les vélos disponibles et l'ID
StationVelov.forEach(function(element) {
  console.log(element);
  console.log(element.latitude);
  console.log(element.longitude);

L.marker([element.latitude, element.longitude], {icon: Icon}).addTo(mymap);

});



mymap.addEventListener('click', function(){
  console.log($(this));

});

// Une fois que la personne a cliqué on récupère le texte sur le marker.
// Ensuite on sléectionne le composant HTML avec querySelector --> https://developer.mozilla.org/fr/docs/Web/API/Document/querySelector
// ou avec getElementByID --> https://developer.mozilla.org/fr/docs/Web/API/Document/getElementById
// On ajoute du texte à ce composant avec innerHTML -->





