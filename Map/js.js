var mymap = L.map('mapid').setView([46.305, 7.52], 16);

L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
    maxZoom: 25,
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, ' +
        '<a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
        'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    id: 'mapbox.streets'
}).addTo(mymap);

//Partie concernant l'integration d'un geoJson

// var district_boundary = new L.geoJson();
// district_boundary.addTo(map);
//
// $.ajax({
//     dataType: "json",
//     url: "test.geojson",
//     success: function(data) {
//         $(data.features).each(function(key, data) {
//             district_boundary.addData(data);
//         });
//     }
// }).error(function() {});


var geojsonLayer = new L.GeoJSON.AJAX("test.geojson");
geojsonLayer.addTo(mymap);

var polygon1 = L.polygon([
    [46.304888, 7.525616],
    [46.305082, 7.525262],
    [46.305099, 7.525085],
    [46.305021, 7.524557],
    [46.304532, 7.524988]
]).addTo(mymap);

var polygon2 = L.polygon([
    [46.305021, 7.524557],
    [46.304532, 7.524988],
    [46.304176, 7.524259],
    [46.304942, 7.524052]
]).addTo(mymap);

var polygon3 = L.polygon([
    [46.304176, 7.524259],
    [46.304942, 7.524052],
    [46.304808, 7.523236],
    [46.303741, 7.523209]
]).addTo(mymap);


polygon1.bindTooltip("451",
    {permanent: true, direction:"center"}
).openTooltip()

polygon2.bindTooltip("452",
    {permanent: true, direction:"center"}
).openTooltip()

polygon3.bindTooltip("453",
    {permanent: true, direction:"center"}
).openTooltip()


// Définition des icônes
var circle = L.icon({
    iconUrl: "Icons/circle.svg",
    iconSize:     [38, 95], // size of the icon
    iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
    popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
}, mymap.on('click', onMapClickValve));

var square = L.icon({
    iconUrl: "Icons/square.svg",
    iconSize:     [38, 95], // size of the icon
    iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
    popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
}, mymap.on('click', onMapClickJet));

var triangle = L.icon({
    iconUrl: "Icons/triangle.svg",
    iconSize:     [38, 95], // size of the icon
    iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
    popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor

}, mymap.on('click', onMapClickRobinet));

//Placement des icônes
L.marker([46.306179,7.522609], {icon: circle}).addTo(mymap);
L.marker([46.305357,7.523285], {icon: triangle}).addTo(mymap);
L.marker([46.304571,7.52394], {icon: square}).addTo(mymap);
L.marker([46.304045,7.523661], {icon: triangle}).addTo(mymap);
L.marker([46.303963, 7.525345], {icon: triangle}).addTo(mymap);
L.marker([46.305312, 7.517996], {icon: circle}).addTo(mymap);


function onMapClickValve(e) {
    open("Work/Valve.html");
}

function onMapClickJet(e) {
    open("Work/jet.html");
}

function onMapClickRobinet(e) {
    open("Work/robinet.html");
}

//mymap.on('click', onMapClick);