import React from "react";
import Header from './Header'
import { Link } from 'react-router-dom';

export default function PageProfits() {
    return (
        <>
            <Header/>
            <h1>Proventos</h1>
            <Link to='/'>Patrimônio</Link>
            <Link to='/carteira'>Carteira</Link>
        </>
    )
}