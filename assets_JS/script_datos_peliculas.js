// Este evento se dispara cuando el contenido HTML de la página se ha cargado completamente
document.addEventListener("DOMContentLoaded", function () {
  // Información de las películas
  const peliculas = [
    {
      director: "Nacho G. Velilla",
      productor: "Issa Guerra",
      actoresPrincipales: ["Omar Chaparro", "Martha Higareda"],
    },
    {
      director: "Luis Eduardo Reyes",
      productor: "Issa Guerra",
      actoresPrincipales: ["Sofía Vergara", "Mariana Treviño", "Manolo Cardona", "Carlos Santos"],
    },
    {
      director: "Sylvester Stallone",
      productor: "Irwin Winkler, Robert Chartoff y Sylvester Stallone",
      actoresPrincipales: ["Sylvester Stallone", "Dolph Lundgren", "Shire"],
    },
    {
      director: "Aaron Horvath y Michael Jelenic",
      productor: "Shigeru Miyamoto y Chris Meledandri",
      actoresPrincipales: ["Chris Pratt", "Anya Taylor-Joy"],
    },
    {
      director: "Wes Craven",
      productor: "Wes Craven, Sara Risher, Robert Shaye y Joseph Wolf",
      actoresPrincipales: ["Heather Langenkamp", "John Saxon"],
    },
  ];

  // Función para mostrar información de la película al hacer clic en la imagen
  function mostrarInformacionPelicula(indice) {
    const pelicula = peliculas[indice];
    alert(
      `Director: ${pelicula.director}\nProductor: ${pelicula.productor}\nActores Principales: ${pelicula.actoresPrincipales.join(
        ', '
      )}`
    );
  }

  // Agrega eventos de clic a las imágenes para mostrar información de la película
  const imagenes = document.querySelectorAll('#carrusel img');
  imagenes.forEach((imagen, indice) => {
    imagen.addEventListener('click', function () {
      mostrarInformacionPelicula(indice);
    });
  });
});