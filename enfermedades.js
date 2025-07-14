const enfermedadesData = {
  cancer: {
    dieta: "Dieta alta en proteínas, antioxidantes y baja en grasas saturadas.",
    kcal: 2200,
    permitidos: [
      "Frutas frescas variadas",
      "Verduras de hoja verde",
      "Pescado",
      "Pollo sin piel",
      "Legumbres",
      "Cereales integrales",
      "Nueces",
      "Aceite de oliva",
      "Yogur natural",
      "Aguacate"
    ],
    restringidos: [
      "Carnes rojas procesadas",
      "Alimentos fritos",
      "Azúcares refinados",
      "Comidas rápidas",
      "Bebidas azucaradas",
      "Alcohol",
      "Alimentos muy salados",
      "Productos ultraprocesados",
      "Quesos grasos",
      "Snacks industriales"
    ],
    notas: "Evitar alimentos procesados, aumentar antioxidantes, consultar con nutricionista."
  },

  diabetes: {
    dieta: "Dieta baja en azúcares simples, control de carbohidratos y rica en fibra.",
    kcal: 2000,
    permitidos: [
      "Verduras frescas",
      "Frutas bajas en azúcar",
      "Proteínas magras (pollo, pescado)",
      "Legumbres",
      "Granos enteros",
      "Frutos secos sin sal",
      "Aceite de oliva",
      "Yogur natural sin azúcar",
      "Semillas (chia, linaza)",
      "Agua"
    ],
    restringidos: [
      "Azúcares simples (dulces, refrescos)",
      "Pan blanco y harinas refinadas",
      "Bebidas azucaradas",
      "Comidas rápidas",
      "Frituras",
      "Carnes grasas",
      "Alcohol",
      "Snacks procesados",
      "Salsas industriales",
      "Quesos grasos"
    ],
    notas: "Controlar la ingesta de carbohidratos, evitar picos de glucosa, consultar endocrinólogo."
  },

  hta: {
    dieta: "Dieta baja en sodio, rica en potasio, calcio y magnesio.",
    kcal: 2000,
    permitidos: [
      "Verduras frescas",
      "Frutas variadas",
      "Lácteos bajos en grasa",
      "Pescado",
      "Pollo sin piel",
      "Frutos secos sin sal",
      "Legumbres",
      "Aceite de oliva",
      "Avena",
      "Agua"
    ],
    restringidos: [
      "Sal y alimentos muy salados",
      "Carnes grasas",
      "Frituras",
      "Comidas rápidas",
      "Bebidas alcohólicas",
      "Snacks procesados",
      "Salsas industriales",
      "Quesos grasos",
      "Embutidos",
      "Refrescos azucarados"
    ],
    notas: "Reducir sal, aumentar potasio (plátano, aguacate), controlar peso y realizar ejercicio."
  },

  gastritis: {
    dieta: "Dieta suave, baja en grasas, evitar irritantes gástricos.",
    kcal: 2000,
    permitidos: [
      "Arroz blanco",
      "Pollo sin piel cocido",
      "Verduras cocidas (zanahoria, calabaza)",
      "Frutas no ácidas (manzana, pera)",
      "Pan integral tostado",
      "Pescado al horno",
      "Yogur natural",
      "Té de manzanilla",
      "Patata cocida",
      "Agua"
    ],
    restringidos: [
      "Cafeína",
      "Alcohol",
      "Alimentos muy condimentados",
      "Frituras",
      "Cítricos (naranja, limón)",
      "Tomate crudo",
      "Chocolate",
      "Bebidas gaseosas",
      "Picantes",
      "Carnes grasas"
    ],
    notas: "Evitar irritantes gástricos y comidas pesadas, comer porciones pequeñas y frecuentes."
  },

  hipotiroidismo: {
    dieta: "Dieta balanceada, evitar exceso de goitrógenos crudos.",
    kcal: 2000,
    permitidos: [
      "Pescado",
      "Pollo",
      "Huevos",
      "Verduras cocidas",
      "Frutas variadas",
      "Granos enteros",
      "Lácteos bajos en grasa",
      "Aceite de oliva",
      "Legumbres",
      "Nueces"
    ],
    restringidos: [
      "Soja en grandes cantidades",
      "Col, brócoli, coliflor crudos",
      "Nabos crudos",
      "Frituras",
      "Azúcares simples",
      "Carnes grasas",
      "Alcohol",
      "Bebidas gaseosas",
      "Snacks procesados",
      "Harinas refinadas"
    ],
    notas: "Cocinar crucíferas para reducir efecto goitrógeno, controlar peso, consultar endocrinólogo."
  },

  hipertiroidismo: {
    dieta: "Dieta alta en calorías y proteínas, evitar alimentos estimulantes.",
    kcal: 2500,
    permitidos: [
      "Carnes magras",
      "Pescado",
      "Huevos",
      "Lácteos enteros",
      "Frutas variadas",
      "Verduras cocidas",
      "Granos enteros",
      "Legumbres",
      "Aceite de oliva",
      "Nueces"
    ],
    restringidos: [
      "Cafeína",
      "Alimentos picantes",
      "Alcohol",
      "Bebidas estimulantes",
      "Azúcares simples",
      "Snacks procesados",
      "Comidas rápidas",
      "Frituras",
      "Alimentos ricos en yodo en exceso",
      "Productos de soja sin procesar"
    ],
    notas: "Evitar estimulantes, mantener hidratación, seguimiento médico frecuente."
  },

  obesidad: {
    dieta: "Dieta hipocalórica con control estricto de grasas y azúcares.",
    kcal: 1800,
    permitidos: [
      "Verduras frescas",
      "Frutas bajas en azúcar",
      "Proteínas magras (pollo, pavo)",
      "Granos enteros",
      "Legumbres",
      "Agua",
      "Frutos secos en porciones",
      "Pescado",
      "Aceite de oliva",
      "Yogur natural sin azúcar"
    ],
    restringidos: [
      "Alimentos fritos",
      "Azúcares simples",
      "Bebidas azucaradas",
      "Pan blanco",
      "Comidas rápidas",
      "Salsas industriales",
      "Alcohol",
      "Carnes grasas",
      "Quesos grasos",
      "Snacks procesados"
    ],
    notas: "Controlar las porciones y evitar alimentos procesados y azúcares."
  },

  sindrome_metabolico: {
    dieta: "Dieta baja en grasas saturadas y azúcares, rica en fibra.",
    kcal: 2000,
    permitidos: [
      "Verduras variadas",
      "Frutas frescas",
      "Granos enteros",
      "Pescado",
      "Legumbres",
      "Aceite de oliva",
      "Nueces",
      "Aguacate",
      "Pollo sin piel",
      "Yogur natural"
    ],
    restringidos: [
      "Azúcares simples",
      "Alimentos procesados",
      "Comidas rápidas",
      "Carnes grasas",
      "Alcohol",
      "Bebidas azucaradas",
      "Harinas refinadas",
      "Snacks salados",
      "Salsas industriales",
      "Quesos grasos"
    ],
    notas: "Mantener actividad física y controlar peso corporal."
  }
};

// Limpiar listas
function cleanFoodLists(permitidos, restringidos) {
  let setPermitidos = new Set(permitidos);
  let setRestringidos = new Set(restringidos);

  for (let item of setRestringidos) {
    if (setPermitidos.has(item)) {
      setPermitidos.delete(item);
    }
  }

  return {
    permitidos: Array.from(setPermitidos).sort(),
    restringidos: Array.from(setRestringidos).sort()
  };
}

// EVENTO PRINCIPAL
document.getElementById('enfermedades-form').addEventListener('submit', function(e) {
  e.preventDefault();

  const select = document.getElementById('enfermedades');
  const kcal = parseInt(document.getElementById('kcal').value);
  const selected = Array.from(select.selectedOptions).map(o => o.value);

  if (selected.length === 0) {
    alert("Selecciona al menos una enfermedad.");
    return;
  }
  if (isNaN(kcal) || kcal < 1000 || kcal > 4000) {
    alert("Ingresa calorías válidas entre 1000 y 4000.");
    return;
  }

  let dietas = [];
  let permitidos = [];
  let restringidos = [];
  let notas = [];

  selected.forEach(enf => {
    const data = enfermedadesData[enf];
    if (data) {
      dietas.push(data.dieta);
      permitidos = permitidos.concat(data.permitidos);
      restringidos = restringidos.concat(data.restringidos);
      notas.push(data.notas);
    }
  });

  const cleaned = cleanFoodLists(permitidos, restringidos);

  let resultadoHTML = `<h3>Recomendaciones combinadas</h3>`;
  resultadoHTML += `<p><strong>Calorías diarias sugeridas:</strong> ${kcal} kcal</p>`;

  resultadoHTML += `<h5>Dietas recomendadas:</h5><ul>`;
  dietas.forEach(d => { resultadoHTML += `<li>${d}</li>`; });
  resultadoHTML += `</ul>`;

  resultadoHTML += `<h5>Alimentos permitidos:</h5><ul>`;
  cleaned.permitidos.forEach(f => { resultadoHTML += `<li>${f}</li>`; });
  resultadoHTML += `</ul>`;

  resultadoHTML += `<h5>Alimentos restringidos:</h5><ul>`;
  cleaned.restringidos.forEach(f => { resultadoHTML += `<li>${f}</li>`; });
  resultadoHTML += `</ul>`;

  resultadoHTML += `<h5>Notas y recomendaciones:</h5><ul>`;
  notas.forEach(n => { resultadoHTML += `<li>${n}</li>`; });
  resultadoHTML += `</ul>`;

  document.getElementById('resultado').innerHTML = resultadoHTML;

  // Mostrar botón para enviar al planificador
  const recomendacionesURL = dietas.join(',').replace(/\s+/g, '-').toLowerCase();
  const enviarBtn = document.getElementById('enviarDieta');
  enviarBtn.style.display = 'inline-block';
  enviarBtn.onclick = function() {
    window.location.href = `planificador_dietas.html?tipos=${encodeURIComponent(recomendacionesURL)}&kcal=${kcal}`;
  };
});