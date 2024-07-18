import React from "react";

export default function TableClasses() {
    return (
        <>
            <div className='containerCards'>
                <table className="containerThTableClasses">
                    <tbody>
                        <tr>
                            <th className='thTableClasses'>Classes</th>
                            <th className='thTableClasses'>%Ideal</th>
                            <th className='thTableClasses'>%Atual</th>
                        </tr>
                        <tr>
                            <td className="tdTableClasses">ETFs</td>
                            <td className="tdTableClasses">20%</td>
                            <td className="tdTableClasses">13%</td>
                        </tr>
                        <tr>
                            <td className="tdTableClasses">Criptomoedas</td>
                            <td className="tdTableClasses">20%</td>
                            <td className="tdTableClasses">15%</td>
                        </tr>
                        <tr>
                            <td className="tdTableClasses">Renda Fixa</td>
                            <td className="tdTableClasses">20%</td>
                            <td className="tdTableClasses">20%</td>
                        </tr>
                        <tr>
                            <td className="tdTableClasses">FIIs</td>
                            <td className="tdTableClasses">20%</td>
                            <td className="tdTableClasses">22%</td>
                        </tr>
                        <tr>
                            <td className="tdTableClasses">Ações</td>
                            <td className="tdTableClasses">20%</td>
                            <td className="tdTableClasses">30%</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    )
}