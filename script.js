// Initialize map centered on Kochi
var map = L.map('map').setView([9.9312, 76.2673], 12);

// Load OpenStreetMap tiles
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '© OpenStreetMap contributors'
}).addTo(map);

// Sample EV charging stations
var stations = [
  { name: "MG Road EV Charger", lat: 9.9716, lon: 76.2850 },
  { name: "Kakkanad EV Station", lat: 10.0159, lon: 76.3419 },
  { name: "Edappally EV Charger", lat: 10.0286, lon: 76.3085 }
];

// Add markers
stations.forEach(station => {
  L.marker([station.lat, station.lon])
    .addTo(map)
    .bindPopup(station.name);
});

