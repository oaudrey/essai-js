  var mymap = L.map('mapid').setView([45.764043,4.835658999999964], 13);

  L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=' + 'pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
    maxZoom: 18,
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, ' +
      '<a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
      'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    id: 'mapbox.streets'
  }).addTo(mymap);

// To Do
// Créer des objets pour chaque station de vélov
// Quand on clique sur une station afficher les places disponibles
// test

function initMap() {
  mymap.initVelov(45.764043,4.835658999999964, "https://api.jcdecaux.com/vls/v1/stations?contract=Lyon&apiKey=6d2841aefdf734a6dac8cf31043e3a556617a050");
}