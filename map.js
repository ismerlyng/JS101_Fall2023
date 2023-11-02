// Create a new Leaflet map
let poemMap;
poemMap = L.map("map");

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 18,
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(poemMap);

poemMap.setView([40.7128, -74.0060], 16);

//marking times square on the map since the title of the poem is Broadway
const timesSquare = L.marker([40.7580, -73.9855]).addTo(poemMap);
timesSquare.bindPopup("<b>Times Square</b>");

//marking my favorite restaurant
const senzaGluten = L.marker([40.7292, -74.0003]).addTo(poemMap);
senzaGluten.bindPopup("<b>Senza Gluten</b>");

//adding a circle to the map
const circle = L.circle([40.7580, -73.9855], {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    radius: 500
}).addTo(poemMap);

//drawing polyline from times square to grad center
const polyline = L.polyline([
    [40.7580, -73.9855],
    [40.7486, -73.9840]
], {
    color: 'blue'
}).addTo(poemMap);

polyline.bindPopup("<b>Times Square to the Graduate Center</b>");

//drawing polyline from senza gluten to west 4th station
const polylineSenza = L.polyline([
    [40.7292, -74.0003],
    [40.7326, -74.0005]
], {
    color: 'purple'
}).addTo(poemMap);

polylineSenza.bindPopup("<b>Senza Gluten to W 4 St-Washington Sq MTA Station</b>");

circle.bindPopup("I'm a circle!");

//getting longitude and latitude and storing it in variable latLng
const latLng = timesSquare.getLatLng();
console.log(latLng.lat);
console.log(latLng.lng);

poemMap.panTo(timesSquare.getLatLng());

poemMap.on('click', function(e) {
    const latLng = e.latlng;
    console.log(latLng.lat);
    console.log(latLng.lng);
});