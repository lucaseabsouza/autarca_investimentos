import React from "react";
import Header from './Header'
import CardPatrimony from "./CardPatrimony";
import CardProfitability from "./CardProfitability";
import { Link } from 'react-router-dom';

export default function PageProfitability() {
    return (
        <>
            <Header/>
            <CardPatrimony/>
            <CardProfitability/>
            <Link className="nav-link" to='/carteira'>Carteira</Link>
            <Link className="nav-link" to='/proventos'>Proventos</Link>
        </>
    )}
