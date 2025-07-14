document.addEventListener('DOMContentLoaded', () => {
  const resultado = document.getElementById('resultado');

  const vitaminas = {
    Calcio: {
      cantidad: "1200 mg/día",
      alimentos: [
        "Leche descremada",
        "Yogur natural",
        "Queso bajo en grasa",
        "Sardinas enlatadas con espinas",
        "Almendras",
        "Brócoli",
        "Tofu fortificado",
        "Col rizada",
        "Semillas de sésamo",
        "Jugo de naranja fortificado"
      ]
    },
    Hierro: {
      cantidad: "27 mg/día",
      alimentos: [
        "Carne magra",
        "Hígado de res",
        "Legumbres (lentejas, garbanzos)",
        "Espinacas",
        "Semillas de calabaza",
        "Tofu",
        "Cereales fortificados",
        "Frutas cítricas (vitamina C para absorción)",
        "Pescado",
        "Huevos"
      ]
    },
    Ácido_Fólico: {
      cantidad: "400-600 mcg/día",
      alimentos: [
        "Verduras de hoja verde (espinaca, acelga)",
        "Legumbres",
        "Naranjas",
        "Aguacate",
        "Brócoli",
        "Espárragos",
        "Pan integral",
        "Cereales fortificados",
        "Coles de Bruselas",
        "Hígado"
      ]
    },
    Vitamina_D: {
      cantidad: "600 UI/día",
      alimentos: [
        "Pescados grasos (salmón, atún)",
        "Hígado",
        "Yema de huevo",
        "Champiñones expuestos al sol",
        "Leche fortificada",
        "Jugos fortificados",
        "Queso",
        "Mantequilla",
        "Aceite de hígado de bacalao",
        "Yogur fortificado"
      ]
    }
  };

  function mostrarVitaminas() {
    let html = '<h3>Vitaminas y Minerales Recomendados durante el Embarazo</h3>';
    html += '<div class="accordion" id="accordionVitaminas">';
    let index = 0;

    for (const [vit, data] of Object.entries(vitaminas)) {
      html += `
      <div class="accordion-item">
        <h2 class="accordion-header" id="heading${index}">
          <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse${index}" aria-expanded="false" aria-controls="collapse${index}">
            ${vit.replace('_', ' ')} - Cantidad recomendada: ${data.cantidad}
          </button>
        </h2>
        <div id="collapse${index}" class="accordion-collapse collapse" aria-labelledby="heading${index}" data-bs-parent="#accordionVitaminas">
          <div class="accordion-body">
            <strong>Alimentos ricos en ${vit.replace('_', ' ')}:</strong>
            <ul>
              ${data.alimentos.map(alimento => `<li>${alimento}</li>`).join('')}
            </ul>
          </div>
        </div>
      </div>
      `;
      index++;
    }
    html += '</div>';
    resultado.innerHTML = html;
  }

  mostrarVitaminas();
});