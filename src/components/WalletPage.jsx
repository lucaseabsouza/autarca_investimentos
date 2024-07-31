import React from "react";
import DefaultHeader from './DefaultHeader';
import WalletCardRebalance from './WalletCardRebalance';
import { WalletChartPolarDistribution } from "./WalletChartPolarDistribution";
import WalletTableClasses from "./WalletTableClasses";
import WalletTableAnalyze from "./WalletTableAnalyze";
import DefaultFooter from "./DefaultFooter";

export default function WalletPage() {
    return (
        <>
            <DefaultHeader/>
            <WalletCardRebalance/>
            <div className="containerCards">
                <h1 className='titles'>Distribuição</h1>
                <WalletChartPolarDistribution/>
            </div>
            <WalletTableClasses/>
            <WalletTableAnalyze/>
            <DefaultFooter/>
        </>
    )}