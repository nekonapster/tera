const driver = window.driver.js.driver;
const driverObj = driver({
	animate: false,
	prevBtnText: "Previous",
	nextBtnText: "Next",
	doneBtnText: "Finish",
	overlayColor: "black",
	// progressText: "Step {{current}} of {{total}}",
	showProgress: false,
	steps: [
		{
			element: "mainTour",
			popover: {
				title: "Nueva web!!!",
				description: "Hemos actualizado nuestra zona de clientes para aprovechar los expacios y hemos rejuvenecido los estilos",
				popoverClass: "driverPopover"
			}
		},
		{
			element: "#tuto",
			popover: {
				title: "Nuevo!!! Boton Tour",
				description: "Si quieres volver a ver el tour solo tiene que darle a este boton"
			}
		},
		{
			element: "#facturas",
			popover: {
				title: "Nuevo!!! Zona de Facturas",
				description: "Hemos agrupado 'Mis Facturas' y 'Localizar Facturas' en una unica zona para tener todo en una sola pantalla."
			}
		},
		{
			element: "#datos",
			popover: {
				title: "Nuevo!!! Boton de Datos",
				description: "Ahora 'Datos personales', 'Mis Contratos' y 'Notificaciones' estan en una misma pantalla."
			}
		}, 
        {
			element: "#manual",
			popover: {
				title: "Nuevo!!! Boton Manual",
				description: "El manual lo tienes en un unico accedo y directo!"
			}
		},
        {
			element: "#localizarFacturas",
			popover: {
				title: "Nuevo!!!",
				description: "Añadimos un filtro de busqueda para las facturas antiguas"
			}
		},
        {
			element: "#zonaUC",
			popover: {
				title: "Zona de ultima conexion",
				description: "Podras ver tu ultima conexio desde aqui"
			}
		},
        {
			element: "#graficaIndex",
			popover: {
				title: "Graficas",
				description: "Realojamos las graficas para que puedas tenerlas al lado de las facturas que quieras comparar"
			}
		},
        {
			element: "#informacionFactura",
			popover: {
				title: "Informacion Facturas",
				description: "El antiguo boton de 'Informacion de Facturas' se sustituido por la informacion plasmada directamente en la pagina."
			}
		},
        {
			element: "#zonaFacturas",
			popover: {
				title: "Facturas",
				description: "Las seguiras teniendo todas acumuladas y filtradas, ahora nunca perderas la informacion."
			}
		},
	]
});


// play al tour manualmente
function iniciarTour() {
	driverObj.drive();
}
// =========================

// si no se vio el tour previamente se activa el tou y se almacena en una cookie 'tourVisto' para en la proxima comprobacion no volve a ejecutar el tour.
let tourVisto = "tourVisto";

if (document.cookie == false) {
	driverObj.drive();
	document.cookie = "user =" + tourVisto + " ; max-age = 3600";
}
// =================================================================
