import React from "react";

import InitialBtnSelectYear from './InitialBtnSelectYear';
import InitialBtnSelectMonth from './InitialBtnSelectMonth'
import InitialBtnSelectClass from './InitialBtnSelectClass';

export default function ProfitsTable() {
    return (
        <>
            <div className="container">
                <div className="containerCards">
                <div className="containerBtnSelect">
                    <InitialBtnSelectYear/>
                    <InitialBtnSelectMonth/>
                    <InitialBtnSelectClass/>
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
            </div>
        </>
    )
}