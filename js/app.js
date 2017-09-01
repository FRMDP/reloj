const horario = document.querySelector('.horario');
const minutero = document.querySelector('.minutero');
const segundero = document.querySelector('.segundero');
const agujas = document.getElementsByClassName('aguja');// esto trae un arreglo
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
	segundero.style.transform = `rotate(${gradosSegundos}deg)`;
	begun();
}

function begun(){
	Array.prototype.forEach.call(agujas,(aplyBlock));
	reloj.style.display = "block";
}

function aplyBlock(item){
	item.style.display = "block";
}

setInterval(fijarAgujas, 1000);
