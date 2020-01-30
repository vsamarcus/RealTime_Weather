window.onload = buscaTemp();

function buscaTemp() {
  const readCity = document.getElementById("readCity");
  const cidade = readCity.value;
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
    if (xhr.readyState === 4) {
      if (xhr.status === 200) {
        tempoView(xhr.responseText);
      } else {
        cityNotFound();
      }
    }
  };

  xhr.send();
}

const showClimate = document.getElementById("showClimate");

function tempoView(json) {
  const climate = JSON.parse(json);
  console.log(climate);

  const tempCelsius = climate["main"].temp.toFixed();

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
    showDate();
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
    showDate();
  }

  if (climate.weather[0].main === "Clear") {
    const oldClimate = "Clear";
    const changeClimate = oldClimate.replace("Clear", "Sol");

    showClimate.innerHTML = `
    <div class="date">
      <h2 class="agileinfo-textH2">${tempCelsius}<span>ºC</span></h2>
      <h4 class="agileinfo-texth4">${climate.name}</h4>
      <h6 class="agileinfo-texth6">${changeClimate}</h6>
    </div>
    `;

    showDate();
  }
}

function showDate() {
  const getDateHour = document.getElementById("date");
  var mydate = new Date();
  var year = mydate.getYear();
  if (year < 1000) year += 1900;
  var day = mydate.getDay();
  var month = mydate.getMonth();
  var daym = mydate.getDate();
  if (daym < 10) daym = "0" + daym;
  var dayarray = new Array(
    "Domingo",
    "Segunda",
    "Terça",
    "Quarta",
    "Quinta",
    "Sexta",
    "Sábado"
  );
  var monthArray = new Array(
    "Janeiro",
    "Feveireiro",
    "Março",
    "Abril",
    "Maio",
    "Junho",
    "Julho",
    "Agosto",
    "Setembro",
    "Outubro",
    "Novembro",
    "Dezembro"
  );

  getDateHour.innerHTML = `<div class="agileinfo-textH2SpanY">${dayarray[day]}, ${daym} ${monthArray[month]} ${year}</div>`;
}

function cityNotFound() {
  showClimate.innerHTML = `
  <div class="date">
    <h2 class="agileinfo-texth3">Cidade não encontrada</h2>
  </div>
  `;
}

const pressEnter = document.getElementById("readCity");
pressEnter.addEventListener("keyup", function(e) {
  var key = e.which || e.keyCode;
  if (key == 13) {
    buscaTemp();
  }
});
