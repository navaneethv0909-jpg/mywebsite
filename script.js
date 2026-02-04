let map;

// EV Charging Stations (sample data – you can add more)
const stations = [
  { name: "MG Road EV Charger", lat: 9.9816, lon: 76.2767 },
  { name: "Kakkanad EV Charger", lat: 10.0159, lon: 76.3419 },
  { name: "Edappally EV Charger", lat: 10.0261, lon: 76.3086 }
];

// Step 1: Get user location
function getUserLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showMap, showError);
  } else {
    alert("Geolocation is not supported by your browser.");
  }
}

// Step 2: Show map & nearest stations
function showMap(position) {
  const userLat = position.coords.latitude;
  const userLon = position.coords.longitude;

  document.getElementById("welcome-screen").style.display = "none";
  document.getElementById("map-container").style.display = "block";

  map = L.map("map").setView([userLat, userLon], 13);

  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution: "© OpenStreetMap contributors"
  }).addTo(map);

  // User marker
  L.marker([userLat, userLon])
    .addTo(map)
    .bindPopup("<b>You are here</b>")
    .openPopup();

  // EV stations
  stations.forEach(station => {
    L.marker([station.lat, station.lon])
      .addTo(map)
      .bindPopup(
        `<b>${station.name}</b><br>
         <a href="https://www.google.com/maps?q=${station.lat},${station.lon}" target="_blank">
         Navigate</a>`
      );
  });
}

// Error handling
function showError() {
  alert("Location access denied. Please allow location permission.");
}


