import React from "react";

import DefaultHeader from './DefaultHeader'
import DefaultFooter from "./DefaultFooter";
import CardsInsights from "./CardsInsights";
import CardsChart from './CardsCharts';
import InitialBtnSelectYear from './InitialBtnSelectYear'
import InitialBtnSelectMonth from './InitialBtnSelectMonth'
import InitialBtnSelectClass from "./InitialBtnSelectClass";
import { InitialChartLineProfitability } from "./InitialChartLineProfitability";
import BtnBackToTop from './BtnBackToTop';

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
                subTitle = "R$ 25"
                description = "+33% nos últimos 12 meses"
            />

            <CardsChart
                title = "Rentabilidade"
                insight1 = "R$ 170"
                insight2 = "+2%"
                btn1 = <InitialBtnSelectYear/>
                btn2 = <InitialBtnSelectMonth/>
                btn3 = <InitialBtnSelectClass/>
                chart= <InitialChartLineProfitability/>
            />

            <BtnBackToTop/>

            <DefaultFooter/>
        </>
    )}
