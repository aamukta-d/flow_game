import { Chart, registerables } from "chart.js";

Chart.register(...registerables)

function makeChart(yValues){
    const chart = document.getElementById("myChart")
    
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


export {makeChart}