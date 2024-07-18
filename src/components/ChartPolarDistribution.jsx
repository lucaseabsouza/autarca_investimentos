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
import { faL } from '@fortawesome/free-solid-svg-icons';

    ChartJS.register(
        RadialLinearScale,
        ArcElement,
        Title,
        Tooltip,
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
                label: 'Distribuição',
                data: [2560, 1952, 1652, 1265, 1095],
                backgroundColor: [
                    '#000',
                    '#11C561',
                    '#6F9D83',
                    '#7C7C7C',
                    '#017736',
                ],
                borderWidth: 10,
                borderColor: "#EAEAEA",
                borderRadius: 10,
                hoverBackgroundColor: "#EAEAEA",
                hoverBorderWidth: 10,
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
        },
    }
    return <PolarArea className="chartPolarDistribution" options={options} data={DataChartPolarDistribution} />
}