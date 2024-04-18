function displayGraph() {
        var selectedCategory1 = document.getElementById('categories1').value;
        var selectedYear1 = document.getElementById('year1').value;
        var selectedCategory2 = document.getElementById('categories2').value;
        var selectedYear2 = document.getElementById('year2').value;
        var selectedCategory3 = document.getElementById('categories3').value;
        var selectedYear3 = document.getElementById('year3').value;

        // Here you can dynamically generate the URLs for the graph images based on the selected parameters
        var graphURL1 = 'img/graph_' + selectedCategory1 + '_' + selectedYear1 + '.png'; // Adjust the URL as needed
        var graphURL2 = 'img/graph_' + selectedCategory2 + '_' + selectedYear2 + '.png'; // Adjust the URL as needed
        var graphURL3 = 'img/graph_' + selectedCategory3 + '_' + selectedYear3 + '.png'; // Adjust the URL as needed

        var graphContainer = document.getElementById('graphContainer');
        // Clear previous graphs if any
        graphContainer.innerHTML = '';

        // Create img elements for the selected graphs
        var imgElement1 = document.createElement('img');
        imgElement1.src = graphURL1;
        graphContainer.appendChild(imgElement1);

        var imgElement2 = document.createElement('img');
        imgElement2.src = graphURL2;
        graphContainer.appendChild(imgElement2);

        var imgElement3 = document.createElement('img');
        imgElement3.src = graphURL3;
        graphContainer.appendChild(imgElement3);
    }

    function addSecondGraph() {
        var secondGraphParams = document.getElementById('secondGraphParams');
        secondGraphParams.classList.remove('hidden');
    }

    function addThirdGraph() {
        var thirdGraphParams = document.getElementById('thirdGraphParams');
        thirdGraphParams.classList.remove('hidden');
    }

    function displaySecondGraph() {
        var selectedCategory1 = document.getElementById('categories1').value;
        var selectedYear1 = document.getElementById('year1').value;
        var selectedCategory2 = document.getElementById('categories2').value;
        var selectedYear2 = document.getElementById('year2').value;

        // Here you can dynamically generate the URLs for the graph images based on the selected parameters
        var graphURL1 = 'img/graph_' + selectedCategory1 + '_' + selectedYear1 + '.png'; // Adjust the URL as needed
        var graphURL2 = 'img/graph_' + selectedCategory2 + '_' + selectedYear2 + '.png'; // Adjust the URL as needed

        var graphContainer = document.getElementById('graphContainer');
        // Clear previous graphs if any
        graphContainer.innerHTML = '';

        // Create img elements for the selected graphs
        var imgElement1 = document.createElement('img');
        imgElement1.src = graphURL1;
        graphContainer.appendChild(imgElement1);

        var imgElement2 = document.createElement('img');
        imgElement2.src = graphURL2;
        graphContainer.appendChild(imgElement2);
    }




    function toggleSecondGraph() {
        var secondGraphParams = document.getElementById('secondGraphParams');
        var thirdGraphParams = document.getElementById('thirdGraphParams');
    
        if (secondGraphParams.classList.contains('hidden')) {
            secondGraphParams.classList.remove('hidden');
        } else if (thirdGraphParams.classList.contains('hidden')) {
            thirdGraphParams.classList.remove('hidden');
        }
    }
    
    
