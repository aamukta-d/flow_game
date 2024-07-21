import { Chart, registerables } from "chart.js";

Chart.register(...registerables)
let chart = ""

function makeChart(yValues){
    if (chart !== ""){
        removeData(chart)
        addData(chart, yValues)
    }
    else{
        chart = document.getElementById("myChart")
    
    new Chart(chart, {
        type: "line",
        data: {
          labels: [0,0,0,0,0,0,0,0],
          datasets: [{
            backgroundColor:"rgba(0,0,255,1.0)",
            borderColor: "rgba(0,0,255,0.1)",
            data: yValues
          }]
        },
        options:{
            scales: {
                x: {
                    ticks:{
                        display: false
                    }
    
                },
            },
            plugins: {
                legend: {
                  display: false
                }
            },
        },
    });
    }
        
}

function removeData(chart) {
    chart.data.datasets.forEach((dataset) => {
        dataset.data.pop();
    });
    chart.update();
}

function addData(chart, newData) {
    chart.data.datasets.forEach((dataset) => {
        dataset.data.push(newData);
    });
    chart.update();
}
 


export {makeChart}