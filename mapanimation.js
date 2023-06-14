   // This array contains the coordinates for all bus stops between San Francisco and Sausalito
   const busStops = [
    [-122.44948320478801, 37.77534785641739],
    [-122.44620208408861, 37.77577609109293],
    [-122.4271621618088, 37.77918123831905],
    [-122.42102337652301, 37.78296008071163],
    [-122.43551400299235, 37.79982956210444],
    [-122.47547446954248, 37.80668649363462],
    [-122.49286422205921, 37.85420519063466],
    [-122.48525681951249, 37.859217348350654],
  ];
  
// Add your own Access Token Here:
  mapboxgl.accessToken = '';
  
  // Creates the map object using mapboxgl.map() function
  let map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11',
    center: [-122.44989725629257, 37.77545675691729],
    zoom: 14,
  });
  
  // Adds a marker to the map
let marker = new mapboxgl.Marker().setLngLat([-122.44989725629257, 37.77545675691729]).addTo(map);

// Start the index of the current bus stop
let counter = 0;


// Initiate the move function
function move() {
  // Updating the marker coordinates
  if (counter >= busStops.length) return;

  // Center the map on the current marker coordinates with animation
  map.flyTo({
    center: busStops[counter],
    zoom: 14,
    speed: 0.3, 
    curve: 1.6, 
    easing: (t) => t, 
  });

   // Callback function to update marker location along with bus stop
  setTimeout(() => {
    if (counter >= busStops.length) return;
    marker.setLngLat(busStops[counter]);
    counter++;
    move();
  }, 1000);
}
