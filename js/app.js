<<<<<<< HEAD
const reloj = document.getElementById('clock');
var dialLines = document.getElementsByClassName('diallines');
var clockEl = document.getElementsByClassName('reloj')[0];

for (var i = 1; i < 60; i++) {
  clockEl.innerHTML += "<div class='diallines'></div>";
  dialLines[i].style.transform = "rotate(" + 6 * i + "deg)";
}

function fijarAgujas() {

	const ahora = new Date();
	const hora = ahora.getHours();
	const minutos = ahora.getMinutes();
	const segundos = ahora.getSeconds();
	const horario = document.querySelector('.horario');
	const minutero = document.querySelector('.minutero');
	const segundero = document.querySelector('.segundero');
	const gradosHora = hora * 30 + minutos * (360/720); // * 360 / 12
	horario.style.transform = `rotate(${gradosHora}deg)`;
	const gradosMinutos = minutos * 6 + segundos * (360/3600); // *360 / 60
	minutero.style.transform = `rotate(${gradosMinutos}deg)`;
	const gradosSegundos = segundos * 6;
=======
const horario = document.querySelector('.horario');
const minutero = document.querySelector('.minutero');
const segundero = document.querySelector('.segundero');
const reloj = document.getElementById('clock');

function fijarAgujas() {
	const ahora = new Date();

	const hora = ahora.getHours();
	const gradosHora = 90 + hora * 30; // * 360 / 12
	horario.style.transform = `rotate(${gradosHora}deg)`;

	const minutos = ahora.getMinutes();
	const gradosMinutos = 90 + minutos * 6; // *360 / 60
	minutero.style.transform = `rotate(${gradosMinutos}deg)`;

	const segundos = ahora.getSeconds();
	const gradosSegundos = 90 + segundos * 6;
>>>>>>> c385948c88ba9fa0abde53477b185ebd975e9e3e
	if(gradosSegundos === 90) {
        segundero.style.transition = 'none'
    } else {
        segundero.style.transition = ''
    }
	segundero.style.transform = `rotate(${gradosSegundos}deg)`;
<<<<<<< HEAD

=======
	
>>>>>>> c385948c88ba9fa0abde53477b185ebd975e9e3e
	reloj.style.display = "block";
}

setInterval(fijarAgujas, 1000);
