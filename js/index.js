  $(document).ready(function() {
    console.log("jQuery funciona correctamente");
    // Agregar evento click a los enlaces del menú de navegación
    $('a[href^="#"]').on('click', function(event) {
      // Evitar la acción predeterminada del enlace
      event.preventDefault();

      // Obtener el hash del enlace
      var hash = this.hash;

      // Desplazarse suavemente hacia la sección correspondiente
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
        // Añadir hash (#) a la URL cuando se haya terminado la animación
        window.location.hash = hash;
      });
    });
  });
