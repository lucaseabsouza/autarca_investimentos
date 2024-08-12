import React from "react";

import DefaultHeader from './DefaultHeader';
import CardsInsights from "./CardsInsights";
import WalletTableAnalyze from "./WalletTableAnalyze";
import CardsChart from './CardsCharts';
import { WalletChartPolarDistribution } from "./WalletChartPolarDistribution";
import WalletTableClasses from "./WalletTableClasses";
import DefaultFooter from "./DefaultFooter";

export default function WalletPage() {
    return (
        <>
            <DefaultHeader/>
            <CardsInsights
                title = "Rebalanceamento"
                subTitle = "Invista R$ 644 em ETFs"
                />
            <WalletTableAnalyze/>
            <CardsChart
                title = "Distribuição"
                chart=<WalletChartPolarDistribution/>
            />
            <WalletTableClasses/>
            <DefaultFooter/>
        </>
    )}