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
        },
        scales: {
            y: {
                grid: {
                    display: false,
                },
                ticks: {
                    display: false,
                }
            },
            x: {
                grid: {
                    display: false,
                },
            },
        },
    };

    return <Line className='chartLineProfitability' options={options} data={DataChartLineProfitability} />
}