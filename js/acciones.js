// JavaScript Document
$(document).ready(function(e) {
    //watchID se refieree a la aceleracion 'actual'
	//
	var watchID = null;
	
	document.addEventListener("deviceready", Dispositivo_Listo, false);
	// cuando este listo el dispositivo
	//
	function Dispositivo_Listo() {
		comienza();
	}
	//empieza la 'observacion' de la acxeleracion 
	//
	function Comienza() {
	// actualiza la aceleracion cada 2 segundos
	//
	var opciones = {frequency: 2000};
	watchID = navigator.accelerometer.watchAcceleration(Correcto, error, opciones)
	navigator.geolocation.getCurrentPosition(Localiza, errorLocalizacion);
}
// detiene la 'obcerbacion' de la aceleracion
//
function Detente() {
	if (watchID) {
		navigator.accelerometer.clearWatch(watchID);
		watchID = nill;
	}
}
// correcto: toma una captura de la aceleracion
//
function Correcto(aceleration) {
	var element = document.getElementById('acelerometro');
	element.innerHTML = 'Aceleracion en X: ' + acceleration.x + '<br />' +
	                    'Aceleracion en Y: ' + acceleration.y + '<br />' +
						'Aceleracion en Z: ' + acceleration.z + '<br />' +
						'Intervalo: '       + acceleration.timestamp + '<br />';
}
// Error: Falla al obtener la aceleracion
//
function Error() {
	alert('Error!');
}
// exito al localizar
//
function Localizar(posicion) {
	var element =document.getElementById('geolocalizacion');
	element.innerHTML = 'Latitud: '     + posicion.coords.latitude    + '<br />' +
	                    'Longitud: '    + posicion.coords.longitude   +  '<br />' +
						'Altitud: '    + posicion.coords.altitude   +  '<br />' +
						'Precision: '    + posicion.coords.accuracy   +  '<br />' +
						'Precision de Altitud: '    + posicion.coords.altitudeAccuracy   +  '<br />' +
						'Direccion: '    + posicion.coords.heading   +  '<br />' +
						'Velocidad: '    + posicion.coords.speed   +  '<br />' +
						'Intervalo: '    + posicion.timestamp   +  '<br />'; 
    }
// error en la geolocalizacion 
//
function ErrorLocalizacion(error) {
	alert('codigo: '   + '\n'  +
	'mensaje:  ' + error.message + '\n');
}
	
}); // ducumento ready

