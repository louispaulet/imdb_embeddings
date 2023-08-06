// Function to load the JSON data from the file
function loadJSON(callback) {
    var xobj = new XMLHttpRequest();
    xobj.overrideMimeType("application/json");
    xobj.open('GET', 'plot_data.json', true);
    xobj.onreadystatechange = function () {
        if (xobj.readyState == 4 && xobj.status == "200") {
            callback(xobj.responseText);
        }
    };
    xobj.send(null);
}

// Function to render the plot using the loaded data
function renderPlot(plotData) {
    var parsedData = JSON.parse(JSON.parse(plotData));
    Plotly.newPlot('plotly-plot', parsedData.data, parsedData.layout);
}

// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function () {
    // Call the loadJSON function to load data and render the plot
    loadJSON(function (response) {
        renderPlot(response);
    });
});
