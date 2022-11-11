var compteur = 1;
document.getElementById("compting").innerText = compteur;
console.log(compteur);

function plus(){
	compteur = compteur +1;
	document.getElementById("compting").innerText = compteur;
}
function minus(){
	if ( compteur < 1){
		compteur = 0;
	}
	else{
		compteur = compteur - 1;
	}
	document.getElementById("compting").innerText = compteur;
}