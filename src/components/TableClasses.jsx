import React from "react";

export default function TableClasses() {
    return (
        <>
            <div className='containerCards'>
                <table className="containerThTableClasses">
                    <tbody>
                        <tr>
                            <th className='thTableClasses'>Ativos</th>
                            <th className='thTableClasses' style={{textAlign: 'center'}}>Ideal</th>
                            <th className='thTableClasses' style={{textAlign: 'center'}}>Atual</th>
                        </tr>
                        <tr>
                            <th className="thdTableClasses">ETFs</th>
                            <td className="tdTableClasses">20%</td>
                            <td className="tdTableClasses">13%</td>
                        </tr>
                        <tr>
                            <th className="thdTableClasses">Criptomoedas</th>
                            <td className="tdTableClasses">20%</td>
                            <td className="tdTableClasses">15%</td>
                        </tr>
                        <tr>
                            <th className="thdTableClasses">Renda Fixa</th>
                            <td className="tdTableClasses">20%</td>
                            <td className="tdTableClasses">20%</td>
                        </tr>
                        <tr>
                            <th className="thdTableClasses">FIIs</th>
                            <td className="tdTableClasses">20%</td>
                            <td className="tdTableClasses">22%</td>
                        </tr>
                        <tr>
                            <th className="thdTableClasses">Ações</th>
                            <td className="tdTableClasses">20%</td>
                            <td className="tdTableClasses">30%</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    )
}