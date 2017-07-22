// Funciones argumentos y parametros

function suma(numero1, numero2){
	document.write(numero1 + numero2);
}

suma(3, 5);
suma(30, 78);

function saludo(nombre){
	document.write("<p>Hola" + nombre + "</p>");
}

saludo("Raymi");
saludo("Andrea");
saludo("Adrian");
saludo("Fiorella");

// Usando parametros y argumentos con el juego del numero aleatorio

function generarNumeroAleatorio(numero){
	var random = Math.floor(Math.random() * numero) + 1;
	document.write("<div class='container'><p>" + random + "</p></div>" );
}

generarNumeroAleatorio(20);
generarNumeroAleatorio(50);
generarNumeroAleatorio(60);
generarNumeroAleatorio(10);
generarNumeroAleatorio(6);
generarNumeroAleatorio(2);
