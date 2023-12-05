const driver = window.driver.js.driver;
const driverObj = driver({
	popoverClass: 'theme1',
	animate: false,
	overlayColor: "black",
	// progressText: "Step {{current}} of {{total}}",
	showButtons: [
		'next',
		'previous',
		// 'close'
	  ],
	showProgress: false,
	steps: [
		{
			element: "#zona1",
			popover: {
				title: "Zona uno",
				description: "Hemos dividido en dos zonas el antiguo contenido. Una para 'Datos Personales', 'Cambio de Contraseña' y 'Notificaciones'",
			}
		},
		{
			element: "#zona2",
			popover: {
				title: "Zona dos",
				description: "Y el resto para 'Datos Generales' y 'Datos Cups'"
			}
		},
		{
			element: "#cambioPass",
			popover: {
				title: "Cambio de Contraseña",
				description: "Desde aqui puedes hacer el cambio de tu contraseña."
			}
		},
		{
			element: "#guardarDatos",
			popover: {
				title: "Guardar Datos",
				description: "Los datos a tu alcanze junto con un boton para hacer las modificaciones que desees."
			}
		}, 
        {
			element: "#notificaciones",
			popover: {
				title: "Nueva zona!!!",
				description: "Hemos traido la zona de 'Ticket' a una unica pagina central. Puedes usar el desplegable para elegir tu contrato."
			}
		},
        {
			element: "#datosGenerales",
			popover: {
				title: "Datos generelales",
				description: "Ahora esta a la par sobre los datos de los Cups. Todo a tu alcance y de un solo vistazo."
			}
		},
        {
			element: "#datosCups",
			popover: {
				title: "Datos Cups",
				description: "Los hemos puesto junto con las potencias contratadas y el precio. Todo facil de ver y facil de comparar."
			}
		},
        ]
});


// play al tour manualmente
function iniciarTour() {
	driverObj.drive();
}

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

//uso leerCookie para buscar la cookie que quiero y lo que me devuelve la meto en una variable
let cookieUser = leerCookie('user')

//comparo los valores para las dos cookies que quiero y denpendiendo de eso lanzo o no el tour
if (cookieUser == "") {
	driverObj.drive();
}

//las cookies deben ser colocadas luego de todas las funciones sino siempre tendra cookie asignada antes de hacer la comparacion dando falsa comparacion.
document.cookie = "user=vistoTourUser; max-age=3600000";
