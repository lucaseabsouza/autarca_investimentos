import React from "react";
import { useState } from 'react';

export default function InitialBtnSelectClass() {
    const [active, setMode] = useState(false);
    const ToggleMode = () => {
        setMode(!active);
}
    return (
        <>
            <button className='btnSelect'>
                Classe
                <svg  className={active ? "icon iconActive" : "icon"} onClick={ToggleMode} style={{margin: "0 0 0 1rem", width: "1rem"}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path fill="#d4d4d4" d="M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z"/></svg>
                <div className={active ? "menu menuOpen" : "menu menuClose"}>
                    <div className='list'>
                        <ul className='listItems'>
                            <li className='items'>Ações</li>
                            <li className='items'>FIIs</li>
                            <li className='items'>ETFs</li>
                            <li className='items'>Renda Fixa</li>
                            <li className='items'>Criptomoedas</li>
                        </ul>
                    </div>
                </div>
            </button>
        </>
    )
}