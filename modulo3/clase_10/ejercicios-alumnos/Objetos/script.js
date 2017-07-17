/* 

  El ejercicio consiste en crear una estructura de datos que almacena información sobre un grupo de mínimo 5 estudiantes. Es decir, necesitamos crear un objeto que guarde información de estos estudiantes.

  El objeto debe de comenzar siendo un arreglo que tenga una lista de objetos que guarden esta información. De esta manera 

  var estudiantes = [
    {},
    {},
    {}
  ]
  Cada objeto debe de contener las siguientes propiedades:
    nombre, 
    edad,
    curso ( HTML5, Desarrollo Movil, Videojuegos, Javascript, Android, iOS, Arte Conceptual, PhotoShop, Illustrator, etc )
    logros ( el cual debe de tener un número como valor)

    Luego de terminar esta parte, debes de imprimir en tu pantalla la información de cada estudiante. Como si estuvieras haciendo un reporte de los estudiantes de Area51.

    Para ayudarte un poco con este ejercicio, me tomé la libertad de crear la función que hará la impresión en la pantalla de la información de cada estudiante
*/



// Variable que guarda el mensaje y función que hará que se imprima según la data del objeto.

var message = '';

function print(message) {
  var divReporte = document.getElementById('reporte-estudiantes');
  divReporte.innerHTML = message;
}
