import React from "react";

export default function WalletTableAnalyze() {
    return (
        <>
            <div className="container">
                <table className="containerCards containerThTable" style={{justifyContent:"flex-start"}}>
                    <tbody style={{marginLeft: "1rem"}}>
                        <tr>
                            <th className='thTableClasses thdTableClasses' style={{fontWeight: 500, color: '#569aff'}}>Ativos</th>
                            <th className='thTableClasses' style={{textAlign: 'end', padding: "0 1rem"}}>Aporte p/ equilíbrio</th>
                            <th className='thTableClasses' style={{textAlign: 'end', padding: "0 1rem"}}>Em Carteira</th>
                            <th className='thTableClasses' style={{textAlign: 'end', padding: "0 1rem"}}>Ideal</th>
                            <th className='thTableClasses' style={{textAlign: 'end', padding: "0 1rem"}}>% Carteira</th>
                            <th className='thTableClasses' style={{textAlign: 'end', padding: "0 1rem"}}>% Ideal</th>
                            <th className='thTableClasses' style={{textAlign: 'end', padding: "0 1rem"}}>% Classe</th>
                            <th className='thTableClasses' style={{textAlign: 'end', padding: "0 1rem"}}>Qnt</th>
                            <th className='thTableClasses' style={{textAlign: 'end', padding: "0 1rem"}}>P. Méd.</th>
                            <th className='thTableClasses' style={{textAlign: 'end', padding: "0 1rem"}}>P. Atual</th>
                            <th className='thTableClasses' style={{textAlign: 'end', padding: "0 1rem"}}>Resultado</th>
                            <th className='thTableClasses' style={{textAlign: 'end', padding: "0 1rem"}}>% Resultado</th>
                        </tr>
                        <tr>
                            <th className="thdTableClasses">ETFs</th>
                            <td className="tdTableClasses">645</td>
                            <td className="tdTableClasses">1.050</td>
                            <td className="tdTableClasses">1.695</td>
                            <td className="tdTableClasses">13%</td>
                            <td className="tdTableClasses">20%</td>
                            <td className="tdTableClasses">100%</td>
                            <td className="tdTableClasses">1</td>
                            <td className="tdTableClasses">210</td>
                            <td className="tdTableClasses">280</td>
                            <td className="tdTableClasses">70</td>
                            <td className="tdTableClasses">+25%</td>
                        </tr>
                        <tr>
                            <th className="thdTableClasses">Bitcoin</th>
                            <td className="tdTableClasses">430</td>
                            <td className="tdTableClasses">1.265</td>
                            <td className="tdTableClasses">1.695</td>
                            <td className="tdTableClasses">15%</td>
                            <td className="tdTableClasses">20%</td>
                            <td className="tdTableClasses">100%</td>
                            <td className="tdTableClasses">0,00367</td>
                            <td className="tdTableClasses">350.000</td>
                            <td className="tdTableClasses">345.000</td>
                            <td className="tdTableClasses">-30</td>
                            <td className="tdTableClasses">-2%</td>
                        </tr>
                        <tr>
                            <th className="thdTableClasses">Tesouro Selic</th>
                            <td className="tdTableClasses">44</td>
                            <td className="tdTableClasses">1.652</td>
                            <td className="tdTableClasses">1.695</td>
                            <td className="tdTableClasses">20%</td>
                            <td className="tdTableClasses">20%</td>
                            <td className="tdTableClasses">100%</td>
                            <td className="tdTableClasses">2</td>
                            <td className="tdTableClasses">750</td>
                            <td className="tdTableClasses">820</td>
                            <td className="tdTableClasses">70</td>
                            <td className="tdTableClasses">+9%</td>
                        </tr>
                        <tr>
                            <th className="thdTableClasses">XPML11</th>
                            <td className="tdTableClasses">-256</td>
                            <td className="tdTableClasses">1.952</td>
                            <td className="tdTableClasses">1.695</td>
                            <td className="tdTableClasses">22%</td>
                            <td className="tdTableClasses">20%</td>
                            <td className="tdTableClasses">100%</td>
                            <td className="tdTableClasses">20</td>
                            <td className="tdTableClasses">97</td>
                            <td className="tdTableClasses">150</td>
                            <td className="tdTableClasses">53</td>
                            <td className="tdTableClasses">+55%</td>
                        </tr>
                        <tr>
                            <th className="thdTableClasses">VALE3</th>
                            <td className="tdTableClasses">-864</td>
                            <td className="tdTableClasses">2.560</td>
                            <td className="tdTableClasses">1.695</td>
                            <td className="tdTableClasses">30%</td>
                            <td className="tdTableClasses">20%</td>
                            <td className="tdTableClasses">100%</td>
                            <td className="tdTableClasses">48</td>
                            <td className="tdTableClasses">53</td>
                            <td className="tdTableClasses">60</td>
                            <td className="tdTableClasses">7</td>
                            <td className="tdTableClasses">+14%</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    )
}