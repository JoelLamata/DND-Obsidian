// Importar la función de manejo de clics en el mapa
import { calcularDistanciaEnMillas } from './distanceCalculator.js';
import { markersData, MarkerTypes } from './marcadores.js';

// URL de la imagen del mapa
var imageUrl = 'https://media.wizards.com/2015/images/dnd/resources/Sword-Coast-Map_HighRes.jpg';

// Coordenadas del mapa
var imageBounds = [
    [0, 0], // Esquina superior izquierda
    [510, 330] // Esquina inferior derecha
];

// Añadir la imagen como un overlay
var faerun = L.imageOverlay(imageUrl, imageBounds); //.addTo(map);

// Crear un grupo de clúster para cada tipo de marcador
var cityMarkers = [];
var riverMarkers = [];
var forestMarkers = [];
var mountainMarkers = [];

// Define diferentes iconos para cada tipo de marcador
var cityIcon = L.icon({
    iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
    iconAnchor: [12, 41],
    popupAnchor: [0, -32],
    className: 'red'
});

var riverIcon = L.icon({
    iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
    iconAnchor: [12, 41],
    popupAnchor: [0, -32],
    className: 'blue'
});

var forestIcon = L.icon({
    iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
    iconAnchor: [12, 41],
    popupAnchor: [0, -32],
    className: 'green'
});

var mountainIcon = L.icon({
    iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
    iconAnchor: [12, 41],
    popupAnchor: [0, -32],
    className: 'gray'
});

markersData.forEach(function (marker) {
    if (!marker.isActive) {
        return;
    }

    var newMarker = L.marker(marker.coordinates);

    // Agregar el marcador al grupo correspondiente según su tipo y le añadimo el color
    switch (marker.type) {
        case MarkerTypes.CITY:
            newMarker.setIcon(cityIcon);
            cityMarkers.push(newMarker);
            break;
        case MarkerTypes.RIVER:
            newMarker.setIcon(riverIcon);
            riverMarkers.push(newMarker);
            break;
        case MarkerTypes.FOREST:
            newMarker.setIcon(forestIcon);
            forestMarkers.push(newMarker);
            break;
        case MarkerTypes.MOUNTAIN:
            newMarker.setIcon(mountainIcon);
            mountainMarkers.push(newMarker);
            break;
        default:
            break;
    }

    var popupContent = '<h2>' + marker.name + '</h2><p><a href="./Almanaque del mundo/Ubicaciones/' + marker.name + '/">Nota sobre ' + marker.name + '</a></p>';
    newMarker.bindPopup(popupContent);
});

var cities = L.layerGroup(cityMarkers);
var rivers = L.layerGroup(riverMarkers);
var forests = L.layerGroup(forestMarkers);
var mountains = L.layerGroup(mountainMarkers);

// Crear el mapa
var map = L.map('map', {
    center: [66.231457, 165.234375],
    zoom: 3,
    layers: [faerun, cities, rivers, forests, mountains]
});

var layerControl = L.control.layers().addTo(map);
layerControl.addOverlay(cities, "Ciudades");
layerControl.addOverlay(rivers, "Rios");
layerControl.addOverlay(forests, "Bosques");
layerControl.addOverlay(mountains, "Montañas");

var popup = L.popup({closeOnClick: false});
var clickPoints = [];
var line;

map.on('click', function(e) {
    // Verificar si se ha presionado la tecla Control al hacer clic
    if (e.originalEvent.ctrlKey) {
        console.log("control click")
        // Borrar la línea anterior si existe
        if (line) {
            map.removeLayer(line);
            popup.close();
        }

        // Agregar las coordenadas del punto clicado al array
        clickPoints.push(e.latlng);

        // Si se han registrado dos puntos, calcular la distancia entre ellos y dibujar una línea
        if (clickPoints.length === 2) {
            var point1 = clickPoints[0];
            var point2 = clickPoints[1];

            // Calcular la distancia entre los dos puntos utilizando la función importada
            var distance = calcularDistanciaEnMillas(point1, point2);

            // Crear una línea poligonal entre los dos puntos
            line = L.polyline([point1, point2], { color: 'red' }).addTo(map);

            // Actualizar el contenido del popup con el resultado de la distancia
            popup.setLatLng(e.latlng)
                 .setContent('La distancia entre los dos puntos es: ' + distance.toFixed(2) + ' millas.')
                 .openOn(map);

            // Limpiar el array para futuros cálculos
            clickPoints = [];
        }
    }
});

