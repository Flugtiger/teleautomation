// create a new process with visualization data
var myProcess = new process();

// This method initializes the visualization.
function initViz(){
	decorateTanks();
	initTrend();

	// initialize the process and start the simulation (sets start values)
	myProcess.init();
	myProcess.startSimulation();
	
}

// This method is used to reflect process data changes.
function updateViz(data){
	
	// Write the values to the console. Console can be viewed in
	// Firefox Strg + Shift + K or
	// Chrome Strg + Shift + J
	
	for(var i=1; i<4; i++) {
		document.getElementById('tank' + i).style.height = data['level'+i] + 'px';
		document.getElementById('tank' + i).style.top = 280 - data['level'+i] + 'px';
		if(data['level' + i + 'Low'] == true){
			document.getElementById('tank' + i + 'Low').style.background = 'rgb(0,64,128)';
		} else {
			document.getElementById('tank' + i + 'Low').style.background = '#FFFFFF';
		}
		if(data['level' + i + 'High'] == true){
			document.getElementById('tank' + i + 'High').style.background = 'rgb(0,64,128)';
		} else {
			document.getElementById('tank' + i + 'High').style.background = '#FFFFFF';
		}
		document.getElementById('tank' + i + 'Display').innerHTML = data['level' + i] + ' L';
	}
	updateTrend(data);	
}

// This method starts the visualization by setting the callback function.
function startViz(){ 
	myProcess.setCallback(updateViz);
}

// This method stops the visualization by removing the callback function.
function stopViz(){
	myProcess.setCallback(null);
}

// This method dynamically inserts images for the upper and lower level sensors.
function decorateTanks(){
	for (var i=1; i < 4; i++) {
		var sensorLow = document.createElement('div');
		var sensorHigh = document.createElement('div');
		sensorLow.className = 'sensor';
		sensorHigh.className = 'sensor';
		sensorLow.id = 'tank' + i + 'Low';
		sensorHigh.id = 'tank' + i + 'High';
		sensorLow.style.bottom = '50px';
		sensorHigh.style.bottom = '230px';
		document.getElementById('tank'+i).appendChild(sensorLow);
		document.getElementById('tank'+i).appendChild(sensorHigh);
	}
	for(var i=1; i<4; i++){
		var label = document.createElement('div');
		label.className = 'display';
		label.id = 'tank' + i + 'Display';
		document.getElementById('tank'+i).appendChild(label);
	}
}

function toggleVisibility(){ 
	var tankID = document.getElementById("tankSelector").value;
	var tank = document.getElementById(tankID);
	var button = document.getElementById('toggleButton');
	if(tank.style.visibility == '' || tank.style.visibility == 'visible')
		tank.style.visibility = 'hidden';
	else
		tank.style.visibility = 'visible';
	setToggleButtonCaption(tankID);
}

function setToggleButtonCaption(id){ 
	var button = document.getElementById('toggleButton');
	if(document.getElementById(id).style.visibility == 'hidden')
		button.innerHTML = "Show";
	else
		button.innerHTML = "Hide";
}

function checkSelection() {
	var from = $('#pumpFrom').val();
	var to = $('#pumpTo').val();
	
	console.log(from);
	console.log(to);
	if(from != to && from != 'From:' && to != 'To:') {
		$('#pumpButton').removeAttr('disabled');
	} else {
		$('#pumpButton').attr('disabled', 'disabled');
	}
}

function pumpOver() {
	var from = $('#pumpFrom').val();
	var to = $('#pumpTo').val();
	myProcess.setValues(from, to);
}

function stopPumping() {
	myProcess.setValues(0,0);
}