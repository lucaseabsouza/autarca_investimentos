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

export const ChartLineProfitability = () => {
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
    };

    return <Line className='chartLineProfitability' options={options} data={DataChartLineProfitability} />
}