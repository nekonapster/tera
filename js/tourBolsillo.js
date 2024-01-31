const driver = window.driver.js.driver;

const driverObj = driver({
	popoverClass: 'theme1',
	animate: false,
	overlayColor: "black",
	// progressText: "Step {{current}} of {{total}}",
	showButtons: [
		'next', 'previous',
		// 'close'
	],
	showProgress: false,
	steps: [
		{
			element: "tour_main",
			popover: {
				title: "Nueva seccion",
				description: "Ahora Bolsillo Solar y Excedentes pertenecen a una misma area."
			}
		},
		{
			element: ".tour_bolsillo_Exedentes",
			popover: {
				title: "Bolsillo Solar",
				description: "Podras alternar entre ambas areas en una misma pagina."
			}
		},
		{
			element: ".tour_info",
			popover: {
				title: "Nuevo boton de info",
				description: "Puedes seguir viendo tu informacion desde este boton."
			}
		},
		{
			element: "#tour_boxes",
			popover: {
				title: "Nueva!!! Zona de vista rapida",
				description: "Te presentamos los datos mas importantes en tres simples boxes para que de un solo vistazo encuentres la informacion mas relevante.",
			}
		}, {
			element: ".tour_chart",
			popover: {
				title: "Clickeame!!!",
				description: "La grafica se puedes ampliar simplemente dandole un click."
			}
		}, {
			element: ".tour_tabla_bolsillo",
			popover: {
				title: "Tabla",
				description: "La tabla con toda la informacion pero ahora mejor ubicada."
			}
		},
	]
});


// play al tour manualmente
function iniciarTour() {
	driverObj.drive();
}
// =========================

// guardo todas las cookies en 'clave'
let clave = document.cookie;

// uso funcion 'leerCookie' y le paso 'clave' para separar todas las cookies y que me devuelva el valor segun la clave que le pase.
function leerCookie(clave) {
	var valCookie = "";
	var buscar = clave + "=";
	if (document.cookie.length > 0) {
		pos = document.cookie.indexOf(buscar);
		if (pos != -1) {
			pos += buscar.length;
			fin = document.cookie.indexOf(";", pos);
			if (fin == -1) 
				fin = document.cookie.length;
			


			valCookie = set(document.cookie.substring(pos, fin))
		}
	}
	return valCookie;
}

// uso leerCookie para buscar la cookie que quiero y lo que me devuelve la meto en una variable
let cookieBolsillo = leerCookie('bolsillo')

// comparo los valores para las dos cookies que quiero y denpendiendo de eso lanzo o no el tour
if (cookieBolsillo == "") {
	driverObj.drive();
}

// las cookies deben ser colocadas luego de todas las funciones sino siempre tendra cookie asignada antes de hacer la comparacion dando falsa comparacion.
document.cookie = "bolsillo=vistoTourBolsillo; max-age=3600000";