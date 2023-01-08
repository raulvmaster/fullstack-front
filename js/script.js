/*Esta función indica que el codigo que esta dentro de la función anonimo,
se ejecute despues de que se cargue la pagina web*/
// $(function(){ codigo que se ejecuta despues de que se carga el DOM });

$(function(){

  //Se añade la escucha del evento submit al formulario
  $('form').submit(function(event){
    //Se crea la variable hayErrores con un falso,
    //en caso de que se encuentre un error pasara a true
    let hayErrores = false;

    //le doy a todos los input de tipo text el borde inicial para reiniciar
    //el color si no hay error en ese campo
    $('input[type="text"]').css('border-color', 'initial');

    //si el campo esta vació
    if($('#nombre').val() == ''){
        // y le pongo el color rojo
      $('#nombre').css('border-color','red');
      // Indico que hay un error para que no se envíe el formulario
      hayErrores = true;
    }
    //si el campo esta vació
    if($('#apellido').val() == ''){
      // y le pongo el color rojo
      $('#apellido').css('border-color','red');
      // Indico que hay un error para que no se envíe el formulario
      hayErrores = true;
    }
    // Si hay errores (hayErrores == true) se cancela el evento submit y no se envía el formulario
    if(hayErrores){
      event.preventDefault();
    }
  });
});
