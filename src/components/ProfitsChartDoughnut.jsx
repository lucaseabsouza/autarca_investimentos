import { Doughnut } from 'react-chartjs-2'
import {
    Chart as ChartJS,
    ArcElement,
    Tooltip,
    Legend
    } from 'chart.js';

import ChartDataLabels from 'chartjs-plugin-datalabels'

    ChartJS.register(
        ArcElement,
        Tooltip,
        Legend,
        ChartDataLabels
    )

export const ProfitsChartDoughnut = () => {
    const DataChartDoughnutProfits = {
        labels: [
            'Ações',
            'FIIs',
        ],
        datasets: [
            {   
                data: [2560, 1952],
                backgroundColor: [
                    '#174ea1',
                    '#586f92',
                ],
                borderWidth: 5,
                borderColor: "#EAEAEA",
                borderRadius: 8,
                hoverBackgroundColor: "#EAEAEA",
                hoverBorderWidth: 5,
                spacing: 10
            },
        ],
    };
    const options = {
        responsive: true,
        plugins: {
            datalabels: {
                display: true,
                color: "#fff",
                font: {
                    size: 12,
                },
            },
        },
    }
    return <Doughnut className="chartdoughnutprofits" options={options} data={DataChartDoughnutProfits} />
}