'use strict';

class AppState {
    constructor() {
        this.allProducts = [];
    }

    // Method to load vote data from localStorage
    loadVoteData() {
        const storedData = localStorage.getItem('voteData'); // 'voteData' is the key for your data in localStorage
        if (storedData) {
            this.allProducts = JSON.parse(storedData);
            // Ensure the data structure is correct: each product should have 'name' and 'voteCount' properties
        }
    }
}

function renderChart() {
    let appState = new AppState();
    
    // Load vote data from localStorage
    appState.loadVoteData();
    
    // Create a data object for Chart.js
    const data = {
        labels: appState.allProducts.map(product => product.name),
        datasets: [{
            label: 'Votes',
            data: appState.allProducts.map(product => product.voteCount),
            backgroundColor: 'rgba(54, 162, 235, 0.2)',
            borderColor: 'rgba(54, 162, 235, 1)',
            borderWidth: 1
        }]
    };

    const config = {
        type: 'bar', // Chart type
        data: data,
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    };

    let canvasElem = document.getElementById('chart');
    if (canvasElem) {
        new Chart(canvasElem, config);
    }
}

document.addEventListener('DOMContentLoaded', renderChart);
This script:
