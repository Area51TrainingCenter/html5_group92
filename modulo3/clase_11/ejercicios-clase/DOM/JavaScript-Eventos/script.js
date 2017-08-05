/* 

	Eventos:
		click
		dblclick
		mousedown
		mouseup
		mouseover
		mouseleave
		keypress
		keydown


*/

var toggleList = document.querySelector('#toggleList');
var descriptionP = document.querySelector('p.description');
var addItemButton = document.querySelector('.addItemButton');
var addItem = document.querySelector('.addItemInput');
var removeBTN = document.querySelector('.removeItemButton');

descriptionP.addEventListener('dblclick', function(){
	descriptionP.style.color = "blue";
});


addItem.addEventListener('keypress', function(event){
	//console.log(event);
	if(event.keyCode === 106){
		console.log("Estas aprentando la letra J");
	}
});


addItemButton.addEventListener('click', function(){
	if(addItem.value === ''){
		console.log('NO HAS ESCRITO NADAAAAAAAAAAAA');
	}else {
		var ul = document.querySelector('ul');
		var li = document.createElement('li');
		li.textContent = addItem.value;
		ul.appendChild(li);
		addItem.value = '';
	}
});



addItem.addEventListener('keydown', function(raymi){
	if(raymi.keyCode === 13){
		var ul = document.querySelector('ul');
		var li = document.createElement('li');
		li.textContent = addItem.value;
		ul.appendChild(li);
		addItem.value = '';
	}
});


removeBTN.addEventListener('click', function(){
	var ul = document.getElementsByTagName('ul')[0];
	var li = document.querySelector('li:last-child');
	ul.removeChild(li);
})























/*addItem.addEventListener('keydown', pressKey);

function pressKey(e){
	console.log(e.key);
}*/