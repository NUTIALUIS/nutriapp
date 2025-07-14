document.addEventListener('DOMContentLoaded', () => {
  const btnVitaminas = document.getElementById('btnVitaminasEmbarazo');
  const contenedor = document.getElementById('contenidoVitaminas');

  btnVitaminas.addEventListener('click', () => {
    if (contenedor.style.display === 'block') {
      contenedor.style.display = 'none';
      btnVitaminas.textContent = "Vitaminas en Embarazo";
      return;
    }
    contenedor.style.display = 'block';
    btnVitaminas.textContent = "Ocultar Vitaminas en Embarazo";

    contenedor.innerHTML = `
      <h3>Vitaminas y Minerales Recomendados en Embarazo por Trimestre</h3>
      <p>El consumo adecuado de vitaminas y minerales es fundamental para el desarrollo saludable del bebé y la salud de la madre.</p>
      <h4>Primer Trimestre</h4>
      <ul>
        <li><strong>Ácido Fólico:</strong> 400 mcg diarios. Alimentos ricos: espinacas, lentejas, brócoli, cítricos, aguacate.</li>
        <li><strong>Hierro:</strong> 27 mg diarios. Alimentos ricos: carne magra, hígado, espinacas, legumbres, frutos secos.</li>
        <li><strong>Calcio:</strong> 1000 mg diarios. Alimentos ricos: leche, yogur, queso, almendras, sardinas.</li>
        <li><strong>Vitamina D:</strong> 600 UI diarios. Alimentos ricos: pescados grasos, yema de huevo, leche fortificada, hongos.</li>
        <li><strong>Vitamina B12:</strong> 2.6 mcg diarios. Alimentos ricos: carne, pescado, huevos, leche, queso.</li>
      </ul>
      <h4>Segundo Trimestre</h4>
      <ul>
        <li><strong>Ácido Fólico:</strong> 600 mcg diarios. Alimentos ricos: (igual al primero).</li>
        <li><strong>Hierro:</strong> 27 mg diarios.</li>
        <li><strong>Calcio:</strong> 1000 mg diarios.</li>
        <li><strong>Vitamina D:</strong> 600 UI diarios.</li>
        <li><strong>Vitamina B12:</strong> 2.6 mcg diarios.</li>
      </ul>
      <h4>Tercer Trimestre</h4>
      <ul>
        <li><strong>Ácido Fólico:</strong> 600 mcg diarios.</li>
        <li><strong>Hierro:</strong> 27 mg diarios.</li>
        <li><strong>Calcio:</strong> 1300 mg diarios (incremento por crecimiento óseo del bebé).</li>
        <li><strong>Vitamina D:</strong> 600 UI diarios.</li>
        <li><strong>Vitamina B12:</strong> 2.6 mcg diarios.</li>
      </ul>
    `;
  });
});