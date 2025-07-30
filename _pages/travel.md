---
layout: page
title: travel
nav: true
nav_order: 7
permalink: /travel/
---

<div class="post">
  <header class="post-header">
    <p class="post-description">Interactive map of places I've visited. Click a pin to view photos!</p>
  </header>
  <article class="post-content">
    <div id="travel-map" style="height: 650px;"></div>
  </article>
</div>

<!-- Leaflet -->
<link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css" />
<script src="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js"></script>

<!-- GLightbox for image galleries -->
<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/glightbox/dist/css/glightbox.min.css"
/>
<script src="https://cdn.jsdelivr.net/npm/glightbox/dist/js/glightbox.min.js"></script>

<!-- Custom map script -->
<script src="{{ '/assets/js/travel-map.js' | relative_url }}"></script>

<script>
  document.addEventListener('DOMContentLoaded', () => {
    const travelData = {{ site.data.travel | jsonify }};
    initTravelMap(travelData, '{{ site.baseurl }}');
  });
</script>

<style>
  /* Ensure map blends with dark site theme */
  .leaflet-container {
    background: transparent !important;
  }
  .leaflet-control-attribution {
    color: #888 !important;
  }
  .leaflet-tooltip.country-label {
    background: transparent;
    border: none;
    box-shadow: none;
    color: #aaa;
    font-weight: 600;
    text-shadow: 0 0 2px #000;
    pointer-events: none;
  }
</style> 