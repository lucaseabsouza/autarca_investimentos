import React from "react";
import Header from './Header'
import { Link } from 'react-router-dom';

export default function PageProfits() {
    return (
        <>
            <Header/>
            <h1 className="titles">Proventos</h1>
            <Link className="nav-link" to='/'>Patrimônio</Link>
            <Link className="nav-link" to='/carteira'>Carteira</Link>
        </>
    )
}