// Funciones

// Declarando Funciones

function vePorMiCafe(){
	document.write("Ve por mi café");
}

vePorMiCafe();

// Segunda forma de declarar una funcion

var vePorMiCafe = function(){
	document.write("Ve por mi café");
};

vePorMiCafe();

// Usando funciones con el generador de numeros aleatorios

function generarNumeroAleatorio(){
	var random = Math.floor(Math.random()* 10) + 1;
	document.write("<div class='container'><p>" + random + "</p></div>" );
}

generarNumeroAleatorio();
