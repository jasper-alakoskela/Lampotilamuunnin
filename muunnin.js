const chooseTemperature = document.getElementById('temperature').value;
let input = document.getElementById("input");
const calculateBtn = document.getElementById('calculate');
const chooseDecimal = document.getElementsByName('decimal').value;
let vastaus= '';

calculateBtn.addEventListener("click", function(){
        
    if (chooseDecimal == '1d') {
        console.log(vastaus.toFixed(1));
    }
    else if (chooseDecimal == '2d') {
        console.log(vastaus.toFixed(2));
    }
    else if (chooseDecimal == '3d') {
        console.log(vastaus.toFixed(3));
    }
    else {
        console.log(vastaus);
    }      
});

function muunna() {
     x = input.value;

    if (chooseTemperature == 'ctof') {
        console.log(x * 1.8 + 32);
        vastaus = x * 1.8 + 32;
    }
    else if (chooseTemperature == 'ftoc') {
        console.log((x - 32) / 1.8);
        vastaus = (x - 32) / 1.8;
    }
    else {
        console.log('Valitse!');
    }
}


