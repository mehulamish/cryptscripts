     // Array of student marks
        const marks = [85, 92, 78, 90, 88, 95];

        // Get the canvas element
        const marksCanvas = document.getElementById('marksChart').getContext('2d');

        // Create the chart
        new Chart(marksCanvas, {
            type: 'pie',
            data: {
                labels: ['Mark 1', 'Mark 2', 'Mark 3', 'Mark 4', 'Mark 5', 'Mark 6'],
                datasets: [{
                    label: 'Student Marks',
                    data: marks,
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.6)',
                        'rgba(54, 162, 235, 0.6)',
                        'rgba(255, 206, 86, 0.6)',
                        'rgba(75, 192, 192, 0.6)',
                        'rgba(153, 102, 255, 0.6)',
                        'rgba(255, 159, 64, 0.6)'
                    ],
                    borderWidth: 1
                }]
            },
            options: {
                responsive: true,
                title: {
                    display: true,
                    text: 'Student Marks Distribution'
                }
            }
        });

        // Get the canvas element
        const graphCanvas = document.getElementById('barGraph').getContext('2d');

        // Create the graph
        new Chart(graphCanvas, {
            type: 'bar',
            data: {
                labels: ['Mark 1', 'Mark 2', 'Mark 3', 'Mark 4', 'Mark 5', 'Mark 6'],
                datasets: [{
                    label: 'Student Marks',
                    data: marks,
                    backgroundColor: 'rgba(75, 192, 192, 0.6)',
                    borderWidth: 1
                }]
            },
            options: {
                responsive: true,
                scales: {
                    y: {
                        beginAtZero: true
                    }
                },
                title: {
                    display: true,
                    text: 'Student Marks'
                }
            }
        });

// Student scores
const scores = [85, 92, 78, 90, 88, 95];

// Calculate class average
const calculateAverage = (scores) => {
    const sum = scores.reduce((total, score) => total + score, 0);
    return sum / scores.length;
};

// Find highest score
const findHighest = (scores) => {
    return Math.max(...scores);
};

// Find lowest score
const findLowest = (scores) => {
    return Math.min(...scores);
};

// Display statistics on the webpage
const displayStatistics = () => {
    const averageElement = document.getElementById('average');
    const highestElement = document.getElementById('highest');
    const lowestElement = document.getElementById('lowest');

    const average = calculateAverage(scores);
    const highest = findHighest(scores);
    const lowest = findLowest(scores);

    averageElement.textContent += average.toFixed(2);
    highestElement.textContent += highest;
    lowestElement.textContent += lowest;
};

// Call the function to display statistics
       