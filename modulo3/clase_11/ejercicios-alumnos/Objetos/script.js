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

var estudiantes = [ 
  { 
    nombre: 'Dave',
    curso: 'Front End Development',
    edad: 15,
    logros: 14730
  },
  {
    nombre: 'Jody',
    curso: 'iOS Development with Swift',
    edad: 30,
    logros: 375
  },
  {
    nombre: 'Jordan',
    curso: 'PHP Development',
    edad: 30,
    logros: 25
  },
  {
    nombre: 'Jody',
    curso: 'Learn WordPress',
    edad: 30,
    logros: 950
  },
  {
    nombre: 'Trish',
    curso: 'Rails Development',
    edad:30,
    logros: 350
  }
];

var message = '';
var estudiante;

function print(message) {
  var divReporte = document.getElementById('reporte-estudiantes');
  divReporte.innerHTML = message;
}

for(var i=0; i< estudiantes.length; i++){
  estudiante = estudiantes[i];
  message += '<h2 class="titulo"> Estudiante: ' + estudiante.nombre + '</h2>';
  message += '<p> Curso: ' + estudiante.curso + '</p>';
  message += '<p> Logros: ' + estudiante.logros + '</p>';
}

print(message);