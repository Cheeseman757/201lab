'use strict';

let canvasElem = document.getElementById('chart')
'use strict';

class AppState {
    constructor() {
        this.allProducts = [];
    }

    // Example method to load vote data from localStorage
    loadVoteData() {
        const storedData = localStorage.getItem('voteData'); // Assume 'voteData' is the key for your data in localStorage
        if (storedData) {
            this.allProducts = JSON.parse(storedData);
        }
    }
}

function renderChart() {
    // Instantiate a new AppState
    let appState = new AppState();
    
    // Use a method on that AppState to load vote data from localStorage.
    appState.loadVoteData();
    
    // Create a data object for Chart.js using your AppState's allProducts array.
    // Assuming each product has a 'name' and a 'voteCount' property
  
    const data = {
        labels: appState.allProducts.map(product => product.name),
        datasets: [{
            label: 'Votes',
            data: appState.allProducts.map(product => product.voteCount),
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)', // Example background color
                'rgba(54, 162, 235, 0.2)', // You can add more colors as needed
                // Add more colors for each product
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)', // Example border color
                'rgba(54, 162, 235, 1)', // You can add more colors as needed
                // Add more border colors for each product
            ],
            borderWidth: 1
        }]
    };

    // Combine the data object with configuration information for Chart.js type, colors, etc
    const config = {
        type: 'bar', // You can change the type of chart here (e.g., 'line', 'pie', etc.)
        data: data,
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    };

    // Call Chart.js with the configuration and the canvasElem
    let canvasElem = document.getElementById('chart');
    if (canvasElem) {
        new Chart(canvasElem, config);
    }
}

// Assuming you want to call renderChart once the DOM is fully loaded
document.addEventListener('DOMContentLoaded', renderChart);









  
//* TODO:
 * - Instantiate a new AppState
 * - Use a method on that AppState to load vote data from localStorage.
 * - Create a data object for chart.js using your AppState's allProducts array.
 * - Combine the data object with configuration information for chart.js type, colors, etc
 * - Call chart.js with the configuration and the canvasElem
 *
 */
function renderChart() {
}

renderChart();
