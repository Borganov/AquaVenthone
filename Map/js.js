var mymap = L.map('mapid').setView([46.305, 7.52], 16);

L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
    maxZoom: 25,
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, ' +
        '<a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
        'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    id: 'mapbox.streets'
}).addTo(mymap);

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



function onMapClick(e) {
    alert("You clicked the map at " + e.latlng);
}

mymap.on('click', onMapClick);