document.getElementById("start").addEventListener("click", function(event) {
  const endpointUrl = "https://covid-19-data.p.rapidapi.com/totals";

  // RapidAPI host
  const rapidApiHost = "covid-19-data.p.rapidapi.com";
  
  // YOUR RapidAPI key
  const rapidApiKey = '73916c8222msha8707eab340d477p138760jsn0a6418028c27';
  
  const options = {
    headers: {
      "x-rapidapi-host": rapidApiHost,
      "x-rapidapi-key": rapidApiKey,
    },
  };
  
  event.preventDefault();
  fetch(endpointUrl, options)
    .then(function(response){
      return response.json();
    }).then(function(json){
      let results ="";
      let resultsCrit = "";
      let resultsDeaths = "";
      let resultsRecover = "";
      let time = "";


      console.log(json);
      
      //let lastUpdated = json[0].
      let confirmCase = json[0].confirmed;
      let criticalCond = json[0].critical;
      let deathCount = json[0].deaths;
      let recoverCount = json[0].recovered;
      let lastUpdated = json[0].lastUpdate;
      
      results += "<h2>Confirmed Cases<br>" + (confirmCase).toLocaleString('en-US') + "</h2>";
      resultsCrit += "<h2>Critical Cases<br>" + (criticalCond).toLocaleString('en-US') + "</h2>";
      resultsDeaths += "<h2>Deaths<br>" + (deathCount).toLocaleString('en-US') + "</h2>";
      resultsRecover += "<h2>Recovered<br>" + (recoverCount).toLocaleString('en-US') + "</h2>";

      document.getElementById("output").innerHTML = results;
      document.getElementById("outputC").innerHTML = resultsCrit;
      document.getElementById("outputD").innerHTML = resultsDeaths;
      document.getElementById("outputR").innerHTML = resultsRecover;

    })
});

/*
document.getElementById("countryBtn").addEventListener("click", function(event){
    const newStartURL = "https://covid-19-data.p.rapidapi.com/country?name=";
    const countryInput = document.getElementById("countryInput").value;
    const combineUrl = newStartURL + countryInput;
    const rapidApiHost2 = "covid-19-data.p.rapidapi.com";
    const rapidApiKey2 = "73916c8222msha8707eab340d477p138760jsn0a6418028c27";
  
    console.log("btn works");
    console.log(combineUrl);
    const options2 = {
      headers: {
        "x-rapidapi-host": rapidApiHost2,
        "x-rapidapi-key" : rapidApiKey2,
      },
    };
  
    fetch(combineUrl, options2)
      .then(function(response){
        return response.json();
        console.log(countryInput);
      })
      .catch(err => {
        console.log(err);
      }) 
}); */