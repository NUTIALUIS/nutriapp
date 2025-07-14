const params = new URLSearchParams(window.location.search);
const tipos = params.get('tipos') || '';
const kcal = params.get('kcal') || 2000;

document.getElementById('info-dieta').innerHTML = `
  <h5>Tipo(s) de dieta: ${tipos.replace(/-/g, ' ')}</h5>
  <p>Calorías diarias: ${kcal} kcal</p>
`;

const tiemposComida = ["Desayuno", "Colación", "Almuerzo", "Merienda", "Cena"];

// Base de recetas ejemplo — podrías mejorarla después
const recetasBase = {
  proteinas: ["Pechuga de pollo a la plancha", "Pescado al horno", "Huevos revueltos", "Atún natural", "Yogur griego"],
  antioxidantes: ["Ensalada de espinaca y tomate", "Fruta fresca variada", "Smoothie de frutos rojos", "Verduras al vapor", "Té verde"],
  hipocalorica: ["Ensalada mixta", "Sopa de verduras", "Frutas bajas en azúcar", "Avena con agua", "Infusión sin azúcar"],
  bajo_grasa: ["Pavo al vapor", "Claras de huevo", "Ensalada de pepino", "Queso fresco bajo en grasa", "Filete de pescado blanco"],
  facil_digestion: ["Puré de zanahoria", "Arroz blanco", "Manzana cocida", "Sopa ligera", "Pollo hervido"]
};

// Decide qué grupos usar
let grupos = [];
if (tipos.includes("proteínas")) grupos.push("proteinas");
if (tipos.includes("antioxidantes")) grupos.push("antioxidantes");
if (tipos.includes("hipocalórica")) grupos.push("hipocalorica");
if (tipos.includes("baja")) grupos.push("bajo_grasa");
if (tipos.includes("digestión")) grupos.push("facil_digestion");

// Si no detecta nada, usa todos por defecto
if (grupos.length === 0) {
  grupos = ["proteinas", "antioxidantes", "hipocalorica", "bajo_grasa", "facil_digestion"];
}

// Generar menú
let menuHTML = `<h5>Menú semanal (7 días / 5 tiempos)</h5>`;

for (let dia = 1; dia <= 7; dia++) {
  menuHTML += `<h6>Día ${dia}</h6><ul>`;
  tiemposComida.forEach(tiempo => {
    const grupo = grupos[Math.floor(Math.random() * grupos.length)];
    const receta = recetasBase[grupo][Math.floor(Math.random() * recetasBase[grupo].length)];
    menuHTML += `<li><strong>${tiempo}:</strong> ${receta}</li>`;
  });
  menuHTML += `</ul>`;
}

document.getElementById('menu-semanal').innerHTML = menuHTML;