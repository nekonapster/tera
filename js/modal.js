// function estadoSelect() {
// let estadoSelect = document.getElementById("selectModal").value;

// switch (estadoSelect) {
//     case "1":
//       document.getElementById("state1").style.display = "block";
//       document.getElementById("state2").style.display = "none";
//       document.getElementById("state3").style.display = "none";
//       document.getElementById("state4").style.display = "none";
//       document.getElementById("state5").style.display = "none";
//       document.getElementById("state6").style.display = "none";
//       document.getElementById("state7").style.display = "none";
//       console.log("state1");
//       break;
//     case "2":
//       document.getElementById("state1").style.display = "none";
//       document.getElementById("state2").style.display = "block";
//       document.getElementById("state3").style.display = "none";
//       document.getElementById("state4").style.display = "none";
//       document.getElementById("state5").style.display = "none";
//       document.getElementById("state6").style.display = "none";
//       document.getElementById("state7").style.display = "none";
//       console.log("state2");
//       break;
//     case "3":
//       document.getElementById("state1").style.display = "none";
//       document.getElementById("state2").style.display = "none";
//       document.getElementById("state3").style.display = "block";
//       document.getElementById("state4").style.display = "none";
//       document.getElementById("state5").style.display = "none";
//       document.getElementById("state6").style.display = "none";
//       document.getElementById("state7").style.display = "none";
//       console.log("state3");
//       break;
//     case "4":
//       document.getElementById("state1").style.display = "none";
//       document.getElementById("state2").style.display = "none";
//       document.getElementById("state3").style.display = "none";
//       document.getElementById("state4").style.display = "block";
//       document.getElementById("state5").style.display = "none";
//       document.getElementById("state6").style.display = "none";
//       document.getElementById("state7").style.display = "none";
//       console.log("state4");
//       break;
//     case "5":
//       document.getElementById("state1").style.display = "none";
//       document.getElementById("state2").style.display = "none";
//       document.getElementById("state3").style.display = "none";
//       document.getElementById("state4").style.display = "none";
//       document.getElementById("state5").style.display = "block";
//       document.getElementById("state6").style.display = "none";
//       document.getElementById("state7").style.display = "none";
//       console.log("state5");
//       break;
//     case "6":
//       document.getElementById("state1").style.display = "none";
//       document.getElementById("state2").style.display = "none";
//       document.getElementById("state3").style.display = "none";
//       document.getElementById("state4").style.display = "none";
//       document.getElementById("state5").style.display = "none";
//       document.getElementById("state6").style.display = "block";
//       document.getElementById("state7").style.display = "none";
//       console.log("state6");
//       break;
//     case "7":
//       document.getElementById("state1").style.display = "none";
//       document.getElementById("state2").style.display = "none";
//       document.getElementById("state3").style.display = "none";
//       document.getElementById("state4").style.display = "none";
//       document.getElementById("state5").style.display = "none";
//       document.getElementById("state6").style.display = "block";
//       document.getElementById("state7").style.display = "none";
//       console.log("state7");
//       break;
// }
// };

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



