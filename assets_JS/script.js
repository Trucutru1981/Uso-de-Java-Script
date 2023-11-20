// Función para cambiar las imágenes en el carrusel
function cambiarImagen() {
  const imagenes = document.querySelectorAll('#carrusel img');
  const totalImagenes = imagenes.length;
  let index = 3; // Comienza desde la cuarta imagen

  return function () {
    imagenes[index % totalImagenes].style.display = 'none';
    imagenes[(index + 3) % totalImagenes].style.display = 'block';
    index++;
  };
}

// Función que se ejecuta al cargar la página
function iniciarCarrusel() {
  const cambiarImagenFn = cambiarImagen();
  setInterval(cambiarImagenFn, 3000); // Cambia la imagen cada 3 segundos (ajusta según sea necesario)
}

// Agrega un listener para el evento "submit" del formulario
document.getElementById('loginForm').addEventListener('submit', function (e) {
  e.preventDefault(); // Previene el envío del formulario por defecto

  // Valida los campos (puedes agregar aquí tu lógica de validación)

  // Si los campos son válidos, realiza la redirección
  window.location.href = 'menu_principal.html';
});