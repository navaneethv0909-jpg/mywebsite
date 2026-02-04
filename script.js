// Initialize map centered on Kochi
var map = L.map('map').setView([9.95, 76.30], 12);

// Load OpenStreetMap map tiles
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '© OpenStreetMap contributors'
}).addTo(map);

// EV Charging stations data
var stations = [
  { name: "KSEB EV Charging Station - Aluva", lat: 10.1070, lon: 76.3535 },
  { name: "KSEB EV Charging Station - Edappally", lat: 10.0287, lon: 76.3085 },
  { name: "KSEB EV Charging Station - MG Road", lat: 9.9716, lon: 76.2850 },
  { name: "KSEB EV Charging Station - Kakkanad", lat: 10.0159, lon: 76.3419 },
  { name: "TotalEnergies EV Charger - Kadavanthra", lat: 9.9665, lon: 76.3030 },
  { name: "Krishna Motors EV Charger - Palarivattom", lat: 9.9903, lon: 76.2718 },
  { name: "Toyota EV Charger - Kochi", lat: 9.9510, lon: 76.2810 },
  { name: "EVgo Charging - Tripunithura", lat: 9.9621, lon: 76.3205 }
];

// Add markers with popups
stations.forEach(function(station) {
  L.marker([station.lat, station.lon])
    .addTo(map)
    .bindPopup("<strong>" + station.name + "</strong>");
});


