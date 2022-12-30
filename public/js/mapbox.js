export const displayMap = (locations) => {
  mapboxgl.accessToken =
    'pk.eyJ1IjoiamVzdGVyYjAyMDYiLCJhIjoiY2xjOXh5MHN3MWNybzNvcGtzenZ1ODJqbSJ9.qIxPuwU-qIswIMi-F_xarQ';

  var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/jesterb0206/clc9y2q5a004k14l3mzh97gfy',
    scrollZoom: false,
  });

  const bounds = new mapboxgl.LngLatBounds();

  locations.forEach((loc) => {
    // CREATE A MARKER

    const el = document.createElement('div');
    el.className = 'marker';

    // ADD A MARKER

    new mapboxgl.Marker({
      element: el,
      anchor: 'bottom',
    })
      .setLngLat(loc.coordinates)
      .addTo(map);

    // ADD A POPUP

    new mapboxgl.Popup({
      offset: 30,
    })
      .setLngLat(loc.coordinates)
      .setHTML(`<p>Day ${loc.day}: ${loc.description}</p>`)
      .addTo(map);

    // EXTEND MAP BOUNDS TO INCLUDE THE CURRENT LOCATION

    bounds.extend(loc.coordinates);
  });

  map.fitBounds(bounds, {
    padding: {
      top: 200,
      bottom: 150,
      left: 100,
      right: 100,
    },
  });
};
