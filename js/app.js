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
	if(gradosSegundos === 90) {
        segundero.style.transition = 'none'
    } else {
        segundero.style.transition = ''
    }
	segundero.style.transform = `rotate(${gradosSegundos}deg)`;

	reloj.style.display = "block";
}

setInterval(fijarAgujas, 1000);
