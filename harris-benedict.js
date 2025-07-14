document.getElementById('sexo').addEventListener('change', function() {
  const selected = this.value;
  const trimestreDiv = document.getElementById('trimestreDiv'); // corregido
  if (selected === 'embarazada') {
    trimestreDiv.style.display = 'block';
  } else {
    trimestreDiv.style.display = 'none';
  }
});


document.getElementById('harris-form').addEventListener('submit', function(e) {
  e.preventDefault();

  const sexo = document.getElementById('sexo').value;
  const peso = parseFloat(document.getElementById('peso').value);
  const altura = parseFloat(document.getElementById('altura').value); // corregido
  const edad = parseInt(document.getElementById('edad').value);
  const actividad = parseFloat(document.getElementById('actividad').value); // corregido
  const trimestre = document.getElementById('trimestre')?.value;

  let tmb = 0;

  if (sexo === 'hombre') {
    tmb = 88.362 + (13.397 * peso) + (4.799 * altura) - (5.677 * edad);
  } else if (sexo === 'mujer') {
    tmb = 447.593 + (9.247 * peso) + (3.098 * altura) - (4.330 * edad);
  } else if (sexo === 'embarazada') {
    tmb = 447.593 + (9.247 * peso) + (3.098 * altura) - (4.330 * edad);
    let extra = 0;
    if (trimestre === '1') {
      extra = 85;
    } else if (trimestre === '2') {
      extra = 285;
    } else if (trimestre === '3') {
      extra = 475;
    }
    tmb += extra;
  }

  const caloriasTotales = tmb * actividad;

  document.getElementById('resultado').innerHTML = `
    <h4>Resultado:</h4>
    <p>TMB (Harris-Benedict): <strong>${tmb.toFixed(2)}</strong> kcal</p>
    <p>Calorías de mantenimiento: <strong>${caloriasTotales.toFixed(2)}</strong> kcal/día</p>
  `;
});