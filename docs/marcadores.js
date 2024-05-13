export const MarkerTypes = {
  CITY: 'city',
  RIVER: 'river',
  FOREST: 'forest',
  MOUNTAIN: 'mountain'
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
      "name": "TODO",
      "coordinates": [47.428087, 188.393555],
      "type": MarkerTypes.FOREST,
      "isActive": false
    }
]