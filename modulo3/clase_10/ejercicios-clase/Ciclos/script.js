
// El ejercicio anterior sin ciclos

var pregunta1 = prompt('¿Cuántos continentes tiene La Tierra?');
var pregunta2 = prompt('¿Como se llama el presidente de USA?');
var pregunta3 = prompt('¿Qué animal hace cuac cuac?');

var respuestasCorrectas = 0;

if( parseInt(pregunta1) === 5 ) {
  respuestasCorrectas = respuestasCorrectas + 1;
}

if( pregunta2 === 'Donald Trump' ){
  respuestasCorrectas = respuestasCorrectas + 1;
}

if( pregunta3 === 'Pato' ) {
  respuestasCorrectas = respuestasCorrectas + 1;
}

if( respuestasCorrectas === 3 ) {
  document.write('<h2>Te ganaste la corona de oro!</h2>');
}else if( respuestasCorrectas === 2 ){
  document.write('<h2>Te ganaste la corona de plata!</h2>');
} else {
  document.write('<h2>Perdiste! :(</h2>')
}


