import React from "react";
import { Link } from 'react-router-dom';

export default function DefaultFooter() {
    return (
        <>
            <div className="containerFooter">
                <Link className="nav-link" to="/">Início</Link>
                <Link className="nav-link" to='/carteira'>Carteira</Link>
                <Link className="nav-link" to='/proventos'>Proventos</Link>
                <a href="https://www.linkedin.com/in/lucaseabsouza/" className="copyWriter" style={{display: "flex", justifyContent: "center", padding: "1rem"}}>Desenvolvido por Lucas Souza</a>
            </div>
        </>
    )
}