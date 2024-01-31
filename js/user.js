$(function () {
	$.ajax({
		metnod: "POST",
		url: "./php/user.php",
		data: {
			consulta: "datosDelSelect"
		}
	}).done(function (msg) {

		let allDataFromUser = JSON.parse(msg);
		let contracts = allDataFromUser;
		let $dropdown = $('#selectUser');

		$.each(contracts, function () {
			$dropdown.append($('<option>', {
				text: this.cups.code + " - " + this.client.address + " - " + this.client.city + " - " + this.client.city2,
				value: this.cups.code
			}));
		});
	});

	$("#selectUser").change(function () {
		selectChange();
	});

	function selectChange() {

		$.ajax({
			metnod: "POST",
			url: "./php/user.php",
			data: {
				consulta: "datosDelSelect"
			}
		}).done(function (msg) {

			let allDataFromUser = JSON.parse(msg);
			let contracts = allDataFromUser;


			$cups = $('#selectUser').val();
			$datosCups_rojo = $('#datosCups_rojo')

			$userCodigoContratoDP = $('#userCodigoContratoDP');
			$userNifDP = $('#userNifDP');
			$userNombreDP = $('#userNombreDP');
			$userApellidoDP = $('#userApellidoDP');
			$fechaInicioDP = $('#fechaInicioDP');
			$userDuracionDP = $('#userDuracionDP');
			$userFechaActivacionAutoConsumoDP = $('#userFechaActivacionAutoConsumoDP');
			$userIbanDP = $('#userIbanDP');
			$datosCups_rojo.text($cups);

			$userCodigoContratoDP.attr('placeholder', contracts[0].code);
			$userNifDP.attr('placeholder', contracts[0].client.code);
			$userNombreDP.attr('placeholder', contracts[0].client.name + " " + contracts[0].client.name2);
			$userApellidoDP.attr('placeholder', contracts[0].client.surname1 + " " + contracts[0].client.surname2);
			$fechaInicioDP.attr('placeholder', contracts[0].details.date_active);
			$userDuracionDP.attr('placeholder', contracts[0].details.duration);
			$userFechaActivacionAutoConsumoDP.attr('placeholder', contracts[0].details.date_proc);
			$userIbanDP.attr('placeholder', contracts[0].details.iban);
			$datosCups_rojo.attr('placeholder', contracts[0].code);
		});
	};
});
