const celciusToFahrenheit = document.getElementById('ctof');
const fahrenheitToCelcius = document.getElementById('ftoc');


let digit = document.getElementById("input").value;
const calculateBtn = document.getElementById('calculate');

const firstDecimal = document.getElementById('1d');
const secondDecimal = document.getElementById('2d');
const thirdDecimal = document.getElementById('3d');

celciusToFahrenheit = digit * 1.8 + 32;
fahrenheitToCelcius = (digit - 32) / 1.8; 

calculateBtn.addEventListener("click", function(){

});
