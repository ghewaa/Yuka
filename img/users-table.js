// JavaScript code to generate the table
document.addEventListener('DOMContentLoaded', function() {
    // Data for the table
    const userData = [
        ["Countries","2018", "2019", "2020", "2021", "Total"],
        ["Belgium", 6782, 472312, 266265, 161094, 908251],
        ["France", 4056603, 4317699, 2648943, 1903044, 13380982],
        ["Germany", 2755, 6614, 4528, 156829, 171039],
        ["Spain", 5867, 1929709, 1334085, 736421, 4006715],
        ["Switzerland", 7590, 186193, 130461, 143788, 469110],
        ["United States", 3224, 7724, 36591, 249763, 297800],
        ["Total", 4082821, 6920221, 4420873, 3350939, 19233897]
    ];

    // Function to generate the table
    function generateTable(data) {
        const tableDiv = document.getElementById("users-table");
        const table = document.createElement("table");
        table.classList.add("user-table");

        // Loop through each row of data
        data.forEach(function(rowData) {
            const row = document.createElement("tr");

            // Loop through each cell of the row
            rowData.forEach(function(cellData) {
                const cell = document.createElement("td");
                cell.textContent = cellData;
                row.appendChild(cell);
            });

            table.appendChild(row);
        });

        tableDiv.appendChild(table);
    }

    // Call the function to generate the table with the provided data
    generateTable(userData);
});

