import React from "react";

export default function ProfitsTable() {
    return (
        <>
            <div className="containerCards containerBtnSelect" >
            <div style={{display: "flex", justifyContent: "center"}}>
                <button className='btnSelect'>
                    Período
                    <svg style={{margin: "0 0 0 1rem", width: "1rem"}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path fill="#000" d="M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z"/></svg>
                </button>
            </div>
                <table className="containerThTable">
                    <tbody style={{marginLeft: "1rem"}}>
                        <tr>
                            <th className='thTableClasses'>Ativos</th>
                            <th className='thTableClasses' style={{textAlign: 'end', padding: "0 1rem 0"}}>Total Recebido</th>
                        </tr>
                        <tr>
                            <th className="thdTableClasses">XPML11</th>
                            <td className="tdTableClasses">97</td>
                        </tr>

                        <tr>
                            <th className="thdTableClasses">VISC11</th>
                            <td className="tdTableClasses">29,60</td>
                        </tr>
                        
                        <tr>
                            <th className="thdTableClasses">HGLG11</th>
                            <td className="tdTableClasses">49,50</td>
                        </tr>

                        <tr>
                            <th className="thdTableClasses">VALE3</th>
                            <td className="tdTableClasses">52,60</td>
                        </tr>

                        <tr>
                            <th className="thdTableClasses">ITSA3</th>
                            <td className="tdTableClasses">22,20</td>
                        </tr>
                    </tbody>
                </table>
            </div>

        </>
    )
}