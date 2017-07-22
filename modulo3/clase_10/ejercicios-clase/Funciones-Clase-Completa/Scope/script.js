// Entendiendo el scope
/*
function saludo(){
	var nombre = "Andrea";
	console.log("<h1>Hola " + nombre + "</h1>");
}

var nombre = "Raymi";
saludo("Andrea");

console.log("<h1>Hola " + nombre + "</h1>");
*/

function saludo(){
	nombre = "Andrea";
	console.log("<h1>Hola " + nombre + "</h1>");
}

var nombre = "Raymi";
saludo();

console.log("<h1>Hola " + nombre + "</h1>");

// Funcion que se llama a si misma
//(function(){})();

// Usando funciones con el ejercicio del cuenta cuentos

function mensajes(palabras){
	var palabra = prompt(palabras)
	return palabra;
}

function oracion(){
	document.write('<p> Habia una vez un ' + sustantivo + ' ' + 'que era muy ' + adjetivo + ' ' + 'y le gustaba salir a ' + verbo + '</p>')
}


var sustantivo = mensajes('Escribe un sustantivo');
var adjetivo = mesajes('Escribe un adjetivo');
var verbo = mensajes('Escribe un verbo');

oracion();

