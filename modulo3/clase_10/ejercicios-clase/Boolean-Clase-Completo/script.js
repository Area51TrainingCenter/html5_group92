/* Booleanos */

var nombre = true;
var numero = false;

var apellido = "Saldomando"


if(nombre) {
	document.write("Nombre es la true")
}
/* Booleanos en Condionales */

if(false) {
	document.write("La condicion es falsa");
}else {
	document.write("La condicion es verdadera");
}

// Usando el Adivinador de Numero usando Booleanos

var adivinadorCorrecto = false;
var numeroRandom = Math.floor(Math.random() * 10) + 1;
var adivinador = prompt("Estoy pensando en un numero del 1 al 10. Adivina cual es plisito");

if(parseInt(adivinador) === numeroRandom ){
	adivinadorCorrecto = true;
}


if(adivinadorCorrecto){
	document.write("<p>Adivinaste</p>");
}else {
	document.write("<p> No adivinaste! El numero era " + numeroRandom + "</p>")
}

console.log(numeroRandom);

/* Usando la solucion de multiples condicionales con booleanos */

var adivinadorCorrecto = false;
var numeroRandom = Math.floor(Math.random() * 10) + 1;
console.log(numeroRandom);
var adivinador = prompt("Estoy pensando en un numero del 1 al 10. Adivina cual es plisito");


if(parseInt(adivinador) === numeroRandom ){
	adivinadorCorrecto = true;
}else if(parseInt(adivinador) < numeroRandom){
  var adivinadorMayor = prompt("Intentalo de nuevo. El numero que estoy pensando es mayor que" + adivinador );
  if(parseInt(adivinadorMayor) === numeroRandom ){
  	adivinadorCorrecto = true;
  }
}else if(parseInt(adivinador) > numeroRandom){
  var adivinadorMenor = prompt("Intentalo de nuevo. El numero que estoy pensando es menor que" + adivinador );
  if(parseInt(adivinadorMenor) === numeroRandom ){
  	adivinadorCorrecto = true;
  }
}


if(adivinadorCorrecto){
	document.write("<p>Adivinaste</p>");
}else {
    document.write("<p>Perdiste chibolax. El numero era" +  numeroRandom + "</p>");
}