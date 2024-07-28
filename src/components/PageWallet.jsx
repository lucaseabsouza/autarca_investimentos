import React from "react";
import Header from './Header';
import CardRebalance from './CardRebalance';
import { ChartPolarDistribution } from "./ChartPolarDistribution";
import TableClasses from "./TableClasses";
import { Link } from 'react-router-dom';

export default function PageWallet() {
    return (
        <>
            <Header/>
            <CardRebalance/>
            <div className="containerCards">
                <h1 className='titles'>Distribuição</h1>
                <ChartPolarDistribution/>
            </div>
            <TableClasses/>
            <Link to='/'>Patrimônio</Link>
        </>
    )}