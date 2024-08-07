import React from "react";
import { ProfitsChartLineHistory } from './ProfitsChartLineHistory';

export default function ProfitsCardHistory() {
    return (
        <>
            <div className="container">
                <div className='containerCards'>
                    <h1 className='titles'>Proventos</h1>
                    <h2 className='insights' style={{display: "flex", justifyContent: "center"}}>R$ 260,38</h2>
                    <div className="containerBtnSelect" style={{display: "flex", justifyContent: "center"}}>
                        <button className='btnSelect'>
                            Período
                            <svg style={{margin: "0 0 0 1rem", width: "1rem"}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path fill="#d4d4d4" d="M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z"/></svg>
                        </button>
                        <button className='btnSelect'>
                            Ativos
                            <svg style={{margin: "0 0 0 1rem", width: "1rem"}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path fill="#d4d4d4" d="M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z"/></svg>
                        </button>
                    </div>
                    <ProfitsChartLineHistory />
                </div>
            </div>
        </>
    )
}