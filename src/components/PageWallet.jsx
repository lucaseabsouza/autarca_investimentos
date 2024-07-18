import React from "react";
import Header from './Header';
import CardRebalance from './CardRebalance';
import { ChartPolarDistribution } from "./ChartPolarDistribution";
import TableClasses from "./TableClasses";


export default function PageWallet() {
    return (
        <>
            <Header/>
            <CardRebalance/>
            <div className="containerCards">
                <h1 className='titleCharts'>Distribuição</h1>
                <ChartPolarDistribution/>
            </div>
            <TableClasses/>
        </>
    )}