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
  console.log(element);
});

