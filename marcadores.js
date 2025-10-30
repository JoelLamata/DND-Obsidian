export const MarkerTypes = {
  CITY: 'city',
  RIVER: 'river',
  FOREST: 'forest',
  MOUNTAIN: 'mountain',
  MISSION: 'mission'
};

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

var missionIcon = L.icon({
  iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
  iconAnchor: [12, 41],
  popupAnchor: [0, -32],
  className: 'golden'
});

export const markerIcons = {
  [MarkerTypes.CITY]: cityIcon,
  [MarkerTypes.RIVER]: riverIcon,
  [MarkerTypes.FOREST]: forestIcon,
  [MarkerTypes.MOUNTAIN]: mountainIcon,
  [MarkerTypes.MISSION]: missionIcon,
};

export const popupContents = {
  [MarkerTypes.CITY]: function(marker) {
      return '<h2>' + marker.name + '</h2><p><a href="./Almanaque del mundo/Ubicaciones/' + marker.name + '/">Nota sobre ' + marker.name + '</a></p>';
  },
  [MarkerTypes.RIVER]: function(marker) {
      return '<h2>' + marker.name + '</h2><p><a href="./Almanaque del mundo/Ubicaciones/' + marker.name + '/">Nota sobre ' + marker.name + '</a></p>';
  },
  [MarkerTypes.FOREST]: function(marker) {
      return '<h2>' + marker.name + '</h2><p><a href="./Almanaque del mundo/Ubicaciones/' + marker.name + '/">Nota sobre ' + marker.name + '</a></p>';
  },
  [MarkerTypes.MOUNTAIN]: function(marker) {
      return '<h2>' + marker.name + '</h2><p><a href="./Almanaque del mundo/Ubicaciones/' + marker.name + '/">Nota sobre ' + marker.name + '</a></p>';
  },
  [MarkerTypes.MISSION]: function(marker) {
      return '<h2>' + marker.name + '</h2><p><a href="./Almanaque del mundo/Misiones/' + marker.name + '/">Nota sobre ' + marker.name + '</a></p>';
  }
};

export var markersData = [
    {
      "name": "Waterdeep",
      "coordinates": [74.179817, 149.076233],
      "type": MarkerTypes.CITY,
      "isActive": true
    },
    {
      "name": "Candlekeep",
      "coordinates": [44.731126, 167.937012],
      "type": MarkerTypes.CITY,
      "isActive": true
    },
    {
      "name": "Baldur's Gate",
      "coordinates": [53.481508, 173.125305],
      "type": MarkerTypes.CITY,
      "isActive": true
    },
    {
      "name": "The Cloakwood",
      "coordinates": [49.296472, 169.189453],
      "type": MarkerTypes.FOREST,
      "isActive": true
    },
    {
      "name": "Wood of Sharp Teeth",
      "coordinates": [47.428087, 188.393555],
      "type": MarkerTypes.FOREST,
      "isActive": true
    },
    {
      "name": "The Cloud Peaks",
      "coordinates": [33.85217, 178.374023],
      "type": MarkerTypes.MOUNTAIN,
      "isActive": true
    },
    {
      "name": "En busca de Dormilana",
      "coordinates": [49.296472, 169.689453],
      "type": MarkerTypes.MISSION,
      "isActive": true
    },
    {
      "name": "TODO",
      "coordinates": [47.428087, 188.393555],
      "type": MarkerTypes.FOREST,
      "isActive": false
    }
]