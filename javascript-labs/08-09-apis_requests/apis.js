

function countryInputChange () {
  let inputText = document.getElementById("input-text")
  inputText.addEventListener("change", () => {
    let boxInput = document.getElementById("input-text").value
    getCovidData(boxInput)
    getCountryData(boxInput)
  } )
}

countryInputChange()

//function getCovidData(boxInput) {
//  let data = null;
//  let xcr = new XMLHttpRequest();
//  xcr.withCredentials = true;
//  xcr.addEventListener("readystatechange", function () {
//    if (this.readyState === this.DONE) {
//      console.log(this.responseText);
//    }
//  });
//  xcr.open("GET", "https://covid-19-data.p.rapidapi.com/country?name="+boxInput);
//  xcr.setRequestHeader("x-rapidapi-host", "covid-19-data.p.rapidapi.com");
//  xcr.setRequestHeader("x-rapidapi-key", "fd2cfb934amsh5eb2547b172817bp1057d0jsn2590c6308121");
//  xcr.onload = () => {
//    let parseData = JSON.parse(xcr.responseText);
//    let confirmed = parseData[0].confirmed;
//    let confirmedData = document.getElementById("confirmed")
//    confirmedData.innerText = confirmed
//    let recovered = parseData[0].recovered
//    let critical = parseData[0].critical
//    let deaths = parseData[0].deaths
//  }
//  xcr.send(data);
//}





//function getCountryData (boxInput) {
//  let xmr = new XMLHttpRequest();
//  xmr.open("GET", "https://restcountries.com/v3.1/name/"+boxInput);
//  xmr.onload = () => {
//   let parData = JSON.parse(xmr.responseText);
//    let population = parData[0].population;
//    let countryPopulation = document.getElementById("country")
//    countryPopulation.innerText = population
//  }
//  xmr.send();
//}

//console.log(xmr.responseText); //not needed to load individual attributes of JSON

// code to call different atributes
// parData[0].population; parData[0].flags.png; parData[0].region; parData[0].subregion; parData[0].maps.googleMaps;


//Use of the fetch format with then/catch conditions
function getCountryData(boxInput) {
  let xmrFetch = fetch("https://restcountries.com/v3.1/name/"+boxInput)
  .then((response) => {
   return response.json();
  })
  .then(json => {
    console.log(json[0]);
    let population = json[0].population;
    let countryPopulation = document.getElementById("population")
    countryPopulation.innerText = population

    let name = json[0].name.common;
    let countryName = document.getElementById("country-name")
    countryName.innerText = name

    let region = json[0].region;
    let countryRegion = document.getElementById("region-name")
    countryRegion.innerText = region

    let subregion = json[0].subregion;
    let countrySubregion = document.getElementById("subregion-name")
    countrySubregion.innerText = subregion

    let maps = json[0].maps.googleMaps;
    let countryMaps = document.getElementById("maps")
    countryMaps.innerText = maps

    let flag = json[0].flags.png;
    let countryFlag = document.getElementById("flag")
    countryFlag.innerText = flag

  })
  .catch(error => console.log(error) )
}


// fetch version of first API call (COVID-19 stats)
function getCovidData(boxInput) {
  let xcrFetch = fetch("https://covid-19-data.p.rapidapi.com/country?name="+boxInput, {
    "method": "GET",
    "headers": {
      "x-rapidapi-host": "covid-19-data.p.rapidapi.com",
      "x-rapidapi-key": "fd2cfb934amsh5eb2547b172817bp1057d0jsn2590c6308121"
    }
  })
  .then((response) => {
    return response.json();
  })
  .then(json => {
    console.log(json[0]);
    let confirmed = json[0].confirmed;
    let confirmedData = document.getElementById("confirmed")
    confirmedData.innerText = confirmed

    let recovered = json[0].recovered;
    let recoveredData = document.getElementById("recovered")
    recoveredData.innerText = recovered

    let critical = json[0].critical;
    let criticalData = document.getElementById("critical")
    criticalData.innerText = critical

    let deaths = json[0].deaths;
    let deathsData = document.getElementById("deaths")
    deathsData.innerText = deaths
  })
  .catch(err => {
    console.error(err);
  });
}



