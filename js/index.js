$('document').ready(function () {
	$.ajax({
		method: "POST",
		url: "./php/index.php",
		data: {
			consulta: "datosDelSelect"
		}
	}).done(function (msg) { // parseo el string c/formato json a un objeto

		allDataFromIndex = JSON.parse(msg);

		// log para test (visualizo todos los datos que me llegan por msg)
		// console.log(allDataFromIndex);

		let contracts = allDataFromIndex.contracts; // o allDataFromIndex["contracts"]
		let invoices_ext = allDataFromIndex.invoices_ext;
		// o allDataFromIndex["invoices"]
		// console.log(contracts);
		// console.log(invoices_ext);

		// capturo el id del select y lo meto en una variable
		let $dropdown = $("#selecContratosIndex");


		// uso index para poder concatenar y acceder a invoices_ext o cualquier otra collection
		$.each(contracts, function () {
			$dropdown.append($("<option>", { // uso el método concat para unir las cadenas con un guion
				text: this.cups.code + " - " + this.client.address + " - " + this.client.city + " - " + this.client.city2,
				value: this.cups.code
			}));
		});
	});


	$("#selecContratosIndex").change(function () {
		selectChange();
	});

	function selectChange() { // show info in principal select
		var valor = $('#selecContratosIndex').val();

		$.ajax({
			method: "POST",
			url: "./php/index.php",
			data: {
				cups: valor,
				consulta: 'cups'
			}
		}).done(function (msg) { // parseo el string c/formato json a un objeto

			allDataFromIndex = JSON.parse(msg);

			let contracts = allDataFromIndex;
			// o allDataFromIndex["contracts"]
			// console.log(contracts);

			// // capturo el id del select y lo meto en una variable
			let $brand_addressTable = $("#brand_addressTable");
			let $cups_addressTable = $("#cups_addressTable");
			let $address_addressTable = $("#address_addressTable");
			let $location1_addressTable = $("#location1_addressTable");
			let $location2_addressTable = $("#location2_addressTable");
			let $cp_addressTable = $("#cp_addressTable");


			$brand_addressTable.text(contracts[0].codecom);
			$cups_addressTable.text(contracts[0].cups.code);
			$address_addressTable.text(contracts[0].client.address);
			$location1_addressTable.text(contracts[0].client.city2);
			$location2_addressTable.text(contracts[0].client.city);
			$cp_addressTable.text(contracts[0].client.pcode);
		});
	}
});


// // funcion para copiar el cups en el clipboard (con .val() no funciona PENDIENTE)

const EMPTY_CUPS_COPY = "\n                            ";
async function copyCups() {
	let cupsCopiado = $("#cups_addressTable").text();
	if (cupsCopiado === EMPTY_CUPS_COPY) {} else {
		try {
			await navigator.clipboard.writeText(cupsCopiado);
			alert(`El cups fue copiado correctamente`);
			/* Resuelto - texto copiado al portapapeles con éxito */
		} catch (err) {
			console.error('Error al copiar: ', err);
			/* Rechazado - fallo al copiar el texto al portapapeles */
		}
	}
}
