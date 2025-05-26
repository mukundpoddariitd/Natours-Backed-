/* eslint-disable */
import maplibregl from 'maplibre-gl';

export const displayMap = locations => {
  const map = new maplibregl.Map({
    container: 'map',
    style: 'https://basemaps.cartocdn.com/gl/voyager-gl-style/style.json',
    center: locations[0].coordinates,
    zoom: 8
  });

  locations.forEach(location => {
    const el = document.createElement('div');
    el.className = 'marker';

    new maplibregl.Marker(el)
      .setLngLat(location.coordinates)
      .setPopup(
        new maplibregl.Popup({ offset: 25 })
          .setMaxWidth('25rem')
          .setHTML(
            `<div class='maplibregl-popup-content'><h4>${
              location.description
            }</h4><p>Day: ${location.day}</p></div>`
          )
      )
      .addTo(map);
  });
};
