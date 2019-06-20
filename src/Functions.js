import $ from "jquery";

function calculateResults(size, strength, systemOfMeasurement="metric"){

	const gramsPerCard = 10
    const halfCardCutOff = gramsPerCard * 0.075

    const realDensityOfAlcohol = 0.789
    const densityOfAlcoholGovornmentsUse = 0.8

    const unitGramsPerCountryCode = [
            { "unitGrams" : 10, "countries" : ["IE"] },
            { "unitGrams" : 8, "countries" : ["UK"] },
            { "unitGrams" : 17.74, "countries" : ["US"] },
            { "unitGrams" : 20, "countries" : ["JP"] },
            { "unitGrams" : 12, "countries" : ["IT", "FN", "DMK"] }
    ]

      //for dealing with different measurement systems.
      if ( systemOfMeasurement === "imperial") { size = convertUnits("floztoml", size) }

      var drinkData = { "size": size, "strength": strength }
      drinkData.mlAlc = (drinkData.size/100)*drinkData.strength //ml of alcohol
      drinkData.gAlc = drinkData.mlAlc*realDensityOfAlcohol //g of alcohol
      drinkData.gpl = drinkData.gAlc / drinkData.size //grams per liter
      if(drinkData.gAlc/gramsPerCard < halfCardCutOff){
        if( drinkData.gAlc/gramsPerCard === 0) { drinkData.cards = 0; } else { drinkData.cards = 0.5; }
      }
      else{
        drinkData.cards = round(drinkData.gAlc/gramsPerCard, 0)
      }

      // console.log(drinkData);

      // const json = {
      //   "cards" : drinkData.cards
      // }
      const json = [
      	{title: "cards", number: drinkData.cards}
      ]

      unitGramsPerCountryCode.forEach(function (unitGramValue){
        const numberOfUnitsForThisGramValue = (drinkData.mlAlc*densityOfAlcoholGovornmentsUse) / unitGramValue.unitGrams
        drinkData["unitGramsOf"+unitGramValue.unitGrams.toString()] = numberOfUnitsForThisGramValue;
        unitGramValue.countries.forEach( function (countryCode) {
		  json.push({ title: countryCode +" Units", number: round(numberOfUnitsForThisGramValue,2) })
          // json[countryCode +" Units"] = round(numberOfUnitsForThisGramValue,2)
        });
      });
      // console.log(json);
      return json
    }

function round(num, decimals = 2){
      // return num.toFixed(decimals) // global roundig amount default is 2
      var zerosToReplace = ""; for (var i = 0; i < decimals; i++ ) { zerosToReplace = zerosToReplace + "0" }
      var re = new RegExp("[.,]"+zerosToReplace)
      return (num).toFixed(decimals).replace(re, "");
      // return (num).toFixed(decimals).replace(/[.,]00$/, "");
    }

function getDrinkData (sheetApiData) {
		var drinkData = []
		// get api data (this is a callback that is run when the api call loads)
        var apiData = sheetApiData.feed.entry
        var rowData = [];
        var drinkObject = {}; // this object is re populated with each new row
        
        for(var r=0; r<apiData.length; r++) {
            var cell = apiData[r]["gs$cell"];
            var val = cell["$t"];
            switch( cell.col ){
              // go through rows 1, 2 and 3 adding the data to the correct part of the object
              case "1":
                drinkObject.name = val;
                break;
              case "2":
                drinkObject.category = val;
                break;
              case "3":
                drinkObject.metricSize = Number(val);
                break;
              case "4":
                drinkObject.imperialSize = Number(val);
                break;
              case "5": //3 is special. It means we can write to the drink data object, then clear it for the next one
                drinkObject.strength = Number(val);
                drinkData.push( drinkObject );
                drinkObject = {};
                break;
            }
        }
    console.log(drinkData)
    return drinkData

}

function getSortedTableData(sheetApiData = {}, staticDataMode = false) {
 var drinkData = []
 staticDataMode ? drinkData = [{"name":"shot whiskey","category":"spirit","metricSize":30,"strength":40},{"name":"shot","category":"spirit","metricSize":25,"strength":40},{"name":"shot","category":"spirit","metricSize":50,"strength":40},{"name":"lager","category":"beer","metricSize":500,"strength":5},{"name":"champagne","category":"wine","metricSize":150,"strength":11.5},{"name":"red wine","category":"wine","metricSize":187.5,"strength":13},{"name":"lager","category":"beer","metricSize":330,"strength":5},{"name":"red wine","category":"wine","metricSize":750,"strength":14},{"name":"white wine","category":"wine","metricSize":125,"strength":12.5},{"name":"white wine","category":"wine","metricSize":175,"strength":12.5},{"name":"Craft Beer","category":"beer","metricSize":562,"strength":6.2},{"name":"Craft Beer","category":"beer","metricSize":330,"strength":6.5},{"name":"Craft Beer","category":"beer","metricSize":500,"strength":8.8},{"name":"Craft Beer","category":"beer","metricSize":500,"strength":5},{"name":"Sake","category":"other","metricSize":30,"strength":12},{"name":"beer","category":"beer","metricSize":330,"strength":4.2},{"name":"Highball Can","category":"other","metricSize":330,"strength":5},{"name":"Highball Can","category":"other","metricSize":500,"strength":5},{"name":"Highball Can","category":"other","metricSize":330,"strength":7},{"name":"Highball Can","category":"other","metricSize":500,"strength":7},{"name":"Kaluah Shot","category":"liqueur","metricSize":30,"strength":25},{"name":"Drambuie Shot","category":"liqueur","metricSize":30,"strength":25},{"name":"Gran Mariner Shot","category":"liqueur","metricSize":30,"strength":38},{"name":"Kaluah Shot","category":"liqueur","metricSize":30,"strength":25},{"name":"Kaluah Shot","category":"liqueur","metricSize":30,"strength":25},{"name":"U.S. Beer","category":"beer","imperialSize":12,"strength":4.2},{"name":"XJ BEER","category":"wine","metricSize":100,"strength":13},{"name":"Eimear Drink","category":"wine","metricSize":3000,"strength":14},{"name":" Mirco Sour","category":"MircoCat","metricSize":60,"strength":40}] :
 drinkData = getDrinkData(sheetApiData)

  var tableData = {};
  //convert drink data to table data
  drinkData.forEach( function(drinkDataValue){
  	//fill in the sizes
  	drinkDataValue.metricSize ? 
  		drinkDataValue.imperialSize = convertUnits("mltofloz", drinkDataValue.metricSize,0) :
  		drinkDataValue.metricSize = convertUnits("floztoml", drinkDataValue.imperialSize,0)
    //add the category to the table data if it's not there
    if ( !tableData[drinkDataValue["category"]] ){ tableData[drinkDataValue["category"]] = [] };
    // add the object to the category
    tableData[drinkDataValue.category].push(drinkDataValue)
  });

  // console.log("table data is" + JSON.stringify(tableData))
  //sort the table data (this data is also for the nav)
  var sortedTableData = [];
  const order = ["wine", "beer", "spirit","other"]
  const splitPoint = 3
  order.slice(0,splitPoint).forEach( function(categoryName){
      sortedTableData.push({[categoryName]: tableData[categoryName]})
  })
  Object.keys(tableData).forEach(function(categoryName){
		if (!order.includes(categoryName)){
      sortedTableData.push({[categoryName]: tableData[categoryName]})
	    }
	})
  order.slice(splitPoint).forEach( function(categoryName){
      sortedTableData.push({[categoryName]: tableData[categoryName]})
  })
  console.log(sortedTableData)
 return sortedTableData
}

function convertUnits(conversion, valueIn, decimals = 0){
	const floztoml = 0.033814
	switch (conversion){
		case "floztoml": return round(valueIn/floztoml, decimals);
			break;
		case "mltofloz": return round(valueIn*floztoml, decimals);
			break;
		default:
			break;
	}
}

export { calculateResults, getSortedTableData, convertUnits }