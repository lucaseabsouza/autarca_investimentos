import { DataChartLineProfitability } from './DataChartLineProfitability'
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
    )

export const ChartLineProfitability = () => {
    const options ={
        resposive: true,
        plugins: {
            legend: {
                display: false,
            },
            title: {
                display: true,
                text: "Rentabilidade",
                padding: 20
            },
        },
        scales: {
            y: {
                grid: {
                    display: false,
                },
                ticks: {
                    display: false
                }
            },
            x: {
                grid: {
                    display: false
                },
            },
        },
    };

    return <Line options={options} data={DataChartLineProfitability} />
}