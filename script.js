function recomendar(genero) {
  const edad = parseInt(document.getElementById('edad').value);
  const salida = document.getElementById('recomendacion');

  if (isNaN(edad)) {
    salida.textContent = "Por favor, ingresa una edad válida.";
    return;
  }

  if (edad < 13) {
    salida.textContent = "Películas no aptas para tu edad.";
    return;
  }

  let mensaje = "Te recomendamos: ";

  switch (genero) {
    case 'Drama':
      if (edad <= 15) {
        mensaje += "Wonder";
      } else if (edad <= 25) {
        mensaje += "El Club de los Poetas Muertos";
      } else {
        mensaje += "En busca de la felicidad";
      }
      break;

    case 'Comedia':
      if (edad <= 13) {
        mensaje += "Mi villano favorito";
      } else if (edad <= 18) {
        mensaje += "Jumanji: En la jungla";
      } else {
        mensaje += "La propuesta";
      }
      break;

    case 'Musical':
      if (edad < 15) {
        mensaje += "Sing: ¡Ven y canta!";
      } else {
        mensaje += "El Gran Showman";
      }
      break;

    case 'Crimen':
      if (edad < 18) {
        mensaje = "Películas no aptas para tu edad.";
      } else {
        mensaje += "El Padrino";
      }
      break;

    default:
      mensaje = "Género no reconocido.";
  }

  salida.textContent = mensaje;
}
