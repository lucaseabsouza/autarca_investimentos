import React from "react";
import { ChartLineProfitability } from './ChartLineProfitability';

export default function CardProfitability() {
    return (
        <>
            <div className='containerCards'>
                <h1 className='titleCharts'>Rentabilidade</h1>
                <h2 className='insightProfitability'>R$ 11.325,60</h2>
                <p className='insightProfitability'>+5,26%</p>
                <div className="containerBtnSelect">
                    <button className='btnSelect'>
                        Período
                        <svg style={{margin: "0 0 0 1rem", width: "1rem"}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path fill="#ffffff" d="M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z"/></svg>
                    </button>
                    <button className='btnSelect'>
                        Ativos
                        <svg style={{margin: "0 0 0 1rem", width: "1rem"}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path fill="#ffffff" d="M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z"/></svg>
                    </button>
                </div>
                <ChartLineProfitability />
            </div>
        </>
    )
}