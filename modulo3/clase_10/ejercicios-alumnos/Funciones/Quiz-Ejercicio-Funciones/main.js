/* 
  Ejercicio Quiz

  El ejercicio consiste en que debemos crear un pequeño quiz de 5 preguntas que el usuario debe de responder. Si el usuario responde las 5 preguntas correactamente se le mostrará un mensaje que dirá que se ganó la corona de oro, si responde 3 preguntas se le mostrará un mensaje diciendole que ganó la corona de plata y si responde menos de 3 preguntas se le mostrará un mensaje donde perdió.

  Crea el programa usando funciones y lo has aprendido hasta ahora.
*/

var qa = [
	["¿Cuantos continentes tiene la Tierra?", 5],
	["¿Como se llama el presidente de USA?", "Donald Trump"],
	["¿Que animal hace cuac cuac?", "Pato"]
];

for (var i = 0; i < qa.length; i++){
	var pregunta = qa[i][0];
	var respuesta = qa[i][1];
	var usuarioRespuesta = prompt(pregunta);

	if(usuarioRespuesta == respuesta){
		var respuestasCorrectas = respuestasCorrectas + 1;
	}
}


if( respuestasCorrectas === 3 ) {
  document.write('<h2>Te ganaste la corona de oro!</h2>');
}else if( respuestasCorrectas === 2 ){
  document.write('<h2>Te ganaste la corona de plata!</h2>');
} else {
  document.write('<h2>Perdiste! :(</h2>')
}