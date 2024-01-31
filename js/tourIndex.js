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
			element: "mainTour",
			popover: {
				title: "Nueva web!!!",
				description: "Hemos actualizado nuestra zona de clientes para aprovechar los espacios y hemos rejuvenecido los estilos"
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
		}, {
			element: "#bolsillo",
			popover: {
				title: "Nuevo!!! Boton de Bolsillo Solar",
				description: "Tanto Bolsillo Solar como Excedentes los podras encontrar aqui."
			}
		}, {
			element: "#manual",
			popover: {
				title: "Nuevo!!! Boton Manual",
				description: "El manual lo tienes en un unico accedo y directo!"
			}
		}, {
			element: "#localizarFacturas",
			popover: {
				title: "Nuevo!!!",
				description: "Añadimos un filtro de busqueda para las facturas antiguas"
			}
		}, {
			element: "#zonaUC",
			popover: {
				title: "Zona de ultima conexion",
				description: "Podras ver tu ultima conexio desde aqui"
			}
		}, {
			element: "#graficaIndex",
			popover: {
				title: "Graficas",
				description: "Realojamos las graficas para que puedas tenerlas al lado de las facturas que quieras comparar"
			}
		}, {
			element: "#informacionFactura",
			popover: {
				title: "Informacion Facturas",
				description: "El antiguo boton de 'Informacion de Facturas' ha sido sustituido por la informacion plasmada directamente en la pagina."
			}
		}, {
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
let cookieIndex = leerCookie('index')


// comparo los valores para las dos cookies que quiero y denpendiendo de eso lanzo o no el tour
if (cookieIndex == "") {
	driverObj.drive();
}

// las cookies deben ser colocadas luego de todas las funciones sino siempre tendra cookie asignada antes de hacer la comparacion dando falsa comparacion.
document.cookie = "index=vistoTourIndex; max-age=3600000";
