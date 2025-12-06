// Función para calcular la distancia entre dos puntos, considerando que 1 grado de latitud o longitud equivale a 10 millas
export function calcularDistanciaEnMillas(point1, point2) {
    // Convertir la diferencia de latitud y longitud a millas
    var latDiff = Math.abs(point1.lat - point2.lat) * 10;
    var lngDiff = Math.abs(point1.lng - point2.lng) * 10;

    // Calcular la distancia euclidiana entre los dos puntos (teorema de Pitágoras)
    var distance = Math.sqrt(latDiff * latDiff + lngDiff * lngDiff);

    return distance;
}
