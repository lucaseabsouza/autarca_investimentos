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

export const ProfitsChartLineHistory = () => {
    const DataChartLineProfits = {
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
                label: "Profits",
                data: [30, 10, 12, 32, 31, 50, 30, 19, 35, 21, 38, 52],
                borderColor: "#27A9E1",
                tension: 0,
                fill: true,
                datalabels: {
                    color: "#d4d4d4",
                    backgroundColor: "#1b1b1b",
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
        scales: {
            y: {
                grid: {
                    display: true,
                },
                ticks: {
                    display: false,
                }
            },
            x: {
                grid: {
                    display: true,
                },
            },
        },
        layout: {
            padding: 20
        },
    };

    return <Line className='chartLines' options={options} data={DataChartLineProfits} />
}