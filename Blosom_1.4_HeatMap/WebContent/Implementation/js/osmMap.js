//List of all the global variables

var cumulativeBeaching00 = [];
var cumulativeBeaching75 = [];
var cumulativeBeaching80 = [];
var cumulativeBeaching85 = [];
var cumulativeBeaching90 = [];
var cumulativeBeaching95 = [];

var tempArr00 = [];
var tempArr75 = [];
var tempArr80 = [];
var tempArr85 = [];
var tempArr90 = [];
var tempArr95 = [];

var baseLineCoords = [];
var impactGridPolygons=(function(a,b){while(a--)b[a]=a+1;return b})(18479,[]);

var percentDiff;
var percentDiff2;
var percentDiff3;
var percentDiff4;

var baselineZoom;
var margin = {top: 40, right: 20, bottom: 30, left: 40},
    width = 960 - margin.left - margin.right,
    height = 500 - margin.top - margin.bottom;
var currentZoomLevel;

var uniqueDateStart;
var uniqueDateEnd;

var dataWithLatLng=[];

var idText;

var dataCut00 = [];
var dataCut75=[];
var dataCut80=[];
var dataCut85=[];
var dataCut90=[];
var dataCut95=[];

var sliderSvgOverlay;
var sliderSvgOverlay2;
var sliderSvgOverlay3;
var sliderSvgOverlay4;

var boatRampOverlay1;
var boatRampOverlay2;
var boatRampOverlay3;
var boatRampOverlay4;

var impactOverlay1;
var impactOverlay2;
var impactOverlay3;
var impactOverlay4;

var esiTileOverlay1;
var esiTileOverlay2;
var esiTileOverlay3;
var esiTileOverlay4;


var groupedOverlays1;
var groupedOverlays2;
var groupedOverlays3;
var groupedOverlays4;

var baseLayers;
var baseLayers2;
var baseLayers3;
var baseLayers4;

var mapWidth = 50, mapHeight = 50;
var circleRadius = 2;
var svgMap = d3.select("#svgmap").attr("width", mapWidth).attr("height", mapHeight);

var formatDate = d3.time.format("%d %b %H:%M %p");
var formatDateForTicks = d3.time.format("%d %b");
var formatDateForMapCreation = d3.time.format("%Y-%b-%d");
var formatDateForBoatRamps= d3.time.format("%Y-%m-%d");

var currentDateSelected;
var currentMonthSelected;
var currentYearSelected;
var currentDaySelected;
var currentHoursSelected;
var currentMinutesSelected;
var currentSecondsSelected;
var currentMonthNameSelected;
var developedTime;

var filteredDataForPanel1=[];
var filteredDataForPanel2=[];
var filteredDataForPanel3=[];
var filteredDataForPanel4=[];

var filteredDataForRamps1 = [];
var filteredDataForRamps2 = [];
var filteredDataForRamps3 = [];
var filteredDataForRamps4 = [];

var circleColor;
var spillTypeFilterValue;
var currentSpillType;
var blackColor = "black";
var blueColor = "blue";
var brownColor = "brown";	
var sampleStufff;
var spillDropDownMap = {};
var firsTimeLoadSlider = true;
var firsTimeDrawBoatRamps = true;

var heatMapOn = true;
var heatMapLatLng = [];
var heatMapLatLng2 = [];
var heatMapLatLng3 = [];
var heatMapLatLng4 = [];

var heatMapLatLngCleaned = [];
var heatMapLatLngCleaned2 = [];
var heatMapLatLngCleaned3 = [];
var heatMapLatLngCleaned4 = [];

var finalHeatMapCoords = [];
var finalHeatMapCoords2 = [];
var finalHeatMapCoords3 = [];
var finalHeatMapCoords4 = [];

var finalHeatMapCoordsCleaned = [];
var finalHeatMapCoordsCleaned2 = [];
var finalHeatMapCoordsCleaned3 = [];
var finalHeatMapCoordsCleaned4 = [];

var heatMapLayerGlobal = L.heatLayer();
var heatMapLayerGlobalCleaned = L.heatLayer();
var heatMapLayerGlobal2 = L.heatLayer();
var heatMapLayerGlobalCleaned2 = L.heatLayer();
var heatMapLayerGlobal3 = L.heatLayer();
var heatMapLayerGlobalCleaned3 = L.heatLayer();
var heatMapLayerGlobal4 = L.heatLayer();
var heatMapLayerGlobalCleaned4 = L.heatLayer();

var multipleLayerControl;
var multipleLayerControl2;
var multipleLayerControl3;
var multipleLayerControl4;

var multipleLayerControlCleaned;
var multipleLayerControlCleaned2;
var multipleLayerControlCleaned3;
var multipleLayerControlCleaned4;



var cleanedDataObtained;
var geojsonMarkerOptions;
var rampsJson = [];
var impactJson = [];
var impactJson2 = [];
var esiGom = [];


var developedTimeBoatRamps;
var developedTimeBoatRampsMonth;


var boatRampHighlightData1;
var boatRampHighlightData2;
var boatRampHighlightData3;
var boatRampHighlightData4;

var boatRampHighlightDataCut00;
var boatRampHighlightDataCut75;
var boatRampHighlightDataCut80;
var boatRampHighlightDataCut85;
var boatRampHighlightDataCut90;
var boatRampHighlightDataCut95;


var boatRampHighlightMap00 = new Map();
var boatRampHighlightMap75 = new Map();
var boatRampHighlightMap80 = new Map();
var boatRampHighlightMap85 = new Map();
var boatRampHighlightMap90 = new Map();
var boatRampHighlightMap95 = new Map();



var boatRampHighlightMap1 = new Map();
var boatRampHighlightMap2 = new Map();
var boatRampHighlightMap3 = new Map();
var boatRampHighlightMap4 = new Map();


var boatRampColor;

var onlyBoatRampIds1 = [];
var onlyBoatRampIds2 = [];
var onlyBoatRampIds3 = [];
var onlyBoatRampIds4 = [];

var currentBoatrampsArr1 = [];
var currentBoatrampsArr2 = [];
var currentBoatrampsArr3 = [];
var currentBoatrampsArr4 = [];


var toolTipBoatRampColor;
var svgStarIcon;
var globalFuncs;

var impactGridCounts00 = [];
var impactGridCounts75 = [];
var impactGridCounts80 = [];
var impactGridCounts85 = [];
var impactGridCounts90 = [];
var impactGridCounts95 = [];

var impactGridCountsMap1 = [];
var impactGridCountsMap2 = [];
var impactGridCountsMap3 = [];
var impactGridCountsMap4 = [];

var filterDataImpactGridCountsMap1 = [];
var filterDataImpactGridCountsMap2 = [];
var filterDataImpactGridCountsMap3 = [];
var filterDataImpactGridCountsMap4 = [];

var baseLineImpactGridMap = [];

var baseLineReferenceDifference = [];

var filterDataImpactGridCountsComplementMap1 = [];
var filterDataImpactGridCountsComplementMap2 = [];
var filterDataImpactGridCountsComplementMap3 = [];
var filterDataImpactGridCountsComplementMap4 = [];

var onlyImpactCounts00 = [];
var onlyImpactCounts75 = [];
var onlyImpactCounts80 = [];
var onlyImpactCounts85 = [];
var onlyImpactCounts90 = [];
var onlyImpactCounts95 = [];

var tempDailyImpactCounts = [];
var promises = [];
var canDraw = false;
var boatRampshiddenMap1 = false;
var boatRampshiddenMap2 = false;
var boatRampshiddenMap3 = false;
var boatRampshiddenMap4 = false;


var polygonColor;

var onlyImpactCountsMap1 = [];
var onlyImpactCountsMap2 = [];
var onlyImpactCountsMap3 = [];
var onlyImpactCountsMap4 = [];

var onlyFilterDataImpactGridCountsIdsMap1 = [];
var onlyFilterDataImpactGridCountsIdsMap2 = [];
var onlyFilterDataImpactGridCountsIdsMap3 = [];
var onlyFilterDataImpactGridCountsIdsMap4 = [];

var maxImpact00;
var maxImpact75; 
var maxImpact80;
var maxImpact85;
var maxImpact90;
var maxImpact95;

var finalMaxImpact;

var minImpact00;
var minImpact75;
var minImpact80;
var minImpact85;
var minImpact90;
var minImpact95;

var finalMinImpact;

var minImpactArr;
var maxImpactArr;

var minGridDifference;
var maxGridDifference;

var finalOverallImpactRange;

var minGridDifferenceStep;
var maxGridDifferenceStep;

var overallImpactRange00;
var overallImpactRange75;
var overallImpactRange80;
var overallImpactRange85;
var overallImpactRange90;
var overallImpactRange95;

var overallImpactRangeMap1;
var overallImpactRangeMap2;
var overallImpactRangeMap3;
var overallImpactRangeMap4;

var finalFileMap1;
var finalFileMap2;
var finalFileMap3;
var finalFileMap4;

var esiGomLines;

var dataMap00 = new Map();
var dataMap75 = new Map();
var dataMap80 = new Map();
var dataMap85 = new Map();
var dataMap90 = new Map();
var dataMap95 = new Map();


var dataBeached00 = new Map();
var dataBeached75 = new Map();
var dataBeached80 = new Map();
var dataBeached85 = new Map();
var dataBeached90 = new Map();
var dataBeached95 = new Map();


var startDateFromCsv;
var endDateFromCsv;
var modelRuntimeFromCsv;
var blowoutDurationFromCsv;
var onlyFilterIGCIUnique = [];

var currentBoatramps1;
var currentBoatramps2;
var currentBoatramps3;
var currentBoatramps4;

var rampsJsonSet;
var rampsJsonArr = [];

var activeBoatRamps1;
var activeBoatRamps2;
var activeBoatRamps3;
var activeBoatRamps4;

var inactiveRamps1;
var inactiveRamps2;
var inactiveRamps3;
var inactiveRamps4;

var isMap1Baseline = false;
var isMap2Baseline = false;
var isMap3Baseline = false;
var isMap4Baseline = false;


var impactGridLegendClass1;
var impactGridLegendClass2;
var impactGridLegendClass3;
var impactGridLegendClass4;
var impactGridLegendClass5;


var gridDifferenceLegendClass1;
var gridDifferenceLegendClass2;
var gridDifferenceLegendClass3;
var gridDifferenceLegendClass4;
var gridDifferenceLegendClass5;

//List of all the global variables end


//Document. ready starts
$(document).ready(function(){
	
	//Hiding the grid difference legend initially
	$("#impactDifferenceLegend").hide();
	$(".lds-roller").show();

promises[0] = new Promise(function(resolve, reject) {
//First, we read all the final files-the ones that have the oil parcel data and their corresponding locations
	d3.csv("data/finalFile00.0.csv", function (data) {
		console.log("1");
		dataCut00 = data.map(function(d){
			d.latLng = [+d.LATITUDE,+d.LONGITUDE];
			return d;
		});
		var myDate  = new Date(startDateFromCsv);
		var onlyDates = [];
		for (var i = 0; i< modelRuntimeFromCsv + 1; i++){
			dataMap00.set(formatDateForMapCreation(myDate), dataCut00.filter(function(rowForMonthAndYear) {
				return rowForMonthAndYear["CURR_TIME"].substring(0,11) == formatDateForMapCreation(myDate)
			}) );
			
			dataBeached00.set(formatDateForMapCreation(myDate), dataCut00.filter(function(rowForMonthAndYear) {
				if(rowForMonthAndYear["STATUS"] == "beached" && rowForMonthAndYear["CURR_TIME"].substring(0,11) == formatDateForMapCreation(myDate))
				return  rowForMonthAndYear;
			}) );
			myDate.setDate(myDate.getDate() + 1);
		}
		
		var myDate2  = new Date(startDateFromCsv);
		var tempDate2  = new Date(startDateFromCsv);
		tempArr00 = [];
		tempDate2.setDate(tempDate2.getDate() + 1);
		cumulativeBeaching00 = [];
		for (var i = 0; i< modelRuntimeFromCsv ; i++){
			cumulativeBeaching00 = dataBeached00.get(formatDateForMapCreation(myDate2));
			if(cumulativeBeaching00.length > 0){
				cumulativeBeaching00.forEach(function(eachEl){
					tempArr00.push(eachEl);
				});
			}
			tempArr00.forEach(function(e){
				dataMap00.get(formatDateForMapCreation(tempDate2)).push(e);
			});
			myDate2.setDate(myDate2.getDate() + 1);
			tempDate2.setDate(tempDate2.getDate() + 1);
		}
		
		resolve();
	});
});


	promises[1] = new Promise(function(resolve, reject) {

		d3.csv("data/finalFile75.0.csv", function (data) {
			console.log("2");
			dataCut75 = data.map(function(d){
				d.latLng = [+d.LATITUDE,+d.LONGITUDE];
				return d;
			});
			var myDate  = new Date(startDateFromCsv);
			var onlyDates = [];
			for (var i = 0; i< modelRuntimeFromCsv + 1 ; i++){
				dataMap75.set(formatDateForMapCreation(myDate), dataCut75.filter(function(rowForMonthAndYear) {
					return rowForMonthAndYear["CURR_TIME"].substring(0,11) == formatDateForMapCreation(myDate)
				}) );
				
				dataBeached75.set(formatDateForMapCreation(myDate), dataCut75.filter(function(rowForMonthAndYear) {
					if(rowForMonthAndYear["STATUS"] == "beached" && rowForMonthAndYear["CURR_TIME"].substring(0,11) == formatDateForMapCreation(myDate))
					return  rowForMonthAndYear;
				}) );
				myDate.setDate(myDate.getDate() + 1);
			}
			var myDate2  = new Date(startDateFromCsv);
			var tempDate2  = new Date(startDateFromCsv);
			tempArr75 = [];
			tempDate2.setDate(tempDate2.getDate() + 1);
			cumulativeBeaching75 = [];
			for (var i = 0; i< modelRuntimeFromCsv ; i++){
				cumulativeBeaching75 = dataBeached75.get(formatDateForMapCreation(myDate2));
				if(cumulativeBeaching75.length > 0){
					cumulativeBeaching75.forEach(function(eachEl){
						tempArr75.push(eachEl);
					});
				}
				tempArr75.forEach(function(e){
					dataMap75.get(formatDateForMapCreation(tempDate2)).push(e);
				});
				myDate2.setDate(myDate2.getDate() + 1);
				tempDate2.setDate(tempDate2.getDate() + 1);
			}
			resolve();
		});
	});

	
	promises[2] = new Promise(function(resolve, reject) {
	
		d3.csv("data/finalFile80.0.csv", function (data) {
			console.log("3");
			dataCut80 = data.map(function(d){
				d.latLng = [+d.LATITUDE,+d.LONGITUDE];
				return d;
			});
			var myDate  = new Date(startDateFromCsv);
			var onlyDates = [];
			for (var i = 0; i< modelRuntimeFromCsv + 1 ; i++){
				dataMap80.set(formatDateForMapCreation(myDate), dataCut80.filter(function(rowForMonthAndYear) {
					return rowForMonthAndYear["CURR_TIME"].substring(0,11) == formatDateForMapCreation(myDate)
				}) );
				
				dataBeached80.set(formatDateForMapCreation(myDate), dataCut80.filter(function(rowForMonthAndYear) {
					if(rowForMonthAndYear["STATUS"] == "beached" && rowForMonthAndYear["CURR_TIME"].substring(0,11) == formatDateForMapCreation(myDate))
					return  rowForMonthAndYear;
				}) );
				myDate.setDate(myDate.getDate() + 1);
			}
			
			var myDate2  = new Date(startDateFromCsv);
			var tempDate2  = new Date(startDateFromCsv);
			tempArr80 = [];
			tempDate2.setDate(tempDate2.getDate() + 1);
			cumulativeBeaching80 = [];
			for (var i = 0; i< modelRuntimeFromCsv ; i++){
				cumulativeBeaching80 = dataBeached80.get(formatDateForMapCreation(myDate2));
				if(cumulativeBeaching80.length > 0){
					cumulativeBeaching80.forEach(function(eachEl){
						tempArr80.push(eachEl);
					});
				}
				tempArr80.forEach(function(e){
					dataMap80.get(formatDateForMapCreation(tempDate2)).push(e);
				});
				myDate2.setDate(myDate2.getDate() + 1);
				tempDate2.setDate(tempDate2.getDate() + 1);
			}
			resolve();
		});
	});

	promises[3] = new Promise(function(resolve, reject) {

		d3.csv("data/finalFile85.0.csv", function (data) {
			console.log("4");
			dataCut85 = data.map(function(d){
				d.latLng = [+d.LATITUDE,+d.LONGITUDE];
				return d;
			});
			var myDate  = new Date(startDateFromCsv);
			var onlyDates = [];
			for (var i = 0; i< modelRuntimeFromCsv + 1  ; i++){
				dataMap85.set(formatDateForMapCreation(myDate), dataCut85.filter(function(rowForMonthAndYear) {
					return rowForMonthAndYear["CURR_TIME"].substring(0,11) == formatDateForMapCreation(myDate)
				}) );
				
				dataBeached85.set(formatDateForMapCreation(myDate), dataCut85.filter(function(rowForMonthAndYear) {
					if(rowForMonthAndYear["STATUS"] == "beached" && rowForMonthAndYear["CURR_TIME"].substring(0,11) == formatDateForMapCreation(myDate))
					return  rowForMonthAndYear;
				}) );
				myDate.setDate(myDate.getDate() + 1);
			}
			
			var myDate2  = new Date(startDateFromCsv);
			var tempDate2  = new Date(startDateFromCsv);
			tempArr85 = [];
			tempDate2.setDate(tempDate2.getDate() + 1);
			cumulativeBeaching85 = [];
			for (var i = 0; i< modelRuntimeFromCsv ; i++){
				cumulativeBeaching85 = dataBeached85.get(formatDateForMapCreation(myDate2));
				if(cumulativeBeaching85.length > 0){
					cumulativeBeaching85.forEach(function(eachEl){
						tempArr85.push(eachEl);
					});
				}
				tempArr85.forEach(function(e){
					dataMap85.get(formatDateForMapCreation(tempDate2)).push(e);
				});
				myDate2.setDate(myDate2.getDate() + 1);
				tempDate2.setDate(tempDate2.getDate() + 1);
			}
			resolve();
		});
	});

	promises[4] = new Promise(function(resolve, reject) {
		
		d3.csv("data/finalFile90.0.csv", function (data) {
			console.log("5");
			dataCut90 = data.map(function(d){
				d.latLng = [+d.LATITUDE,+d.LONGITUDE];
				return d;
			});
			var myDate  = new Date(startDateFromCsv);
			var onlyDates = [];
			for (var i = 0; i< modelRuntimeFromCsv + 1  ; i++){
				dataMap90.set(formatDateForMapCreation(myDate), dataCut90.filter(function(rowForMonthAndYear) {
					return rowForMonthAndYear["CURR_TIME"].substring(0,11) == formatDateForMapCreation(myDate)
				}) );
				
				dataBeached90.set(formatDateForMapCreation(myDate), dataCut90.filter(function(rowForMonthAndYear) {
					if(rowForMonthAndYear["STATUS"] == "beached" && rowForMonthAndYear["CURR_TIME"].substring(0,11) == formatDateForMapCreation(myDate))
					return  rowForMonthAndYear;
				}) );
				myDate.setDate(myDate.getDate() + 1);
			}
			
			var myDate2  = new Date(startDateFromCsv);
			var tempDate2  = new Date(startDateFromCsv);
			tempArr90 = [];
			tempDate2.setDate(tempDate2.getDate() + 1);
			cumulativeBeaching90 = [];
			for (var i = 0; i< modelRuntimeFromCsv ; i++){
				cumulativeBeaching90 = dataBeached90.get(formatDateForMapCreation(myDate2));
				if(cumulativeBeaching90.length > 0){
					cumulativeBeaching90.forEach(function(eachEl){
						tempArr90.push(eachEl);
					});
				}
				tempArr90.forEach(function(e){
					dataMap90.get(formatDateForMapCreation(tempDate2)).push(e);
				});
				myDate2.setDate(myDate2.getDate() + 1);
				tempDate2.setDate(tempDate2.getDate() + 1);
			}
			resolve();
		});
	});

	promises[5] = new Promise(function(resolve, reject) {

		d3.csv("data/finalFile95.0.csv", function (data) {
			console.log("6");
			dataWithLatLng = data.map(function(d){
				d.latLng = [+d.LATITUDE,+d.LONGITUDE];
				return d;
			});
			dataCut95 = dataWithLatLng;
			var myDate  = new Date(startDateFromCsv);
			var onlyDates = [];
			for (var i = 0; i< modelRuntimeFromCsv + 1 ; i++){
				dataMap95.set(formatDateForMapCreation(myDate), dataCut95.filter(function(rowForMonthAndYear) {
					return rowForMonthAndYear["CURR_TIME"].substring(0,11) == formatDateForMapCreation(myDate)
				}) );
				
				dataBeached95.set(formatDateForMapCreation(myDate), dataCut95.filter(function(rowForMonthAndYear) {
					if(rowForMonthAndYear["STATUS"] == "beached" && rowForMonthAndYear["CURR_TIME"].substring(0,11) == formatDateForMapCreation(myDate))
					return  rowForMonthAndYear;
				}) );
				myDate.setDate(myDate.getDate() + 1);
			}
			
			var myDate2  = new Date(startDateFromCsv);
			var tempDate2  = new Date(startDateFromCsv);
			tempArr95 = [];
			tempDate2.setDate(tempDate2.getDate() + 1);
			cumulativeBeaching95 = [];
			for (var i = 0; i< modelRuntimeFromCsv ; i++){
				cumulativeBeaching95 = dataBeached95.get(formatDateForMapCreation(myDate2));
				if(cumulativeBeaching95.length > 0){
					cumulativeBeaching95.forEach(function(eachEl){
						tempArr95.push(eachEl);
					});
				}
				tempArr95.forEach(function(e){
					dataMap95.get(formatDateForMapCreation(tempDate2)).push(e);
				});
				myDate2.setDate(myDate2.getDate() + 1);
				tempDate2.setDate(tempDate2.getDate() + 1);
			}
			
			finalFileMap1 = dataMap95;
			finalFileMap2 = dataMap95;
			finalFileMap3 = dataMap95;
			finalFileMap4 = dataMap95;
			resolve();
		});
	});

////Next, we read all the boat ramps data and their corresponding locations

	promises[6] = new Promise(function(resolve, reject) {
		
		shp("data/BoatRamps.zip").then(function(geojson){
			console.log("7");
			rampsJson = geojson.features.map(function(d){
				d.latLng = [+d.geometry["coordinates"][1],+d.geometry["coordinates"][0]];
				return d;
			});
			rampsJson.forEach(function(eachRampJson){
				rampsJsonArr.push(eachRampJson.properties["RampID"]);
			})
			rampsJsonSet = new Set(rampsJsonArr);
			resolve();
		});
	});
	
//Similarly we read the Impact Grid shapefile to draw the impact grid

	
	promises[7] = new Promise(function(resolve, reject) {
	
		shp("data/impact2.zip").then(function(geojson){
			console.log("8");
			impactJson = geojson.features.map(function(d){
				d.latLng = [+d.geometry["coordinates"][0][0][1], +d.geometry["coordinates"][0][0][0]];
				return d;
			});
			resolve();
		});
	});
	

//Next, we read the highlighted boat ramps data
	promises[8] = new Promise(function(resolve, reject) {
		
		d3.csv("data/ResultBoatRampDayWise00.0_unique.csv", function (data) {
			console.log("9");
			boatRampHighlightDataCut00 = data;
			
			var myDate  = new Date(startDateFromCsv); 
			for (var i = 0; i< modelRuntimeFromCsv + 1 ; i++){
				boatRampHighlightMap00.set(formatDateForBoatRamps(myDate), boatRampHighlightDataCut00.filter(function(rowForMonthAndYear) {
					return rowForMonthAndYear["date"] == formatDateForBoatRamps(myDate);
				}) );
				myDate.setDate(myDate.getDate() + 1);	
			}
			resolve();
		});
		});


	promises[9] = new Promise(function(resolve, reject) {
		
	d3.csv("data/ResultBoatRampDayWise75.0_unique.csv", function (data) {
		console.log("10");
		boatRampHighlightDataCut75 = data;
		var myDate  = new Date(startDateFromCsv); 
		for (var i = 0; i< modelRuntimeFromCsv + 1; i++){
			boatRampHighlightMap75.set(formatDateForBoatRamps(myDate), boatRampHighlightDataCut75.filter(function(rowForMonthAndYear) {
				return rowForMonthAndYear["date"] == formatDateForBoatRamps(myDate);
			}) );
			myDate.setDate(myDate.getDate() + 1);	
		}
		resolve();
	});
	});

	// 10
	promises[10] = new Promise(function(resolve, reject) {
		
	d3.csv("data/ResultBoatRampDayWise80.0_unique.csv", function (data) {
		console.log("11");
		boatRampHighlightDataCut80 = data;
		var myDate  = new Date(startDateFromCsv); 
		for (var i = 0; i< modelRuntimeFromCsv + 1; i++){
			boatRampHighlightMap80.set(formatDateForBoatRamps(myDate), boatRampHighlightDataCut80.filter(function(rowForMonthAndYear) {
				return rowForMonthAndYear["date"] == formatDateForBoatRamps(myDate);
			}) );
			myDate.setDate(myDate.getDate() + 1);
		}
		resolve();
	});
	});

	// 11
	promises[11] = new Promise(function(resolve, reject) {
		
	d3.csv("data/ResultBoatRampDayWise85.0_unique.csv", function (data) {
		console.log("12");
		boatRampHighlightDataCut85 = data;
		
		var myDate  = new Date(startDateFromCsv); 
		for (var i = 0; i< modelRuntimeFromCsv + 1; i++){
			boatRampHighlightMap85.set(formatDateForBoatRamps(myDate), boatRampHighlightDataCut85.filter(function(rowForMonthAndYear) {
				return rowForMonthAndYear["date"] == formatDateForBoatRamps(myDate);
			}) );
			myDate.setDate(myDate.getDate() + 1);
		}
		resolve();
	});
	});

	promises[12] = new Promise(function(resolve, reject) {
		
	d3.csv("data/ResultBoatRampDayWise90.0_unique.csv", function (data) {
		console.log("13");
		boatRampHighlightDataCut90 = data;
		var myDate  = new Date(startDateFromCsv); 
		for (var i = 0; i< modelRuntimeFromCsv + 1; i++){
			boatRampHighlightMap90.set(formatDateForBoatRamps(myDate), boatRampHighlightDataCut90.filter(function(rowForMonthAndYear) {
				return rowForMonthAndYear["date"] == formatDateForBoatRamps(myDate);
			}) );
			myDate.setDate(myDate.getDate() + 1);
		}
		
		
		resolve();
	});
	});

	promises[13] = new Promise(function(resolve, reject) {
	
		d3.csv("data/ResultBoatRampDayWise95.0_unique.csv", function (data) {
			console.log("14");
			boatRampHighlightData1 = data;
			boatRampHighlightData2 = data;
			boatRampHighlightData3 = data;
			boatRampHighlightData4 = data;
			boatRampHighlightDataCut95 = boatRampHighlightData1;
			
			var myDate  = new Date(startDateFromCsv); 
			for (var i = 0; i< modelRuntimeFromCsv + 1 ; i++){
				boatRampHighlightMap95.set(formatDateForBoatRamps(myDate), boatRampHighlightDataCut95.filter(function(rowForMonthAndYear) {
					return rowForMonthAndYear["date"] == formatDateForBoatRamps(myDate);
				}) );
				myDate.setDate(myDate.getDate() + 1);
			}
			resolve();
		});
	});
	
	
	boatRampHighlightMap1 = boatRampHighlightMap95;
	boatRampHighlightMap2 = boatRampHighlightMap95;
	boatRampHighlightMap3 = boatRampHighlightMap95;
	boatRampHighlightMap4 = boatRampHighlightMap95;
	


//Then, finally we read the spatial join result files
	d3.csv("data/SJOilGrid00.0_Uncleaned_RequiredColumns_Count_Unique_LatestCount.csv", function (data) {
		console.log("15");
		impactGridCounts00 = data;
		impactGridCounts00.forEach(function(eachPolygonRow){
			onlyImpactCounts00.push(eachPolygonRow['Count']);
		}) 
		maxImpact00 = Math.max.apply(null, onlyImpactCounts00);
		minImpact00 = Math.min.apply(null, onlyImpactCounts00);
		overallImpactRange00 = maxImpact00 - minImpact00;
	});
	
	d3.csv("data/SJOilGrid75.0_Uncleaned_RequiredColumns_Count_Unique_LatestCount.csv", function (data) {
		console.log("16");
		impactGridCounts75 = data;
		impactGridCounts75.forEach(function(eachPolygonRow){
			onlyImpactCounts75.push(eachPolygonRow['Count']);
		}) 
		maxImpact75 = Math.max.apply(null, onlyImpactCounts75);
		minImpact75 = Math.min.apply(null, onlyImpactCounts75);
		overallImpactRange75 = maxImpact75 - minImpact75;
	});
	
	d3.csv("data/SJOilGrid80.0_Uncleaned_RequiredColumns_Count_Unique_LatestCount.csv", function (data) {
		console.log("17");
		impactGridCounts80 = data;
		impactGridCounts80.forEach(function(eachPolygonRow){
			onlyImpactCounts80.push(eachPolygonRow['Count']);
		}) 
		maxImpact80 = Math.max.apply(null, onlyImpactCounts80);
		minImpact80 = Math.min.apply(null, onlyImpactCounts80);
		overallImpactRange80 = maxImpact80 - minImpact80;
	});
	
	d3.csv("data/SJOilGrid85.0_Uncleaned_RequiredColumns_Count_Unique_LatestCount.csv", function (data) {
		console.log("18");
		impactGridCounts85 = data;
		impactGridCounts85.forEach(function(eachPolygonRow){
			onlyImpactCounts85.push(eachPolygonRow['Count']);
		}) 
		maxImpact85 = Math.max.apply(null, onlyImpactCounts85);
		minImpact85 = Math.min.apply(null, onlyImpactCounts85);
		overallImpactRange85 = maxImpact85 - minImpact85;
	});
	
	d3.csv("data/SJOilGrid90.0_Uncleaned_RequiredColumns_Count_Unique_LatestCount.csv", function (data) {
		console.log("19");
		impactGridCounts90 = data;
		impactGridCounts90.forEach(function(eachPolygonRow){
			onlyImpactCounts90.push(eachPolygonRow['Count']);
		}) 
		maxImpact90 = Math.max.apply(null, onlyImpactCounts90);
		minImpact90 = Math.min.apply(null, onlyImpactCounts90);
		overallImpactRange90 = maxImpact90 - minImpact90;
	});
	
	d3.csv("data/SJOilGrid95.0_Uncleaned_RequiredColumns_Count_Unique_LatestCount.csv", function (data) {
		console.log("20");
		impactGridCounts95 = data;
		impactGridCounts95.forEach(function(eachPolygonRow){
			onlyImpactCounts95.push(eachPolygonRow['Count']);
		}) 
		maxImpact95 = Math.max.apply(null, onlyImpactCounts95);
		minImpact95 = Math.min.apply(null, onlyImpactCounts95);
		overallImpactRange95 = maxImpact95 - minImpact95;
	});
	
	
	
//Once all the promises are resolved, the following is executed

	Promise.all(promises).then(function(result){
		console.log("21");

		//Drawing the boat ramps for all the four maps
		sliderSvgOverlay.drawBoatRampCircles();
		//sliderSvgOverlay.drawOilSpillCircles();
		sliderSvgOverlay2.drawBoatRampCircles2();
		//sliderSvgOverlay2.drawOilSpillCircles2();
		sliderSvgOverlay3.drawBoatRampCircles3();
		//sliderSvgOverlay3.drawOilSpillCircles3();
		sliderSvgOverlay4.drawBoatRampCircles4();
		//sliderSvgOverlay4.drawOilSpillCircles4();
		canDraw = true;
		
		//Drawing the impact grid on all the four maps
		drawImpactGrid();
		drawImpactGrid2();
		drawImpactGrid3();
		drawImpactGrid4();
		
		//Drawing the ESI tile layer on all the four maps
		drawEsiTileLayer();
		drawEsiTileLayer2();
		drawEsiTileLayer3();
		drawEsiTileLayer4();
		
		//Calculating the overall impact range
		minImpactArr = [minImpact75, minImpact80, minImpact85, minImpact90, minImpact95, minImpact00];
		maxImpactArr = [maxImpact75, maxImpact80, maxImpact85, maxImpact90, maxImpact95, maxImpact00];
		finalMinImpact = Math.min.apply(null, minImpactArr);
		finalMaxImpact = Math.max.apply(null, maxImpactArr);
		finalOverallImpactRange = finalMaxImpact - finalMinImpact;
		
		//Dynamically populating the impact grid legend
		impactGridLegendClass1 = (finalOverallImpactRange * 0.2); 
		impactGridLegendClass2 = (finalOverallImpactRange * 0.4);
		impactGridLegendClass3 = (finalOverallImpactRange * 0.6);
		impactGridLegendClass4 = (finalOverallImpactRange * 0.8);
		impactGridLegendClass5 = finalOverallImpactRange;
		
		$("#impactGridClass1").text(finalMinImpact + " - "  + (Math.round(impactGridLegendClass1)).toString());
		$("#impactGridClass2").text((Math.round(impactGridLegendClass1 + 1)).toString() + " - "  + (Math.round(impactGridLegendClass2 )).toString());
		$("#impactGridClass3").text((Math.round(impactGridLegendClass2 + 1)).toString() + " - "  + (Math.round(impactGridLegendClass3 )).toString());
		$("#impactGridClass4").text((Math.round(impactGridLegendClass3 + 1)).toString() + " - "  + (Math.round(impactGridLegendClass4 )).toString());
		$("#impactGridClass5").text((Math.round(impactGridLegendClass4 + 1)).toString() + " - "  + finalMaxImpact);
		
		console.log("22");
		
		
		//Giving the checkbox options for all the four maps
		
		groupedOverlays1 = {

				"Impact Grid (Map1)": impactOverlay1,
				"ESI Tile Layer": esiTileOverlay1,
				"Un-Cleaned Oil Parcels": multipleLayerControl,
				"Cleaned Oil Parcels": multipleLayerControlCleaned
			
		};

		groupedOverlays2 = {

				"Impact Grid (Map2)": impactOverlay2,
				"ESI Tile Layer": esiTileOverlay2,
				"Un-Cleaned Oil Parcels": multipleLayerControl2,
				"Cleaned Oil Parcels": multipleLayerControlCleaned2
		};

		groupedOverlays3 = {

				"Impact Grid (Map3)": impactOverlay3,
				"ESI Tile Layer": esiTileOverlay3,
				"Un-Cleaned Oil Parcels": multipleLayerControl3,
				"Cleaned Oil Parcels": multipleLayerControlCleaned3
		};

		groupedOverlays4 = {

				"Impact Grid (Map4)": impactOverlay4,
				"ESI Tile Layer": esiTileOverlay4,
				"Un-Cleaned Oil Parcels": multipleLayerControl4,
				"Cleaned Oil Parcels": multipleLayerControlCleaned4
		};
		
		L.control.layers(baseLayers, groupedOverlays1).addTo(map);
		L.control.layers(baseLayers2, groupedOverlays2).addTo(map2);
		L.control.layers(baseLayers3, groupedOverlays3).addTo(map3);
		L.control.layers(baseLayers4, groupedOverlays4).addTo(map4);
		
		//Since boat ramp overlay messes up the zoom of the boat ramps and makes them look too small or toooo big, manually adding the checkbox to toggle boat ramps on all the four maps
		$('#osmMap1 .leaflet-control-layers-overlays').append('<label><div><input id="boatRampMap1Toggle" type="checkbox" data-index="1" class="leaflet-control-layers-selector" checked="" class=""><span> Boat Ramp Overlay</span></div></label>');
		$('#osmMap2 .leaflet-control-layers-overlays').append('<label><div><input id="boatRampMap2Toggle" type="checkbox" data-index="1" class="leaflet-control-layers-selector" checked="" class=""><span> Boat Ramp Overlay</span></div></label>');
		$('#osmMap3 .leaflet-control-layers-overlays').append('<label><div><input id="boatRampMap3Toggle" type="checkbox" data-index="1" class="leaflet-control-layers-selector" checked="" class=""><span> Boat Ramp Overlay</span></div></label>');
		$('#osmMap4 .leaflet-control-layers-overlays').append('<label><div><input id="boatRampMap4Toggle" type="checkbox" data-index="1" class="leaflet-control-layers-selector" checked="" class=""><span> Boat Ramp Overlay</span></div></label>');
		$( "#boatRampMap1Toggle" ).change(function() {
			if($("#boatRampMap1Toggle").is(":checked") == true){
				$(".boatRampLocations_1").show();
				boatRampshiddenMap1 = false;
			} else {
				$(".boatRampLocations_1").hide();
				boatRampshiddenMap1 = true;
			}
		});
		$( "#boatRampMap2Toggle" ).change(function() {
			if($("#boatRampMap2Toggle").is(":checked") == true){
				$(".boatRampLocations_2").show();
				boatRampshiddenMap2 = false;
			} else {
				$(".boatRampLocations_2").hide();
				boatRampshiddenMap2 = true;
			}
		});
		$( "#boatRampMap3Toggle" ).change(function() {
			if($("#boatRampMap3Toggle").is(":checked") == true){
				$(".boatRampLocations_3").show();
				boatRampshiddenMap3 = false;
			} else {
				$(".boatRampLocations_3").hide();
				boatRampshiddenMap3 = true;
			}
		});
		$( "#boatRampMap4Toggle" ).change(function() {
			if($("#boatRampMap4Toggle").is(":checked") == true){
				$(".boatRampLocations_4").show();
				boatRampshiddenMap4 = false;
			} else {
				$(".boatRampLocations_4").hide();
				boatRampshiddenMap4 = true;
			}
		});
		$(".lds-roller").hide();
	});


	
});

///////////////////////////////Document.ready ends//////////////////////////////////////////////////




//Function for the right click context menu
$(function(){
    $.contextMenu({
        selector: '#mapCollection', 
        callback: function(itemKey, opt, rootMenu, originalEvent) {
            var m = "global: " + key;
            window.console && console.log(m) || alert(m); 
        },
        items: {
            "Oil Parcels": {
                name: "Toggle Oil Parcels Legend", 
                icon: "fa-tint", 
                callback: function(itemKey, opt, rootMenu, originalEvent) {
                	$("#oilParcelsLegend").toggle();
                }
            },
            "Impact Grid": {
                name: "Toggle Impact Grid Legend", 
                icon: "fa-th-large", 
                callback: function(itemKey, opt, rootMenu, originalEvent) {
                	$("#impactGridLegend").toggle();
                }
            },
            "Boat Ramps": {
                name: "Toggle Boat Ramps Legend", 
                icon: "fa-ship", 
                callback: function(itemKey, opt, rootMenu, originalEvent) {
                	$("#boatRampsLegend").toggle();
                }
            },
            "ESI Indices": {
                name: "Toggle ESI Indices Legend", 
                icon: "fa-info-circle", 
                callback: function(itemKey, opt, rootMenu, originalEvent) {
                	$("#ESILegend").toggle();
                }
            },
            "Selected Map": {
            	name: "Show only this map", 
            	icon: "fa-map-marker",
            	callback: function(itemKey, opt, rootMenu, originalEvent) {
            		if(event.clientX<960 && event.clientY < 485){
	                	$("#osmMap2").hide();
	                	$("#osmMap3").hide();
	                	$("#osmMap4").hide();
	                	$("#osmMap1").show("slow",function(){
	                		$("#osmMap1").css("width", "100%").css("height", "100%");
	                	});
	                	
	                	map.invalidateSize();
            		} else if (event.clientX > 960 && event.clientY < 485){
            			$("#osmMap1").hide();
	                	$("#osmMap3").hide();
	                	$("#osmMap4").hide();
	                	$("#osmMap2").css("width", "100%").css("height", "100%");
	                	map2.invalidateSize();
            		} else if (event.clientX < 960 && event.clientY > 485){
            			$("#osmMap1").hide();
	                	$("#osmMap2").hide();
	                	$("#osmMap4").hide();
	                	$("#osmMap3").css("width", "100%").css("height", "100%");
	                	map3.invalidateSize();
            		} else if (event.clientX > 960 && event.clientY > 485) {
            			$("#osmMap1").hide();
	                	$("#osmMap2").hide();
	                	$("#osmMap3").hide();
	                	$("#osmMap4").css("width", "100%").css("height", "100%");
	                	map4.invalidateSize();
            		}
                				 
                }
            		
            },
            "All Maps": {
            	name: "Show all the maps", 
            	icon: "fa-map",
            	callback: function(itemKey, opt, rootMenu, originalEvent) {
            		$("#osmMap1").show();
            		$("#osmMap1").css("width", "49.95%").css("height", "50%");
            		map.invalidateSize();
                	
            		$("#osmMap2").show();
                	$("#osmMap2").css("width", "49.95%").css("height", "50%");
                	map2.invalidateSize();
                	
                	$("#osmMap3").show();
                	$("#osmMap3").css("width", "49.95%").css("height", "50%");
                	map3.invalidateSize();
                	
                	$("#osmMap4").show();
                	$("#osmMap4").css("width", "49.95%").css("height", "50%");
                	map4.invalidateSize();
                				 
                }
        },
            "Blank Line": "---------",
            "Quit Menu": {
            	name: "Quit", 
            	icon: "quit",
            	callback: function(itemKey, opt, rootMenu, originalEvent) {
            		$('.contextMenu').hide();
            	}
            }
        }
    });
});


//Declaring the tile URLs 
var defaultOSM = L.tileLayer('https://{s}.tile.thunderforest.com/outdoors/{z}/{x}/{y}.png?apikey=6db8cb757e354777bdf5f25d32416bff'),
neighborHood= L.tileLayer('https://{s}.tile.thunderforest.com/neighbourhood/{z}/{x}/{y}.png?apikey=6db8cb757e354777bdf5f25d32416bff'),
cycleMap = L.tileLayer('https://{s}.tile.thunderforest.com/cycle/{z}/{x}/{y}.png?apikey=6db8cb757e354777bdf5f25d32416bff'),
transportMap = L.tileLayer('https://{s}.tile.thunderforest.com/transport/{z}/{x}/{y}.png?apikey=6db8cb757e354777bdf5f25d32416bff');

//Used to store uncleaned oil parcels
multipleLayerControl  = new L.layerGroup();
multipleLayerControl2  = new L.layerGroup();
multipleLayerControl3  = new L.layerGroup();
multipleLayerControl4  = new L.layerGroup();

//Used to store cleaned oil parcels
multipleLayerControlCleaned  = new L.layerGroup();
multipleLayerControlCleaned2  = new L.layerGroup();
multipleLayerControlCleaned3  = new L.layerGroup();
multipleLayerControlCleaned4  = new L.layerGroup();



baseLayers = {
		"DefaultOSM": L.tileLayer('https://{s}.tile.thunderforest.com/outdoors/{z}/{x}/{y}.png?apikey=6db8cb757e354777bdf5f25d32416bff'), 
		"Neighborhood":  L.tileLayer('https://{s}.tile.thunderforest.com/neighbourhood/{z}/{x}/{y}.png?apikey=6db8cb757e354777bdf5f25d32416bff'),
		"CycleMap": L.tileLayer('https://{s}.tile.thunderforest.com/cycle/{z}/{x}/{y}.png?apikey=6db8cb757e354777bdf5f25d32416bff')/*,  
		"TransportMap": L.tileLayer('https://{s}.tile.thunderforest.com/transport/{z}/{x}/{y}.png?apikey=6db8cb757e354777bdf5f25d32416bff')*/
};
baseLayers2 = {
		"DefaultOSM": L.tileLayer('https://{s}.tile.thunderforest.com/outdoors/{z}/{x}/{y}.png?apikey=6db8cb757e354777bdf5f25d32416bff'), 
		"Neighborhood":  L.tileLayer('https://{s}.tile.thunderforest.com/neighbourhood/{z}/{x}/{y}.png?apikey=6db8cb757e354777bdf5f25d32416bff'),
		"CycleMap": L.tileLayer('https://{s}.tile.thunderforest.com/cycle/{z}/{x}/{y}.png?apikey=6db8cb757e354777bdf5f25d32416bff')/*,  
		"TransportMap": L.tileLayer('https://{s}.tile.thunderforest.com/transport/{z}/{x}/{y}.png?apikey=6db8cb757e354777bdf5f25d32416bff')*/
		
}
baseLayers3 = {
		"DefaultOSM": L.tileLayer('https://{s}.tile.thunderforest.com/outdoors/{z}/{x}/{y}.png?apikey=6db8cb757e354777bdf5f25d32416bff'), 
		"Neighborhood":  L.tileLayer('https://{s}.tile.thunderforest.com/neighbourhood/{z}/{x}/{y}.png?apikey=6db8cb757e354777bdf5f25d32416bff'),
		"CycleMap": L.tileLayer('https://{s}.tile.thunderforest.com/cycle/{z}/{x}/{y}.png?apikey=6db8cb757e354777bdf5f25d32416bff')/*,  
		"TransportMap": L.tileLayer('https://{s}.tile.thunderforest.com/transport/{z}/{x}/{y}.png?apikey=6db8cb757e354777bdf5f25d32416bff')*/
}
baseLayers4 = {
		"DefaultOSM": L.tileLayer('https://{s}.tile.thunderforest.com/outdoors/{z}/{x}/{y}.png?apikey=6db8cb757e354777bdf5f25d32416bff'), 
		"Neighborhood":  L.tileLayer('https://{s}.tile.thunderforest.com/neighbourhood/{z}/{x}/{y}.png?apikey=6db8cb757e354777bdf5f25d32416bff'),
		"CycleMap": L.tileLayer('https://{s}.tile.thunderforest.com/cycle/{z}/{x}/{y}.png?apikey=6db8cb757e354777bdf5f25d32416bff')/*,  
		"TransportMap": L.tileLayer('https://{s}.tile.thunderforest.com/transport/{z}/{x}/{y}.png?apikey=6db8cb757e354777bdf5f25d32416bff')*/
}


//map declaration
var map = L.map('osmMap1', {
	center: [29.1408716,-87.8464683],
	zoom: 7,
	renderer: L.svg(),
	layers: [baseLayers.DefaultOSM,  baseLayers.Neighborhood,  /*baseLayers.TransportMap,*/ baseLayers.CycleMap, multipleLayerControl, multipleLayerControlCleaned]
});

var map2 = L.map('osmMap2', {
	center: [29.1408716,-87.8464683],
	zoom: 7,
	renderer: L.svg(),
	layers: [baseLayers2.DefaultOSM,  baseLayers2.Neighborhood,  /*baseLayers2.TransportMap,*/ baseLayers2.CycleMap, multipleLayerControl2, multipleLayerControlCleaned2]
});

var map3 = L.map('osmMap3', {
	center: [29.1408716,-87.8464683],
	zoom: 7,
	renderer: L.svg(),
	layers: [baseLayers3.DefaultOSM,  baseLayers3.Neighborhood,  /*baseLayers3.TransportMap,*/ baseLayers3.CycleMap, multipleLayerControl3, multipleLayerControlCleaned3]
});

var map4 = L.map('osmMap4', {
	center: [29.1408716,-87.8464683],
	zoom: 7,
	renderer: L.svg(),
	layers: [baseLayers4.DefaultOSM,  baseLayers4.Neighborhood,  /*baseLayers4.TransportMap,*/ baseLayers4.CycleMap, multipleLayerControl4, multipleLayerControlCleaned4]
});


//Drawing impact grid for all the four maps
function drawImpactGrid(){
impactOverlay1 = L.d3SvgOverlay(function(sel, proj) {
	svgIG = sel.selectAll('path').data(impactJson).enter();
	
	svgIG.append('path')
	.attr('class','ImpactGrid1')
	.attr('d', proj.pathFromGeojson)
	.attr('stroke', 'black')
	.attr('id', function(d){
		return "Polygon1_" + d.properties['Id'];
	})
	.attr('fill', '#ffffff')
	.attr('fill-opacity', '0.8')
	.attr('stroke-width', 0.001 / proj.scale);
	
	//this part, if un-commented will display the IDs of the polygons on the boxes
	/*svgIG.append("text")
	.attr('x',function(d){return  proj.latLngToLayerPoint(d.latLng).x - 1 ;})
	.attr('y',function(d){return proj.latLngToLayerPoint(d.latLng).y - 1 ;})
	.attr("fill","black")
	.attr("font-size","0.4")
	.text(function(d){return (d.properties['Id']).toString();});*/
					
	colorPolygons();
});

impactOverlay1.addTo(map);
}


function drawImpactGrid2(){
	impactOverlay2= L.d3SvgOverlay(function(sel, proj) {
		var upd2 = sel.selectAll('path').data(impactJson).enter();
		
		upd2.append('path')
		.attr('class','ImpactGrid2')
		.attr('d', proj.pathFromGeojson)
		.attr('stroke', 'black')
		.attr('id', function(d){
			return "Polygon2_" + d.properties['Id'];
		})
		.attr('fill', '#ffffff')
		.attr('fill-opacity', '0.9')
		.attr('stroke-width', 0.001 / proj.scale);
		
		/*upd2.append("text")
		.attr('x',function(d){return  proj.latLngToLayerPoint(d.latLng).x - 1 ;})
		.attr('y',function(d){return proj.latLngToLayerPoint(d.latLng).y - 1 ;})
		.attr("fill","black")
		.attr("font-size","0.4")
		.text(function(d){return (d.properties['Id']).toString();});*/
		colorPolygons2();
	});

	impactOverlay2.addTo(map2);
	}

function drawImpactGrid3(){
		impactOverlay3= L.d3SvgOverlay(function(sel, proj) {
			var upd2 = sel.selectAll('path').data(impactJson).enter();
			
			upd2.append('path')
			.attr('class','ImpactGrid3')
			.attr('d', proj.pathFromGeojson)
			.attr('stroke', 'black')
			.attr('id', function(d){
				return "Polygon3_" + d.properties['Id'];
			})
			.attr('fill', '#ffffff')
			.attr('fill-opacity', '0.9')
			.attr('stroke-width', 0.001 / proj.scale);
			
			/*upd2.append("text")
			.attr('x',function(d){return  proj.latLngToLayerPoint(d.latLng).x - 1 ;})
			.attr('y',function(d){return proj.latLngToLayerPoint(d.latLng).y - 1 ;})
			.attr("fill","black")
			.attr("font-size","0.4")
			.text(function(d){return (d.properties['Id']).toString();});*/
			
			colorPolygons3();
		});

		impactOverlay3.addTo(map3);
}


function drawImpactGrid4(){
	impactOverlay4= L.d3SvgOverlay(function(sel, proj) {
			var upd2 = sel.selectAll('path').data(impactJson).enter();
			
			upd2.append('path')
			.attr('class','ImpactGrid4')
			.attr('d', proj.pathFromGeojson)
			.attr('stroke', 'black')
			.attr('id', function(d){
				return "Polygon4_" + d.properties['Id'];
			})
			.attr('fill', '#ffffff')
			.attr('fill-opacity', '0.8')
			.attr('stroke-width', 0.001 / proj.scale);
			
			/*upd2.append("text")
			.attr('x',function(d){return  proj.latLngToLayerPoint(d.latLng).x - 1 ;})
			.attr('y',function(d){return proj.latLngToLayerPoint(d.latLng).y - 1 ;})
			.attr("fill","black")
			.attr("font-size","0.4")
			.text(function(d){return (d.properties['Id']).toString();});*/
			
			
			colorPolygons4();
		});

		impactOverlay4.addTo(map4);
}


///////////////////////Drawing the IMPACT Grid OVERLAY ENDS///////////////////

///////////////////////Drawing the ESI Tile OVERLAY STARTS///////////////////
function drawEsiTileLayer(){
	//map.removeLayer(esiTileOverlay1);
	currentZoomLevel = map.getZoom();
	esiTileOverlay1	=  L.tileLayer('EsiLayer/{z}/{x}/{y}.png', {
		minZoom: 7,
	    maxZoom: 16/*,
	    maxNativeZoom: defaultZoomlevel,
	    minNativeZoom: defaultZoomlevel*/
	}).addTo(map);
}
function drawEsiTileLayer2(){
	//map.removeLayer(esiTileOverlay2);
	currentZoomLevel = map2.getZoom();
	esiTileOverlay2	=  L.tileLayer('EsiLayer/{z}/{x}/{y}.png', {
		minZoom: 7,
	    maxZoom: 16/*,
	    maxNativeZoom: defaultZoomlevel,
	    minNativeZoom: defaultZoomlevel*/
	}).addTo(map2);
}
function drawEsiTileLayer3(){
	//map.removeLayer(esiTileOverlay3);
	currentZoomLevel = map3.getZoom();
	esiTileOverlay3 =  L.tileLayer('EsiLayer/{z}/{x}/{y}.png', {
		minZoom: 7,
	    maxZoom: 16/*,
	    maxNativeZoom: defaultZoomlevel,
	    minNativeZoom: defaultZoomlevel*/
	}).addTo(map3);
}
function drawEsiTileLayer4(){
	//map.removeLayer(esiTileOverlay4);
	currentZoomLevel = map4.getZoom();
	esiTileOverlay4 =  L.tileLayer('EsiLayer/{z}/{x}/{y}.png', {
		minZoom: 7,
	    maxZoom: 16/*,
	    maxNativeZoom: defaultZoomlevel,
	    minNativeZoom: defaultZoomlevel*/
	}).addTo(map4);
}

///////////////////////Drawing ESI Tile OVERLAY ENDS///////////////////

//makes sure the oil parcels and the boat ramps don't get bigger when zoom is increased
var scale_factor = Math.max((1 / Math.pow(2, map.getZoom() - 13))/64, 0.25);
var zoomLevel=map.getZoom();

//Tool tip to show the details of the boat ramps
var tooltip = d3.select("#divslider").append("div").attr("id", "divTooltip").style("opacity", 0);
var tooltipImpactGrid = d3.select("#divslider").append("div").attr("id", "divTooltipImpactGrid").style("opacity", 0);

tooltip: {
	followPointer: true
};

tooltipImpactGrid: {
	followPointer: true
};


//Drawing the heat maps on all the four maps
function drawHeatMap1(){
	multipleLayerControl.clearLayers();
	multipleLayerControlCleaned.clearLayers();
	if(heatMapOn){
		heatMapLatLng = [];
		heatMapLatLngCleaned = []; 
		map.removeLayer(heatMapLayerGlobal);
		map.removeLayer(heatMapLayerGlobalCleaned);
		filteredDataForPanel1.forEach(function(eachRow){
			if(eachRow["CLEANED"]==0){
				heatMapLatLng.push(eachRow['latLng'])
			} else {
				heatMapLatLngCleaned.push(eachRow['latLng']);
			}
		});
		finalHeatMapCoords = heatMapLatLng;
		finalHeatMapCoordsCleaned = heatMapLatLngCleaned;
		heatMapLayerGlobal = L.heatLayer(finalHeatMapCoords, {radius:2,blur:2,maxZoom:5,gradient:{0.143:'#f2f0f7',0.285:'#dadaeb',0.43:'#bcbddc',0.57:'#9e9ac8',0.71:'#807dba',0.86:'#6a51a3',1.0:'#4a1486'}}).addTo(multipleLayerControl);
		heatMapLayerGlobalCleaned = L.heatLayer(finalHeatMapCoordsCleaned, {radius:2,blur:2,maxZoom:5,gradient:{1.0:'green'}}).addTo(multipleLayerControlCleaned);
		
	} else {
		map.removeLayer(heatMapLayerGlobal);
		map.removeLayer(heatMapLayerGlobalCleaned);
	}
}

function drawHeatMap2(){
	multipleLayerControl2.clearLayers();
	multipleLayerControlCleaned2.clearLayers();
	if(heatMapOn){
		heatMapLatLng2 = [];
		heatMapLatLngCleaned2 = [];
		map2.removeLayer(heatMapLayerGlobal2);
		map2.removeLayer(heatMapLayerGlobalCleaned2);
		filteredDataForPanel2.forEach(function(eachRow){
			if(eachRow["CLEANED"]==0){
				heatMapLatLng2.push(eachRow['latLng'])
			} else {
				heatMapLatLngCleaned2.push(eachRow['latLng']);
			}
		});
		finalHeatMapCoords2 = heatMapLatLng2;
		finalHeatMapCoordsCleaned2 = heatMapLatLngCleaned2;
		heatMapLayerGlobal2 = L.heatLayer(finalHeatMapCoords2, {radius:2,blur:2,maxZoom:5,gradient:{0.143:'#f2f0f7',0.285:'#dadaeb',0.43:'#bcbddc',0.57:'#9e9ac8',0.71:'#807dba',0.86:'#6a51a3',1.0:'#4a1486'}}).addTo(multipleLayerControl2);
		heatMapLayerGlobalCleaned2 = L.heatLayer(finalHeatMapCoordsCleaned2, {radius:2,blur:2,maxZoom:5,gradient:{1.0:'green'}}).addTo(multipleLayerControlCleaned2);
		
	} else {
		map2.removeLayer(heatMapLayerGlobal2);
		map2.removeLayer(heatMapLayerGlobalCleaned2);
	}
}

function drawHeatMap3(){
	multipleLayerControl3.clearLayers();
	multipleLayerControlCleaned3.clearLayers();
	if(heatMapOn){
		heatMapLatLng3 = [];
		heatMapLatLngCleaned3 = [];
		map3.removeLayer(heatMapLayerGlobal3);
		map3.removeLayer(heatMapLayerGlobalCleaned3);
		filteredDataForPanel3.forEach(function(eachRow){
			if(eachRow["CLEANED"]==0){
				heatMapLatLng3.push(eachRow['latLng'])
			} else {
				heatMapLatLngCleaned3.push(eachRow['latLng']);
			}
		});
		finalHeatMapCoords3 = heatMapLatLng3;
		finalHeatMapCoordsCleaned3 = heatMapLatLngCleaned3;
		heatMapLayerGlobal3 = L.heatLayer(finalHeatMapCoords3, {radius:2,blur:2,maxZoom:5,gradient:{0.143:'#f2f0f7',0.285:'#dadaeb',0.43:'#bcbddc',0.57:'#9e9ac8',0.71:'#807dba',0.86:'#6a51a3',1.0:'#4a1486'}}).addTo(multipleLayerControl3);
		heatMapLayerGlobalCleaned3 = L.heatLayer(finalHeatMapCoordsCleaned3, {radius:2,blur:2,maxZoom:5,gradient:{1.0:'green'}}).addTo(multipleLayerControlCleaned3);
		
	} else {
		map3.removeLayer(heatMapLayerGlobal3);
		map3.removeLayer(heatMapLayerGlobalCleaned3);
	}
}

function drawHeatMap4(){
	multipleLayerControl4.clearLayers();
	multipleLayerControlCleaned4.clearLayers();
	if(heatMapOn){
		heatMapLatLng4 = [];
		heatMapLatLngCleaned4 = [];
		map4.removeLayer(heatMapLayerGlobal4);
		map4.removeLayer(heatMapLayerGlobalCleaned4);
		filteredDataForPanel4.forEach(function(eachRow){
			if(eachRow["CLEANED"]==0){
				heatMapLatLng4.push(eachRow['latLng'])
			} else {
				heatMapLatLngCleaned4.push(eachRow['latLng']);
			}
		});
		finalHeatMapCoords4 = heatMapLatLng4;
		finalHeatMapCoordsCleaned4 = heatMapLatLngCleaned4;
		heatMapLayerGlobal4 = L.heatLayer(finalHeatMapCoords4, {radius:2,blur:2,maxZoom:5,gradient:{0.143:'#f2f0f7',0.285:'#dadaeb',0.43:'#bcbddc',0.57:'#9e9ac8',0.71:'#807dba',0.86:'#6a51a3',1.0:'#4a1486'}}).addTo(multipleLayerControl4);
		heatMapLayerGlobalCleaned4 = L.heatLayer(finalHeatMapCoordsCleaned4, {radius:2,blur:2,maxZoom:5,gradient:{1.0:'green'}}).addTo(multipleLayerControlCleaned4);
		
	} else {
		map4.removeLayer(heatMapLayerGlobal4);
		map4.removeLayer(heatMapLayerGlobalCleaned4);
	}
}

//The following four functions color the polygons when the oil impacts the shoreline or enters the grid. 
//Also, the baseline comparison grid difference is included in them
function colorPolygons(){
	
	if(filterDataImpactGridCountsMap1.length > 0){
		filterDataImpactGridCountsMap1.forEach(function(eachRow2){
			
			if(isMap1Baseline == false){
							
				if(baseLineImpactGridMap.length > 0){
					$("#Polygon1_" + (eachRow2['Polygon_ID']).toString()).attr("style", "fill : #ffffffff" );
					baseLineImpactGridMap.forEach(function(eachRow1){
						
						if((eachRow2['Polygon_ID'] == eachRow1['Polygon_ID']) && (eachRow2['CURR_TIME'] == eachRow1['CURR_TIME'])){
							percentDiff1 =  (eachRow1['Count'] - eachRow2['Count'])
							
							if(percentDiff1 != 0){
								if(percentDiff1 >= minGridDifference && percentDiff1 < gridDifferenceLegendClass1){
									$("#Polygon1_" + (eachRow2['Polygon_ID']).toString()).attr("style", "fill : #b2182b" );
								} else if (percentDiff1 >= gridDifferenceLegendClass1 && percentDiff1 < gridDifferenceLegendClass2){
									$("#Polygon1_" + (eachRow2['Polygon_ID']).toString()).attr("style", "fill : #ef8a62" );
								} else if (percentDiff1 >= gridDifferenceLegendClass2 && percentDiff1 < 0){
									$("#Polygon1_" + (eachRow2['Polygon_ID']).toString()).attr("style", "fill : #fddbc7" );
								} else if (percentDiff1 > 0 && percentDiff1 < gridDifferenceLegendClass5){
									$("#Polygon1_" + (eachRow2['Polygon_ID']).toString()).attr("style", "fill : #d1e5f0" );
								} else if (percentDiff1 >= gridDifferenceLegendClass5 && percentDiff1 < gridDifferenceLegendClass6){
									$("#Polygon1_" + (eachRow2['Polygon_ID']).toString()).attr("style", "fill : #67a9cf" );
								} else if (percentDiff1 >= gridDifferenceLegendClass6 && percentDiff1 < maxGridDifference){
									$("#Polygon1_" + (eachRow2['Polygon_ID']).toString()).attr("style", "fill : #2166ac" );
								} 
							} else {
								$("#Polygon1_" + (eachRow2['Polygon_ID']).toString()).attr("style", "fill : #ffffff" );
							}
						} 
				
				});
			}
			} else {
				
				if(eachRow2['Count'] < (finalOverallImpactRange  * 0.2)){
					polygonColor = "#f2f0f7";
					$("#Polygon1_" + (eachRow2['Polygon_ID']).toString()).attr("style", "fill : " + polygonColor);
					return;
				} else if ((eachRow2['Count'] >= (finalOverallImpactRange * 0.2)) && (eachRow2['Count'] < (overallImpactRangeMap1 * 0.4)) ){
					polygonColor =  '#cbc9e2';
					$("#Polygon1_" + (eachRow2['Polygon_ID']).toString()).attr("style", "fill : " + polygonColor);
					return;
				} else if ((eachRow2['Count'] >= (finalOverallImpactRange * 0.4))  && (eachRow2['Count'] < (overallImpactRangeMap1 * 0.6 )) ){
					polygonColor =  '#9e9ac8';
					$("#Polygon1_" + (eachRow2['Polygon_ID']).toString()).attr("style", "fill : " + polygonColor);
					return;
				}  else if ((eachRow2['Count'] >= (finalOverallImpactRange * 0.6))  && (eachRow2['Count'] < (overallImpactRangeMap1 * 0.8)) ){
					polygonColor =  '#756bb1';
					$("#Polygon1_" + (eachRow2['Polygon_ID']).toString()).attr("style", "fill : " + polygonColor);
					return;
				}  else if ((eachRow2['Count'] >= (finalOverallImpactRange * 0.8))  && (eachRow2['Count'] < (overallImpactRangeMap1)) ){
					polygonColor =  '#54278f';
					$("#Polygon1_" + (eachRow2['Polygon_ID']).toString()).attr("style", "fill : " + polygonColor);
					return;
				}
				
			}
			
			  
		});
	} 
	

	if(filterDataImpactGridCountsComplementMap1.length > 0){
		filterDataImpactGridCountsComplementMap1.forEach(function(eachRow2){
			polygonColor = "#ffffffff";
			$("#Polygon1_" + (eachRow2['Polygon_ID']).toString()).attr("style", "fill : " + polygonColor);
		});
	}
	
}

function colorPolygons2(){
	if(filterDataImpactGridCountsMap2.length > 0){
		filterDataImpactGridCountsMap2.forEach(function(eachRow2){
		
			if(isMap2Baseline == false){
				
				if(baseLineImpactGridMap.length > 0){
					$("#Polygon2_" + (eachRow2['Polygon_ID']).toString()).attr("style", "fill : #ffffffff" );
					baseLineImpactGridMap.forEach(function(eachRow1){
				
						if((eachRow2['Polygon_ID'] == eachRow1['Polygon_ID']) && (eachRow2['CURR_TIME'] == eachRow1['CURR_TIME'])){
							percentDiff2 =  (eachRow1['Count'] - eachRow2['Count']);
							
							if(percentDiff2 != 0){
								if(percentDiff2 >= minGridDifference && percentDiff2 < gridDifferenceLegendClass1){
									$("#Polygon2_" + (eachRow2['Polygon_ID']).toString()).attr("style", "fill : #b2182b" );
								} else if (percentDiff2 >= gridDifferenceLegendClass1 && percentDiff2 < gridDifferenceLegendClass2){
									$("#Polygon2_" + (eachRow2['Polygon_ID']).toString()).attr("style", "fill : #ef8a62" );
								} else if (percentDiff2 >= gridDifferenceLegendClass2 && percentDiff2 < 0){
									$("#Polygon2_" + (eachRow2['Polygon_ID']).toString()).attr("style", "fill : #fddbc7" );
								} else if (percentDiff2 > 0 && percentDiff2 < gridDifferenceLegendClass5){
									$("#Polygon2_" + (eachRow2['Polygon_ID']).toString()).attr("style", "fill : #d1e5f0" );
								} else if (percentDiff2 >= gridDifferenceLegendClass5 && percentDiff2 < gridDifferenceLegendClass6){
									$("#Polygon2_" + (eachRow2['Polygon_ID']).toString()).attr("style", "fill : #67a9cf" );
								} else if (percentDiff2 >= gridDifferenceLegendClass6 && percentDiff2 < maxGridDifference){
									$("#Polygon2_" + (eachRow2['Polygon_ID']).toString()).attr("style", "fill : #2166ac" );
								} 
							} else {
								$("#Polygon2_" + (eachRow2['Polygon_ID']).toString()).attr("style", "fill : #ffffff" );
							}
					} 
						
				});
			}
		} else {

			
			if(eachRow2['Count'] < (finalOverallImpactRange  * 0.2)){
				polygonColor = "#f2f0f7";
				$("#Polygon2_" + (eachRow2['Polygon_ID']).toString()).attr("style", "fill : " + polygonColor);
				return;
			} else if ((eachRow2['Count'] >= (finalOverallImpactRange * 0.2)) && (eachRow2['Count'] < (overallImpactRangeMap2 * 0.4)) ){
				polygonColor =  '#cbc9e2';
				$("#Polygon2_" + (eachRow2['Polygon_ID']).toString()).attr("style", "fill : " + polygonColor);
				return;
			} else if ((eachRow2['Count'] >= (finalOverallImpactRange * 0.4))  && (eachRow2['Count'] < (overallImpactRangeMap2 * 0.6 )) ){
				polygonColor =  '#9e9ac8';
				$("#Polygon2_" + (eachRow2['Polygon_ID']).toString()).attr("style", "fill : " + polygonColor);
				return;
			}  else if ((eachRow2['Count'] >= (finalOverallImpactRange * 0.6))  && (eachRow2['Count'] < (overallImpactRangeMap2 * 0.8)) ){
				polygonColor =  '#756bb1';
				$("#Polygon2_" + (eachRow2['Polygon_ID']).toString()).attr("style", "fill : " + polygonColor);
				return;
			}  else if ((eachRow2['Count'] >= (finalOverallImpactRange * 0.8))  && (eachRow2['Count'] < (overallImpactRangeMap2)) ){
				polygonColor =  '#54278f';
				$("#Polygon2_" + (eachRow2['Polygon_ID']).toString()).attr("style", "fill : " + polygonColor);
				return;
			}  
		}
		});
	}
	
	if(filterDataImpactGridCountsComplementMap2.length > 0){
		filterDataImpactGridCountsComplementMap2.forEach(function(eachRow2){
			polygonColor = "#ffffffff";
			$("#Polygon2_" + (eachRow2['Polygon_ID']).toString()).attr("style", "fill : " + polygonColor);
		});
	}
}

function colorPolygons3(){
	if(filterDataImpactGridCountsMap3.length > 0){
		filterDataImpactGridCountsMap3.forEach(function(eachRow2){
			
			if(isMap3Baseline == false){
				$("#Polygon3_" + (eachRow2['Polygon_ID']).toString()).attr("style", "fill : #ffffffff" );
				if(baseLineImpactGridMap.length > 0){
					baseLineImpactGridMap.forEach(function(eachRow1){
				
						if((eachRow2['Polygon_ID'] == eachRow1['Polygon_ID']) && (eachRow2['CURR_TIME'] == eachRow1['CURR_TIME'])){
							percentDiff3 =  (eachRow1['Count'] - eachRow2['Count']);
							
							if(percentDiff3 != 0){
								if(percentDiff3 >= minGridDifference && percentDiff3 < gridDifferenceLegendClass1){
									$("#Polygon3_" + (eachRow2['Polygon_ID']).toString()).attr("style", "fill : #b2182b" );
								} else if (percentDiff3 >= gridDifferenceLegendClass1 && percentDiff3 < gridDifferenceLegendClass2){
									$("#Polygon3_" + (eachRow2['Polygon_ID']).toString()).attr("style", "fill : #ef8a62" );
								} else if (percentDiff3 >= gridDifferenceLegendClass2 && percentDiff3 < 0){
									$("#Polygon3_" + (eachRow2['Polygon_ID']).toString()).attr("style", "fill : #fddbc7" );
								} else if (percentDiff3 > 0 && percentDiff3 < gridDifferenceLegendClass5){
									$("#Polygon3_" + (eachRow2['Polygon_ID']).toString()).attr("style", "fill : #d1e5f0" );
								} else if (percentDiff3 >= gridDifferenceLegendClass5 && percentDiff3 < gridDifferenceLegendClass6){
									$("#Polygon3_" + (eachRow2['Polygon_ID']).toString()).attr("style", "fill : #67a9cf" );
								} else if (percentDiff3 >= gridDifferenceLegendClass6 && percentDiff3 < maxGridDifference){
									$("#Polygon3_" + (eachRow2['Polygon_ID']).toString()).attr("style", "fill : #2166ac" );
								} 
							} else {
								$("#Polygon3_" + (eachRow2['Polygon_ID']).toString()).attr("style", "fill : #ffffff" );
							}
						}
				});
			} 
		} else {
			
			if(eachRow2['Count'] < (finalOverallImpactRange  * 0.2)){
				polygonColor = "#f2f0f7";
				$("#Polygon3_" + (eachRow2['Polygon_ID']).toString()).attr("style", "fill : " + polygonColor);
				return;
			} else if ((eachRow2['Count'] >= (finalOverallImpactRange * 0.2)) && (eachRow2['Count'] < (overallImpactRangeMap3 * 0.4)) ){
				polygonColor =  '#cbc9e2';
				$("#Polygon3_" + (eachRow2['Polygon_ID']).toString()).attr("style", "fill : " + polygonColor);
				return;
			} else if ((eachRow2['Count'] >= (finalOverallImpactRange * 0.4))  && (eachRow2['Count'] < (overallImpactRangeMap3 * 0.6 )) ){
				polygonColor =  '#9e9ac8';
				$("#Polygon3_" + (eachRow2['Polygon_ID']).toString()).attr("style", "fill : " + polygonColor);
				return;
			}  else if ((eachRow2['Count'] >= (finalOverallImpactRange * 0.6))  && (eachRow2['Count'] < (overallImpactRangeMap3 * 0.8)) ){
				polygonColor =  '#756bb1';
				$("#Polygon3_" + (eachRow2['Polygon_ID']).toString()).attr("style", "fill : " + polygonColor);
				return;
			}  else if ((eachRow2['Count'] >= (finalOverallImpactRange * 0.8))  && (eachRow2['Count'] < (overallImpactRangeMap3)) ){
				polygonColor =  '#54278f';
				$("#Polygon3_" + (eachRow2['Polygon_ID']).toString()).attr("style", "fill : " + polygonColor);
				return;
			}
		}
		});
	}

	if(filterDataImpactGridCountsComplementMap3.length > 0){
		filterDataImpactGridCountsComplementMap3.forEach(function(eachRow2){
			polygonColor = "#ffffffff";
			$("#Polygon3_" + (eachRow2['Polygon_ID']).toString()).attr("style", "fill : " + polygonColor);
		});
	}
}

function colorPolygons4(){
	
	if(filterDataImpactGridCountsMap4.length > 0){
		filterDataImpactGridCountsMap4.forEach(function(eachRow2){
			$("#Polygon4_" + (eachRow2['Polygon_ID']).toString()).attr("style", "fill : #ffffffff" );
			
			if(isMap4Baseline == false){
				$("#Polygon4_" + (eachRow2['Polygon_ID']).toString()).attr("style", "fill : #ffffffff" );
				if(baseLineImpactGridMap.length > 0){
					baseLineImpactGridMap.forEach(function(eachRow1){
				
						if((eachRow2['Polygon_ID'] == eachRow1['Polygon_ID']) && (eachRow2['CURR_TIME'] == eachRow1['CURR_TIME'])){
							percentDiff4 =  (eachRow1['Count'] - eachRow2['Count']);
							
							if(percentDiff4 != 0){
								if(percentDiff4 >= minGridDifference && percentDiff4 < gridDifferenceLegendClass1){
									$("#Polygon4_" + (eachRow2['Polygon_ID']).toString()).attr("style", "fill : #b2182b" );
								} else if (percentDiff4 >= gridDifferenceLegendClass1 && percentDiff4 < gridDifferenceLegendClass2){
									$("#Polygon4_" + (eachRow2['Polygon_ID']).toString()).attr("style", "fill : #ef8a62" );
								} else if (percentDiff4 >= gridDifferenceLegendClass2 && percentDiff4 < 0){
									$("#Polygon4_" + (eachRow2['Polygon_ID']).toString()).attr("style", "fill : #fddbc7" );
								} else if (percentDiff4 > 0 && percentDiff4 < gridDifferenceLegendClass5){
									$("#Polygon4_" + (eachRow2['Polygon_ID']).toString()).attr("style", "fill : #d1e5f0" );
								} else if (percentDiff4 >= gridDifferenceLegendClass5 && percentDiff4 < gridDifferenceLegendClass6){
									$("#Polygon4_" + (eachRow2['Polygon_ID']).toString()).attr("style", "fill : #67a9cf" );
								} else if (percentDiff4 >= gridDifferenceLegendClass6 && percentDiff4 < maxGridDifference){
									$("#Polygon4_" + (eachRow2['Polygon_ID']).toString()).attr("style", "fill : #2166ac" );
								} 
							} else {
								$("#Polygon4_" + (eachRow2['Polygon_ID']).toString()).attr("style", "fill : #ffffff" );
							}
						}
				});
			}
				
		}  else {
				
				if(eachRow2['Count'] < (finalOverallImpactRange  * 0.2)){
					polygonColor = "#f2f0f7";
					$("#Polygon4_" + (eachRow2['Polygon_ID']).toString()).attr("style", "fill : " + polygonColor);
					return;
				} else if ((eachRow2['Count'] >= (finalOverallImpactRange * 0.2)) && (eachRow2['Count'] < (overallImpactRangeMap4 * 0.4)) ){
					polygonColor =  '#cbc9e2';
					$("#Polygon4_" + (eachRow2['Polygon_ID']).toString()).attr("style", "fill : " + polygonColor);
					return;
				} else if ((eachRow2['Count'] >= (finalOverallImpactRange * 0.4))  && (eachRow2['Count'] < (overallImpactRangeMap4 * 0.6 )) ){
					polygonColor =  '#9e9ac8';
					$("#Polygon4_" + (eachRow2['Polygon_ID']).toString()).attr("style", "fill : " + polygonColor);
					return;
				}  else if ((eachRow2['Count'] >= (finalOverallImpactRange * 0.6))  && (eachRow2['Count'] < (overallImpactRangeMap4 * 0.8)) ){
					polygonColor =  '#756bb1';
					$("#Polygon4_" + (eachRow2['Polygon_ID']).toString()).attr("style", "fill : " + polygonColor);
					return;
				}  else if ((eachRow2['Count'] >= (finalOverallImpactRange * 0.8))  && (eachRow2['Count'] < (overallImpactRangeMap4)) ){
					polygonColor =  '#54278f';
					$("#Polygon4_" + (eachRow2['Polygon_ID']).toString()).attr("style", "fill : " + polygonColor);
					return;
				}
			}
			
		});
	}

	
	if(filterDataImpactGridCountsComplementMap4.length > 0){
		filterDataImpactGridCountsComplementMap4.forEach(function(eachRow2){
			polygonColor = "#ffffffff";
			$("#Polygon4_" + (eachRow2['Polygon_ID']).toString()).attr("style", "fill : " + polygonColor);
		});
	}

}
 
//This function dynamically calculates the grid difference based on the current baseline map chosen and its cleanup target
function computeGridDifferenceLegend(){
	
	minGridDifference = Math.min.apply(null, baseLineReferenceDifference);
	maxGridDifference = Math.max.apply(null, baseLineReferenceDifference);
	minGridDifferenceStep = minGridDifference/3;
	maxGridDifferenceStep = maxGridDifference/3;
	
	gridDifferenceLegendClass1 = Math.round(minGridDifference - minGridDifferenceStep);
	gridDifferenceLegendClass2 = Math.round(minGridDifference - 2 * minGridDifferenceStep);
	gridDifferenceLegendClass5 = Math.round(maxGridDifferenceStep);
	gridDifferenceLegendClass6 = Math.round(2 * maxGridDifferenceStep);
	
	$("#gridDifferenceLegendClass1").text(minGridDifference + " to "  + (gridDifferenceLegendClass1).toString());
	$("#gridDifferenceLegendClass2").text((gridDifferenceLegendClass1 + 1).toString() + " to "  + (gridDifferenceLegendClass2).toString());
	$("#gridDifferenceLegendClass3").text((gridDifferenceLegendClass2 + 1).toString() + " to "  + 0);
	$("#gridDifferenceLegendClass4").text("Same");
	$("#gridDifferenceLegendClass5").text(0 + " to "  + (gridDifferenceLegendClass5).toString());
	$("#gridDifferenceLegendClass6").text((gridDifferenceLegendClass5 + 1).toString() + " to "  + (gridDifferenceLegendClass6).toString());
   $("#gridDifferenceLegendClass7").text((gridDifferenceLegendClass6 + 1).toString() + " to "  + maxGridDifference);
}

//Coordinating Zooms so that when a baseline is chosen, all the maps point to the same point and the zoom level as that of the baseline

$("#baseLineSelector").change(function () {
	if ($("#baseLineSelector").val() == "map1" ){
		isMap1Baseline = true;
		isMap2Baseline = false;
		isMap3Baseline = false;
		isMap4Baseline = false;
		
		baseLineImpactGridMap = impactGridCountsMap1;
		baseLineReferenceDifference = [];
		
		baselineZoom = map.getZoom();
		baseLineCoords = [];
		baseLineCoords = map.getCenter();
		map2.flyTo([baseLineCoords["lat"], baseLineCoords["lng"]],baselineZoom);
		map3.flyTo([baseLineCoords["lat"], baseLineCoords["lng"]],baselineZoom);
		map4.flyTo([baseLineCoords["lat"], baseLineCoords["lng"]],baselineZoom);
		
		
		//Here, we calculate the difference of each grid cell with the baseline map chosen from the other three maps
		baseLineImpactGridMap.forEach(function(eachRow2){
			
			impactGridCountsMap2.forEach(function(eachRow1){
		
				if((eachRow2['Polygon_ID'] == eachRow1['Polygon_ID']) && (eachRow2['CURR_TIME'] == eachRow1['CURR_TIME'])){
					baseLineReferenceDifference.push((eachRow2['Count'] - eachRow1['Count']));
				}
			});
			
			impactGridCountsMap3.forEach(function(eachRow1){
				
				if((eachRow2['Polygon_ID'] == eachRow1['Polygon_ID']) && (eachRow2['CURR_TIME'] == eachRow1['CURR_TIME'])){
					baseLineReferenceDifference.push((eachRow2['Count'] - eachRow1['Count']));
				}
			});
			
			impactGridCountsMap4.forEach(function(eachRow1){
				
				if((eachRow2['Polygon_ID'] == eachRow1['Polygon_ID']) && (eachRow2['CURR_TIME'] == eachRow1['CURR_TIME'])){
					baseLineReferenceDifference.push((eachRow2['Count'] - eachRow1['Count']));
				}
			});
});
		
		
		computeGridDifferenceLegend();
		$("#impactDifferenceLegend").show();
		sliderSvgOverlay.simulateSpill1();
		sliderSvgOverlay2.simulateSpill2();
		sliderSvgOverlay3.simulateSpill3();
		sliderSvgOverlay4.simulateSpill4();
		
		
		
	} else if ($("#baseLineSelector").val() == "map2" ) {
		isMap1Baseline = false;
		isMap2Baseline = true;
		isMap3Baseline = false;
		isMap4Baseline = false;
		
		baseLineImpactGridMap = impactGridCountsMap2;
		baseLineReferenceDifference = [];
		
		baselineZoom = map2.getZoom();
		baseLineCoords = [];
		baseLineCoords = map2.getCenter();
		map.flyTo([baseLineCoords["lat"], baseLineCoords["lng"]],baselineZoom);
		map3.flyTo([baseLineCoords["lat"], baseLineCoords["lng"]],baselineZoom);
		map4.flyTo([baseLineCoords["lat"], baseLineCoords["lng"]],baselineZoom);
		
		
		baseLineImpactGridMap.forEach(function(eachRow2){
			
			impactGridCountsMap1.forEach(function(eachRow1){
		
				if((eachRow2['Polygon_ID'] == eachRow1['Polygon_ID']) && (eachRow2['CURR_TIME'] == eachRow1['CURR_TIME'])){
					baseLineReferenceDifference.push((eachRow2['Count'] - eachRow1['Count']));
				}
			});
			
			impactGridCountsMap3.forEach(function(eachRow1){
				
				if((eachRow2['Polygon_ID'] == eachRow1['Polygon_ID']) && (eachRow2['CURR_TIME'] == eachRow1['CURR_TIME'])){
					baseLineReferenceDifference.push((eachRow2['Count'] - eachRow1['Count']));
				}
			});
			
			impactGridCountsMap4.forEach(function(eachRow1){
				
				if((eachRow2['Polygon_ID'] == eachRow1['Polygon_ID']) && (eachRow2['CURR_TIME'] == eachRow1['CURR_TIME'])){
					baseLineReferenceDifference.push((eachRow2['Count'] - eachRow1['Count']));
				}
			});
});
		
		
		computeGridDifferenceLegend();
		$("#impactDifferenceLegend").show();
		sliderSvgOverlay.simulateSpill1();
		sliderSvgOverlay2.simulateSpill2();
		sliderSvgOverlay3.simulateSpill3();
		sliderSvgOverlay4.simulateSpill4();
	
		
	} else if ($("#baseLineSelector").val() == "map3" ) {
		isMap1Baseline = false;
		isMap2Baseline = false;
		isMap3Baseline = true;
		isMap4Baseline = false;
		
		baseLineImpactGridMap = impactGridCountsMap3;
		baseLineReferenceDifference = [];
		
		baselineZoom = map3.getZoom();
		baseLineCoords = [];
		baseLineCoords = map3.getCenter();
		map.flyTo([baseLineCoords["lat"], baseLineCoords["lng"]],baselineZoom);
		map2.flyTo([baseLineCoords["lat"], baseLineCoords["lng"]],baselineZoom);
		map4.flyTo([baseLineCoords["lat"], baseLineCoords["lng"]],baselineZoom);
		
		baseLineImpactGridMap.forEach(function(eachRow2){
			
			impactGridCountsMap1.forEach(function(eachRow1){
		
				if((eachRow2['Polygon_ID'] == eachRow1['Polygon_ID']) && (eachRow2['CURR_TIME'] == eachRow1['CURR_TIME'])){
					baseLineReferenceDifference.push((eachRow2['Count'] - eachRow1['Count']));
				}
			});
			
			impactGridCountsMap2.forEach(function(eachRow1){
				
				if((eachRow2['Polygon_ID'] == eachRow1['Polygon_ID']) && (eachRow2['CURR_TIME'] == eachRow1['CURR_TIME'])){
					baseLineReferenceDifference.push((eachRow2['Count'] - eachRow1['Count']));
				}
			});
			
			impactGridCountsMap4.forEach(function(eachRow1){
				
				if((eachRow2['Polygon_ID'] == eachRow1['Polygon_ID']) && (eachRow2['CURR_TIME'] == eachRow1['CURR_TIME'])){
					baseLineReferenceDifference.push((eachRow2['Count'] - eachRow1['Count']));
				}
			});
});
		
		computeGridDifferenceLegend();
		$("#impactDifferenceLegend").show();
		sliderSvgOverlay.simulateSpill1();
		sliderSvgOverlay2.simulateSpill2();
		sliderSvgOverlay3.simulateSpill3();
		sliderSvgOverlay4.simulateSpill4();

	} else if ($("#baseLineSelector").val() == "map4" ) {
		isMap1Baseline = false;
		isMap2Baseline = false;
		isMap3Baseline = false;
		isMap4Baseline = true;
		
		baseLineImpactGridMap = impactGridCountsMap4;
		baseLineReferenceDifference = [];
		
		baselineZoom = map4.getZoom();
		baseLineCoords = [];
		baseLineCoords = map4.getCenter();
		map.flyTo([baseLineCoords["lat"], baseLineCoords["lng"]],baselineZoom);
		map2.flyTo([baseLineCoords["lat"], baseLineCoords["lng"]],baselineZoom);
		map3.flyTo([baseLineCoords["lat"], baseLineCoords["lng"]],baselineZoom);

		baseLineImpactGridMap.forEach(function(eachRow2){
			
			impactGridCountsMap1.forEach(function(eachRow1){
		
				if((eachRow2['Polygon_ID'] == eachRow1['Polygon_ID']) && (eachRow2['CURR_TIME'] == eachRow1['CURR_TIME'])){
					baseLineReferenceDifference.push((eachRow2['Count'] - eachRow1['Count']));
				}
			});
			
			impactGridCountsMap2.forEach(function(eachRow1){
				
				if((eachRow2['Polygon_ID'] == eachRow1['Polygon_ID']) && (eachRow2['CURR_TIME'] == eachRow1['CURR_TIME'])){
					baseLineReferenceDifference.push((eachRow2['Count'] - eachRow1['Count']));
				}
			});
			
			impactGridCountsMap3.forEach(function(eachRow1){
				
				if((eachRow2['Polygon_ID'] == eachRow1['Polygon_ID']) && (eachRow2['CURR_TIME'] == eachRow1['CURR_TIME'])){
					baseLineReferenceDifference.push((eachRow2['Count'] - eachRow1['Count']));
				}
			});
});
		
		computeGridDifferenceLegend();
		$("#impactDifferenceLegend").show();
		sliderSvgOverlay.simulateSpill1();
		sliderSvgOverlay2.simulateSpill2();
		sliderSvgOverlay3.simulateSpill3();
		sliderSvgOverlay4.simulateSpill4();
	
		
	} else if ($("#baseLineSelector").val() == "all"){
		$("#impactDifferenceLegend").hide();
	}
		
});
//Coordinating Zooms end

// Helps us to choose surfaced, sunk, beached, or water column oil parcels. 
//out of bounds is rarely present in the shapefiles but still added it just in case it gets frequent in the future 
$("#spillTypeSelector").change(function () {
	$(".lds-roller").show();
	sliderSvgOverlay.simulateSpill1();
	sliderSvgOverlay2.simulateSpill2();
	sliderSvgOverlay3.simulateSpill3();
	sliderSvgOverlay4.simulateSpill4();
	$(".lds-roller").hide();
});


//This function get the start date and the end date from the ImportantDates.csv 
//So no need to hard code the start and end dates on the slider
function getStartAndEndDate(){
	return new Promise(function(resolve, reject) {
	d3.csv("data/ImportantDates.csv", function (data) {
		console.log("0");
		$(".se-pre-con").show();
		$(".se-pre-con").fadeOut("slow");
		startDateFromCsv = data[0]["StartDate"];
		selectedDateValue = startDateFromCsv;
		endDateFromCsv = data[0]["EndDate"];
		modelRuntimeFromCsv = data[0]["ModelRuntime"];
		modelRuntimeFromCsv = parseInt(modelRuntimeFromCsv);
		blowoutDurationFromCsv = data[0]["BlowoutDuration"];
		resolve([startDateFromCsv, endDateFromCsv]);
	});
	});
}


//If you see a error here, its proabably because your compiler doesnt support the latest version of JavaScript
//I used aysnc await function below
sliderSvgOverlay = L.d3SvgOverlay(async function(sel, proj){
	

//Cleanup target for the first map. Helps us to choose the required clean up target
	$('#cleanUpSelector1').click(function() {
		if($('#cleanUpSelector1_95').is(':checked')) {
			finalFileMap1 = dataMap95;
			boatRampHighlightMap1 = boatRampHighlightMap95;
			impactGridCountsMap1 = impactGridCounts95;
			overallImpactRangeMap1 = overallImpactRange95;
			sliderSvgOverlay.simulateSpill1();
			
		} else if ($('#cleanUpSelector1_90').is(':checked')) {
			finalFileMap1 = dataMap90;
			boatRampHighlightMap1 = boatRampHighlightMap90;
			impactGridCountsMap1 = impactGridCounts90;
			overallImpactRangeMap1 = overallImpactRange90;
			sliderSvgOverlay.simulateSpill1();
			
		} else if ($('#cleanUpSelector1_85').is(':checked')) {
			finalFileMap1 = dataMap85;
			boatRampHighlightMap1 = boatRampHighlightMap85;
			impactGridCountsMap1 = impactGridCounts85;
			overallImpactRangeMap1 = overallImpactRange85;
			sliderSvgOverlay.simulateSpill1();
			
		} else if ($('#cleanUpSelector1_80').is(':checked')) {
			finalFileMap1 = dataMap80;
			boatRampHighlightMap1 = boatRampHighlightMap80;
			impactGridCountsMap1 = impactGridCounts80;
			overallImpactRangeMap1 = overallImpactRange80;
			sliderSvgOverlay.simulateSpill1();
			
		} else if ($('#cleanUpSelector1_75').is(':checked')) {
			finalFileMap1 = dataMap75;
			boatRampHighlightMap1 = boatRampHighlightMap75;
			impactGridCountsMap1 = impactGridCounts75;
			overallImpactRangeMap1 = overallImpactRange75;
			sliderSvgOverlay.simulateSpill1();
			
		} else if ($('#cleanUpSelector1_00').is(':checked')) {
			finalFileMap1 = dataMap00;
			boatRampHighlightMap1 = boatRampHighlightMap00;
			impactGridCountsMap1 = impactGridCounts00;
			overallImpactRangeMap1 = overallImpactRange00;
			sliderSvgOverlay.simulateSpill1();
		}
		 
	});

	// drawing slider starts here
	if(firsTimeLoadSlider == true){
		firsTimeLoadSlider = false;

		var sliderMargin = {
				top: 50,
				right: 50,
				bottom: 50,
				left: 50
		},
		sliderWidth = 790 - sliderMargin.left - sliderMargin.right,
		sliderHeight = 150 - sliderMargin.bottom - sliderMargin.top;
		
	
		var monthAndYear = [];
		
		//gets the start and end date from the async await function
		 await getStartAndEndDate();
		
		
		uniqueDateStart = startDateFromCsv;
		uniqueDateEnd = endDateFromCsv;

		var timeScale = d3.time.scale.utc()
		.domain([new Date(uniqueDateStart), new Date(uniqueDateEnd)])
		.range([0, sliderWidth])
		.clamp(true);

		var startValue = timeScale(new Date(uniqueDateStart));
		startingValue = new Date(uniqueDateStart);
		var svgSlider = d3.select("#divslider").append("svg")
		.attr("width", sliderWidth + sliderMargin.left + sliderMargin.right)
		.attr("height", sliderHeight + sliderMargin.top + sliderMargin.bottom)
		.append("g")
		.attr("transform", "translate(" + sliderMargin.left + "," + sliderMargin.top + ")")
		.style({
			"position": "absolute",
			"padding": "10px",
			"font-family": "Roboto",
			"text-align": "center",
			"cursor": "text",
			"font-size": "14px",
			"margin-bottom": "10%",
			"z-index": "999999"
		});

		svgSlider.append("g")
		.attr("class", "x axis")
		.attr("transform", "translate(0," + sliderHeight / 2 + ")")
		.call(d3.svg.axis()
				.scale(timeScale)
				.orient("bottom")
				.tickFormat(function(d) {return formatDateForTicks(d);})
				.tickSize(3,2)
				.ticks(6)
				.tickPadding(12)
				.tickValues([timeScale.domain()[0], timeScale.domain()[1]])
		)
		.select(".domain")
		.select(function() {
			return this.parentNode.appendChild(this.cloneNode(true));
		})
		.attr("class", "ticks")
		.attr("class", "halo")
		.style("cursor","-webkit-grab");

		var brush = d3.svg.brush()
		.x(timeScale)
		.extent([startingValue, startingValue])
		.on("brush", brushed)
		.on("brushend", brushend);


		var slider = svgSlider.append("g")
		.attr("class", "slider leaflet-bottom leaflet-control")
		.style("cursor","default");

		brush(slider);

		slider.selectAll(".extent,.resize")
		.remove();

		slider.select(".background")
		.attr("height", sliderHeight);

		var handle = slider.append("g")
		.attr("class", "handle")

		handle.append("path")
		.attr("transform", "translate(0," + sliderHeight / 2 + ")")
		.attr("d", "M 0 -10 V 10")

		handle.append('text')
		.text(formatDate(startingValue))
		.attr("transform", "translate(" + (-18) + " ," + (sliderHeight / 2 - 25) + ")");


		var xColumnName = "Year";
		var yColumnName = "Month";

		var oldDate = d3.min(monthAndYear);
		var latestDate = d3.max(monthAndYear);

		var lastClick = 0;

		function brushed() {
			if (!d3.event.sourceEvent) return;

			if (lastClick >= (Date.now() - 20))
				return;
			lastClick = Date.now();
			selectedDateValue = brush.extent()[1];
			selectedDateValue = timeScale.invert(d3.mouse(this)[0]);
			
			sliderSvgOverlay.simulateSpill1();
			sliderSvgOverlay2.simulateSpill2();
			sliderSvgOverlay3.simulateSpill3();
			sliderSvgOverlay4.simulateSpill4();
			
			handle.attr("transform", "translate(" + timeScale(selectedDateValue) + ",0)");
			handle.select('text').text(formatDate(selectedDateValue));
		}

		function brushend(){
			if (!d3.event.sourceEvent) return;
			selectedDateValue = brush.extent()[1];
			d3.select(this).transition()
			.call(brush.extent([selectedDateValue, selectedDateValue]))
			.call(brush.event);
		}

	}
	// drawing slider ends


	//We are not drawing the oil parcels as circles anymore. This is very heavy on the system
	this.drawOilSpillCircles = function(){
		/*	d3.selectAll("circle").remove();
		scale_factor = Math.max((1 / Math.pow(2, map.getZoom() - 13))/64, 0.0000002);
		sel.append('g')
		.selectAll('circle')
		.data(filteredDataForPanel1).enter()
		.append('circle')
		.attr('class',function(d){
			return ('spillParticle_' + d["STATUS"]).replace(" ","");
		})
		.attr('r', 2 * scale_factor)
		.attr('fill-opacity', '0.9')
		.attr('cx',function(d){return  proj.latLngToLayerPoint(d.latLng).x;})
		.attr('cy',function(d){return proj.latLngToLayerPoint(d.latLng).y;})
		.attr('fill',function (d){
			if(d["CLEANED"] == 1){
				return "#74c476";
			} else {
				if(d["STATUS"] == "water column"){
					return "#fd8d3c";
				} else if(d["STATUS"] == "sunk"){
					return "#810f7c";
				} else if(d["STATUS"] == "surfaced"){
					return "#f768a1";
				} else if(d["STATUS"] == "beached"){
					return "#de2d26";
				}

			}
		});*/
	}

	//We make the boat ramps either hollow or filled here
	function colorBoatRamps1(){
		currentBoatramps1 = 	boatRampHighlightMap1.get(formatDateForBoatRamps(new Date(selectedDateValue)));
		currentBoatrampsArr1 = [];
		currentBoatramps1.forEach(function(eachRamp){
			$("#boatRampLocations_1_" + parseInt(eachRamp["boatRampId"]).toString()).attr("href", "images/activeBR.png");
			currentBoatrampsArr1.push(parseInt(eachRamp["boatRampId"]));
		});
		
		activeBoatRamps1 = new Set(currentBoatrampsArr1);
		
		inactiveRamps1 = new Set([...rampsJsonSet].filter(x => !activeBoatRamps1.has(x)));

		inactiveRamps1.forEach(function(data){
			$("#boatRampLocations_1_" + data.toString()).attr("href", "images/inactiveBR.png");
		})
		
	}
	
//actual drawing of the boat ramp stars
	this.drawBoatRampCircles = function(){
		boatRampOverlay1 = L.d3SvgOverlay(function(sel, proj) {		
		d3.selectAll(".boatRampLocations_1").remove();
		scale_factor = Math.max((1 / Math.pow(2, map.getZoom() - 13))/64, 0.0000002);
		sel.append('g')
		.attr('class','boatRampLocations_1')
		.selectAll('image')
		.data(rampsJson).enter()
		.append('svg:image')
		.attr("xlink:href", function(d){
			return "images/inactiveBR.png";	    
		})
		.attr('id', function (d){return 'boatRampLocations_1_' + d.properties["RampID"]})
		.attr("width", (16 * scale_factor).toString()+"px")
		.attr("height", (16 * scale_factor).toString()+"px")
		.style("cursor","default")
		.attr('x',function(d){d.x = proj.latLngToLayerPoint(d.latLng).x; return  proj.latLngToLayerPoint(d.latLng).x;})
		.attr('y',function(d){d.y = proj.latLngToLayerPoint(d.latLng).y; return proj.latLngToLayerPoint(d.latLng).y;})
		.on("mouseover", handleMouseOver)
		.on("mouseout", handleMouseOut)
		colorBoatRamps1();
		if(boatRampshiddenMap1==true){
			$(".boatRampLocations_1").hide();
		} else {
			$(".boatRampLocations_1").show();
		}
		});
		boatRampOverlay1.addTo(map);
	}

	//will be invoked when the mouse is hovered over the boat ramps
	function handleMouseOver(d, i) {  
		d3.select(this).attr({
			r: 11 * scale_factor * 2
		});

		applyTooltipTransition(0.9);

		if(  (currentBoatrampsArr1.indexOf(d.properties["RampID"])) != -1){
			toolTipBoatRampColor = "red";
		} else {
			toolTipBoatRampColor = "#04A7ED";
		} 

		var x =  d3.event.clientX, y =d3.event.clientY;
		tooltip.attr("transform","translate(0)")
		tooltip.html('<div id="divTooltipBoatRampId" style="color:'+toolTipBoatRampColor+'">' + d.properties["RampID"] + '</div><div id="divTooltipBoatRampDetails"><table>' + 
				'<tr class="trTooltip"><td class="tdFirstTooltip">Exclusion Boom Capacity:</td><td class="tdSecondTooltip">' + d.properties["EBcap"] + '</td></tr>' + 
				'<tr class="trTooltip"><td class="tdFirstTooltip">Vessel Capacity:</td><td class="tdSecondTooltip">' + d.properties["VesCap"] + '</td></tr>')
				.style("left", (x - (475 * 1)) + "px")
				.style("top", ( y - (955 * 1)) + "px");
	}

	//will be invoked when the mouse leaves the boat ramp
	function handleMouseOut(d, i) {
		d3.select(this).attr({
			r: 11 * scale_factor
		});

		applyTooltipTransition(0)
	}


	//makes the tool tip slightly transparent
	function applyTooltipTransition(newOpacity) {
		tooltip.transition()
		.duration(500)
		.style("opacity", newOpacity);
	}
	

	//drawing of the spill parcels, and coloring of the polygons are invoked here 
	this.simulateSpill1 = function(){
		d3.selectAll("circle").remove();
		currentSpillType = $('#spillTypeSelector').val();
		currentDateSelected = new Date(selectedDateValue);
		developedTime = formatDateForMapCreation(currentDateSelected);
		developedTimeBoatRamps = formatDateForBoatRamps(currentDateSelected);

		
		
		filteredDataForPanel1 = finalFileMap1.get(developedTime);
		if(currentSpillType == "water column" || currentSpillType == "surfaced" || currentSpillType == "sunk" || currentSpillType == "beached" ){
			filteredDataForPanel1 = filteredDataForPanel1.filter(function(rowForMonthAndYear) {
				return rowForMonthAndYear["STATUS"] ==	 currentSpillType;
			});
		}
		
		
		drawHeatMap1();
	
		
		colorBoatRamps1();
		
		onlyFilterDataImpactGridCountsIdsMap1 = [];
		onlyFilterIGCIUniqueMap1 = [];
		
		filterDataImpactGridCountsMap1 = impactGridCountsMap1.filter(function(rowForMonthAndYear) {
			var result = (rowForMonthAndYear["CURR_TIME"].substring(0,11) <=  developedTime);

			if(result)
				onlyFilterDataImpactGridCountsIdsMap1.push(rowForMonthAndYear['Polygon_ID']);

			return result;

		});

		$.each(onlyFilterDataImpactGridCountsIdsMap1, function(i, el){
			if($.inArray(el, onlyFilterIGCIUniqueMap1) === -1) onlyFilterIGCIUniqueMap1.push(el);
		});

		filterDataImpactGridCountsComplementMap1 = [];
		impactGridCountsMap1.forEach(function(rowForMonthAndYear) {
			if((rowForMonthAndYear["CURR_TIME"].substring(0,11) >  developedTime) && (onlyFilterIGCIUniqueMap1.indexOf(rowForMonthAndYear["Polygon_ID"]) == -1)){
				filterDataImpactGridCountsComplementMap1.push(rowForMonthAndYear);
			}
		});
		
		
		colorPolygons();
	}

});

sliderSvgOverlay.addTo(map);


//Same for the other three maps
sliderSvgOverlay2 = L.d3SvgOverlay(function(sel, proj){
	


	$('#cleanUpSelector2').click(function() {
		if($('#cleanUpSelector2_95').is(':checked')) {
			finalFileMap2 = dataMap95;
			boatRampHighlightMap2 = boatRampHighlightMap95;
			impactGridCountsMap2 = impactGridCounts95;
			overallImpactRangeMap2 = overallImpactRange95;
			sliderSvgOverlay2.simulateSpill2();

		} else if ($('#cleanUpSelector2_90').is(':checked')) {
			finalFileMap2 = dataMap90;
			boatRampHighlightMap2 = boatRampHighlightMap90;
			impactGridCountsMap2 = impactGridCounts90;
			overallImpactRangeMap2 = overallImpactRange90;
			sliderSvgOverlay2.simulateSpill2();
			
		} else if ($('#cleanUpSelector2_85').is(':checked')) {
			finalFileMap2 = dataMap85;
			boatRampHighlightMap2 = boatRampHighlightMap85;
			impactGridCountsMap2 = impactGridCounts85;
			overallImpactRangeMap2 = overallImpactRange85;
			sliderSvgOverlay2.simulateSpill2();
			
		} else if ($('#cleanUpSelector2_80').is(':checked')) {
			finalFileMap2 = dataMap80;
			boatRampHighlightMap2 = boatRampHighlightMap80;
			impactGridCountsMap2 = impactGridCounts80;
			overallImpactRangeMap2 = overallImpactRange80;
			sliderSvgOverlay2.simulateSpill2();
			
		} else if ($('#cleanUpSelector2_75').is(':checked')) {
			finalFileMap2 = dataMap75;
			boatRampHighlightMap2 = boatRampHighlightMap75;
			impactGridCountsMap2 = impactGridCounts75;
			overallImpactRangeMap2 = overallImpactRange75;
			sliderSvgOverlay2.simulateSpill2();
			
		} else if ($('#cleanUpSelector2_00').is(':checked')) {
			finalFileMap2 = dataMap00;
			boatRampHighlightMap2 = boatRampHighlightMap00;
			impactGridCountsMap2 = impactGridCounts00;
			overallImpactRangeMap2 = overallImpactRange00;
			sliderSvgOverlay2.simulateSpill2();
		}
	});

	this.drawOilSpillCircles2 = function(){

	}
	
	function colorBoatRamps2(){
		currentBoatramps2 = 	boatRampHighlightMap2.get(formatDateForBoatRamps(new Date(selectedDateValue)));
		currentBoatrampsArr2 = [];
		currentBoatramps2.forEach(function(eachRamp){
			$("#boatRampLocations_2_" + parseInt(eachRamp["boatRampId"]).toString()).attr("href", "images/activeBR.png");
			currentBoatrampsArr2.push(parseInt(eachRamp["boatRampId"]));
		});
		
		activeBoatRamps2 = new Set(currentBoatrampsArr2);
		
		inactiveRamps2 = new Set([...rampsJsonSet].filter(x => !activeBoatRamps2.has(x)));

		inactiveRamps2.forEach(function(data){
			$("#boatRampLocations_2_" + data.toString()).attr("href", "images/inactiveBR.png");
		})
		
	}


	this.drawBoatRampCircles2 = function(){
		boatRampOverlay2 = L.d3SvgOverlay(function(sel, proj) {
		d3.selectAll(".boatRampLocations_2").remove();
		scale_factor = Math.max((1 / Math.pow(2, map2.getZoom() - 13))/64, 0.0000002);
		sel.append('g')
		.attr('class','boatRampLocations_2')
		.selectAll('image')
		.data(rampsJson).enter()
		.append('svg:image')
		.attr("xlink:href", function(d){
			return "images/inactiveBR.png";	    
		})
		.attr('id', function (d){return 'boatRampLocations_2_' + d.properties["RampID"]})
		.attr("width", (16 * scale_factor).toString()+"px")
		.attr("height", (16 * scale_factor).toString()+"px")
		.style("cursor","default")
		.attr('x',function(d){d.x = proj.latLngToLayerPoint(d.latLng).x; return  proj.latLngToLayerPoint(d.latLng).x;})
		.attr('y',function(d){d.y = proj.latLngToLayerPoint(d.latLng).y; return proj.latLngToLayerPoint(d.latLng).y;})
		.on("mouseover", handleMouseOver)
		.on("mouseout", handleMouseOut)
		colorBoatRamps2();
		if(boatRampshiddenMap2==true){
			$(".boatRampLocations_2").hide();
		} else {
			$(".boatRampLocations_2").show();
		}
		});
		boatRampOverlay2.addTo(map2);
	}

	function handleMouseOver(d, i) {  
		d3.select(this).attr({
			r: 11 * scale_factor * 2
		});
3
		applyTooltipTransition(0.5);

		if(  (currentBoatrampsArr2.indexOf(d.properties["RampID"])) != -1){
			toolTipBoatRampColor = "red";
		} else {
			toolTipBoatRampColor = "#04A7ED";
		} 

		var x =  d3.event.clientX, y =d3.event.clientY;
		tooltip.attr("transform","translate(0)")
		tooltip.html('<div id="divTooltipBoatRampId" style="color:'+toolTipBoatRampColor+'">' + d.properties["RampID"] + '</div><div id="divTooltipBoatRampDetails"><table>' + 
				'<tr class="trTooltip"><td class="tdFirstTooltip">Exclusion Boom Capacity:</td><td class="tdSecondTooltip">' + d.properties["EBcap"] + '</td></tr>' + 
				'<tr class="trTooltip"><td class="tdFirstTooltip">Vessel Capacity:</td><td class="tdSecondTooltip">' + d.properties["VesCap"] + '</td></tr>')
				.style("left", (x - (475 * 1)) + "px")
				.style("top", ( y - (955 * 1)) + "px");
	}

	function handleMouseOut(d, i) {
		d3.select(this).attr({
			r: 11 * scale_factor
		});

		applyTooltipTransition(0)
	}
	
	//applies a transparency of 0.5
	function applyTooltipTransition(newOpacity) {
		tooltip.transition()
		.duration(500)
		.style("opacity", newOpacity);
	}

	this.simulateSpill2 = function(){
		d3.selectAll("circle").remove();
		currentSpillType = $('#spillTypeSelector').val();
		currentDateSelected = new Date(selectedDateValue);
		developedTime = formatDateForMapCreation(currentDateSelected);
		developedTimeBoatRamps = formatDateForBoatRamps(currentDateSelected);

		
		
		filteredDataForPanel2 = finalFileMap2.get(developedTime);
		if(currentSpillType == "water column" || currentSpillType == "surfaced" || currentSpillType == "sunk" || currentSpillType == "beached" ){
			filteredDataForPanel2 = filteredDataForPanel2.filter(function(rowForMonthAndYear) {
				return rowForMonthAndYear["STATUS"] ==	 currentSpillType;
			});
		}
		
		drawHeatMap2();
		
		colorBoatRamps2();
		
		onlyFilterDataImpactGridCountsIdsMap2 = [];
		onlyFilterIGCIUniqueMap2 = [];
		
		filterDataImpactGridCountsMap2 = impactGridCountsMap2.filter(function(rowForMonthAndYear) {
			var result = (rowForMonthAndYear["CURR_TIME"].substring(0,11) <=  developedTime);

			if(result)
				onlyFilterDataImpactGridCountsIdsMap2.push(rowForMonthAndYear['Polygon_ID']);

			return result;

		});

		$.each(onlyFilterDataImpactGridCountsIdsMap2, function(i, el){
			if($.inArray(el, onlyFilterIGCIUnique) === -1) onlyFilterIGCIUniqueMap2.push(el);
		});

		filterDataImpactGridCountsComplementMap2 = [];
		impactGridCountsMap2.forEach(function(rowForMonthAndYear) {
			if((rowForMonthAndYear["CURR_TIME"].substring(0,11) >  developedTime) && (onlyFilterIGCIUniqueMap2.indexOf(rowForMonthAndYear["Polygon_ID"]) == -1)){
				filterDataImpactGridCountsComplementMap2.push(rowForMonthAndYear);
			}
		});
		
		
		colorPolygons2();

	}

});


sliderSvgOverlay2.addTo(map2);


sliderSvgOverlay3 = L.d3SvgOverlay(function(sel, proj){


	$('#cleanUpSelector3').click(function() {
		if($('#cleanUpSelector3_95').is(':checked')) {
			finalFileMap3 = dataMap95;
			boatRampHighlightMap3 = boatRampHighlightMap95;
			impactGridCountsMap3 = impactGridCounts95;
			overallImpactRangeMap3 = overallImpactRange95;
			sliderSvgOverlay3.simulateSpill3();
			
		} else if ($('#cleanUpSelector3_90').is(':checked')) {
			finalFileMap3 = dataMap90;
			boatRampHighlightMap3 = boatRampHighlightMap90;
			impactGridCountsMap3 = impactGridCounts90;
			overallImpactRangeMap3 = overallImpactRange90;
			sliderSvgOverlay3.simulateSpill3();
			
		} else if ($('#cleanUpSelector3_85').is(':checked')) {
			finalFileMap3 = dataMap85;
			boatRampHighlightMap3 = boatRampHighlightMap85;
			impactGridCountsMap3 = impactGridCounts85;
			overallImpactRangeMap3 = overallImpactRange85;
			sliderSvgOverlay3.simulateSpill3();
			
		} else if ($('#cleanUpSelector3_80').is(':checked')) {
			finalFileMap3 = dataMap80;
			boatRampHighlightMap3 = boatRampHighlightMap80;
			impactGridCountsMap3 = impactGridCounts80;
			overallImpactRangeMap3 = overallImpactRange80;
			sliderSvgOverlay3.simulateSpill3();
			
		} else if ($('#cleanUpSelector3_75').is(':checked')) {
			finalFileMap3 = dataMap75;
			boatRampHighlightMap3 = boatRampHighlightMap75;
			impactGridCountsMap3 = impactGridCounts75;
			overallImpactRangeMap3 = overallImpactRange75;
			sliderSvgOverlay3.simulateSpill3();
	
		} else if ($('#cleanUpSelector3_00').is(':checked')) {
			finalFileMap3 = dataMap00;
			boatRampHighlightMap3 = boatRampHighlightMap00;
			impactGridCountsMap3 = impactGridCounts00;
			overallImpactRangeMap3 = overallImpactRange00;
			sliderSvgOverlay3.simulateSpill3();
		
		}
	});

	this.drawOilSpillCircles3 = function(){

	}

	
	function colorBoatRamps3(){
		currentBoatramps3 = 	boatRampHighlightMap3.get(formatDateForBoatRamps(new Date(selectedDateValue)));
		currentBoatrampsArr3 = [];
		currentBoatramps3.forEach(function(eachRamp){
			$("#boatRampLocations_3_" + parseInt(eachRamp["boatRampId"]).toString()).attr("href", "images/activeBR.png");
			currentBoatrampsArr3.push(parseInt(eachRamp["boatRampId"]));
		});
		
		activeBoatRamps3 = new Set(currentBoatrampsArr3);
		
		inactiveRamps3 = new Set([...rampsJsonSet].filter(x => !activeBoatRamps3.has(x)));

		inactiveRamps3.forEach(function(data){
			$("#boatRampLocations_3_" + data.toString()).attr("href", "images/inactiveBR.png");
		})
		
	}

	this.drawBoatRampCircles3 = function(){
		boatRampOverlay3 = L.d3SvgOverlay(function(sel, proj) {
		d3.selectAll(".boatRampLocations_3").remove();
		scale_factor = Math.max((1 / Math.pow(2, map3.getZoom() - 13))/64, 0.0000002);
		sel.append('g')
		.attr('class','boatRampLocations_3')
		.selectAll('image')
		.data(rampsJson).enter()
		.append('svg:image')
		.attr("xlink:href", function(d){
			return "images/inactiveBR.png";	    
		})
		.attr('id', function (d){return 'boatRampLocations_3_' + d.properties["RampID"]})
		.attr("width", (16 * scale_factor).toString()+"px")
		.attr("height", (16 * scale_factor).toString()+"px")
		.style("cursor","default")
		.attr('x',function(d){d.x = proj.latLngToLayerPoint(d.latLng).x; return  proj.latLngToLayerPoint(d.latLng).x;})
		.attr('y',function(d){d.y = proj.latLngToLayerPoint(d.latLng).y; return proj.latLngToLayerPoint(d.latLng).y;})
		.on("mouseover", handleMouseOver)
		.on("mouseout", handleMouseOut)
		colorBoatRamps3();
		if(boatRampshiddenMap3==true){
			$(".boatRampLocations_3").hide();
		} else {
			$(".boatRampLocations_3").show();
		}
		});
		
		boatRampOverlay3.addTo(map3);
	}

	function handleMouseOver(d, i) {  
		d3.select(this).attr({
			r: 11 * scale_factor * 2
		});

		applyTooltipTransition(0.9);

		if(  (currentBoatrampsArr3.indexOf(d.properties["RampID"])) != -1){
			toolTipBoatRampColor = "red";
		} else {
			toolTipBoatRampColor = "#04A7ED";
		} 

		var x =  d3.event.clientX, y =d3.event.clientY;
		tooltip.attr("transform","translate(0)")
		tooltip.html('<div id="divTooltipBoatRampId" style="color:'+toolTipBoatRampColor+'">' + d.properties["RampID"] + '</div><div id="divTooltipBoatRampDetails"><table>' + 
				'<tr class="trTooltip"><td class="tdFirstTooltip">Exclusion Boom Capacity:</td><td class="tdSecondTooltip">' + d.properties["EBcap"] + '</td></tr>' + 
				'<tr class="trTooltip"><td class="tdFirstTooltip">Vessel Capacity:</td><td class="tdSecondTooltip">' + d.properties["VesCap"] + '</td></tr>')
				.style("left", (x - (475 * 1)) + "px")
				.style("top", ( y - (955 * 1)) + "px");
	}

	function handleMouseOut(d, i) {
		d3.select(this).attr({
			r: 11 * scale_factor
		});

		applyTooltipTransition(0)
	}


	
	function applyTooltipTransition(newOpacity) {
		tooltip.transition()
		.duration(500)
		.style("opacity", newOpacity);
	}

	
	this.simulateSpill3 = function(){
		d3.selectAll("circle").remove();
		currentSpillType = $('#spillTypeSelector').val();
		currentDateSelected = new Date(selectedDateValue);
		developedTime = formatDateForMapCreation(currentDateSelected);
		developedTimeBoatRamps = formatDateForBoatRamps(currentDateSelected);

		
		filteredDataForPanel3 = finalFileMap3.get(developedTime);
		if(currentSpillType == "water column" || currentSpillType == "surfaced" || currentSpillType == "sunk" || currentSpillType == "beached" ){
			filteredDataForPanel3 = filteredDataForPanel3.filter(function(rowForMonthAndYear) {
				return rowForMonthAndYear["STATUS"] ==	 currentSpillType;
			});
		}
		
		colorBoatRamps3();
		
		drawHeatMap3();
		
		onlyFilterDataImpactGridCountsIdsMap3 = [];
		onlyFilterIGCIUniqueMap3 = [];
		
		filterDataImpactGridCountsMap3 = impactGridCountsMap3.filter(function(rowForMonthAndYear) {
			var result = (rowForMonthAndYear["CURR_TIME"].substring(0,11) <=  developedTime);

			if(result)
				onlyFilterDataImpactGridCountsIdsMap3.push(rowForMonthAndYear['Polygon_ID']);

			return result;

		});

		$.each(onlyFilterDataImpactGridCountsIdsMap3, function(i, el){
			if($.inArray(el, onlyFilterIGCIUniqueMap3) === -1) onlyFilterIGCIUniqueMap3.push(el);
		});

		filterDataImpactGridCountsComplementMap3 = [];
		impactGridCountsMap3.forEach(function(rowForMonthAndYear) {
			if((rowForMonthAndYear["CURR_TIME"].substring(0,11) >  developedTime) && (onlyFilterIGCIUniqueMap3.indexOf(rowForMonthAndYear["Polygon_ID"]) == -1)){
				filterDataImpactGridCountsComplementMap3.push(rowForMonthAndYear);
			}
		});
		
		
		colorPolygons3();

	}


});


sliderSvgOverlay3.addTo(map3);



sliderSvgOverlay4 = L.d3SvgOverlay(function(sel, proj){

	$('#cleanUpSelector4').click(function() {
		if($('#cleanUpSelector4_95').is(':checked')) {
			finalFileMap4 = dataMap95;
			boatRampHighlightMap4 = boatRampHighlightMap95;
			impactGridCountsMap4 = impactGridCounts95;
			overallImpactRangeMap4 = overallImpactRange95;
			sliderSvgOverlay4.simulateSpill4();
			
		} else if ($('#cleanUpSelector4_90').is(':checked')) {
			finalFileMap4 = dataMap90;
			boatRampHighlightMap4 = boatRampHighlightMap90;
			impactGridCountsMap4 = impactGridCounts90;
			overallImpactRangeMap4 = overallImpactRange90;
			sliderSvgOverlay4.simulateSpill4();
			
		} else if ($('#cleanUpSelector4_85').is(':checked')) {
			finalFileMap4 = dataMap85;
			boatRampHighlightMap4 = boatRampHighlightMap85;
			impactGridCountsMap4 = impactGridCounts85;
			overallImpactRangeMap4 = overallImpactRange85;
			sliderSvgOverlay4.simulateSpill4();
			
		} else if ($('#cleanUpSelector4_80').is(':checked')) {
			finalFileMap4 = dataMap80;
			boatRampHighlightMap4 = boatRampHighlightMap80;
			impactGridCountsMap4 = impactGridCounts80;
			overallImpactRangeMap4 = overallImpactRange80;
			sliderSvgOverlay4.simulateSpill4();
			
		} else if ($('#cleanUpSelector4_75').is(':checked')) {
			finalFileMap4 = dataMap75;
			boatRampHighlightMap4 = boatRampHighlightMap75;
			impactGridCountsMap4 = impactGridCounts75;
			overallImpactRangeMap4 = overallImpactRange75;
			sliderSvgOverlay4.simulateSpill4();
		} else if ($('#cleanUpSelector4_00').is(':checked')) {
			finalFileMap4 = dataMap00;
			boatRampHighlightMap4 = boatRampHighlightMap00;
			impactGridCountsMap4 = impactGridCounts00;
			overallImpactRangeMap4 = overallImpactRange00;
			sliderSvgOverlay4.simulateSpill4();
		
		}
		
	});

	this.drawOilSpillCircles4 = function(){

	}

	function colorBoatRamps4(){
		currentBoatramps4 = 	boatRampHighlightMap4.get(formatDateForBoatRamps(new Date(selectedDateValue)));
		currentBoatrampsArr4 = [];
		currentBoatramps4.forEach(function(eachRamp){
			$("#boatRampLocations_4_" + parseInt(eachRamp["boatRampId"]).toString()).attr("href", "images/activeBR.png");
			currentBoatrampsArr4.push(parseInt(eachRamp["boatRampId"]));
		});
		
		activeBoatRamps4 = new Set(currentBoatrampsArr4);
		
		inactiveRamps4 = new Set([...rampsJsonSet].filter(x => !activeBoatRamps4.has(x)));

		inactiveRamps4.forEach(function(data){
			$("#boatRampLocations_4_" + data.toString()).attr("href", "images/inactiveBR.png");
		})
		
	}
	
	this.drawBoatRampCircles4 = function(){
		boatRampOverlay4 = L.d3SvgOverlay(function(sel, proj) {
		d3.selectAll(".boatRampLocations_4").remove();
		scale_factor = Math.max((1 / Math.pow(2, map4.getZoom() - 13))/64, 0.0000002);
		sel.append('g')
		.attr('class','boatRampLocations_4')
		.selectAll('image')
		.data(rampsJson).enter()
		.append('svg:image')
		.attr("xlink:href", function(d){
			return "images/inactiveBR.png";	    
		})
		.attr('id', function (d){return 'boatRampLocations_4_' + d.properties["RampID"]})
		.attr("width", (16 * scale_factor).toString()+"px")
		.attr("height", (16 * scale_factor).toString()+"px")
		.style("cursor","default")
		.attr('x',function(d){d.x = proj.latLngToLayerPoint(d.latLng).x; return  proj.latLngToLayerPoint(d.latLng).x;})
		.attr('y',function(d){d.y = proj.latLngToLayerPoint(d.latLng).y; return proj.latLngToLayerPoint(d.latLng).y;})
		.on("mouseover", handleMouseOver)
		.on("mouseout", handleMouseOut)
		colorBoatRamps4();
		if(boatRampshiddenMap4==true){
			$(".boatRampLocations_4").hide();
		} else {
			$(".boatRampLocations_4").show();
		}
		});
		boatRampOverlay4.addTo(map4);
	}

	function handleMouseOver(d, i) {  
		d3.select(this).attr({
			r: 11 * scale_factor * 2
		});

		applyTooltipTransition(0.9);

		if(  (currentBoatrampsArr4.indexOf(d.properties["RampID"])) != -1){
			toolTipBoatRampColor = "red";
		} else {
			toolTipBoatRampColor = "#04A7ED";
		} 

		var x =  d3.event.clientX, y =d3.event.clientY;
		tooltip.attr("transform","translate(0)")
		tooltip.html('<div id="divTooltipBoatRampId" style="color:'+toolTipBoatRampColor+'">' + d.properties["RampID"] + '</div><div id="divTooltipBoatRampDetails"><table>' + 
				'<tr class="trTooltip"><td class="tdFirstTooltip">Exclusion Boom Capacity:</td><td class="tdSecondTooltip">' + d.properties["EBcap"] + '</td></tr>' + 
				'<tr class="trTooltip"><td class="tdFirstTooltip">Vessel Capacity:</td><td class="tdSecondTooltip">' + d.properties["VesCap"] + '</td></tr>')
				.style("left", (x - (475 * 1)) + "px")
				.style("top", ( y - (955 * 1)) + "px");
	}

	function handleMouseOut(d, i) {
		d3.select(this).attr({
			r: 11 * scale_factor
		});

		applyTooltipTransition(0)
	}


	function applyTooltipTransition(newOpacity) {
		tooltip.transition()
		.duration(500)
		.style("opacity", newOpacity);
	}

	
	this.simulateSpill4 = function(){
		d3.selectAll("circle").remove();
		currentSpillType = $('#spillTypeSelector').val();
		currentDateSelected = new Date(selectedDateValue);
		developedTime = formatDateForMapCreation(currentDateSelected);
		developedTimeBoatRamps = formatDateForBoatRamps(currentDateSelected);

		
		filteredDataForPanel4 = finalFileMap4.get(developedTime);
		if(currentSpillType == "water column" || currentSpillType == "surfaced" || currentSpillType == "sunk" || currentSpillType == "beached" ){
			filteredDataForPanel4 = filteredDataForPanel4.filter(function(rowForMonthAndYear) {
				return rowForMonthAndYear["STATUS"] ==	 currentSpillType;
			});
		}
		
		drawHeatMap4();
		
		colorBoatRamps4();
		
		onlyFilterDataImpactGridCountsIdsMap4 = [];
		onlyFilterIGCIUniqueMap4 = [];
		
		filterDataImpactGridCountsMap4 = impactGridCountsMap4.filter(function(rowForMonthAndYear) {
			var result = (rowForMonthAndYear["CURR_TIME"].substring(0,11) <=  developedTime);

			if(result)
				onlyFilterDataImpactGridCountsIdsMap4.push(rowForMonthAndYear['Polygon_ID']);

			return result;

		});

		$.each(onlyFilterDataImpactGridCountsIdsMap4, function(i, el){
			if($.inArray(el, onlyFilterIGCIUniqueMap4) === -1) onlyFilterIGCIUniqueMap4.push(el);
		});

		filterDataImpactGridCountsComplementMap4 = [];
		impactGridCountsMap4.forEach(function(rowForMonthAndYear) {
			if((rowForMonthAndYear["CURR_TIME"].substring(0,11) >  developedTime) && (onlyFilterIGCIUniqueMap4.indexOf(rowForMonthAndYear["Polygon_ID"]) == -1)){
				filterDataImpactGridCountsComplementMap4.push(rowForMonthAndYear);
			}
		});
		
		colorPolygons4();
	}

});


sliderSvgOverlay4.addTo(map4);

//////////////////////SLIDEROVERLAY ENDS/////////////////////
