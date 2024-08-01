import React from "react";

export default function WalletTableClasses() {
    return (
        <>
            <div className="container">
                <table className="containerCards containerThTableClasses">
                    <tbody>
                        <tr>
                            <th className='thTableClasses'>Classes</th>
                            <th className='thTableClasses' style={{textAlign: 'end', padding: "0 1rem"}}>Ideal</th>
                            <th className='thTableClasses' style={{textAlign: 'end', padding: "0 1rem"}}>Atual</th>
                        </tr>
                        <tr>
                            
                            <th className="thdTableClasses">ETFs</th>
                            <td className="tdTableClasses">20%</td>
                            <td className="tdTableClasses">13%</td>
                        </tr>
                        <tr>
                            <th className="thdTableClasses">Criptos</th>
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