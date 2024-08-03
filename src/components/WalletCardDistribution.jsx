import React from "react";
import { WalletChartPolarDistribution } from './WalletChartPolarDistribution';

export default function WalletCardDistribution() {
    return (
        <>
            <div className="container">
                <div className="containerCards">
                    <h1 className='titles'>Distribuição</h1>
                    <WalletChartPolarDistribution/>
                </div>
            </div>
        </>
    )
}