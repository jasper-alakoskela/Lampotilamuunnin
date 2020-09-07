const calculateBtn = document.getElementById("calculate");

calculateBtn.addEventListener("click", function () {
  const chooseTemperature = document.getElementById("temperature").value;
  const chooseDecimal = document.querySelector('input[name="decimal"]:checked')
    .value;
  let lämpötila = document.getElementById("lämpötila").value;

  vastaus = muunna(lämpötila, chooseTemperature);

  if (chooseDecimal == "1d") {
    console.log(vastaus.toFixed(1));
    vastaus = vastaus.toFixed(1);
  } else if (chooseDecimal == "2d") {
    console.log(vastaus.toFixed(2));
    vastaus = vastaus.toFixed(2);
  } else if (chooseDecimal == "3d") {
    console.log(vastaus.toFixed(3));
    vastaus = vastaus.toFixed(3);
  } else {
    console.log(vastaus);
  }
  document.getElementById("vastaukset").innerHTML = vastaus;
});

function muunna(x, chooseTemperature) {
  if (chooseTemperature == "ctof") {
    console.log(x * 1.8 + 32);
    return x * 1.8 + 32;
  } else if (chooseTemperature == "ftoc") {
    console.log((x - 32) / 1.8);
    return (x - 32) / 1.8;
  } else if (chooseTemperature == "ftok") {
    console.log((x + 459, 67) / 1.8);
    return (x + 459, 67) / 1.8;
  } else if (chooseTemperature == "ktof") {
    console.log(x * 1.8 - 459.67);
    return x * 1.8 - 459.67;
  } else if (chooseTemperature == "ktoc") {
    console.log(x - 273.15);
    return x - 273.15;
  } else if (chooseTemperature == "ctok") {
    console.log(x + 273, 15);
    return x + 273, 15;
  } else {
    return alert("Valitse minkä laskennan haluat toimittaa!");
  }
}

inputNull(){
    lämpötila = null;
}