

function countryInputChange () {
  let inputText = document.getElementById("input-text")
  inputText.addEventListener("change", () => {
    let boxInput = document.getElementById("input-text").value
    getCovidData(boxInput)
    getCountryData(boxInput)
  } )
}

countryInputChange()

// Use of the fetch format with then/catch conditions
// fetch version of Restcountries API
function getCountryData(boxInput) {
  let xmrFetch = fetch("https://restcountries.com/v3.1/name/"+boxInput)
  .then((response) => {
   return response.json();
  })
  .then(json => {
    console.log(json[0]);
    let population = new Intl.NumberFormat().format(json[0].population);
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
    let flagContainer = document.getElementById("flag")
    let imageFlag = document.createElement("img")
    imageFlag.src = flag
    flagContainer.innerText = ""
    flagContainer.append(imageFlag)

  })
  .catch(error => console.log(error) )
}


// fetch version of API (COVID-19 stats)
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
    let confirmed = new Intl.NumberFormat().format(json[0].confirmed);
    let confirmedData = document.getElementById("confirmed")
    confirmedData.innerText = confirmed

    let recovered = new Intl.NumberFormat().format(json[0].recovered);
    let recoveredData = document.getElementById("recovered")
    recoveredData.innerText = recovered

    let critical = new Intl.NumberFormat().format(json[0].critical);
    let criticalData = document.getElementById("critical")
    criticalData.innerText = critical

    let deaths = new Intl.NumberFormat().format(json[0].deaths);
    let deathsData = document.getElementById("deaths")
    deathsData.innerText = deaths
  })
  .catch(err => {
    console.error(err);
  });
}



