
const form = document.getElementById('dataForm');



const inputDataArray = [];


form.addEventListener('submit', function (event) {
    event.preventDefault(); 
    const dataInput = document.getElementById('dataInput').value;
    inputDataArray.push(dataInput);
    
    document.getElementById('dataInput').value = '';

    
    updateChart(inputDataArray);
});

const ctx = document.getElementById('myChart').getContext('2d');

const myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: [],
        datasets: [{
            label: 'Data',
            data: [],
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

function updateChart(dataArray) {
    myChart.data.labels = dataArray.map((_, index) => `Data Point ${index + 1}`);
    myChart.data.datasets[0].data = dataArray;
    myChart.update();
}
