// Este evento se dispara cuando el contenido HTML de la página se ha cargado completamente
document.addEventListener("DOMContentLoaded", function () {
  
  // Función que gestiona el carrusel de imágenes
  function cambiarImagen() {
    const imagenes = document.querySelectorAll('#carrusel img');
    const totalImagenes = imagenes.length;
    let index = 3;

    // Devuelve una función para cambiar las imágenes del carrusel
    return function () {
      imagenes[index % totalImagenes].style.display = 'none';
      imagenes[(index + 3) % totalImagenes].style.display = 'block';
      index++;
    };
  }

  // Función principal que se ejecuta al cargar la página
  function iniciarCarrusel() {
    const cambiarImagenFn = cambiarImagen();
    let intervalId = setInterval(cambiarImagenFn, 3000);

    // Agrega eventos a las imágenes para redimensionar al doble en OnMouseOver
    const imagenes = document.querySelectorAll('#carrusel img');
    imagenes.forEach((imagen) => {
      // Evento que se dispara cuando el cursor está sobre la imagen
      imagen.addEventListener('mouseover', function () {
        clearInterval(intervalId); // Detiene el carrusel cuando el cursor está sobre la imagen
        this.style.width = '18cm'; // Redimensiona al doble el ancho
        this.style.height = '18cm'; // Redimensiona al doble la altura
      });

      // Evento que se dispara cuando el cursor sale de la imagen
      imagen.addEventListener('mouseout', function () {
        // Reanuda el carrusel cuando el cursor sale de la imagen
        intervalId = setInterval(cambiarImagenFn, 3000);
        this.style.width = '9cm'; // Restaura el ancho original
        this.style.height = '9cm'; // Restaura la altura original
      });
    });
  }

  // Evento de envío de formulario
  document.getElementById('loginForm').addEventListener('submit', function (e) {
    e.preventDefault(); // Previene el envío del formulario por defecto
    window.location.href = 'menu_principal.html'; // Redirección al formulario principal
  });

  // Inicia el carrusel al cargar la página
  iniciarCarrusel();
});