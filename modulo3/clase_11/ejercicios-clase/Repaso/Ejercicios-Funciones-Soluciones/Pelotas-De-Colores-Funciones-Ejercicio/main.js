/*var divColor = '';
var rojo, verde, azul, colorRGB;


 Resolviendo el ejercicio con ciclos

for( var i = 1; i <= 100; i++ ){
	rojo = Math.floor(Math.random() * 256);
	verde = Math.floor(Math.random() * 256);
	azul = Math.floor(Math.random() * 256);
	colorRGB = 'rgb(' + rojo + ',' + verde + ',' + azul + ')';
	divColor += '<div class="colores" style="background-color:' + colorRGB + '"></div>';
}

document.write(divColor);
*/

// Resolviendo el ejercicio con Funciones

var colorRGB;
var divColor = '';

function randomRGB(){
	return Math.floor(Math.random() * 256) + 1;
}

function randomColor(){
	var color = 'rgb(' + randomRGB() + ',' + randomRGB() + ',' + randomRGB() + ');'
	return color; 
}

function imprimir(mensaje){
	document.write(mensaje)
}

for(var i=0; i<=100; i++){
	colorRGB = randomColor();
	divColor += '<div class="colores" style=" background-color: ' + colorRGB + '"></div>'
}

imprimir(divColor);

/*
function saludo(nombre){
	return 'Hola ' + nombre;
}

saludo("Raymi");

saludo("Andrea");

saludo("Adrian");
*/