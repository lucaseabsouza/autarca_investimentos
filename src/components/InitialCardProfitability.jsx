import React from "react";
import { InitialChartLineProfitability } from './InitialChartLineProfitability';
import InitialBtnSelectPeriod from './InitialBtnSelectPeriod'
import InitialBtnSelectClass from "./InitialBtnSelectClass";

export default function InitialCardProfitability() {
    return (
        <>
            <div className="container">
                <div className='containerCards'>
                    <h1 className='titles'>Rentabilidade</h1>
                    <h2 className='insights' style={{display: "flex", justifyContent: "center"}}>R$ 11.325,60</h2>
                    <p className='insights' style={{display: "flex", justifyContent: "center"}}>+5,26%</p>
                    <div className="containerBtnSelect" style={{display: "flex", justifyContent: "center"}}>
                        <InitialBtnSelectPeriod/>
                        <InitialBtnSelectClass/>
                    </div>
                    <div className="containerChart">
                        <InitialChartLineProfitability />
                    </div>
                </div>
            </div>
        </>
    )
}