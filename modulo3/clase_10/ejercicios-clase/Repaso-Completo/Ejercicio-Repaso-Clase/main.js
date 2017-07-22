/* 
  Ejercicio Quiz

  El ejercicio consiste en que debemos crear un pequeño quiz de 3 preguntas que el usuario debe de responder. Si el usuario responde las 3 preguntas correactamente se le mostrará un mensaje que dirá que se ganó la corona de oro, si responde 2 preguntas se le mostrará un mensaje diciendole que ganó la corona de plata y si responde menos de 2 preguntas se le mostrará un mensaje donde perdió.

*/

var qa = [
	["¿Cuantos continentes tiene la Tierra?", 5],
	["¿Como se llama el presidente de USA?", "Donal Trump"],
	["¿Que animal hace cuac cuac?", "Pato"]
];

/*
var pregunta1 = prompt("¿Cuantos continentes tiene la Tierra?");
var pregunta2 = prompt("¿Como se llama el presidente de USA?");
var pregunta3 = prompt("¿Que animal hace cuac cuac?");
*/

var respuestasCorrectas = 0;

if(parseInt(pregunta1) === 5){
	respuestasCorrectas++ //respuestasCorrectas = respuestasCorrectas + 1;
}

if(pregunta2 === "Donald Trump"){
	respuestasCorrectas++ //respuestasCorrectas = respuestasCorrectas + 1;
}

if(pregunta3 === "Pato"){
	respuestasCorrectas++ //respuestasCorrectas = respuestasCorrectas + 1;
}

if(respuestasCorrectas === 3){
	document.write("<h2> Te ganaste la corona de oro</h2>");
}else if(respuestasCorrectas === 2){
	document.write("<h2> Te ganaste la corona de plata</h2>");
}else {
	document.write("<h2>Perdiste!</h2>")
}

// Repaso Arreglos

var arreglo1 = ["Andrea", "Fiorella", 45, {}, arreglo2];
var arreglo2 = ["Area51", "Raymi"];


arreglo1[1];
console.log(arreglo2[1]);
arreglo1[4][1];
