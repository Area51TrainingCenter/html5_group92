// Declarando Funciones

//Ejemplo con Generador de Numeros Aleatorios

/*
function generarNumeroAleatorio() {
  var numeroAleatorio = Math.floor( Math.random() * 10 ) + 1;
  document.write('<div class="container"><p>' + numeroAleatorio + '</p></div>');
}

generarNumeroAleatorio();
generarNumeroAleatorio();
generarNumeroAleatorio();
generarNumeroAleatorio();
*/

/*
Los programas que hemos escrito hasta ahora corren desde el comienzo del archivo, corren línea por línea hasta el final del archivo. 

En la clase anterior vimos que las condicionales cambiaban el flujo de un programa condicionando las acciones del programa si la condición era verdadera o falsa. Sin embargo aún el programa se leía línea por línea.

Las funciones cambian este flujo. Cada vez que la función es ejecutada el navegador sube a la función, corre el código y luego regresa al lugar en donde la función fue llamada

*/

//Segunda forma de declarar una funcion

var generarNumeroAleatorio = function() {
  var numeroAleatorio = Math.floor( Math.random() * 10 ) + 1;
  document.write('<div class="container"><p>' + numeroAleatorio + '</p></div>')
};

generarNumeroAleatorio();
generarNumeroAleatorio();
generarNumeroAleatorio();
generarNumeroAleatorio();