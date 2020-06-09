
var _ = require('lodash');


var array = [1, 2, 3, 4, 5, 6, 7, 8];
console.log('answer', _.without(array, 3));

var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var color3 = document.querySelector(".color3");
var body = document.getElementById("gradient");

function setGradient() {
	body.style.background = 
	"radial-gradient(" 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ", " 
	+ color3.value 
	")";

	css.textContent = body.style.background + ";";
	console.log(color1);
}


color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

color3.addEventListener("input", setGradient);

