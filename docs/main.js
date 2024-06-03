// Importar la función de manejo de clics en el mapa
import { calcularDistanciaEnMillas } from './distanceCalculator.js';
import { markersData, MarkerTypes, markerIcons, popupContents } from './marcadores.js';

// URL de la imagen del mapa
var imageUrl = 'Imagenes/Maps/Sword-Coast-Map_HighRes.jpg';

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
var missionMarkers = [];

markersData.forEach(function(marker) {
    if (!marker.isActive) {
        return;
    }

    // Crea el nuevo marcador
    var newMarker = L.marker(marker.coordinates);

    // Asigna el icono correspondiente
    if (markerIcons[marker.type]) {
        newMarker.setIcon(markerIcons[marker.type]);
    }

    // Asigna el marcador al grupo correspondiente
    switch (marker.type) {
        case MarkerTypes.CITY:
            cityMarkers.push(newMarker);
            break;
        case MarkerTypes.RIVER:
            riverMarkers.push(newMarker);
            break;
        case MarkerTypes.FOREST:
            forestMarkers.push(newMarker);
            break;
        case MarkerTypes.MOUNTAIN:
            mountainMarkers.push(newMarker);
            break;
        case MarkerTypes.MISSION:
            missionMarkers.push(newMarker);
            break;
        default:
            break;
    }

    // Genera el contenido del popup correspondiente
    if (popupContents[marker.type]) {
        var popupContent = popupContents[marker.type](marker);
        newMarker.bindPopup(popupContent);
    }
});

var cities = L.layerGroup(cityMarkers);
var rivers = L.layerGroup(riverMarkers);
var forests = L.layerGroup(forestMarkers);
var mountains = L.layerGroup(mountainMarkers);
var missions = L.layerGroup(missionMarkers);

// Crear el mapa
var map = L.map('map', {
    center: [66.231457, 165.234375],
    zoom: 3,
    layers: [faerun, cities, rivers, forests, mountains, missions]
});

var layerControl = L.control.layers().addTo(map);
layerControl.addOverlay(cities, "Ciudades");
layerControl.addOverlay(rivers, "Rios");
layerControl.addOverlay(forests, "Bosques");
layerControl.addOverlay(mountains, "Montañas");
layerControl.addOverlay(missions, "Misiones");

var popup = L.popup({closeOnClick: false});
var positionPopup = L.popup();
var clickPoints = [];
var line;

map.on('click', function(e) {
    positionPopup
        .setLatLng(e.latlng)
        .setContent("You clicked the map at " + e.latlng.toString())
        .openOn(map);
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

