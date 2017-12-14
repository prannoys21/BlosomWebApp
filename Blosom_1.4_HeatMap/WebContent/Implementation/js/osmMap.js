var dataWithLatLng=[];
var sliderSvgOverlay;
var mapWidth = 50, mapHeight = 50;
var circleRadius = 2;
var projection = d3.geo.albersUsa().translate([mapWidth / 2, mapHeight / 2]);
var svgMap = d3.select("#svgmap").attr("width", mapWidth).attr("height", mapHeight);
var formatDate = d3.time.format("%d %b %H:%M %p");
var formatDateForTicks = d3.time.format("%d %b");
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
var filteredDataForRamps = [];
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
var heatMapLayerGlobal = L.heatLayer();
var multipleLayerControl;
var heatMapOn = true;
var cleanedDataObtained;
var geojsonMarkerOptions;
var rampsJson = [];
var developedTimeBoatRamps;
var developedTimeBoatRampsMonth;
var boatRampHighlightData;
var boatRampColor;
var onlyBoatRampIds = [];
var toolTipBoatRampColor;

$(document).ready(function(){
	
	//1
	loadEntireDataSetInitially();
	
	//2
	shp("data/data2.zip").then(function(geojson){
		//rampsJson = geojson;
		rampsJson = geojson.features.map(function(d){
			    d.latLng = [+d.geometry["coordinates"][1],+d.geometry["coordinates"][0]];//CHANGE TO Latitude and Longitude (only L caps) if reading from CSV output of BLOSOM
			    return d;
			  });

	});
	
	//2
	$( "#heatmapToggle" ).click(function() {
		if(heatMapOn){
			$('.leaflet-heatmap-layer').hide();
			heatMapOn = false;
		} else {
			$('.leaflet-heatmap-layer').show();
			heatMapOn = true;
		}
		  
		});
	//3
	///boatRamp highlighting start
	d3.csv("data/ResultBoatRampDayWise.csv", function (data) {
			boatRampHighlightData = data;
			console.log(boatRampHighlightData);
			
		//for the info display of the dots
		});
	///boatRamp highlighting end
	
	
	//4
	
});



function loadEntireDataSetInitially(){
 	d3.csv("data/finalFile3.csv", function (data) {
 		console.log(data);
 		dataWithLatLng = data.map(function(d){
 		    d.latLng = [+d.LATITUDE,+d.LONGITUDE];//CHANGE TO Latitude and Longitude (only L caps) if reading from CSV output of BLOSOM
 		    return d;
 		  });
 		
 	});
 }




var osmTiles = L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png'/*, {attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'}*/),
thunderForest = L.tileLayer('https://{s}.tile.thunderforest.com/outdoors/{z}/{x}/{y}.png?apikey=7c352c8ff1244dd8b732e349e0b0fe8d'/*, {attribution: 'Maps &copy; <a href="http://www.thunderforest.com">Thunderforest</a>, Data &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap contributors</a>'}*/);

/*heat = L.heatLayer(finalHeatMapCoords, {radius:20,blur:25,maxZoom:5,gradient:{0.143:'#feedde',0.285:'#fdd0a2',0.43:'#fdae6b',0.57:'#fd8d3c',0.71:'#f16913',0.86:'#d94801',1.0:'#8c2d04'}});*/
multipleLayerControl  = new L.layerGroup();

/*heat.addTo(multipleLayerControl);*/
var boatRampsLayer  = new L.layerGroup();
var cleanedDataLayer  = new L.layerGroup();
var divSliderDropDown  = new L.layerGroup();

//map declaration
var map = L.map('osmMap', {
    center: [29.1408716,-87.8464683],
    zoom: 8,
    renderer: L.svg(),
    layers: [osmTiles, thunderForest, multipleLayerControl, boatRampsLayer, divSliderDropDown, cleanedDataLayer]
  });



//makes sure dots don't get bigger
var scale_factor = Math.max((1 / Math.pow(2, map.getZoom() - 13))/64, 0.25);
var zoomLevel=map.getZoom();

//legend for the heatmap
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



var starIcon = L.icon({
    iconUrl: 'images/star2.png',
    iconSize:     [16, 16], // size of the icon
    shadowSize:   [0, 0], // size of the shadow
    iconAnchor:   [0, 0], // point of the icon which will correspond to marker's location
    shadowAnchor: [0, 0],  // the same for the shadow
    popupAnchor:  [0, 0] // point from which the popup should open relative to the iconAnchor
});
//data to display boat ramps data






function onEachFeature(feature, layer) {
    // does this feature have a property named popupContent?
    if (feature.properties && feature.properties.ID && feature.properties.EBCap && feature.properties.VesCap) {
        layer.bindPopup('ID: ' + feature.properties.ID + '<br/>' + 'EB Cap: ' + feature.properties.EBCap + '<br/>' + 'Ves Cap: ' + feature.properties.VesCap);
    }
}

function onEachFeatureCleanedData(feature, layer) {
    // does this feature have a property named popupContent?
    if (feature.properties && feature.properties.PARCEL_NUM && feature.properties.STATUS /*&& feature.properties.CLEANED*/) {
        layer.bindPopup('<b>Parcel Num:</b> ' + feature.properties.PARCEL_NUM + '<br/>' + '<b>Status:</b> ' + feature.properties.STATUS + '<br/>' + '<b>Cleaned:</b> ' + feature.properties.CLEANED);
    }
}

/*var tooltip = d3.select("#divslider")
.append("div")
.attr("id", "divTooltip")
.style("opacity", 0);*/

var tooltip = d3.select("#divslider").append("div").attr("id", "divTooltip").style("opacity", 0);


tooltip: {
    followPointer: true
};

sliderSvgOverlay = L.d3SvgOverlay(function(sel, proj){
	 $("#spillTypeSelector").change(function () {
	 simulateSpill();
 });

 
 
 drawOilSpillCircles();
 drawBoatRampCircles();
 
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
var uniqueDateStart = "2015-Feb-01 00:00:00";
var uniqueDateEnd = "2015-Feb-06 23:59:59";



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
 
 function drawOilSpillCircles(){
	 d3.selectAll("circle").remove();
	 scale_factor = Math.max((1 / Math.pow(2, map.getZoom() - 13))/64, 0.0000002);
	 sel.append('g')
	.attr('id','spillParticles')
	.selectAll('circle')
	.data(filteredDataForPanel1).enter()
    .append('circle')
    .attr('r', 4 * scale_factor)
    .attr('cx',function(d){return  proj.latLngToLayerPoint(d.latLng).x;})
    .attr('cy',function(d){return proj.latLngToLayerPoint(d.latLng).y;})
    .attr('fill',function (d){
    	if(d["CLEANED"] == 1){
    		return "red";
    	} else {
    	if(d["Status"] == "water column"){
    		return "brown";
    	} else if(d["Status"] == "sunk"){
    		return "blue";
    	} else if(d["Status"] == "surfaced"){
    		return "black";
	    	}
    	
	    }
    	});
     }
 
 
 function drawBoatRampCircles(){
	 d3.selectAll("circle").remove();
	 scale_factor = Math.max((1 / Math.pow(2, map.getZoom() - 13))/64, 0.0000002);
	 sel.append('g')
	.attr('id','spillParticles')
	.selectAll('circle')
	.data(rampsJson).enter()
    .append('circle')
    .attr('r', 11 * scale_factor)
    .attr('cx',function(d){d.x = proj.latLngToLayerPoint(d.latLng).x; return  proj.latLngToLayerPoint(d.latLng).x;})
    .attr('cy',function(d){d.y = proj.latLngToLayerPoint(d.latLng).y; return proj.latLngToLayerPoint(d.latLng).y;})
    .attr('fill', function (d){
    	if(  (onlyBoatRampIds.indexOf(d.properties["ID"])) != -1){
    		//toolTipBoatRampColor = "red";
    		return "red";
    		} else {
    		//toolTipBoatRampColor = "forestgreen";
    		return "forestgreen";	    
    		}   
    	}) 
      .on("mouseover", handleMouseOver)
      .on("mouseout", handleMouseOut)
      .on("mousemove", handleMouseMove)
     /*.on("mouseover", function() { 
    	 d3.select(this).append("text")*/
    	 .text(function(d) {return d.properties["ID"];})
     /*})*/
     }
 
 function handleMouseOver(d, i) {  // Add interactivity

     // Use D3 to select element, change color and size
     d3.select(this).attr({
       //fill: "orange",
       r: 11 * scale_factor * 2
     });

     // Specify where to put label of text
     /*sel.append("text")
     .attr({
        id: "t" + d.x + "-" + d.y + "-" + i,  // Create an id for text so we can select it later for removing on mouseout
         x: function() { return proj.latLngToLayerPoint(d.latLng).x - 9; },
         y: function() { return proj.latLngToLayerPoint(d.latLng).y - 10; }
     })
     .attr("font-size",40 * scale_factor)
     .text(function() {
       return ["Boat Ramp Id: " + d.properties["ID"]];  // Value of the text
     });*/
     applyTooltipTransition(0.9);
     /*tooltip.attr({
         x: function() { return proj.latLngToLayerPoint(d.latLng).x - 9; },
         y: function() { return proj.latLngToLayerPoint(d.latLng).y - 10; }
     })*/
     /*sel.append(tooltip)*/
 	if(  (onlyBoatRampIds.indexOf(d.properties["ID"])) != -1){
		toolTipBoatRampColor = "red";
		} else {
		toolTipBoatRampColor = "forestgreen";
		} 
     
 /*    console.log(d.x,d.y)
     var coordinates = [0, 0];
coordinates = d3.mouse(this);
//var x = coordinates[0];
//var y = coordinates[1];
*/
 	var x =  d3.event.clientX, y =d3.event.clientY;
     tooltip.attr("transform","translate(0)")
     tooltip.html('<div id="divTooltipBoatRampId" style="color:'+toolTipBoatRampColor+'">' + d.properties["ID"] + '</div><div id="divTooltipBoatRampDetails"><table>' + 
             '<tr class="trTooltip"><td class="tdFirstTooltip">Exclusion Boom Capacity:</td><td class="tdSecondTooltip">' + d.properties["EBCap"] + '</td></tr>' + 
             '<tr class="trTooltip"><td class="tdFirstTooltip">Vessel Capacity:</td><td class="tdSecondTooltip">' + d.properties["VesCap"] + '</td></tr>')
             .style("left", (x - (475 * 1)) + "px")
             .style("top", ( y - (955 * 1)) + "px");
              //.style("left", (proj.latLngToLayerPoint(d.latLng).x - (480 * 1)) + "px")
               // .style("top", ( proj.latLngToLayerPoint(d.latLng).y - (780 * 1)) + "px");
     
     /*sel.append(tooltip)*/
     
   }

function handleMouseOut(d, i) {
     // Use D3 to select element, change color back to normal
     d3.select(this).attr({
       //fill: "black",
       r: 11 * scale_factor
     });

     applyTooltipTransition(0)
     // Select text by id and then remove
     //d3.select("#t" + d.x + "-" + d.y + "-" + i).remove();  // Remove text location
   }

function handleMouseMove(d,i){
	var mouseCoords = d3.mouse(tooltip.node().parentElement);
	tooltip
     .attr("transform", "translate("
           + (mouseCoords[0]-10) + "," 
           + (mouseCoords[1] - 10) + ")");
}

function applyTooltipTransition(newOpacity) {
    tooltip.transition()
        .duration(500)
        .style("opacity", newOpacity);
}
 
 function getCurrentDateHighlightedRamps(){
	 filteredDataForRamps = boatRampHighlightData.filter(function(eachDayRamp) {
   		return (eachDayRamp["date"] ==  developedTimeBoatRamps);
	});
	 onlyBoatRampIds = [];
		 filteredDataForRamps.forEach(function(eachElement){
			onlyBoatRampIds.push(parseInt(eachElement.boatRampId));
		 });
		 onlyBoatRampIds = onlyBoatRampIds.filter(function(elem, index, self) {
		        return index == self.indexOf(elem);
		    });
		 onlyBoatRampIds.sort();
}

	
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
     developedTime = currentYearSelected +"-"+ currentMonthNameSelected+"-"+ currentDaySelected;/* +" "+ currentHoursSelected;*/
     
     //for boatRamps
     if((new Date(selectedDateValue).getMonth()+1)<10){
 		developedTimeBoatRampsMonth = "0" + (new Date(selectedDateValue).getMonth()+1);
 	}
 	developedTimeBoatRamps = currentYearSelected +"-"+ developedTimeBoatRampsMonth +"-"+ currentDaySelected;/* +" "+ currentHoursSelected;*/
     //forBoatRampsEnd
     filteredDataForPanel1 = dataWithLatLng.filter(function(rowForMonthAndYear) {
     	if(currentSpillType == "water column" || currentSpillType == "surfaced" || currentSpillType == "sunk"){
         return ((rowForMonthAndYear["CURR_TIME"].substring(0,11) ==  developedTime) && (rowForMonthAndYear["STATUS"] == currentSpillType)); //REPLACE CURR_TIME with Current Time if reading from BLOSOM's CSV output
     	} else if(currentSpillType == "all" || currentSpillType == "select") {
     		return (rowForMonthAndYear["CURR_TIME"].substring(0,11) ==  developedTime);
		     	}
		     });
     drawOilSpillCircles();
     drawBoatRampCircles();
     getCurrentDateHighlightedRamps();
     
     if(heatMapOn){
	     //heatMap Code
	     heatMapLatLng = [];
	     map.removeLayer(heatMapLayerGlobal)
	     //map.removeLayer(multipleLayerControl)
	     filteredDataForPanel1.forEach(function(eachRow){
	    	 heatMapLatLng.push(eachRow['latLng'])
	     });
	     finalHeatMapCoords = heatMapLatLng;
	     heatMapLayerGlobal = L.heatLayer(finalHeatMapCoords, {radius:10,blur:15,maxZoom:5,gradient:{0.143:'#feedde',0.285:'#fdd0a2',0.43:'#fdae6b',0.57:'#fd8d3c',0.71:'#f16913',0.86:'#d94801',1.0:'#8c2d04'}}).addTo(multipleLayerControl);
	     heatMapLayerGlobal.addTo(multipleLayerControl);
     }
     //boatRampsStart
     //map.removeLayer(boatRampsLayer);
     //boatRampsEnd
 }
 	});

 sliderSvgOverlay.addTo(map); 
 

 var baseLayers = {
	        "Default OSM": osmTiles,
	        "Thunderforest": thunderForest
	      };

	var groupedOverlays = {
	          /*"HeatMap": multipleLayerControl,*/
	          "Boat Ramps": boatRampsLayer,
	          "CleanedData": cleanedDataLayer
	      };

	L.control.layers(baseLayers, groupedOverlays).addTo(map); 	
 
///////////////////////////////////////////////////////////////////////////////////////////////////////////
