function initTravelMap(data, baseUrl = '') {
  if (typeof L === 'undefined') {
    console.error('Leaflet is not loaded');
    return;
  }

  const map = L.map('travel-map', {
    center: [20, 0],
    zoom: 2,
    scrollWheelZoom: false,
  });

  // Render countries in white using GeoJSON; no basemap so ocean stays black
  fetch('https://raw.githubusercontent.com/datasets/geo-countries/master/data/countries.geojson')
    .then((r) => r.json())
    .then((geo) => {
      const countryLayer = L.geoJSON(geo, {
        style: {
          color: '#555555', // subtle borders
          weight: 0.6,
          fillColor: '#ffffff',
          fillOpacity: 1,
        },
        onEachFeature: (feature, layer) => {
          if (feature.properties && feature.properties.ADMIN) {
            layer.bindTooltip(feature.properties.ADMIN, {
              permanent: true,
              direction: 'center',
              className: 'country-label',
              opacity: 0, // will toggle later
            });
          }
        },
      }).addTo(map);

      // Helper to build absolute asset paths
      const imgBase = `${baseUrl}/assets/img/travel/`;

      data.forEach((country, idx) => {
        const marker = L.marker([country.lat, country.lon]).addTo(map);

        marker.on('click', () => {
          if (!country.images || !country.images.length) return;

          const galleryId = `travel-gallery-${idx}`;
          const anchors = country.images
            .map((img) => {
              const src = img.startsWith('http') ? img : `${imgBase}${country.slug}/${img}`;
              return `<a href="${src}" class="glightbox" data-gallery="${galleryId}"></a>`;
            })
            .join('');

          const temp = document.createElement('div');
          temp.style.display = 'none';
          temp.innerHTML = anchors;
          document.body.appendChild(temp);

          const lightbox = GLightbox({ selector: `a[data-gallery='${galleryId}']` });
          lightbox.open();

          lightbox.on('close', () => temp.remove());
        });
      });

      function adjustStyle() {
        const z = map.getZoom();
        const weight = z < 3 ? 0.3 : z < 5 ? 0.7 : 1.2;
        countryLayer.setStyle({ weight });

        countryLayer.eachLayer((l) => {
          const tt = l.getTooltip();
          if (!tt || !tt._container) return;
          tt._container.style.opacity = z >= 4 ? 0.8 : 0;
          tt._container.style.fontSize = z >= 6 ? '10px' : '8px';
        });
      }

      adjustStyle();
      map.on('zoomend', adjustStyle);
    });
} 