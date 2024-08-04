import React from "react";
import { Link } from 'react-router-dom';

export default function DefaultFooter() {
    return (
        <>
            <div className="containerFooter">
                <a href="https://www.linkedin.com/in/lucaseabsouza/" className="copyWriter" style={{display: "flex", justifyContent: "center", padding: "1rem"}}>Desenvolvido por Lucas Souza</a>
            </div>
        </>
    )
}