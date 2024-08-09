import React from "react";

import DefaultHeader from './DefaultHeader'
import DefaultFooter from "./DefaultFooter";
import CardsInsights from "./CardsInsights";
import CardsChart from './CardsCharts';
import InitialBtnSelectPeriod from './InitialBtnSelectPeriod'
import InitialBtnSelectClass from "./InitialBtnSelectClass";
import { InitialChartLineProfitability } from "./InitialChartLineProfitability";

export default function InitialPageProfitability() {
    return (
        <>
            <DefaultHeader/>

            <CardsInsights
                title = "Patrimônio"
                subTitle = "R$ 8.479"
                description = "+20% nos últimos 12 meses"
            />

            <CardsInsights
                title = "Proventos"
                subTitle = "R$ 25,00"
                description = "+33% nos últimos 12 meses"
            />

            <CardsChart
                title = "Rentabilidade"
                insight1 = "R$ 170,00"
                insight2 = "+2,05%"
                btn1 = <InitialBtnSelectPeriod/>
                btn2 = <InitialBtnSelectClass/>
                chart= <InitialChartLineProfitability/>
            />


            <DefaultFooter/>
        </>
    )}
