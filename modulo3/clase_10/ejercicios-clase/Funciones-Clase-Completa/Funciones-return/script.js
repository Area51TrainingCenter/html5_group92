// Obtener informacion de una funcion

/*
function vePorMiCafe(){
	document.write("Tu cafe americano ya llega");
	return "Tu cafe americano ya llega";
	alert("Esto no se va a ver");
}

var numero = vePorMiCafe();
console.log(numero);
*/
// Usando return con el juego de numero random
/*
function obtenerNumeroRandom(numero){
	var numeroRandom = Math.floor(Math.random() * numero) + 1;
	return numeroRandom;
}

var random = obtenerNumeroRandom(10);
console.log(random);
*/
// Usando funciones con html

function campoVacio(){
	var campoTexto = document.querySelector("input").value;
	if(campoTexto == " "){
		return true;
	}else {
		return false;
	}
}

campoVacio();