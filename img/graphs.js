// Get values for the first graph
var selectedCategory1 = document.getElementById('categories1').value;
var selectedYear1 = document.getElementById('year1').value;
var selectedPresence1 = document.getElementById('presence1').value;
var selectedOutcome1 = document.getElementById('outcome1').value;
var selectedScans1 = document.getElementById('scans1').value;
var selectedWeight1 = document.getElementById('weight1').value;

// Get values for the second graph (if available)
var selectedCategory2 = "";
var selectedYear2 = "";
var selectedPresence2 = "";
var selectedOutcome2 = "";
var selectedScans2 = "";
var selectedWeight2 = "";
if (!document.getElementById('secondGraphParams').classList.contains('hidden')) {
    selectedCategory2 = document.getElementById('categories2').value;
    selectedYear2 = document.getElementById('year2').value;
    selectedPresence2 = document.getElementById('presence2').value;
    selectedOutcome2 = document.getElementById('outcome2').value;
    selectedScans2 = document.getElementById('scans2').value;
    selectedWeight2 = document.getElementById('weight2').value;
}

// Get values for the third graph (if available)
var selectedCategory3 = "";
var selectedYear3 = "";
var selectedPresence3 = "";
var selectedOutcome3 = "";
var selectedScans3 = "";
var selectedWeight3 = "";
if (!document.getElementById('thirdGraphParams').classList.contains('hidden')) {
    selectedCategory3 = document.getElementById('categories3').value;
    selectedYear3 = document.getElementById('year3').value;
    selectedPresence3 = document.getElementById('presence3').value;
    selectedOutcome3 = document.getElementById('outcome3').value;
    selectedScans3 = document.getElementById('scans3').value;
    selectedWeight3 = document.getElementById('weight3').value;
}


function displayGraph() {
    console.log("displayGraph() function called.");


    // Load CSV file using fetch
    fetch('img/train.csv')
        .then(response => response.text())
        .then(data => {
            // Parse CSV data
            var rows = data.split('\n');
            var xValues = [];
            var yValues = [];

            // Parse CSV rows
            for (var i = 1; i < rows.length; i++) { // Start from 1 to skip header
                var cols = rows[i].split(',');
                var x = parseFloat(cols[0]);
                var y = parseFloat(cols[1]);
                xValues.push(x);
                yValues.push(y);
            }

            // Filter data based on selected parameters
            var filteredXValues = [];
            var filteredYValues = [];
            for (var i = 0; i < xValues.length; i++) {
                // Apply filtering logic based on selected parameters
                if (selectedCategory1 === 'All Food Products' && selectedYear1 === '2018' && selectedPresence1 === 'Only in 2018' && selectedOutcome1 === 'Yuka Grade' && selectedScans1 === 'All' && selectedWeight1 === 'No weight' ){
                    filteredXValues.push(xValues[i]);
                    filteredYValues.push(yValues[i]);
                }
            }

             // Plot the filtered data
             plotGraph(yValues,xValues);
           
        })
        .catch(error => {
            console.error('Error fetching CSV file:', error);
        });
}

function plotGraph(xValues, yValues) {
    var canvas = document.getElementById('graphsCanvas');
    console.log("Canvas element:", canvas);
    var ctx = canvas.getContext('2d');


    // Destroy existing Chart instance if it exists
    if (window.myChart) {
        window.myChart.destroy();
    }

    // Create new Chart instance
    window.myChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: xValues,
            datasets: [{
                label: 'My Dataset',
                data: yValues,
                borderColor: 'rgb(75, 192, 192)',
                tension: 0.1
            }]
        },
        options: {
            scales: {
                x: {
                    type: 'linear'
                }
            }
        }
    });
}




function addSecondGraph() {
    // Display the parameters for the second graph
   var secondGraphParams = document.getElementById('secondGraphParams');
   secondGraphParams.classList.remove('hidden');
}

function addThirdGraph() {


    // Display the parameters for the third graph
   var thirdGraphParams = document.getElementById('thirdGraphParams');
   thirdGraphParams.classList.remove('hidden');
}

function toggleSecondGraph() {
   var secondGraphParams = document.getElementById('secondGraphParams');
   var thirdGraphParams = document.getElementById('thirdGraphParams');

   if (graphContainer) {
       graphContainer.classList.add('hidden');
   }

   if (secondGraphParams.classList.contains('hidden')) {
       secondGraphParams.classList.remove('hidden');
   } else if (thirdGraphParams.classList.contains('hidden')) {
       thirdGraphParams.classList.remove('hidden');
   }
}
