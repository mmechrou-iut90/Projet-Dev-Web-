var nombre = 0;
var countEl = document.getElementById("nombre");
function plus(){
	nombre++;
	countEl.value = nombre;
}
function minus(){
	if (nombre > 0) {
		nombre--;
		countEl.value = nombre;
	}
}