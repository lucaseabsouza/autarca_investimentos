import React from "react";

import DefaultHeader from './DefaultHeader'
import CardsChart from './CardsCharts';
import InitialBtnSelectPeriod from './InitialBtnSelectPeriod';
import InitialBtnSelectClass from './InitialBtnSelectClass';
import { ProfitsChartLineHistory } from "./ProfitsChartLineHistory";
import {ProfitsChartDoughnut} from './ProfitsChartDoughnut'
import ProfitsTable from "./ProfitsTable";
import DefaultFooter from "./DefaultFooter";

export default function ProfitsPage() {
    return (
        <>
            <DefaultHeader/>
            <CardsChart
                title = "Proventos"
                insight1 = "R$ 260,38"
                btn1 = <InitialBtnSelectPeriod/>
                btn2 = <InitialBtnSelectClass/>
                chart=<ProfitsChartLineHistory/>
            />
            <CardsChart
                title = "Proventos x Class"
                chart=<ProfitsChartDoughnut/>
            />
            <ProfitsTable/>
            <DefaultFooter/>
        </>
    )
}