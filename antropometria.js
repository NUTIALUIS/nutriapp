// antropometria.js
document.getElementById('antropometria-form').addEventListener('submit', function (e) {
  e.preventDefault();

  // Obtener valores numéricos de los pliegues
  const tricipital = parseFloat(document.getElementById('tricipital').value);
  const subescapular = parseFloat(document.getElementById('subescapular').value);
  const bicipital = parseFloat(document.getElementById('bicipital').value);
  const suprailíaco = parseFloat(document.getElementById('suprailíaco').value);
  const abdominal = parseFloat(document.getElementById('abdominal').value);
  const muslo = parseFloat(document.getElementById('muslo').value);
  const pantorrilla = parseFloat(document.getElementById('pantorrilla').value);
  const iliocristal = parseFloat(document.getElementById('iliocristal').value);

  // Sumar pliegues para un índice simple
  const sumaPliegues = tricipital + subescapular + bicipital + suprailíaco + abdominal + muslo + pantorrilla + iliocristal;

  // Calcular somatotipo simple
  let somatotipo = '';
  if (sumaPliegues < 50) {
    somatotipo = 'Ectomorfo (delgado)';
  } else if (sumaPliegues >= 50 && sumaPliegues <= 90) {
    somatotipo = 'Mesomorfo (musculoso)';
  } else {
    somatotipo = 'Endomorfo (más grasa corporal)';
  }

  // Mostrar resultado
  document.getElementById('resultado').innerHTML = `
    <h4>Resultado Somatotipo:</h4>
    <p>Suma de pliegues: ${sumaPliegues.toFixed(2)} mm</p>
    <p>Somatotipo estimado: <strong>${somatotipo}</strong></p>
  `;
});