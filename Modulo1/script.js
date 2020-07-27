// window.addEventListener('load', function (event) {});
let red = document.getElementById('red');
let green = document.getElementById('green');
let blue = document.getElementById('blue');
var quadrado = document.getElementById('quadrado');

red.addEventListener('change', function (e) {
	console.log(red.value);
	return (quadrado.style.backgroundColor = `rgb(${red.value}, ${green.value}, ${blue.value})`);
});
green.addEventListener('change', function (e) {
	console.log(green.value);
	return (quadrado.style.backgroundColor = `rgb(${red.value}, ${green.value}, ${blue.value})`);
});
blue.addEventListener('change', function (e) {
	console.log(blue.value);
	return (quadrado.style.backgroundColor = `rgb(${red.value}, ${green.value}, ${blue.value})`);
});
