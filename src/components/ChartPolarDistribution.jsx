import { PolarArea } from 'react-chartjs-2'
import {
    Chart as ChartJS,
    RadialLinearScale,
    ArcElement,
    Title,
    Tooltip,
    scales,
    elements,
    Ticks,
    } from 'chart.js';

import ChartDataLabels from 'chartjs-plugin-datalabels'
import { color } from 'chart.js/helpers';

    ChartJS.register(
        RadialLinearScale,
        ArcElement,
        Title,
        Tooltip,
        ChartDataLabels
    )

export const ChartPolarDistribution = () => {
    const DataChartPolarDistribution = {
        labels: [
            'Ações',
            'FIIs',
            'Renda Fixa',
            'Criptomoedas',
            'ETFs',
        ],
        datasets: [
            {   
                data: [2560, 1952, 1652, 1265, 1095],
                backgroundColor: [
                    '#000',
                    '#586f92',
                    '#0948a8',
                    '#7C7C7C',
                    '#2758c0',
                ],
                borderWidth: 5,
                borderColor: "#EAEAEA",
                borderRadius: 8,
                hoverBackgroundColor: "#EAEAEA",
                hoverBorderWidth: 5,
            },
        ],
    };
    const options = {
        responsive: true,
        scales: {
            r: {
                grid: {
                    display: false,
                },
                ticks: {
                    display: false,
                },
            }
        },
        elements: {
            line: {
                tension: 1,
            },
        },
        plugins: {
            legend: {
                display: true,
            },
            datalabels: {
                display: false,
            },
        },
    }
    return <PolarArea className="chartPolarDistribution" options={options} data={DataChartPolarDistribution} />
}