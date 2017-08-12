var addValue = document.getElementById('add');


addValue.addEventListener('click', function(e){
	e.preventDefault();
	var campoTexto = document.getElementById('post-field').value;
	if(campoTexto){
		var lista = document.getElementById('to-do');
		var item = document.createElement('li');
		item.className = 'item';
		item.innerHTML = '<p>' + campoTexto + '</p>' + '<div class="icons"><span class="fa fa-trash-o"></span></div>';
		lista.appendChild(item);
	}else {
		alert("No has ingresado nada!");
	}
});