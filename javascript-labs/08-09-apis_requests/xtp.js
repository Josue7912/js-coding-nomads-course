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

