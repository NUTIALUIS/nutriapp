const enfermedadesData = {
  cancer: {
    dieta: "Dieta alta en proteínas, antioxidantes y baja en grasas saturadas.",
    kcal: 2200,
    permitidos: [
      "Pescado",
      "Pollo sin piel",
      "Frutas ricas en antioxidantes (arándanos, fresas)",
      "Verduras frescas variadas",
      "Cereales integrales",
      "Aceite de oliva",
      "Nueces y semillas",
      "Yogur natural",
      "Legumbres",
      "Té verde"
    ],
    restringidos: [
      "Carnes procesadas",
      "Alimentos fritos",
      "Azúcares refinados",
      "Alcohol",
      "Tabaco",
      "Comidas rápidas",
      "Salsas industriales",
      "Bebidas azucaradas",
      "Grasas trans",
      "Sal en exceso"
    ],
    notas: "Evitar alimentos procesados y fomentar frutas y verduras frescas."
  },

  diabetes: {
    dieta: "Dieta baja en carbohidratos simples y alta en fibra.",
    kcal: 2000,
    permitidos: [
      "Verduras de hoja verde",
      "Legumbres",
      "Frutas bajas en azúcar (manzana, pera, frutos rojos)",
      "Proteínas magras (pollo, pavo)",
      "Grasas saludables (aguacate, aceite de oliva)",
      "Cereales integrales",
      "Frutos secos sin sal",
      "Pescado",
      "Yogur natural sin azúcar",
      "Semillas (chia, linaza)"
    ],
    restringidos: [
      "Azúcar refinada",
      "Pan blanco",
      "Bebidas azucaradas",
      "Dulces y postres",
      "Comidas rápidas",
      "Arroz blanco",
      "Harinas refinadas",
      "Salsas con azúcar",
      "Jugos comerciales",
      "Alcohol"
    ],
    notas: "Controlar ingesta de carbohidratos y evitar picos de glucosa."
  },

  hta: {
    dieta: "Dieta baja en sodio y rica en potasio.",
    kcal: 2100,
    permitidos: [
      "Frutas frescas (banano, naranja, melón)",
      "Verduras (espinaca, brócoli, zanahoria)",
      "Lácteos bajos en grasa",
      "Carnes magras (pollo, pescado)",
      "Granos enteros (avena, quinoa)",
      "Legumbres",
      "Aceite de oliva",
      "Frutos secos sin sal",
      "Ajo y cebolla",
      "Té de hibisco"
    ],
    restringidos: [
      "Sal y alimentos muy salados",
      "Comidas procesadas",
      "Embutidos",
      "Salsas comerciales",
      "Snacks salados",
      "Alimentos enlatados",
      "Quesos altos en sodio",
      "Comidas rápidas",
      "Bebidas alcohólicas",
      "Cafeína en exceso"
    ],
    notas: "Reducir consumo de sodio y controlar la presión arterial."
  },

  gastritis: {
    dieta: "Dieta baja en irritantes y rica en alimentos de fácil digestión.",
    kcal: 2000,
    permitidos: [
      "Arroz blanco cocido",
      "Pollo sin piel",
      "Verduras cocidas (calabaza, zanahoria)",
      "Frutas no ácidas (banana, pera)",
      "Pescado blanco",
      "Pan blanco sin semillas",
      "Avena cocida",
      "Huevos cocidos",
      "Té de manzanilla",
      "Yogur natural"
    ],
    restringidos: [
      "Café y bebidas con cafeína",
      "Alcohol",
      "Alimentos picantes",
      "Frituras",
      "Jugos cítricos",
      "Tomate crudo",
      "Chocolate",
      "Comidas muy grasosas",
      "Salsas y condimentos fuertes",
      "Legumbres crudas o en exceso"
    ],
    notas: "Evitar irritantes y consumir alimentos cocidos y suaves."
  },

  hipotiroidismo: {
    dieta: "Dieta rica en yodo, selenio y vitaminas, moderada en calorías.",
    kcal: 2000,
    permitidos: [
      "Pescado y mariscos",
      "Huevos",
      "Lácteos bajos en grasa",
      "Frutas frescas",
      "Verduras variadas",
      "Nueces y semillas",
      "Legumbres",
      "Aceite de oliva",
      "Cereales integrales",
      "Aguacate"
    ],
    restringidos: [
      "Soja y derivados en exceso",
      "Crucíferas crudas (col, brócoli en exceso)",
      "Alimentos procesados",
      "Azúcares refinados",
      "Grasas trans",
      "Cafeína en exceso",
      "Alcohol",
      "Harinas refinadas",
      "Comidas rápidas",
      "Alimentos con gluten en algunas personas"
    ],
    notas: "Controlar consumo de alimentos bociógenos y mantener equilibrio nutricional."
  },

  hipertiroidismo: {
    dieta: "Dieta hipocalórica y rica en antioxidantes y calcio.",
    kcal: 1800,
    permitidos: [
      "Frutas frescas",
      "Verduras variadas",
      "Lácteos ricos en calcio",
      "Pescado",
      "Carne magra",
      "Huevos",
      "Cereales integrales",
      "Legumbres",
      "Nueces y semillas",
      "Aceite de oliva"
    ],
    restringidos: [
      "Alimentos estimulantes (cafeína, té negro)",
      "Alimentos muy salados",
      "Azúcares refinados",
      "Comidas rápidas",
      "Alcohol",
      "Salsas industriales",
      "Alimentos procesados",
      "Grasas saturadas en exceso",
      "Harinas refinadas",
      "Bebidas energéticas"
    ],
    notas: "Evitar estimulantes y controlar ingesta calórica para evitar pérdida de peso excesiva."
  }
};

function generarRecomendacion(enfermedades, kcalUsuario) {
  if (enfermedades.length === 0) return null;

  let dieta = [];
  let permitidosSet = new Set();
  let restringidosSet = new Set();
  let notas = [];

  enfermedades.forEach(enf => {
    if (enfermedadesData[enf]) {
      dieta.push(enfermedadesData[enf].dieta);
      enfermedadesData[enf].permitidos.forEach(item => permitidosSet.add(item));
      enfermedadesData[enf].restringidos.forEach(item => restringidosSet.add(item));
      notas.push(enfermedadesData[enf].notas);
    }
  });

  // Quitar alimentos que estén tanto en permitidos como restringidos para evitar confusión
  const alimentosComunes = [...permitidosSet].filter(x => restringidosSet.has(x));
  alimentosComunes.forEach(item => {
    permitidosSet.delete(item);
    restringidosSet.delete(item);
  });

  return {
    dieta: dieta.join(" / "),
    kcal: kcalUsuario,
    permitidos: Array.from(permitidosSet).sort(),
    restringidos: Array.from(restringidosSet).sort(),
    notas: notas.join(" | ")
  };
}

document.getElementById("ia-form").addEventListener("submit", function (e) {
  e.preventDefault();

  const select = document.getElementById("condiciones");
  const seleccion = Array.from(select.selectedOptions).map(opt => opt.value);

  const kcalUsuario = parseInt(document.getElementById("kcalUsuario").value, 10);
  if (isNaN(kcalUsuario) || kcalUsuario < 1000 || kcalUsuario > 5000) {
    alert("Ingrese un valor válido de kcal entre 1000 y 5000.");
    return;
  }

  if (seleccion.length === 0) {
    alert("Por favor, seleccione al menos una condición clínica.");
    return;
  }

  const resultado = generarRecomendacion(seleccion, kcalUsuario);

  if (!resultado) {
    document.getElementById("resultado").innerHTML = "<p>No se encontró información para las condiciones seleccionadas.</p>";
    return;
  }

  const html = `
    <h3>Recomendación para: ${seleccion.map(e => e.toUpperCase()).join(", ")}</h3>
    <p><strong>Dieta recomendada:</strong> ${resultado.dieta}</p>
    <p><strong>Calorías diarias indicadas:</strong> ${resultado.kcal} kcal</p>
    <h5>Alimentos permitidos:</h5>
    <ul>${resultado.permitidos.map(item => `<li>${item}</li>`).join("")}</ul>
    <h5>Alimentos restringidos:</h5>
    <ul>${resultado.restringidos.map(item => `<li>${item}</li>`).join("")}</ul>
    <h5>Notas:</h5>
    <p>${resultado.notas}</p>
  `;

  document.getElementById("resultado").innerHTML = html;
});