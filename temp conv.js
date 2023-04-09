function convertCelsiusToFahrenheit() {
	let celsius = document.getElementById("celsius").value;
	let fahrenheit = (celsius * 9/5) + 32;
	document.getElementById("fahrenheit").value = fahrenheit.toFixed(2);
}

function convertFahrenheitToCelsius() {
	let fahrenheit = document.getElementById("fahrenheit").value;
	let celsius = (fahrenheit - 32) * 5/9;
	document.getElementById("celsius").value = celsius.toFixed(2);
}
