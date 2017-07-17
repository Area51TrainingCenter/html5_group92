
// El ejercicio anterior sin ciclos

var pregunta1 = prompt('¿Cuántos continentes tiene La Tierra?');
var pregunta2 = prompt('¿Como se llama el presidente de USA?');
var pregunta3 = prompt('¿Qué animal hace cuac cuac?');

var respuestas = [5, 'Donald Trump', 'Pato'];

var respuestasCorrectas = 0;

if( parseInt(pregunta1) === respuestas[0] ) {
  respuestasCorrectas = respuestasCorrectas + 1;
}

if( pregunta2 === respuestas[1] ){
  respuestasCorrectas = respuestasCorrectas + 1;
}

if( pregunta3 === respuestas[2] ) {
  respuestasCorrectas = respuestasCorrectas + 1;
}

if( respuestasCorrectas === 3 ) {
  document.write('<h2>Te ganaste la corona de oro!</h2>');
}else if( respuestasCorrectas === 2 ){
  document.write('<h2>Te ganaste la corona de plata!</h2>');
} else {
  document.write('<h2>Perdiste! :(</h2>')
}


