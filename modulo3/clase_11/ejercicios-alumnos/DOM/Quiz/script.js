/* 
  Usando objetos
*/  

var quiz =[
  {
    pregunta: '¿Cuántos continentes tiene el mundo?',
    respuesta: 5
  },

  {
    pregunta: '¿Cuantos huesos posee el ser humano?',
    respuesta: 200
  },

  {
    pregunta: '¿Cuál es la capital de España?',
    respuesta: 'Madrid'
  }

]

/* 
  Usando arreglos

*/ 

var qa = [
	["¿Cuantos continentes tiene la Tierra?", 5],
	["¿Como se llama el presidente de USA?", "Donald Trump"],
	["¿Que animal hace cuac cuac?", "Pato"]
];

var questionHTML = document.querySelector('.quiz');
var submitAnswer = document.querySelector('.submit-answer');
var respuestasCorrectas = 0;

function crearQuiz(){
  for(var i = 0; i < qa.length; i++){
    var pregunta = qa[i][0];
    var respuesta = qa[i][1];

    var newQuestion = document.createElement('p');
    newQuestion.className = 'pregunta';
    newQuestion.innerHTML = pregunta;
    questionHTML.appendChild(newQuestion);

    var answerField = document.createElement('input');
    answerField.className = 'respuesta';
    questionHTML.appendChild(answerField);

    submitAnswer.addEventListener('click', function(e){
      e.preventDefault();
      if(answerField.value === ''){
        console.log('HEY NO HAS LLENADO NADA!');
      }else if(answerField.value === respuesta){
        respuestasCorrectas++;
        console.log('Cantidad de respuestas correctas: ', respuestasCorrectas);
      }
    });
  }
}

crearQuiz();

/*
if( respuestasCorrectas === 3 ) {
  document.write('<h2>Te ganaste la corona de oro!</h2>');
}else if( respuestasCorrectas === 2 ){
  document.write('<h2>Te ganaste la corona de plata!</h2>');
} else {
  document.write('<h2>Perdiste! :(</h2>')
}
*/
