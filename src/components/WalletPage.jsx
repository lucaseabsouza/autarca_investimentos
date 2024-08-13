import React from "react";

import DefaultHeader from './DefaultHeader';
import CardsInsights from "./CardsInsights";
import WalletTableAnalyze from "./WalletTableAnalyze";
import CardsChart from './CardsCharts';
import { WalletChartPolarDistribution } from "./WalletChartPolarDistribution";
import WalletTableClasses from "./WalletTableClasses";
import BtnScrollToTop from './BtnScrollToTop';
import DefaultFooter from "./DefaultFooter";

export default function WalletPage() {
    return (
        <>
            <DefaultHeader/>
            <CardsInsights
                title = "Rebalanceamento"
                subTitle = "Invista R$ 644 em ETFs"
                />
            <CardsChart
                title = "Distribuição"
                chart=<WalletChartPolarDistribution/>
            />
            <WalletTableClasses/>
            <WalletTableAnalyze/>
            <BtnScrollToTop/>
            <DefaultFooter/>
        </>
    )}