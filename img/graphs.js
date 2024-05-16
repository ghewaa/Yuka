var graphs = [];
var productsGraphContainer = document.getElementById('products-graph-container');
var allXValues = [];
var allYValues = [];
var allLabels = [];

window.onload = function() {
    addGraph();
};

function addGraph() {
    addGraphParameters();
}

function addGraphParameters() {
    const index = graphs.length;
    const graphContainer = document.createElement('div');
    graphContainer.classList.add('product-graph');
    graphContainer.innerHTML = `
    <h2>${index + 1} curve</h2>
    <div class="parameters">
        <label for="categories${index}">Categories:</label>
        <select id="categories${index}">
            <option value="allFood">All Food Products</option>
            <option value="allCosmetics">All Cosmetic Products</option>
            <option value="meat">Meat products</option>
            <option value="diary">Diary products</option>
            <option value="cereals">Cereals, biscuits and chocolates</option>
            <option value="beverages">Beverages</option>
        </select>
        <label for="year${index}">Year:</label>
        <select id="year${index}">
            <option value="2018">2018</option>
            <option value="2019">2019</option>
            <option value="2020">2020</option>
            <option value="2021">2021</option>
        </select>
        <label for="presence${index}">Presence:</label>
        <select id="presence${index}">
            <option value="only2018">Only in 2018</option>
            <option value="only2021">Only in 2021</option>
            <option value="both">In both datasets</option>
        </select>
        <label for="outcome${index}">Outcome:</label>
        <select id="outcome${index}">
            <option value="grade">Yuka Grade</option>
            <option value="nutriscore">Nutriscore</option>
        </select>
        <label for="scans${index}">Scans:</label>
        <select id="scans${index}">
            <option value="all">All</option>
            <option value="most">Most 50000 scanned products</option>
        </select>
        <label for="weight${index}">Weight:</label>
        <select id="weight${index}">
            <option value="no-weight">No weight</option>
            <option value="scan-weight">Nb of scans</option>
        </select>
    </div>
    `;
    productsGraphContainer.appendChild(graphContainer);
    graphs.push(graphContainer);
}

function renderAllCurves() {
    allXValues = [];
    allYValues = [];
    allLabels = [];
    for (let index = 0; index < graphs.length; index++) {
        const selectedCategory = document.getElementById('categories' + index).value;
        const selectedYear = document.getElementById('year' + index).value;
        const selectedPresence = document.getElementById('presence' + index).value;
        const selectedOutcome = document.getElementById('outcome' + index).value;
        const selectedScans = document.getElementById('scans' + index).value;
        const selectedWeight = document.getElementById('weight' + index).value;
        displayGraph(selectedCategory, selectedYear, selectedPresence, selectedOutcome, selectedScans, selectedWeight, index);
    }
}

function displayGraph(category, year, presence, outcome, scans, weight, index) {
    const filename = `img/csv-graphs/graph_${category}_${year}_${presence}_${outcome}_${scans}_${weight}.csv`;

    fetch(filename)
        .then(response => response.text())
        .then(data => {
            const rows = data.split('\n');
            const xValues = [];
            const yValues = [];

            for (let i = 1; i < rows.length; i++) {
                const cols = rows[i].split(',');
                const x = parseFloat(cols[0]);
                const y = parseFloat(cols[1]);
                xValues.push(y);
                yValues.push(x);
            }

            allXValues.push(xValues);
            allYValues.push(yValues);
            allLabels.push(`Curve ${index + 1}`);

            plotGraph(allXValues, allYValues, allLabels);
        })
        .catch(error => {
            console.error('Error fetching CSV file:', error);
        });
}

function plotGraph(xValuesArray, yValuesArray, labelsArray) {
    const canvas = document.getElementById('graphsCanvas');
    const ctx = canvas.getContext('2d');

    if (window.myChart) {
        window.myChart.destroy();
    }

    const datasets = xValuesArray.map((xValues, index) => ({
        label: labelsArray[index],
        data: xValues.map((x, i) => ({ x: x, y: yValuesArray[index][i] })),
        borderColor: `rgb(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)})`,
        tension: 0.1,
        fill: false
    }));

    window.myChart = new Chart(ctx, {
        type: 'line',
        data: {
            datasets: datasets
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
