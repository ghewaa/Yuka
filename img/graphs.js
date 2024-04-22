function displayGraph() {
    console.log("displayGraph() function called.");

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


    // Here you can dynamically generate the URLs for the graph images based on the selected parameters
    var graphURL1 = 'img/graph_' + selectedCategory1 + '_' + selectedYear1 + '_' + selectedPresence1 + '_' + selectedOutcome1 + '_' + selectedScans1 + '_' + selectedWeight1 + '.png'; // Adjust the URL as needed

    console.log("Generated graph URL:", graphURL1);


    var graphContainer = document.getElementById('graphContainer');
    // Clear previous graphs if any
    graphContainer.innerHTML = '';

     // Create img element for the selected graph
     var imgElement1 = document.createElement('img');
     imgElement1.onload = function() {
         // Image loaded successfully
         console.log("Graph image loaded successfully.");
         graphContainer.appendChild(imgElement1);
     };
     imgElement1.onerror = function() {
         // Error loading image
         console.error("Error loading graph image:", graphURL1);
     };
     imgElement1.src = graphURL1;
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
