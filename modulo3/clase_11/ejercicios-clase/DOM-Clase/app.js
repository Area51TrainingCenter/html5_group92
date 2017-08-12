/* DOM = Document Object Model

	Navegador:
		Window
			Document
	
	Existen 3 conceptos que hacen que un sitio sea interactivo
		Seleccion de Elementos
		Manipulacion de Elementos Seleccionados
		Escuchar las acciones (eventos) del usuario
*/ 
  
 /* Seleccion de Elementos

 document.getElementById('myHeading');
 document.getElementsByClassName('list');
 document.getElementsByTagName('list');
 document.querySelector('#myHeading');
 document.querySelectorAll('.list');
 */

/*

	Manipulacio de contenido en los elementos

 var parrafo = document.querySelector('p.description');
 var campo = document.querySelector('input.description');
 parrafo.innerHTML = campo.value;
 parrafo.textContent = "Hola de nuevo";
*/

/*

Manipulacio de atributos en los elementos

 var parrafo = document.querySelector('p.description');
 var campo = document.querySelector('input.description');
 var ul = document.querySelector('ul');
 

//console.log(campo.type);
//console.log(campo.type = 'checkbox');
//console.log(parrafo.className = "nueva-description"); 
//parrafo.setAttribute('style', 'background: red'); 
//campo.setAttribute('name', 'mi-texto');
// Agregar una clase adicional a un elemento

	//ul.className = ul.className + ' otraClase';
	ul.className += ' otraClase'; 
*/ 

/* 
	Estilizando Elementos


var parrafo = document.querySelector('p.description');
var campo = document.querySelector('input.description');

parrafo.style.color = 'purple';
parrafo.style.backgroundColor = 'blue';
 */


 /* 
	Creando nuevos elementos

 
 
 var lista = document.querySelector('.list');
 var nuevoParrafo = document.createElement('p');
 nuevoParrafo.textContent = "Mi nuevo parrafo"
 console.log(nuevoParrafo);

 var imagen = document.createElement('img');
 imagen.src = "https://c24e867c169a525707e0-bfbd62e61283d807ee2359a795242ecb.ssl.cf3.rackcdn.com/imagenes/gato/etapas-clave-de-su-vida/gatitos/nuevo-gatito-en-casa/gatito-tumbado-lamiendo-sus-patitas.jpg"
 console.log(imagen);

 */

 /* 
	Anidacion de elementos
 
 lista.appendChild(nuevoParrafo);
 lista.appendChild(imagen);
 lista.prepend(imagen);

 */

 /* 
	Eliminando Elementos



var ul = document.querySelector('ul');
var li = document.querySelector('li:first-child');

ul.removeChild(li);

 */

