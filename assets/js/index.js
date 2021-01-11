let map;
// [START maps_marker_clustering]
function initMap() {
  const map = new google.maps.Map(document.getElementById("map"), {
    center: { 
        lat: 52.6647, 
        lng: -8.62306 
    },
    zoom: 14,
  });
}
  // Create an array of alphabetical characters used to label the markers.
  const labels = "ABCDEFGHIJKLMNOPQRSTUVWX";
  // Add some markers to the map.
  // Note: The code uses the JavaScript Array.prototype.map() method to
  // create an array of markers based on a given "locations" array.
  // The map() method here has nothing to do with the Google Maps API.
  const markers = locations.map((location, i) => {
    return new google.maps.Marker({
      position: location,
      label: labels[i % labels.length],
    });
  });
  // Add a marker clusterer to manage the markers.
  new MarkerClusterer(map, markers, {
    imagePath:
      "https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m",
  });

const locations = [
  { lat: 52.668497326, lng: -8.621997512 },
  { lat: 52.663686, lng: -8.622573 },
  { lat: 52.669757, lng: -8.628261 },
  { lat: 52.665928, lng: -8.631288 },
  { lat: 52.668813, lng: -8.574657 },
  { lat: 52.662559, lng: -8.540036 },
  { lat: 52.659225, lng: -8.628228 },
  { lat: 52.665467, lng: -8.630342 },
];