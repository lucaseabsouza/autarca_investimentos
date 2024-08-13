import React from "react";

import DefaultHeader from './DefaultHeader'
import CardsChart from './CardsCharts';
import InitialBtnSelectYear from './InitialBtnSelectYear';
import InitialBtnSelectMonth from './InitialBtnSelectMonth'
import InitialBtnSelectClass from './InitialBtnSelectClass';
import { ProfitsChartLineHistory } from "./ProfitsChartLineHistory";
import {ProfitsChartDoughnut} from './ProfitsChartDoughnut'
import ProfitsTable from "./ProfitsTable";
import BtnScrollToTop from './BtnScrollToTop';
import DefaultFooter from "./DefaultFooter";

export default function ProfitsPage() {
    return (
        <>
            <DefaultHeader/>
            <CardsChart
                title = "Proventos"
                insight1 = "R$ 260"
                btn1 = <InitialBtnSelectYear/>
                btn2 = <InitialBtnSelectMonth/>
                btn3 = <InitialBtnSelectClass/>
                chart=<ProfitsChartLineHistory/>
            />
            <CardsChart
                title = "Proventos x Class"
                chart=<ProfitsChartDoughnut/>
            />
            <ProfitsTable/>

            <BtnScrollToTop/>

            <DefaultFooter/>
        </>
    )
}