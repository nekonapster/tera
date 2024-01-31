function estadoSelect() { // Obtén el valor seleccionado
	let estadoSelect = document.getElementById("selectModal").value;
	console.log(estadoSelect);

	// Oculta todos los estados
	for (let i = 1; i <= 7; i++) {
		document.getElementById("state" + i).style.display = "none";
		console.log("state" + i);
	}

	// Muestra el estado seleccionado
	if (estadoSelect >= 1 && estadoSelect <= 7) {
		document.getElementById("state" + estadoSelect).style.display = "block";
		console.log("state" + estadoSelect);
	}
}
