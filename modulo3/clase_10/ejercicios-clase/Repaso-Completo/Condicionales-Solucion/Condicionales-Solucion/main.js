/* 
    El adivinador de números

    El ejercicio consiste en que el usuario adivine un número entre 1 y 10. Si adivina dicho número saldrá un mensaje ganador y si no, saldrá un mensaje para que el usuario lo intente de nuevo

    Pasos para armar el ejercicio
    
    1. Crear una variable que guarde el número aleatorio entre 1 y 10
    2. Usar prompt() para que el usuario pueda ingresar el número y adivinar
    3. Guardar el número ingresado por el usuario en una variable
    4. Comparar el valor del número ingresado. Si el valor es igual al número aleatrorio entonces colocar un mensaje ganador. De lo contrario, saldrá un mensaje indicandole al usuario que perdió y mostrándole cual era el número que tenía que adivinar.

    ECMAScript 5

    let numeroRandom = Math.floor(Math.random() * 10) + 1;
	const numeroRandom = Math.floor(Math.random() * 10) + 1;

*/

var numeroRandom = Math.floor(Math.random() * 10) + 1;
var adivinador = prompt("Estoy pensando en un numero del 1 al 10. Adivina cual es plisito");
if(parseInt(adivinador) === numeroRandom ){
	document.write("<p>Adinaste!</p>");
}
else {
	document.write("<p>No adivinaste! El numero era" +  numeroRandom + "</p>");
}

console.log(numeroRandom);