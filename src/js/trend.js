// variable that represents the trend (created using the 'flot' jQuery plug-in)
var flotTrend;

// sample data that can be used for testing the plot functionality
// label: caption
// data: array of (x,y) arrays ( [[x1,y1],[x2,y2],... )
var trendData = [
         {label: "Tank 1", data: []},
         {label: "Tank 2", data: []},
         {label: "Tank 3", data: []},
         ];

// sample options for displaying the trend
var trendOptions = {
		yaxis: { min: 0, max: 280 },
		xaxis: {min: 0, max: 100},
		legend: {position: "nw"}
};

function initTrend(){
	flotTrend = $.plot('#trend', trendData, trendOptions);
}

function updateTrend(data){ /* Put your code here... (Aufgabe 3) */
	for(var u = 0; u < 3; u++) {
		trendData[u].data.unshift([-1,data['level'+(u+1)]]);
		if(trendData[u].data.length > 100) {
			trendData[u].data.pop();
		}
		for(var i = 0; i < trendData[u].data.length; i++) {
			trendData[u].data[i][0] = trendData[u].data[i][0]+1;
		}
	}
	flotTrend.setData(trendData);
	flotTrend.draw();
}