  var mymap = L.map('mapid').setView([45.764043,4.835658999999964], 13);

  L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=' + 'pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
    maxZoom: 18,
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, ' +
      '<a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
      'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    id: 'mapbox.streets'
  }).addTo(mymap);

  L.marker([45.7712918,4.828083099999958]).addTo(mymap)
    .bindPopup("<b> 1er arrondissement de Lyon.</b><br />").openPopup();

  L.marker([45.7699424,4.80371839999998]).addTo(mymap)
    .bindPopup("<b>9ème arrondissement de Lyon.</b><br />").openPopup();


  L.marker([45.7477113,4.824099899999965]).addTo(mymap)
    .bindPopup("<b>2ème arrondissement de Lyon.</b><br />").openPopup();


  L.marker([45.78095219999999,4.824349100000063]).addTo(mymap)
    .bindPopup("<b>4ème arrondissement de Lyon.</b><br />").openPopup();


// To Do
// Créer des objets pour chaque station de vélov
// Quand on clique sur une station afficher les places disponibles
