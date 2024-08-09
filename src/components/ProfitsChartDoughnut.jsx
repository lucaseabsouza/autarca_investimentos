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
                    '#525252',
                ],
                borderWidth: 5,
                borderColor: "#161616",
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
                color: "#d4d4d4",
                font: {
                    size: 12,
                },
            },
            legend: {
                display: true,
                labels: {
                    color: "#d4d4d4",
                }
            },
        },
    }
    return <Doughnut className="chartdoughnutprofits" options={options} data={DataChartDoughnutProfits} />
}