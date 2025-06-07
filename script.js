// Récupération des éléments DOM
const btn = document.getElementById('btn');
const colorDisplay = document.getElementById('colorDisplay');
const colorCode = document.getElementById('colorCode');

// Fonction pour générer un code couleur hex aléatoire
function getRandomColor() {
  const hex = Math.floor(Math.random() * 0xFFFFFF)
    .toString(16)
    .padStart(6, '0');
  return '#' + hex;
}

// Fonction qui applique la couleur générée
function applyRandomColor() {
  const color = getRandomColor();
  colorDisplay.style.backgroundColor = color;
  colorCode.textContent = color;
}

// Écouteur sur le bouton
btn.addEventListener('click', applyRandomColor);

// Exécute une couleur dès le chargement de la page
applyRandomColor();
