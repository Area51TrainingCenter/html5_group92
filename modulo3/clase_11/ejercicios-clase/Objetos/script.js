// Objetos

/*
var nombre = "Raymi";
var numero = 1;
["Andrea", 34, true]
*/

var persona = {
	nombre: "Raymi",
	apellido: "Saldomando",
	edad: 29,
	Area51Estudiante: false,
	habilidades: ["JavaScript", "HTML", "CSS"],
	saludo: function(){
		console.log("Hola", this.nombre);
	}	
}

persona.saludo();

for(i=0; i<persona.habilidades.length; i++){
	document.write(persona.habilidades[i]);
}

var estudiantes = [
	{
		nombre: "Andrea"
	},
	{
		nombre: "Adrian"
	},
	{
		nombre: "Fiorella"
	}
]

// Accediendo a las propiedades de un objeto literal

console.log(persona["nombre"]);
console.log(persona.nombre);

// Agregar nuevas propiedades al objeto

persona.ciudad = "Lima";
console.log(persona);

// Recorriendo Objetos

for(prop in persona){
	console.log(prop, ': ', persona[prop]);
}

for(var i=0; i<estudiantes.length; i++){
	console.log(estudiantes[i]);
}
