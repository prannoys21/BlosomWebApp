var dataWithLatLng=[];
var dataCut75=[];
var dataCut80=[];
var dataCut85=[];
var dataCut90=[];
var dataCut95=[];
var sliderSvgOverlay;
var sliderSvgOverlay2;
var sliderSvgOverlay3;
var sliderSvgOverlay4;

var impactOverlay1;
var impactOverlay2;
var impactOverlay3;
var impactOverlay4;

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
var blackColor = "black"
	var blueColor = "blue"
		var brownColor = "brown"	
			var sampleStufff;
var spillDropDownMap = {};
var firsTimeLoadSlider = true;

var heatMapOn = true;
var heatMapLatLng = [];
var finalHeatMapCoords = [];
var heatMapLayerGlobal = L.heatLayer();
var heatMapLayerGlobal2 = L.heatLayer();
var heatMapLayerGlobal3 = L.heatLayer();
var heatMapLayerGlobal4 = L.heatLayer();

var multipleLayerControl;
var multipleLayerControl2;
var multipleLayerControl3;
var multipleLayerControl4;


var cleanedDataObtained;
var geojsonMarkerOptions;
var rampsJson = [];
var impactJson = [];
var impactJson2 = [];
var developedTimeBoatRamps;
var developedTimeBoatRampsMonth;
var boatRampHighlightData1;
var boatRampHighlightData2;
var boatRampHighlightData3;
var boatRampHighlightData4;

var boatRampHighlightDataCut75;
var boatRampHighlightDataCut80;
var boatRampHighlightDataCut85;
var boatRampHighlightDataCut90;
var boatRampHighlightDataCut95;
var boatRampColor;

var onlyBoatRampIds1 = [];
var onlyBoatRampIds2 = [];
var onlyBoatRampIds3 = [];
var onlyBoatRampIds4 = [];

var toolTipBoatRampColor;
var svgStarIcon;
var globalFuncs;
var impactGridCounts = [];
var filterDataImpactGridCounts = [];
var filterDataImpactGridCountsComplement = [];
var tempDailyImpactCounts = [];
var promises = [];
var canDraw = false;
var polygonColor;
var onlyImpactCounts = [];
var onlyFilterDataImpactGridCountsIds = [];
var maxImpact; 
var minImpact;
var overallImpactRange;
var finalFileMap1;
var finalFileMap2;
var finalFileMap3;
var finalFileMap4;

var dataMap75 = new Map();
var dataMap80 = new Map();
var dataMap85 = new Map();
var dataMap90 = new Map();
var dataMap95 = new Map();
var startDateFromCsv;
var endDateFromCsv;
var modelRuntimeFromCsv;
var blowoutDurationFromCsv;
var onlyFilterIGCIUnique = [];

$(document).ready(function(){
	d3.csv("data/ImportantDates.csv", function (data) {
		startDateFromCsv = data[0]["StartDate"];
		endDateFromCsv = data[0]["EndDate"];
		modelRuntimeFromCsv = data[0]["ModelRuntime"];
		blowoutDurationFromCsv = data[0]["BlowoutDuration"];
	});

//	1
	promises[0] = new Promise(function(resolve, reject) {
		d3.csv("data/finalFile75.0.csv", function (data) {

			dataCut75 = data.map(function(d){
				d.latLng = [+d.LATITUDE,+d.LONGITUDE];
				return d;
			});
			var myDate  = new Date(startDateFromCsv);
			var onlyDates = [];
			for (var i = 0; i< modelRuntimeFromCsv ; i++){
				dataMap75.set(formatDateForMapCreation(myDate), dataCut75.filter(function(rowForMonthAndYear) {
					return rowForMonthAndYear["CURR_TIME"].substring(0,11) == formatDateForMapCreation(myDate)
				}) );
				myDate.setDate(myDate.getDate() + 1);
			}
			resolve();
		});
	});

	// 2
	promises[1] = new Promise(function(resolve, reject) {
		d3.csv("data/finalFile80.0.csv", function (data) {
			dataCut80 = data.map(function(d){
				d.latLng = [+d.LATITUDE,+d.LONGITUDE];
				return d;
			});
			var myDate  = new Date(startDateFromCsv);
			var onlyDates = [];
			for (var i = 0; i< modelRuntimeFromCsv ; i++){
				dataMap80.set(formatDateForMapCreation(myDate), dataCut80.filter(function(rowForMonthAndYear) {
					return rowForMonthAndYear["CURR_TIME"].substring(0,11) == formatDateForMapCreation(myDate)
				}) );
				myDate.setDate(myDate.getDate() + 1);
			}
			resolve();
		});
	});

	// 3
	promises[2] = new Promise(function(resolve, reject) {
		d3.csv("data/finalFile85.0.csv", function (data) {
			dataCut85 = data.map(function(d){
				d.latLng = [+d.LATITUDE,+d.LONGITUDE];
				return d;
			});
			var myDate  = new Date(startDateFromCsv);
			var onlyDates = [];
			for (var i = 0; i< modelRuntimeFromCsv ; i++){
				dataMap85.set(formatDateForMapCreation(myDate), dataCut85.filter(function(rowForMonthAndYear) {
					return rowForMonthAndYear["CURR_TIME"].substring(0,11) == formatDateForMapCreation(myDate)
				}) );
				myDate.setDate(myDate.getDate() + 1);
			}
			resolve();
		});
	});

	// 4
	promises[3] = new Promise(function(resolve, reject) {
		d3.csv("data/finalFile90.0.csv", function (data) {
			dataCut90 = data.map(function(d){
				d.latLng = [+d.LATITUDE,+d.LONGITUDE];
				return d;
			});
			var myDate  = new Date(startDateFromCsv);
			var onlyDates = [];
			for (var i = 0; i< modelRuntimeFromCsv ; i++){
				dataMap90.set(formatDateForMapCreation(myDate), dataCut90.filter(function(rowForMonthAndYear) {
					return rowForMonthAndYear["CURR_TIME"].substring(0,11) == formatDateForMapCreation(myDate)
				}) );
				myDate.setDate(myDate.getDate() + 1);
			}
			resolve();
		});
	});

	// 5
	promises[4] = new Promise(function(resolve, reject) {
		d3.csv("data/finalFile95.0.csv", function (data) {
			dataWithLatLng = data.map(function(d){
				d.latLng = [+d.LATITUDE,+d.LONGITUDE];
				return d;
			});
			dataCut95 = dataWithLatLng;
			var myDate  = new Date(startDateFromCsv);
			var onlyDates = [];
			for (var i = 0; i< modelRuntimeFromCsv ; i++){
				dataMap95.set(formatDateForMapCreation(myDate), dataCut95.filter(function(rowForMonthAndYear) {
					return rowForMonthAndYear["CURR_TIME"].substring(0,11) == formatDateForMapCreation(myDate)
				}) );
				myDate.setDate(myDate.getDate() + 1);
			}
			finalFileMap1 = dataMap95;
			finalFileMap2 = dataMap95;
			finalFileMap3 = dataMap95;
			finalFileMap4 = dataMap95;
			resolve();
		});
	});


	// 6 BOAT RAMPS DATA
	promises[5] = new Promise(function(resolve, reject) {
		shp("data/BoatRamps.zip").then(function(geojson){
			// rampsJson = geojson;
			rampsJson = geojson.features.map(function(d){
				d.latLng = [+d.geometry["coordinates"][1],+d.geometry["coordinates"][0]];
				return d;
			});
			resolve();
		});
	});


	// ////////////////////
	promises[6] = new Promise(function(resolve, reject) {
		shp("data/impact2.zip").then(function(geojson){
			impactJson = JSON.stringify(geojson);
			resolve();
		});
	});

	// 7


	// 9
	d3.csv("data/ResultBoatRampDayWise75.0.csv", function (data) {
		boatRampHighlightDataCut75 = data;
	});

	// 10
	d3.csv("data/ResultBoatRampDayWise80.0.csv", function (data) {
		boatRampHighlightDataCut80 = data;
	});

	// 11
	d3.csv("data/ResultBoatRampDayWise85.0.csv", function (data) {
		boatRampHighlightDataCut85 = data;
	});

	// 12
	d3.csv("data/ResultBoatRampDayWise90.0.csv", function (data) {
		boatRampHighlightDataCut90 = data;
	});

	// 13
	promises[7] = new Promise(function(resolve, reject) {
		d3.csv("data/ResultBoatRampDayWise95.0.csv", function (data) {
			boatRampHighlightData1 = data;
			boatRampHighlightData2 = data;
			boatRampHighlightData3 = data;
			boatRampHighlightData4 = data;
			boatRampHighlightDataCut95 = boatRampHighlightData1;
			resolve();
		});
	});


	// 15
	d3.json("data/impact.json", function(data) { 
		impactJson2 = data.features; 
	});


	// 18
	d3.csv("data/SJOilGrid_RequiredColumns_Count_Unique.csv", function (data) {
		impactGridCounts = data;
		impactGridCounts.forEach(function(eachPolygonRow){
			onlyImpactCounts.push(eachPolygonRow['Count']);
		}) 
		maxImpact = Math.max.apply(null, onlyImpactCounts);
		minImpact = Math.min.apply(null, onlyImpactCounts);
		overallImpactRange = Math.sqrt(maxImpact) - Math.sqrt(minImpact);
	});

	Promise.all(promises).then(function(result){
		sliderSvgOverlay.drawBoatRampCircles();
		sliderSvgOverlay.drawOilSpillCircles();
		sliderSvgOverlay2.drawBoatRampCircles2();
		sliderSvgOverlay2.drawOilSpillCircles2();
		sliderSvgOverlay3.drawBoatRampCircles3();
		sliderSvgOverlay3.drawOilSpillCircles3();
		sliderSvgOverlay4.drawBoatRampCircles4();
		sliderSvgOverlay4.drawOilSpillCircles4();
		canDraw = true;
		
		drawImpactGrid();
		drawImpactGrid2();
		drawImpactGrid3();
		drawImpactGrid4();
		
		groupedOverlays1 = {

				"Impact Grid (Map1)": impactOverlay1
		};

		groupedOverlays2 = {

				"Impact Grid (Map2)": impactOverlay2
		};

		groupedOverlays3 = {

				"Impact Grid (Map3)": impactOverlay3
		};

		groupedOverlays4 = {

				"Impact Grid (Map4)": impactOverlay4
		};
		
		L.control.layers(baseLayers, groupedOverlays1).addTo(map);
		L.control.layers(baseLayers2, groupedOverlays2).addTo(map2);
		L.control.layers(baseLayers3, groupedOverlays3).addTo(map3);
		L.control.layers(baseLayers4, groupedOverlays4).addTo(map4);

	});



});



var defaultOSM = L.tileLayer('https://{s}.tile.thunderforest.com/outdoors/{z}/{x}/{y}.png?apikey=6db8cb757e354777bdf5f25d32416bff'),
neighborHood= L.tileLayer('https://{s}.tile.thunderforest.com/neighbourhood/{z}/{x}/{y}.png?apikey=6db8cb757e354777bdf5f25d32416bff'),
cycleMap = L.tileLayer('https://{s}.tile.thunderforest.com/cycle/{z}/{x}/{y}.png?apikey=6db8cb757e354777bdf5f25d32416bff'),
transportMap = L.tileLayer('https://{s}.tile.thunderforest.com/transport/{z}/{x}/{y}.png?apikey=6db8cb757e354777bdf5f25d32416bff');

multipleLayerControl  = new L.layerGroup();
multipleLayerControl2  = new L.layerGroup();
multipleLayerControl3  = new L.layerGroup();
multipleLayerControl4  = new L.layerGroup();


baseLayers = {
		"DefaultOSM": L.tileLayer('https://{s}.tile.thunderforest.com/outdoors/{z}/{x}/{y}.png?apikey=6db8cb757e354777bdf5f25d32416bff'), 
		"Neighborhood":  L.tileLayer('https://{s}.tile.thunderforest.com/neighbourhood/{z}/{x}/{y}.png?apikey=6db8cb757e354777bdf5f25d32416bff'),
		"CycleMap": L.tileLayer('https://{s}.tile.thunderforest.com/cycle/{z}/{x}/{y}.png?apikey=6db8cb757e354777bdf5f25d32416bff'),  
		"TransportMap": L.tileLayer('https://{s}.tile.thunderforest.com/transport/{z}/{x}/{y}.png?apikey=6db8cb757e354777bdf5f25d32416bff')
};
baseLayers2 = {
		"DefaultOSM": L.tileLayer('https://{s}.tile.thunderforest.com/outdoors/{z}/{x}/{y}.png?apikey=6db8cb757e354777bdf5f25d32416bff'), 
		"Neighborhood":  L.tileLayer('https://{s}.tile.thunderforest.com/neighbourhood/{z}/{x}/{y}.png?apikey=6db8cb757e354777bdf5f25d32416bff'),
		"CycleMap": L.tileLayer('https://{s}.tile.thunderforest.com/cycle/{z}/{x}/{y}.png?apikey=6db8cb757e354777bdf5f25d32416bff'),  
		"TransportMap": L.tileLayer('https://{s}.tile.thunderforest.com/transport/{z}/{x}/{y}.png?apikey=6db8cb757e354777bdf5f25d32416bff')
}
baseLayers3 = {
		"DefaultOSM": L.tileLayer('https://{s}.tile.thunderforest.com/outdoors/{z}/{x}/{y}.png?apikey=6db8cb757e354777bdf5f25d32416bff'), 
		"Neighborhood":  L.tileLayer('https://{s}.tile.thunderforest.com/neighbourhood/{z}/{x}/{y}.png?apikey=6db8cb757e354777bdf5f25d32416bff'),
		"CycleMap": L.tileLayer('https://{s}.tile.thunderforest.com/cycle/{z}/{x}/{y}.png?apikey=6db8cb757e354777bdf5f25d32416bff'),  
		"TransportMap": L.tileLayer('https://{s}.tile.thunderforest.com/transport/{z}/{x}/{y}.png?apikey=6db8cb757e354777bdf5f25d32416bff')
}
baseLayers4 = {
		"DefaultOSM": L.tileLayer('https://{s}.tile.thunderforest.com/outdoors/{z}/{x}/{y}.png?apikey=6db8cb757e354777bdf5f25d32416bff'), 
		"Neighborhood":  L.tileLayer('https://{s}.tile.thunderforest.com/neighbourhood/{z}/{x}/{y}.png?apikey=6db8cb757e354777bdf5f25d32416bff'),
		"CycleMap": L.tileLayer('https://{s}.tile.thunderforest.com/cycle/{z}/{x}/{y}.png?apikey=6db8cb757e354777bdf5f25d32416bff'),  
		"TransportMap": L.tileLayer('https://{s}.tile.thunderforest.com/transport/{z}/{x}/{y}.png?apikey=6db8cb757e354777bdf5f25d32416bff')
}

console.log(baseLayers)

//map declaration
var map = L.map('osmMap1', {
	center: [29.1408716,-87.8464683],
	zoom: 7,
	renderer: L.svg(),
	layers: [baseLayers.DefaultOSM,  baseLayers.Neighborhood,  baseLayers.TransportMap, baseLayers.CycleMap, multipleLayerControl]
});

var map2 = L.map('osmMap2', {
	center: [29.1408716,-87.8464683],
	zoom: 7,
	renderer: L.svg(),
	layers: [baseLayers2.DefaultOSM,  baseLayers2.Neighborhood,  baseLayers2.TransportMap, baseLayers2.CycleMap, multipleLayerControl2]
});

var map3 = L.map('osmMap3', {
	center: [29.1408716,-87.8464683],
	zoom: 7,
	renderer: L.svg(),
	layers: [baseLayers3.DefaultOSM,  baseLayers3.Neighborhood,  baseLayers3.TransportMap, baseLayers3.CycleMap, multipleLayerControl3]
});

var map4 = L.map('osmMap4', {
	center: [29.1408716,-87.8464683],
	zoom: 7,
	renderer: L.svg(),
	layers: [baseLayers4.DefaultOSM,  baseLayers4.Neighborhood,  baseLayers4.TransportMap, baseLayers4.CycleMap,  multipleLayerControl4]
});

///////////////////////IMPACT OVERLAY STARTS/////////////////
function drawImpactGrid(){
impactOverlay1 = L.d3SvgOverlay(function(sel, proj) {
	var upd2 = sel.selectAll('path').data(impactJson2);
	upd2
	.enter()
	.append('path')
	.attr('class','ImpactGrid1')
	.attr('d', proj.pathFromGeojson)
	.attr('stroke', 'black')
	.attr('id', function(d){
		return "Polygon1_" + d.properties['Id'];
	})
	.attr('fill', '#43a2ca')
	.attr('fill-opacity', '0.7');
	upd2.attr('stroke-width', 0.1 / proj.scale);
	colorPolygons();
});

impactOverlay1.addTo(map);
}
function drawImpactGrid2(){
	impactOverlay2= L.d3SvgOverlay(function(sel, proj) {
		var upd2 = sel.selectAll('path').data(impactJson2);
		upd2
		.enter()
		.append('path')
		.attr('class','ImpactGrid2')
		.attr('d', proj.pathFromGeojson)
		.attr('stroke', 'black')
		.attr('id', function(d){
			return "Polygon2_" + d.properties['Id'];
		})
		.attr('fill', '#43a2ca')
		.attr('fill-opacity', '0.7');
		upd2.attr('stroke-width', 0.1 / proj.scale);
		colorPolygons();
	});

	impactOverlay2.addTo(map2);
	}

function drawImpactGrid3(){
		impactOverlay3= L.d3SvgOverlay(function(sel, proj) {
			var upd2 = sel.selectAll('path').data(impactJson2);
			upd2
			.enter()
			.append('path')
			.attr('class','ImpactGrid3')
			.attr('d', proj.pathFromGeojson)
			.attr('stroke', 'black')
			.attr('id', function(d){
				return "Polygon3_" + d.properties['Id'];
			})
			.attr('fill', '#43a2ca')
			.attr('fill-opacity', '0.7');
			upd2.attr('stroke-width', 0.1 / proj.scale);
			colorPolygons();
		});

		impactOverlay3.addTo(map3);
}


function drawImpactGrid4(){
	impactOverlay4= L.d3SvgOverlay(function(sel, proj) {
			var upd2 = sel.selectAll('path').data(impactJson2);
			upd2
			.enter()
			.append('path')
			.attr('class','ImpactGrid4')
			.attr('d', proj.pathFromGeojson)
			.attr('stroke', 'black')
			.attr('id', function(d){
				return "Polygon4_" + d.properties['Id'];
			})
			.attr('fill', '#43a2ca')
			.attr('fill-opacity', '0.7');
			upd2.attr('stroke-width', 0.1 / proj.scale);
			colorPolygons();
		});

		impactOverlay4.addTo(map4);
}


///////////////////////IMPACT OVERLAY ENDS///////////////////

//makes sure dots don't get bigger
var scale_factor = Math.max((1 / Math.pow(2, map.getZoom() - 13))/64, 0.25);
var zoomLevel=map.getZoom();

//legend for the heatmap
var legend = L.control({position: 'bottomright'});

legend.onAdd = function (map) {

	var div = L.DomUtil.create('div', 'info legend'),
	grades = [14, 28, 43, 57, 71, 86, 100],
	labels = ['(0-14)%','(14-28)%','(28-43)%','(43-57)%','(57-71)%','(71-86)%','(86-100)%'];

	// loop through our density intervals and generate a label with a colored
	// square for each interval
	for (var i = 0; i < grades.length; i++) {
		div.innerHTML += '<i style="background:' + getColor(grades[i]) + '"></i> ' + (grades[i] ? labels[i] + '<br>' : '+');
	}
	return div;
};
legend.addTo(map4);

//for the legend
function getColor(d) {
	switch(d) {
	case 14: return "#feedde";
	case 28: return "#fdd0a2";
	case 43: return "#fdae6b";
	case 57: return "#fd8d3c";
	case 71: return "#f16913";
	case 86: return "#d94801";
	case 100: return "#8c2d04";
	default: return "#000000";
	}
}


var tooltip = d3.select("#divslider").append("div").attr("id", "divTooltip").style("opacity", 0);

tooltip: {
	followPointer: true
};

function drawHeatMap1(){
	if(heatMapOn){
		heatMapLatLng = [];
		map.removeLayer(heatMapLayerGlobal);
		filteredDataForPanel1.forEach(function(eachRow){
			heatMapLatLng.push(eachRow['latLng'])
		});
		finalHeatMapCoords = heatMapLatLng;
		heatMapLayerGlobal = L.heatLayer(finalHeatMapCoords, {radius:2,blur:2,maxZoom:5,gradient:{0.143:'#feedde',0.285:'#fdd0a2',0.43:'#fdae6b',0.57:'#fd8d3c',0.71:'#f16913',0.86:'#d94801',1.0:'#8c2d04'}}).addTo(multipleLayerControl);
		
	} else {
		map.removeLayer(heatMapLayerGlobal);
	}
}

function drawHeatMap2(){
	if(heatMapOn){
		heatMapLatLng = [];
		map2.removeLayer(heatMapLayerGlobal2);
		filteredDataForPanel2.forEach(function(eachRow){
			heatMapLatLng.push(eachRow['latLng'])
		});
		finalHeatMapCoords = heatMapLatLng;
		heatMapLayerGlobal2 = L.heatLayer(finalHeatMapCoords, {radius:2,blur:2,maxZoom:5,gradient:{0.143:'#feedde',0.285:'#fdd0a2',0.43:'#fdae6b',0.57:'#fd8d3c',0.71:'#f16913',0.86:'#d94801',1.0:'#8c2d04'}}).addTo(multipleLayerControl2);
		
	} else {
		map2.removeLayer(heatMapLayerGlobal2);
	}
}

function drawHeatMap3(){
	if(heatMapOn){
		heatMapLatLng = [];
		map3.removeLayer(heatMapLayerGlobal3);
		filteredDataForPanel3.forEach(function(eachRow){
			heatMapLatLng.push(eachRow['latLng'])
		});
		finalHeatMapCoords = heatMapLatLng;
		heatMapLayerGlobal3 = L.heatLayer(finalHeatMapCoords, {radius:2,blur:2,maxZoom:5,gradient:{0.143:'#feedde',0.285:'#fdd0a2',0.43:'#fdae6b',0.57:'#fd8d3c',0.71:'#f16913',0.86:'#d94801',1.0:'#8c2d04'}}).addTo(multipleLayerControl3);
		
	} else {
		map3.removeLayer(heatMapLayerGlobal3);
	}
}

function drawHeatMap4(){
	if(heatMapOn){
		heatMapLatLng = [];
		map4.removeLayer(heatMapLayerGlobal4);
		filteredDataForPanel4.forEach(function(eachRow){
			heatMapLatLng.push(eachRow['latLng'])
		});
		finalHeatMapCoords = heatMapLatLng;
		heatMapLayerGlobal4 = L.heatLayer(finalHeatMapCoords, {radius:2,blur:2,maxZoom:5,gradient:{0.143:'#feedde',0.285:'#fdd0a2',0.43:'#fdae6b',0.57:'#fd8d3c',0.71:'#f16913',0.86:'#d94801',1.0:'#8c2d04'}}).addTo(multipleLayerControl4);
		
	} else {
		map4.removeLayer(heatMapLayerGlobal4);
	}
}


function colorPolygons(){
	if(filterDataImpactGridCounts.length > 0){
		filterDataImpactGridCounts.some(function(eachRow2){
			// $("#Polygon_14193").css("style", "fill : #756bb1");
			if(eachRow2['Count'] < (overallImpactRange * 0.2)){
				polygonColor = "#fee5d9";
				$("#Polygon1_" + (eachRow2['Polygon_ID']).toString()).attr("style", "fill : " + polygonColor);
				return;
			} else if ((eachRow2['Count'] >= (overallImpactRange * 0.2)) && (eachRow2['Count'] < (overallImpactRange * 0.4)) ){
				polygonColor =  '#fcae91';
				$("#Polygon1_" + (eachRow2['Polygon_ID']).toString()).attr("style", "fill : " + polygonColor);
				return;
			} else if ((eachRow2['Count'] >= (overallImpactRange * 0.4))  && (eachRow2['Count'] < (overallImpactRange * 0.6 )) ){
				polygonColor =  '#fb6a4a';
				$("#Polygon1_" + (eachRow2['Polygon_ID']).toString()).attr("style", "fill : " + polygonColor);
				return;
			}  else if ((eachRow2['Count'] >= (overallImpactRange * 0.6))  && (eachRow2['Count'] < (overallImpactRange * 0.8)) ){
				polygonColor =  '#de2d26';
				$("#Polygon1_" + (eachRow2['Polygon_ID']).toString()).attr("style", "fill : " + polygonColor);
				return;
			}  else if ((eachRow2['Count'] >= (overallImpactRange * 0.8))  && (eachRow2['Count'] < (overallImpactRange)) ){
				polygonColor =  '#a50f15';
				$("#Polygon1_" + (eachRow2['Polygon_ID']).toString()).attr("style", "fill : " + polygonColor);
				return;
			}  
		});
	} 
	
	if(filterDataImpactGridCounts.length > 0){
		filterDataImpactGridCounts.some(function(eachRow2){
			// $("#Polygon_14193").css("style", "fill : #756bb1");
			if(eachRow2['Count'] < (overallImpactRange * 0.25)){
				polygonColor = "#fee5d9";
				$("#Polygon2_" + (eachRow2['Polygon_ID']).toString()).attr("style", "fill : " + polygonColor);
				return;
			} else if ((eachRow2['Count'] >= (overallImpactRange * 0.25)) && (eachRow2['Count'] < (overallImpactRange * 0.50)) ){
				polygonColor =  '#fcae91';
				$("#Polygon2_" + (eachRow2['Polygon_ID']).toString()).attr("style", "fill : " + polygonColor);
				return;
			} else if ((eachRow2['Count'] >= (overallImpactRange * 0.50))  && (eachRow2['Count'] < (overallImpactRange * 0.75 )) ){
				polygonColor =  '#fb6a4a';
				$("#Polygon2_" + (eachRow2['Polygon_ID']).toString()).attr("style", "fill : " + polygonColor);
				return;
			}  else if ((eachRow2['Count'] >= (overallImpactRange * 0.75))  && (eachRow2['Count'] < (overallImpactRange)) ){
				polygonColor =  '#cb181d';
				$("#Polygon2_" + (eachRow2['Polygon_ID']).toString()).attr("style", "fill : " + polygonColor);
				return;
			}  
		});
	}
	
	if(filterDataImpactGridCounts.length > 0){
		filterDataImpactGridCounts.some(function(eachRow2){
			// $("#Polygon_14193").css("style", "fill : #756bb1");
			if(eachRow2['Count'] < (overallImpactRange * 0.25)){
				polygonColor = "#fee5d9";
				$("#Polygon3_" + (eachRow2['Polygon_ID']).toString()).attr("style", "fill : " + polygonColor);
				return;
			} else if ((eachRow2['Count'] >= (overallImpactRange * 0.25)) && (eachRow2['Count'] < (overallImpactRange * 0.50)) ){
				polygonColor =  '#fcae91';
				$("#Polygon3_" + (eachRow2['Polygon_ID']).toString()).attr("style", "fill : " + polygonColor);
				return;
			} else if ((eachRow2['Count'] >= (overallImpactRange * 0.50))  && (eachRow2['Count'] < (overallImpactRange * 0.75 )) ){
				polygonColor =  '#fb6a4a';
				$("#Polygon3_" + (eachRow2['Polygon_ID']).toString()).attr("style", "fill : " + polygonColor);
				return;
			}  else if ((eachRow2['Count'] >= (overallImpactRange * 0.75))  && (eachRow2['Count'] < (overallImpactRange)) ){
				polygonColor =  '#cb181d';
				$("#Polygon3_" + (eachRow2['Polygon_ID']).toString()).attr("style", "fill : " + polygonColor);
				return;
			}  
		});
	}

	
	if(filterDataImpactGridCounts.length > 0){
		filterDataImpactGridCounts.some(function(eachRow2){
			// $("#Polygon_14193").css("style", "fill : #756bb1");
			if(eachRow2['Count'] < (overallImpactRange * 0.25)){
				polygonColor = "#fee5d9";
				$("#Polygon4_" + (eachRow2['Polygon_ID']).toString()).attr("style", "fill : " + polygonColor);
				return;
			} else if ((eachRow2['Count'] >= (overallImpactRange * 0.25)) && (eachRow2['Count'] < (overallImpactRange * 0.50)) ){
				polygonColor =  '#fcae91';
				$("#Polygon4_" + (eachRow2['Polygon_ID']).toString()).attr("style", "fill : " + polygonColor);
				return;
			} else if ((eachRow2['Count'] >= (overallImpactRange * 0.50))  && (eachRow2['Count'] < (overallImpactRange * 0.75 )) ){
				polygonColor =  '#fb6a4a';
				$("#Polygon4_" + (eachRow2['Polygon_ID']).toString()).attr("style", "fill : " + polygonColor);
				return;
			}  else if ((eachRow2['Count'] >= (overallImpactRange * 0.75))  && (eachRow2['Count'] < (overallImpactRange)) ){
				polygonColor =  '#cb181d';
				$("#Polygon4_" + (eachRow2['Polygon_ID']).toString()).attr("style", "fill : " + polygonColor);
				return;
			}  
		});
	}


	if(filterDataImpactGridCountsComplement.length > 0){
		filterDataImpactGridCountsComplement.forEach(function(eachRow2){
			polygonColor = "#43a2ca";
			$("#Polygon1_" + (eachRow2['Polygon_ID']).toString()).attr("style", "fill : " + polygonColor);
		});
	}
	
	if(filterDataImpactGridCountsComplement.length > 0){
		filterDataImpactGridCountsComplement.forEach(function(eachRow2){
			polygonColor = "#43a2ca";
			$("#Polygon2_" + (eachRow2['Polygon_ID']).toString()).attr("style", "fill : " + polygonColor);
		});
	}
	
	if(filterDataImpactGridCountsComplement.length > 0){
		filterDataImpactGridCountsComplement.forEach(function(eachRow2){
			polygonColor = "#43a2ca";
			$("#Polygon3_" + (eachRow2['Polygon_ID']).toString()).attr("style", "fill : " + polygonColor);
		});
	}
	
	if(filterDataImpactGridCountsComplement.length > 0){
		filterDataImpactGridCountsComplement.forEach(function(eachRow2){
			polygonColor = "#43a2ca";
			$("#Polygon4_" + (eachRow2['Polygon_ID']).toString()).attr("style", "fill : " + polygonColor);
		});
	}

}



sliderSvgOverlay = L.d3SvgOverlay(function(sel, proj){
	$("#spillTypeSelector").change(function () {
		//filterOilStatusWise();
		simulateSpill1();
	});


	$('#cleanUpSelector1').click(function() {
		if($('#cleanUpSelector1_95').is(':checked')) {
			// alert("95 is checked");
			//dataWithLatLng = dataCut95;
			finalFileMap1 = dataMap95;
			//createMapForEachDay();
			boatRampHighlightData1 = boatRampHighlightDataCut95;
			getCurrentDateHighlightedRamps();
			simulateSpill1();
		} else if ($('#cleanUpSelector1_90').is(':checked')) {
			// alert("90 is checked");
			//dataWithLatLng = dataCut90;
			finalFileMap1 = dataMap90;
			boatRampHighlightData1 = boatRampHighlightDataCut90;
			getCurrentDateHighlightedRamps();
			simulateSpill1();
		} else if ($('#cleanUpSelector1_85').is(':checked')) {
			// alert("85 is checked");
			//dataWithLatLng = dataCut85;
			finalFileMap1 = dataMap85;
			boatRampHighlightData1 = boatRampHighlightDataCut85;
			getCurrentDateHighlightedRamps();
			simulateSpill1();
		} else if ($('#cleanUpSelector1_80').is(':checked')) {
			// alert("80 is checked");
			//dataWithLatLng = dataCut80;
			finalFileMap1 = dataMap80;
			boatRampHighlightData1 = boatRampHighlightDataCut80;
			getCurrentDateHighlightedRamps();
			simulateSpill1();
		} else if ($('#cleanUpSelector1_75').is(':checked')) {
			// alert("75 is checked");
			//dataWithLatLng = dataCut75;
			finalFileMap1 = dataMap75;
			boatRampHighlightData1 = boatRampHighlightDataCut75;
			getCurrentDateHighlightedRamps();
			simulateSpill1();
		}
	});

	// slider start
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
		var uniqueDateStart = "2015-Apr-15 00:00:00";
		var uniqueDateEnd = "2015-May-28 23:59:59";

		// scale function
		var timeScale = d3.time.scale.utc()
		.domain([new Date(uniqueDateStart), new Date(uniqueDateEnd)])
		.range([0, sliderWidth])
		.clamp(true);

		// initial value
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
			simulateSpill1();
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
	// slider end


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


	this.drawBoatRampCircles = function(){
		d3.selectAll(".boatRampLocations_1").remove();
		scale_factor = Math.max((1 / Math.pow(2, map.getZoom() - 13))/64, 0.0000002);
		sel.append('g')
		.attr('id','boatRampLocations_1')
		.attr('class','boatRampLocations_1')
		.selectAll('image')
		.data(rampsJson).enter()
		.append('svg:image')
		.attr("xlink:href", function(d){if((onlyBoatRampIds1.indexOf(d.properties["ID"])) != -1){
			return "images/star-red.png";
		} else {
			return "images/star2.png";	    
		}   })
		.attr("width", (16* scale_factor).toString()+"px")
		.attr("height", (16 * scale_factor).toString()+"px")
		.style("cursor","default")
		// .attr('r', 11 * scale_factor)
		.attr('x',function(d){d.x = proj.latLngToLayerPoint(d.latLng).x; return  proj.latLngToLayerPoint(d.latLng).x;})
		.attr('y',function(d){d.y = proj.latLngToLayerPoint(d.latLng).y; return proj.latLngToLayerPoint(d.latLng).y;})
		.on("mouseover", handleMouseOver)
		.on("mouseout", handleMouseOut)

	}

	function handleMouseOver(d, i) {  
		d3.select(this).attr({
			r: 11 * scale_factor * 2
		});

		applyTooltipTransition(0.9);

		if(  (onlyBoatRampIds1.indexOf(d.properties["ID"])) != -1){
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

	if(canDraw){
		this.drawOilSpillCircles();
		this.drawBoatRampCircles();
		//filterOilStatusWise();
	}

	function applyTooltipTransition(newOpacity) {
		tooltip.transition()
		.duration(500)
		.style("opacity", newOpacity);
	}

	function getCurrentDateHighlightedRamps(){
		filteredDataForRamps1 = boatRampHighlightData1.filter(function(eachDayRamp) {
			return (eachDayRamp["date"] ==  developedTimeBoatRamps);
		});
		onlyBoatRampIds1 = [];
		filteredDataForRamps1.forEach(function(eachElement){
			onlyBoatRampIds1.push(parseInt(eachElement.boatRampId));
		});
		onlyBoatRampIds1 = onlyBoatRampIds1.filter(function(elem, index, self) {
			return index == self.indexOf(elem);
		});
		onlyBoatRampIds1.sort();
	}



	function simulateSpill1(){
//		//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
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
		
		filteredDataForPanel2 = finalFileMap2.get(developedTime);
		if(currentSpillType == "water column" || currentSpillType == "surfaced" || currentSpillType == "sunk" || currentSpillType == "beached" ){
			filteredDataForPanel2 = filteredDataForPanel2.filter(function(rowForMonthAndYear) {
				return rowForMonthAndYear["STATUS"] ==	 currentSpillType;
			});
		}
		
		filteredDataForPanel3 = finalFileMap3.get(developedTime);
		if(currentSpillType == "water column" || currentSpillType == "surfaced" || currentSpillType == "sunk" || currentSpillType == "beached" ){
			filteredDataForPanel3 = filteredDataForPanel3.filter(function(rowForMonthAndYear) {
				return rowForMonthAndYear["STATUS"] ==	 currentSpillType;
			});
		}
		
		filteredDataForPanel4 = finalFileMap4.get(developedTime);
		if(currentSpillType == "water column" || currentSpillType == "surfaced" || currentSpillType == "sunk" || currentSpillType == "beached" ){
			filteredDataForPanel4 = filteredDataForPanel4.filter(function(rowForMonthAndYear) {
				return rowForMonthAndYear["STATUS"] ==	 currentSpillType;
			});
		}
		
		
		drawHeatMap1();
		drawHeatMap2();
		drawHeatMap3();
		drawHeatMap4();
		

		
		getCurrentDateHighlightedRamps();
		//filterOilStatusWise();
		

		filterDataImpactGridCounts = impactGridCounts.filter(function(rowForMonthAndYear) {
			var result = (rowForMonthAndYear["CURR_TIME"].substring(0,11) <=  developedTime);

			if(result)
				onlyFilterDataImpactGridCountsIds.push(rowForMonthAndYear['Polygon_ID']);

			return result;

		});

		onlyFilterDataImpactGridCountsIds = [];
		onlyFilterIGCIUnique = [];
		filterDataImpactGridCounts.forEach(function(eachPolygonRow){
			onlyFilterDataImpactGridCountsIds.push(eachPolygonRow['Polygon_ID']);
		});

		$.each(onlyFilterDataImpactGridCountsIds, function(i, el){
			if($.inArray(el, onlyFilterIGCIUnique) === -1) onlyFilterIGCIUnique.push(el);
		});

		filterDataImpactGridCountsComplement = [];
		impactGridCounts.forEach(function(rowForMonthAndYear) {
			if((rowForMonthAndYear["CURR_TIME"].substring(0,11) >  developedTime) && (onlyFilterIGCIUnique.indexOf(rowForMonthAndYear["Polygon_ID"]) == -1)){
				filterDataImpactGridCountsComplement.push(rowForMonthAndYear);
			}
		});
		colorPolygons();
	}

});

sliderSvgOverlay.addTo(map);

sliderSvgOverlay2 = L.d3SvgOverlay(function(sel, proj){
	$("#spillTypeSelector").change(function () {
		//filterOilStatusWise();
		simulateSpill2();
	});


	$('#cleanUpSelector2').click(function() {
		if($('#cleanUpSelector2_95').is(':checked')) {
			// alert("95 is checked");
			//dataWithLatLng = dataCut95;
			finalFileMap2 = dataMap95;
			//createMapForEachDay();
			boatRampHighlightData2 = boatRampHighlightDataCut95;
			getCurrentDateHighlightedRamps();
			simulateSpill2();
		} else if ($('#cleanUpSelector2_90').is(':checked')) {
			// alert("90 is checked");
			//dataWithLatLng = dataCut90;
			finalFileMap2 = dataMap90;
			boatRampHighlightData2 = boatRampHighlightDataCut90;
			getCurrentDateHighlightedRamps();
			simulateSpill2();
		} else if ($('#cleanUpSelector2_85').is(':checked')) {
			// alert("85 is checked");
			//dataWithLatLng = dataCut85;
			finalFileMap2 = dataMap85;
			boatRampHighlightData2 = boatRampHighlightDataCut85;
			getCurrentDateHighlightedRamps();
			simulateSpill2();
		} else if ($('#cleanUpSelector2_80').is(':checked')) {
			// alert("80 is checked");
			//dataWithLatLng = dataCut80;
			finalFileMap2 = dataMap80;
			boatRampHighlightData2 = boatRampHighlightDataCut80;
			getCurrentDateHighlightedRamps();
			simulateSpill2();
		} else if ($('#cleanUpSelector2_75').is(':checked')) {
			// alert("75 is checked");
			//dataWithLatLng = dataCut75;
			finalFileMap2 = dataMap75;
			boatRampHighlightData2 = boatRampHighlightDataCut75;
			getCurrentDateHighlightedRamps();
			simulateSpill2();
		}
	});

	this.drawOilSpillCircles2 = function(){

	}


	this.drawBoatRampCircles2 = function(){
		d3.selectAll(".boatRampLocations_2").remove();
		scale_factor = Math.max((1 / Math.pow(2, map2.getZoom() - 13))/64, 0.0000002);
		sel.append('g')
		.attr('id','boatRampLocations2')
		.attr('class','boatRampLocations_2')
		.selectAll('image')
		.data(rampsJson).enter()
		.append('svg:image')
		.attr("xlink:href", function(d){if((onlyBoatRampIds2.indexOf(d.properties["ID"])) != -1){
			return "images/star-red.png";
		} else {
			return "images/star2.png";	    
		}   })
		.attr("width", (16* scale_factor).toString()+"px")
		.attr("height", (16 * scale_factor).toString()+"px")
		.style("cursor","default")
		// .attr('r', 11 * scale_factor)
		.attr('x',function(d){d.x = proj.latLngToLayerPoint(d.latLng).x; return  proj.latLngToLayerPoint(d.latLng).x;})
		.attr('y',function(d){d.y = proj.latLngToLayerPoint(d.latLng).y; return proj.latLngToLayerPoint(d.latLng).y;})
		.on("mouseover", handleMouseOver)
		.on("mouseout", handleMouseOut)

	}

	function handleMouseOver(d, i) {  
		d3.select(this).attr({
			r: 11 * scale_factor * 2
		});

		applyTooltipTransition(0.9);

		if(  (onlyBoatRampIds2.indexOf(d.properties["ID"])) != -1){
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

	if(canDraw){
		this.drawOilSpillCircles2();
		this.drawBoatRampCircles2();
		//filterOilStatusWise();
	}

	function applyTooltipTransition(newOpacity) {
		tooltip.transition()
		.duration(500)
		.style("opacity", newOpacity);
	}

	function getCurrentDateHighlightedRamps(){
		filteredDataForRamps2 = boatRampHighlightData2.filter(function(eachDayRamp) {
			return (eachDayRamp["date"] ==  developedTimeBoatRamps);
		});
		onlyBoatRampIds2 = [];
		filteredDataForRamps2.forEach(function(eachElement){
			onlyBoatRampIds2.push(parseInt(eachElement.boatRampId));
		});
		onlyBoatRampIds2 = onlyBoatRampIds2.filter(function(elem, index, self) {
			return index == self.indexOf(elem);
		});
		onlyBoatRampIds2.sort();
	}

	function simulateSpill2(){
//		//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
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
		
		//drawHeatMap2();
		
		getCurrentDateHighlightedRamps();

	}

});


sliderSvgOverlay2.addTo(map2);


sliderSvgOverlay3 = L.d3SvgOverlay(function(sel, proj){
	$("#spillTypeSelector").change(function () {
		//filterOilStatusWise();
		simulateSpill3();
	});


	$('#cleanUpSelector3').click(function() {
		if($('#cleanUpSelector3_95').is(':checked')) {
			// alert("95 is checked");
			dataWithLatLng = dataCut95;
			finalFileMap3 = dataMap95;
			//createMapForEachDay();
			boatRampHighlightData3 = boatRampHighlightDataCut95;
			getCurrentDateHighlightedRamps();
			simulateSpill3();
		} else if ($('#cleanUpSelector3_90').is(':checked')) {
			// alert("90 is checked");
			dataWithLatLng = dataCut90;
			finalFileMap3 = dataMap90;
			boatRampHighlightData3 = boatRampHighlightDataCut90;
			getCurrentDateHighlightedRamps();
			simulateSpill3();
		} else if ($('#cleanUpSelector3_85').is(':checked')) {
			// alert("85 is checked");
			dataWithLatLng = dataCut85;
			finalFileMap3 = dataMap85;
			boatRampHighlightData3 = boatRampHighlightDataCut85;
			getCurrentDateHighlightedRamps();
			simulateSpill3();
		} else if ($('#cleanUpSelector3_80').is(':checked')) {
			// alert("80 is checked");
			dataWithLatLng = dataCut80;
			finalFileMap3 = dataMap80;
			boatRampHighlightData3 = boatRampHighlightDataCut80;
			getCurrentDateHighlightedRamps();
			simulateSpill3();
		} else if ($('#cleanUpSelector3_75').is(':checked')) {
			// alert("75 is checked");
			dataWithLatLng = dataCut75;
			finalFileMap3 = dataMap75;
			boatRampHighlightData3 = boatRampHighlightDataCut75;
			getCurrentDateHighlightedRamps();
			simulateSpill3();
		}
	});

	this.drawOilSpillCircles3 = function(){

	}


	this.drawBoatRampCircles3 = function(){
		d3.selectAll(".boatRampLocations_3").remove();
		scale_factor = Math.max((1 / Math.pow(2, map3.getZoom() - 13))/64, 0.0000002);
		sel.append('g')
		.attr('id','boatRampLocations3')
		.attr('class','boatRampLocations_3')
		.selectAll('image')
		.data(rampsJson).enter()
		.append('svg:image')
		.attr("xlink:href", function(d){if((onlyBoatRampIds3.indexOf(d.properties["ID"])) != -1){
			return "images/star-red.png";
		} else {
			return "images/star2.png";	    
		}   })
		.attr("width", (16* scale_factor).toString()+"px")
		.attr("height", (16 * scale_factor).toString()+"px")
		.style("cursor","default")
		// .attr('r', 11 * scale_factor)
		.attr('x',function(d){d.x = proj.latLngToLayerPoint(d.latLng).x; return  proj.latLngToLayerPoint(d.latLng).x;})
		.attr('y',function(d){d.y = proj.latLngToLayerPoint(d.latLng).y; return proj.latLngToLayerPoint(d.latLng).y;})
		.on("mouseover", handleMouseOver)
		.on("mouseout", handleMouseOut)

	}

	function handleMouseOver(d, i) {  
		d3.select(this).attr({
			r: 11 * scale_factor * 2
		});

		applyTooltipTransition(0.9);

		if(  (onlyBoatRampIds3.indexOf(d.properties["ID"])) != -1){
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

	if(canDraw){
		this.drawOilSpillCircles3();
		this.drawBoatRampCircles3();
		//filterOilStatusWise();
	}

	function applyTooltipTransition(newOpacity) {
		tooltip.transition()
		.duration(500)
		.style("opacity", newOpacity);
	}

	function getCurrentDateHighlightedRamps(){
		filteredDataForRamps3 = boatRampHighlightData3.filter(function(eachDayRamp) {
			return (eachDayRamp["date"] ==  developedTimeBoatRamps);
		});
		onlyBoatRampIds3 = [];
		filteredDataForRamps3.forEach(function(eachElement){
			onlyBoatRampIds3.push(parseInt(eachElement.boatRampId));
		});
		onlyBoatRampIds3 = onlyBoatRampIds3.filter(function(elem, index, self) {
			return index == self.indexOf(elem);
		});
		onlyBoatRampIds3.sort();
	}
	
	function simulateSpill3(){
//		//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
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
		
		
		//drawHeatMap3();

	}


});


sliderSvgOverlay3.addTo(map3);



sliderSvgOverlay4 = L.d3SvgOverlay(function(sel, proj){
	$("#spillTypeSelector").change(function () {
		//filterOilStatusWise();
		simulateSpill4();
	});


	$('#cleanUpSelector4').click(function() {
		if($('#cleanUpSelector4_95').is(':checked')) {
			// alert("95 is checked");
			//dataWithLatLng = dataCut95;
			finalFileMap4 = dataMap95;
			//createMapForEachDay();
			boatRampHighlightData4 = boatRampHighlightDataCut95;
			getCurrentDateHighlightedRamps();
			simulateSpill4();
		} else if ($('#cleanUpSelector4_90').is(':checked')) {
			// alert("90 is checked");
		//	dataWithLatLng = dataCut90;
			finalFileMap4 = dataMap90;
			boatRampHighlightData4 = boatRampHighlightDataCut90;
			getCurrentDateHighlightedRamps();
			simulateSpill4();
		} else if ($('#cleanUpSelector4_85').is(':checked')) {
			// alert("85 is checked");
			//dataWithLatLng = dataCut85;
			finalFileMap4 = dataMap85;
			boatRampHighlightData4 = boatRampHighlightDataCut85;
			getCurrentDateHighlightedRamps();
			simulateSpill4();
		} else if ($('#cleanUpSelector4_80').is(':checked')) {
			// alert("80 is checked");
			//dataWithLatLng = dataCut80;
			finalFileMap4 = dataMap80;
			boatRampHighlightData4 = boatRampHighlightDataCut80;
			getCurrentDateHighlightedRamps();
			simulateSpill4();
		} else if ($('#cleanUpSelector4_75').is(':checked')) {
			// alert("75 is checked");
			//dataWithLatLng = dataCut75;
			finalFileMap4 = dataMap75;
			boatRampHighlightData4 = boatRampHighlightDataCut75;
			getCurrentDateHighlightedRamps();
			simulateSpill4();
		}
	});

	this.drawOilSpillCircles4 = function(){

	}


	this.drawBoatRampCircles4 = function(){
		d3.selectAll(".boatRampLocations_4").remove();
		scale_factor = Math.max((1 / Math.pow(2, map4.getZoom() - 13))/64, 0.0000002);
		sel.append('g')
		.attr('id','boatRampLocations4')
		.attr('class','boatRampLocations_4')
		.selectAll('image')
		.data(rampsJson).enter()
		.append('svg:image')
		.attr("xlink:href", function(d){if((onlyBoatRampIds4.indexOf(d.properties["ID"])) != -1){
			return "images/star-red.png";
		} else {
			return "images/star2.png";	    
		}   })
		.attr("width", (16* scale_factor).toString()+"px")
		.attr("height", (16 * scale_factor).toString()+"px")
		.style("cursor","default")
		// .attr('r', 11 * scale_factor)
		.attr('x',function(d){d.x = proj.latLngToLayerPoint(d.latLng).x; return  proj.latLngToLayerPoint(d.latLng).x;})
		.attr('y',function(d){d.y = proj.latLngToLayerPoint(d.latLng).y; return proj.latLngToLayerPoint(d.latLng).y;})
		.on("mouseover", handleMouseOver)
		.on("mouseout", handleMouseOut)

	}

	function handleMouseOver(d, i) {  
		d3.select(this).attr({
			r: 11 * scale_factor * 2
		});

		applyTooltipTransition(0.9);

		if(  (onlyBoatRampIds4.indexOf(d.properties["ID"])) != -1){
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

	if(canDraw){
		this.drawOilSpillCircles4();
		this.drawBoatRampCircles4();
		//filterOilStatusWise();
	}

	function applyTooltipTransition(newOpacity) {
		tooltip.transition()
		.duration(500)
		.style("opacity", newOpacity);
	}

	function getCurrentDateHighlightedRamps(){
		filteredDataForRamps4 = boatRampHighlightData4.filter(function(eachDayRamp) {
			return (eachDayRamp["date"] ==  developedTimeBoatRamps);
		});
		onlyBoatRampIds4 = [];
		filteredDataForRamps4.forEach(function(eachElement){
			onlyBoatRampIds.push(parseInt(eachElement.boatRampId));
		});
		onlyBoatRampIds4 = onlyBoatRampIds4.filter(function(elem, index, self) {
			return index == self.indexOf(elem);
		});
		onlyBoatRampIds4.sort();
	}
	
	function simulateSpill4(){
//		//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
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
		
		//drawHeatMap4();
		
		
		getCurrentDateHighlightedRamps();

	}


});


sliderSvgOverlay4.addTo(map4);

//////////////////////SLIDEROVERLAY ENDS/////////////////////
