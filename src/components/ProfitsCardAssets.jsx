import React from "react";
import { ProfitsChartDoughnut } from './ProfitsChartDoughnut'

export default function ProfitsCardAssets() {
    return (
        <>
            <div className="container">
                <div className="containerCards">
                    <h1 className='titles'>Proventos x Ativo</h1>
                    <div className="containerProfitsChartDoughnut">
                        <ProfitsChartDoughnut/>
                    </div>
                </div>
            </div>
        </>
    )
}