// planificador_dietas.js
const planesDietas = {
  dash: {
    nombre: "Dieta DASH",
    descripcion: "Dieta rica en frutas, verduras, baja en sodio y grasas saturadas.",
    comidas: [
      {
        desayuno: { alimento: "Leche descremada, queso bajo en grasa, pan integral", kcal: 350, proteina: 15, cho: 45, lipidos: 10 },
        almuerzo: { alimento: "Pechuga de pollo, arroz integral, ensalada verde", kcal: 600, proteina: 40, cho: 60, lipidos: 15 },
        cena: { alimento: "Pescado al horno, verduras al vapor", kcal: 500, proteina: 35, cho: 40, lipidos: 10 },
        colacion1: { alimento: "Fruta fresca", kcal: 100, proteina: 1, cho: 25, lipidos: 0 },
        colacion2: { alimento: "Yogur natural", kcal: 150, proteina: 10, cho: 15, lipidos: 5 }
      }
    ]
  },
  cetonica: {
    nombre: "Dieta Cetogénica",
    descripcion: "Dieta alta en grasas, moderada en proteínas y muy baja en carbohidratos.",
    comidas: [
      {
        desayuno: { alimento: "Huevos revueltos con aguacate", kcal: 400, proteina: 20, cho: 5, lipidos: 35 },
        almuerzo: { alimento: "Ensalada con pollo y aceite de oliva", kcal: 600, proteina: 45, cho: 10, lipidos: 40 },
        cena: { alimento: "Salmón al horno con espárragos", kcal: 550, proteina: 40, cho: 5, lipidos: 35 },
        colacion1: { alimento: "Nueces", kcal: 150, proteina: 5, cho: 5, lipidos: 15 },
        colacion2: { alimento: "Queso cheddar", kcal: 100, proteina: 7, cho: 1, lipidos: 9 }
      }
    ]
  },
  // Puedes agregar más tipos
};

document.getElementById('planificador-form').addEventListener('submit', function(e) {
  e.preventDefault();

  const tipo = document.getElementById('tipoDieta').value;
  const caloriasDeseadas = parseInt(document.getElementById('calorias').value);

  if (!tipo || !planesDietas[tipo]) {
    alert("Por favor, selecciona un tipo de dieta válido.");
    return;
  }
  if (isNaN(caloriasDeseadas) || caloriasDeseadas < 1000 || caloriasDeseadas > 4000) {
    alert("Por favor, ingresa un valor de calorías válido entre 1000 y 4000.");
    return;
  }

  const plan = planesDietas[tipo];

  // Calcular total kcal por día en plan base
  const diaBase = plan.comidas[0];
  const kcalDiaBase = diaBase.desayuno.kcal + diaBase.colacion1.kcal + diaBase.almuerzo.kcal + diaBase.colacion2.kcal + diaBase.cena.kcal;

  // Factor para ajustar por calorías deseadas
  const factor = caloriasDeseadas / kcalDiaBase;

  let resultadoHTML = `<h4>${plan.nombre}</h4><p>${plan.descripcion}</p>`;
  resultadoHTML += `<p>Calorías deseadas: <strong>${caloriasDeseadas}</strong> kcal</p>`;

  resultadoHTML += `<table class="table table-bordered"><thead><tr>
    <th>Día</th><th>Desayuno</th><th>Colación 1</th><th>Almuerzo</th><th>Colación 2</th><th>Cena</th>
    </tr></thead><tbody>`;

  for (let i = 1; i <= 7; i++) {
    resultadoHTML += `<tr>
      <td>Día ${i}</td>
      <td>${diaBase.desayuno.alimento} <br>(${Math.round(diaBase.desayuno.kcal * factor)} kcal)</td>
      <td>${diaBase.colacion1.alimento} <br>(${Math.round(diaBase.colacion1.kcal * factor)} kcal)</td>
      <td>${diaBase.almuerzo.alimento} <br>(${Math.round(diaBase.almuerzo.kcal * factor)} kcal)</td>
      <td>${diaBase.colacion2.alimento} <br>(${Math.round(diaBase.colacion2.kcal * factor)} kcal)</td>
      <td>${diaBase.cena.alimento} <br>(${Math.round(diaBase.cena.kcal * factor)} kcal)</td>
    </tr>`;
  }

  resultadoHTML += `</tbody></table>`;
  document.getElementById('resultado').innerHTML = resultadoHTML;
});