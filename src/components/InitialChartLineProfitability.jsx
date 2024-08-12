import { Line } from 'react-chartjs-2'
import {
    Chart as ChartJS, 
    CategoryScale, 
    LinearScale, 
    PointElement, 
    LineElement ,
    Title,
    Tooltip,
    Legend,
    plugins,
    Filler,
    layouts,
    } from 'chart.js';

import ChartDataLabels from 'chartjs-plugin-datalabels'

ChartJS.register(
    CategoryScale, 
    LinearScale, 
    PointElement, 
    LineElement ,
    Title,
    Tooltip,
    Legend,
    plugins,
    Filler,
    ChartDataLabels
    )

export const InitialChartLineProfitability = () => {
    const DataChartLineProfitability = {
        labels: [
            "1",
            "2",
            "3",
            "4",
            "5",
            "6",
            "7",
            "8",
            "9",
            "10",
            "11",
            "12",
        ],
        datasets: [
            {
                label: "Profitability",
                data: [20, 45, 10, 60, 35, 50, 100, 90, 40, 15, 30, 70],
                tension: 0,
                fill: true,
                borderColor: "#0948a8",
                datalabels: {
                    color: "#d4d4d4",
                    backgroundColor: "#023074",
                    borderRadius: 5,
                    clamp: true,
                }
            },
        ],
    };
    const options ={
        resposive: true,
        plugins: {
            legend: {
                display: false,
            },
            ChartDataLabels: {
            },
        },
        layout: {
            padding: 20
        },
    };

    return <Line className='chartLines' options={options} data={DataChartLineProfitability} />
}