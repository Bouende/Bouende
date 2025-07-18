
// Carte Leaflet
var map = L.map('map').setView([5.34, -4.03], 13);  // Abidjan comme exemple
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  maxZoom: 19
}).addTo(map);

// Formulaire & Export Excel
document.getElementById('dataForm').addEventListener('submit', function(e) {
  e.preventDefault();
  const data = [
    ['Nom', 'Email'],
    [document.getElementById('name').value, document.getElementById('email').value]
  ];
  const wb = XLSX.utils.book_new();
  const ws = XLSX.utils.aoa_to_sheet(data);
  XLSX.utils.book_append_sheet(wb, ws, 'Données');
  XLSX.writeFile(wb, 'donnees_starline.xlsx');
});

// Cookies
document.cookie = "visiteur=oui; path=/;";
