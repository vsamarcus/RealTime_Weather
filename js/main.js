window.onload = buscaTemp();

function buscaTemp() {
  const cidade = "roraima";
  const apiKey = "1885c2a84e8a2a00d93e0485b7dbd4e7";
  const url =
    "http://api.openweathermap.org/data/2.5/weather?q=" +
    cidade +
    "&appid=" +
    apiKey +
    "&units=metric";
  const xhr = new XMLHttpRequest();
  xhr.open("GET", url);

  xhr.onload = function() {
    tempoView(xhr.responseText);
  };

  xhr.send();
}

const showClimate = document.getElementById("showClimate");

function tempoView(json) {
  const climate = JSON.parse(json);
  console.log(climate);

  const tempCelsius = climate["main"].temp.toFixed(0);

  if (climate.weather[0].main === "Rain") {
    const oldClimate = "Rain";
    const changeClimate = oldClimate.replace("Rain", "Chuva");

    showClimate.innerHTML = `
    <div class="date">
      <h2 class="agileinfo-textH2">${tempCelsius}<span>ºC</span></h2>
      <h4 class="agileinfo-texth4">${climate.name}</h4>
      <h6 class="agileinfo-texth6">${changeClimate}</h6>
    </div>
    `;
  }

  if (climate.weather[0].main === "Clouds") {
    const oldClimate = "Clouds";
    const changeClimate = oldClimate.replace("Clouds", "Nublado");

    showClimate.innerHTML = `
    <div class="date">
      <h2 class="agileinfo-textH2">${tempCelsius}<span>ºC</span></h2>
      <h4 class="agileinfo-texth4">${climate.name}</h4>
      <h6 class="agileinfo-texth6">${changeClimate}</h6>
    </div>
    `;
  }

  if (climate.weather[0].main === "Clear") {
    const oldClimate = "Clouds";
    const changeClimate = oldClimate.replace("Clear", "Sol");

    showClimate.innerHTML = `
    <div class="date">
      <h2 class="agileinfo-textH2">${tempCelsius}<span>ºC</span></h2>
      <h4 class="agileinfo-texth4">${climate.name}</h4>
      <h6 class="agileinfo-texth6">${changeClimate}</h6>
    </div>
    `;
  }
}

const date = new Date();
