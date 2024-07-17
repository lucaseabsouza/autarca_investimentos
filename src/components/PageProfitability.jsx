import React from "react";
import Header from './Header'
import infoCardInsights from './InfoCardInsights';
import { ChartLineProfitability } from './ChartLineProfitability';
import { Link } from 'react-router-dom'

export default function PageProfitability() {
    return (
        <>
            <Header/>
            {infoCardInsights.map((info) => (
                <div className='containerCardsInsights'>
                    <h1 className='itensCardsInsights'>{info.titleCardInsights}</h1>
                    <h2 className='itensCardsInsights'>{info.valueCardInsights}</h2>
                    <p className='itensCardsInsights'>{info.detailsCardInsights}</p>
                    <span className='arrowCardsInsights' >
                    <svg xmlns="http://www.w3.org/2000/svg" width="1rem" viewBox="0 0 448 512">
                    <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"/></svg>
                    </span>
                </div>
        ))}
        <div className='containerCardsInsights'>
            <h1 className='titleCharts'>Rentabilidade</h1>
            <h2 className='insightProfitability'>R$ 11.325,60</h2>
            <p className='insightProfitability'>+5,26%</p>
            <button className='btnSelect'>
                Período
                <svg style={{margin: "0 0 0 1rem"}} width="1rem" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path fill="#ffffff" d="M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z"/></svg>
            </button>
            <button className='btnSelect'>
                Ativos
                <svg style={{margin: "0 0 0 1rem"}} width="1rem" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path fill="#ffffff" d="M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z"/></svg>
            </button>
            <ChartLineProfitability/>
        </div>
        <Link to={ "/carteira" }>Carteira</Link>
        </>
    )}
