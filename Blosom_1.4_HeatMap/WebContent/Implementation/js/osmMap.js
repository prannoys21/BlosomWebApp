var dataWithLatLng=[];
var sliderSvgOverlay;
var mapWidth = 50, mapHeight = 50;
var circleRadius = 2;
var projection = d3.geo.albersUsa().translate([mapWidth / 2, mapHeight / 2]);
var svgMap = d3.select("#svgmap").attr("width", mapWidth).attr("height", mapHeight);
formatDate = d3.time.format("%d %b %H:%M %p");
formatDateForTicks = d3.time.format("%d %b");
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
var filteredDataForPanel2= [];
var circleColor;
var spillTypeFilterValue;
var currentSpillType;
var blackColor = "black"
var blueColor = "blue"
var brownColor = "brown"	
var sampleStufff;
var spillDropDownMap = {};
var firsTimeLoadSlider = true;
var heatMapLatLng = [];
var finalHeatMapCoords = [];
var heat;
var multipleLayerControl;

$(document).ready(function(){
	loadEntireDataSetInitially();
	// simulateSpill();
});
function loadEntireDataSetInitially(){
 	d3.csv("data/OilSpill4.csv", function (data) {
 		dataWithLatLng = data.map(function(d){
 		    d.latLng = [+d.Latitude,+d.Longitude];
 		    return d;
 		  });
 	});
 }



//var map = L.map('osmMap').setView([28.1408716,-88.8464683], 7);

var osmTiles = L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'}),
thunderForest = L.tileLayer('https://{s}.tile.thunderforest.com/outdoors/{z}/{x}/{y}.png?apikey=7c352c8ff1244dd8b732e349e0b0fe8d', {attribution: 'Maps &copy; <a href="http://www.thunderforest.com">Thunderforest</a>, Data &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap contributors</a>'});

heat = L.heatLayer(finalHeatMapCoords, {radius:20,blur:25,maxZoom:5,gradient:{0.143:'#feedde',0.285:'#fdd0a2',0.43:'#fdae6b',0.57:'#fd8d3c',0.71:'#f16913',0.86:'#d94801',1.0:'#8c2d04'}});
multipleLayerControl  = new L.layerGroup();

//heat.addTo(multipleLayerControl);
var boatRampsLayer  = new L.layerGroup();

var map = L.map('osmMap', {
    center: [29.1408716,-87.8464683],
    zoom: 8,
    layers: [osmTiles, thunderForest, multipleLayerControl, boatRampsLayer]
  });



var scale_factor = Math.max((1 / Math.pow(2, map.getZoom() - 13))/64, 0.25);
var zoomLevel=map.getZoom();


var legend = L.control({position: 'bottomright'});

legend.onAdd = function (map) {

    var div = L.DomUtil.create('div', 'info legend'),
        grades = [14, 28, 43, 57, 71, 86, 100],
        labels = ['(0-14)%','(14-28)%','(28-43)%','(43-57)%','(57-71)%','(71-86)%','(86-100)%'];

    // loop through our density intervals and generate a label with a colored square for each interval
    for (var i = 0; i < grades.length; i++) {
        div.innerHTML += '<i style="background:' + getColor(grades[i]) + '"></i> ' + (grades[i] ? labels[i] + '<br>' : '+');
    }
    return div;
};
legend.addTo(map);

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

shp("data/data2.zip").then(function(geojson){
	rampsJson = geojson;
	  var geojsonMarkerOptions = {
			    radius: 5,
			    fillColor: "#ff7800",
			    color: "#000",
			    weight: 1,
			    opacity: 1,
			    fillOpacity: 0.5
			};


		L.geoJson(rampsJson,{
		    pointToLayer: function(feature,latlng){
		      var marker = L.marker(latlng,geojsonMarkerOptions);
		      marker.bindPopup('<b>ID:</b> ' + feature.properties.ID + '<br/>' + '<b>EB Cap:</b> ' + feature.properties.EBCap + '<br/>' + '<b>Ves Cap:</b> ' + feature.properties.VesCap);
		      return marker;
		    	 return L.circleMarker(latlng, geojsonMarkerOptions);
		    },
		    onEachFeature: onEachFeature
		
		  }).addTo(boatRampsLayer); });
// L.control.layers({"OSM Tile layer": osmTiles}, {"SVG Layer":
// sliderSvgOverlay}).addTo(map);


function onEachFeature(feature, layer) {
    // does this feature have a property named popupContent?
    if (feature.properties && feature.properties.ID && feature.properties.EBCap && feature.properties.VesCap) {
        layer.bindPopup('ID: ' + feature.properties.ID + '<br/>' + 'EB Cap: ' + feature.properties.EBCap + '<br/>' + 'Ves Cap: ' + feature.properties.VesCap);
    }
}



sliderSvgOverlay = L.d3SvgOverlay(function(sel, proj){
	 $("#spillTypeSelector").change(function () {
	 simulateSpill();
 });

 function drawOilSpillCircles(){
	 d3.selectAll("circle").remove();
	 scale_factor = Math.max((1 / Math.pow(2, map.getZoom() - 13))/64, 0.0000002);
	 sel.append('g')
	.attr('id','spillParticles')
	.selectAll('circle')
	.data(filteredDataForPanel1).enter()
    .append('circle')
    .attr('r', 2 * scale_factor)
    .attr('cx',function(d){return  proj.latLngToLayerPoint(d.latLng).x;})
    .attr('cy',function(d){return proj.latLngToLayerPoint(d.latLng).y;})
    .attr('fill',function (d){
    	if(d["Status"] == "water column"){
    		return "brown";
    	} else if(d["Status"] == "sunk"){
    		return "blue";
    	} else if(d["Status"] == "surfaced"){
    		return "black";
	    	}
	    });
     }
 
 drawOilSpillCircles();
 if(firsTimeLoadSlider == true){
	 firsTimeLoadSlider = false;
 // slider start
 var sliderMargin = {
     top: 50,
     right: 50,
     bottom: 50,
     left: 50
 },
     sliderWidth = 760 - sliderMargin.left - sliderMargin.right,
     sliderHeight = 150 - sliderMargin.bottom - sliderMargin.top;

 var monthAndYear = [];

 // scale function
 var timeScale = d3.time.scale.utc()
 .domain([new Date("Mon Mar 2 2015 00:00:00 GMT-0700 (US Mountain Standard Time)"), new Date('Mon Mar 23 2015 00:59:00 GMT-0700 (US Mountain Standard Time)')])
 .range([0, sliderWidth])
 .clamp(true);

 // initial value
 var startValue = timeScale(new Date("Mon Mar 2 2015 00:00:00 GMT-0700 (US Mountain Standard Time)"));
 startingValue = new Date("Mon Mar 2 2015 00:00:00 GMT-0700 (US Mountain Standard Time)");
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

 /*
	 * svgSlider.append("g") .attr("class", "x axisOver") .attr("transform",
	 * "translate(0," + sliderHeight / 2 + ")") .call(d3.svg.axis()
	 * .scale(timeScale) .orient("bottom") .tickFormat(function(d) {return
	 * formatDateForTicks(d);}) .tickSize(3,2) .ticks(6) .tickPadding(12)
	 * //.tickValues([null, timeScale.domain()[1]])) //.attr("transform",
	 * "rotate(45)" ) .style("cursor","default");
	 */

 var brush = d3.svg.brush()
 .x(timeScale)
 .extent([startingValue, startingValue])
 .on("brush", brushed);

 var slider = svgSlider.append("g")
 .attr("class", "slider leaflet-bottom leaflet-control")
 .call(brush)
 .style("cursor","default");

 /* var sliderBar = svgSliderContainer.selectAll("body"); */

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
 .text(startingValue)
 .attr("transform", "translate(" + (-18) + " ," + (sliderHeight / 2 - 25) + ")");

 slider
     .call(brush.event);

 var xColumnName = "Year";
 var yColumnName = "Month";

 var oldDate = d3.min(monthAndYear);
 var latestDate = d3.max(monthAndYear);

 
 function brushed() {
     selectedDateValue = brush.extent()[0];

     if (d3.event.sourceEvent) { // not a programmatic event
     selectedDateValue = timeScale.invert(d3.mouse(this)[0]);
     brush.extent([selectedDateValue, selectedDateValue]);
     simulateSpill();
 }

 handle.attr("transform", "translate(" + timeScale(selectedDateValue) + ",0)");
 handle.select('text').text(formatDate(selectedDateValue));
 }

 }
 // slider end
	
 function simulateSpill(){
// //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
 	d3.selectAll("circle").remove();
 	currentSpillType = $('#spillTypeSelector').val();
 
     currentDateSelected = new Date(selectedDateValue);
     currentMonthSelected = (currentDateSelected.getUTCMonth() + 1).toString();
     currentYearSelected = (currentDateSelected.getUTCFullYear()).toString();
     currentDaySelected = (currentDateSelected.toString()).substr(8,2);
     currentHoursSelected = (currentDateSelected.getHours()).toString();
     currentMinutesSelected = (currentDateSelected.getUTCMinutes()).toString();
     currentSecondsSelected = (currentDateSelected.getUTCSeconds()).toString();
     currentMonthNameSelected = (currentDateSelected.toString()).substr(4,3);
    
     if(currentHoursSelected<10){
    	 currentHoursSelected = "0"+ currentHoursSelected;
     }
     if(currentMinutesSelected<10){
    	 currentMinutesSelected = "0"+ currentMinutesSelected;
     }
     developedTime = currentYearSelected +"-"+ currentMonthNameSelected+"-"+ currentDaySelected+" "+ currentHoursSelected;
     filteredDataForPanel1 = dataWithLatLng.filter(function(rowForMonthAndYear) {
     	if(currentSpillType == "water column" || currentSpillType == "surfaced" || currentSpillType == "sunk"){
         return (rowForMonthAndYear['Current Time'].substring(0,14) ==  developedTime) && (rowForMonthAndYear['Status'] == currentSpillType);
     	} else if(currentSpillType == "all" || currentSpillType == "select") {
     		return (rowForMonthAndYear['Current Time'].substring(0,14) ==  developedTime);
		     	}
		     });
     heatMapLatLng = [];
     map.removeLayer(heat)
     //map.removeLayer(multipleLayerControl)
     filteredDataForPanel1.forEach(function(eachRow){
    	 // heatMapLatLng[countForHeatMap] = eachRow.latLng
    	 heatMapLatLng.push(eachRow['latLng'])
     });
     drawOilSpillCircles();
     finalHeatMapCoords = heatMapLatLng;
     heat = L.heatLayer(finalHeatMapCoords, {radius:10,blur:15,maxZoom:5,gradient:{0.143:'#feedde',0.285:'#fdd0a2',0.43:'#fdae6b',0.57:'#fd8d3c',0.71:'#f16913',0.86:'#d94801',1.0:'#8c2d04'}}).addTo(multipleLayerControl);
		}
		
 	});
 sliderSvgOverlay.addTo(map); 
 

 var baseLayers = {
	        "Default OSM": osmTiles,
	        "Thunderforest": thunderForest
	      };

	var groupedOverlays = {
	          "HeatMap": heat,
	          "Boat Ramps": boatRampsLayer
	      };

	L.control.layers(baseLayers, groupedOverlays).addTo(map); 	
 
///////////////////////////////////////////////////////////////////////////////////////////////////////////
