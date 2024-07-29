import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquareCaretDown } from '@fortawesome/free-solid-svg-icons/faSquareCaretDown'

export default function TableClasses() {
    return (
        <>
            <div className='containerCards'>
                <table className="containerThTableClasses">
                    <tbody>
                        <tr>
                            <th className='thTableClasses'>Classes</th>
                            <th className='thTableClasses' style={{textAlign: 'end', padding: "0 1rem"}}>Ideal</th>
                            <th className='thTableClasses' style={{textAlign: 'end', padding: "0 1rem"}}>Atual</th>
                        </tr>
                        <tr>
                            
                            <th className="thdTableClasses">
                                <FontAwesomeIcon icon={faSquareCaretDown} style={{color: "#00317a"}} className='btnTableClasses' ></FontAwesomeIcon>
                                    ETFs
                            </th>
                            <td className="tdTableClasses">20%</td>
                            <td className="tdTableClasses">13%</td>
                        </tr>
                        <tr>
                            <th className="thdTableClasses">
                                <FontAwesomeIcon icon={faSquareCaretDown} style={{color: "#00317a"}} className='btnTableClasses' ></FontAwesomeIcon>
                                    Criptos
                            </th>
                            <td className="tdTableClasses">20%</td>
                            <td className="tdTableClasses">15%</td>
                        </tr>
                        <tr>
                            <th className="thdTableClasses">
                                <FontAwesomeIcon icon={faSquareCaretDown} style={{color: "#00317a"}} className='btnTableClasses' ></FontAwesomeIcon>
                                    Renda Fixa
                            </th>
                            <td className="tdTableClasses">20%</td>
                            <td className="tdTableClasses">20%</td>
                        </tr>
                        <tr>
                            <th className="thdTableClasses">
                                <FontAwesomeIcon icon={faSquareCaretDown} style={{color: "#00317a"}} className='btnTableClasses' ></FontAwesomeIcon>
                                    FIIs
                            </th>
                            <td className="tdTableClasses">20%</td>
                            <td className="tdTableClasses">22%</td>
                        </tr>
                        <tr>
                            <th className="thdTableClasses">
                                <FontAwesomeIcon icon={faSquareCaretDown} style={{color: "#00317a"}} className='btnTableClasses' ></FontAwesomeIcon>
                                    Ações
                            </th>
                            <td className="tdTableClasses">20%</td>
                            <td className="tdTableClasses">30%</td>
                        </tr>
                    </tbody>
                </table>

            </div>
            <table className="containerCards containerThTableAnalise">
                <tbody>
                    <tr>
                        <th className='thTableClasses'>Ativos</th>
                        <th className='thTableClasses' style={{textAlign: 'end', padding: "0 1rem"}}>Qnt</th>
                        <th className='thTableClasses' style={{textAlign: 'end', padding: "0 1rem"}}>P. Méd.</th>
                        <th className='thTableClasses' style={{textAlign: 'end', padding: "0 1rem"}}>P. Atual</th>
                        <th className='thTableClasses' style={{textAlign: 'end', padding: "0 1rem"}}>P. Méd./ P. Atual</th>
                        <th className='thTableClasses' style={{textAlign: 'end', padding: "0 1rem"}}>Total em Carteira</th>
                        <th className='thTableClasses' style={{textAlign: 'end', padding: "0 1rem"}}>% Classe</th>
                        <th className='thTableClasses' style={{textAlign: 'end', padding: "0 1rem"}}>% Carteira</th>
                        <th className='thTableClasses' style={{textAlign: 'end', padding: "0 1rem"}}>% Ideal</th>
                        <th className='thTableClasses' style={{textAlign: 'end', padding: "0 1rem"}}>Aporte p/ equilíbrio</th>
                    </tr>
                    <tr>
                        <th className="thdTableClasses">
                            <FontAwesomeIcon icon={faSquareCaretDown} style={{color: "#00317a"}} className='btnTableClasses' ></FontAwesomeIcon>
                                ETFs
                        </th>
                        <td className="tdTableClasses">1</td>
                        <td className="tdTableClasses">210</td>
                        <td className="tdTableClasses">280</td>
                        <td className="tdTableClasses">+75%</td>
                        <td className="tdTableClasses">1.050</td>
                        <td className="tdTableClasses">100%</td>
                        <td className="tdTableClasses">13%</td>
                        <td className="tdTableClasses">20%</td>
                        <td className="tdTableClasses">644</td>
                    </tr>
                    <tr>
                        <th className="thdTableClasses">
                            <FontAwesomeIcon icon={faSquareCaretDown} style={{color: "#00317a"}} className='btnTableClasses' ></FontAwesomeIcon>
                                Criptos
                        </th>
                        <td className="tdTableClasses">0,0001</td>
                        <td className="tdTableClasses">350.000</td>
                        <td className="tdTableClasses">345,000</td>
                        <td className="tdTableClasses">-2%</td>
                        <td className="tdTableClasses">1.265</td>
                        <td className="tdTableClasses">100%</td>
                        <td className="tdTableClasses">15%</td>
                        <td className="tdTableClasses">20%</td>
                        <td className="tdTableClasses">429</td>
                    </tr>
                    <tr>
                        <th className="thdTableClasses">
                            <FontAwesomeIcon icon={faSquareCaretDown} style={{color: "#00317a"}} className='btnTableClasses' ></FontAwesomeIcon>
                                Tesouro Selic
                        </th>
                        <td className="tdTableClasses">2</td>
                        <td className="tdTableClasses">750</td>
                        <td className="tdTableClasses">820</td>
                        <td className="tdTableClasses">+10%</td>
                        <td className="tdTableClasses">1.652</td>
                        <td className="tdTableClasses">100%</td>
                        <td className="tdTableClasses">20%</td>
                        <td className="tdTableClasses">20%</td>
                        <td className="tdTableClasses">42</td>
                    </tr>
                    <tr>
                        <th className="thdTableClasses">
                            <FontAwesomeIcon icon={faSquareCaretDown} style={{color: "#00317a"}} className='btnTableClasses' ></FontAwesomeIcon>
                                XPML11
                        </th>
                        <td className="tdTableClasses">20</td>
                        <td className="tdTableClasses">97</td>
                        <td className="tdTableClasses">150</td>
                        <td className="tdTableClasses">+1%</td>
                        <td className="tdTableClasses">1.952</td>
                        <td className="tdTableClasses">100%</td>
                        <td className="tdTableClasses">22%</td>
                        <td className="tdTableClasses">20%</td>
                        <td className="tdTableClasses">258</td>
                    </tr>
                    <tr>
                        <th className="thdTableClasses">
                            <FontAwesomeIcon icon={faSquareCaretDown} style={{color: "#00317a"}} className='btnTableClasses' ></FontAwesomeIcon>
                                VALE3
                        </th>
                        <td className="tdTableClasses">48</td>
                        <td className="tdTableClasses">52,60</td>
                        <td className="tdTableClasses">60</td>
                        <td className="tdTableClasses">+87%</td>
                        <td className="tdTableClasses">2.560</td>
                        <td className="tdTableClasses">100%</td>
                        <td className="tdTableClasses">30%</td>
                        <td className="tdTableClasses">20%</td>
                        <td className="tdTableClasses">-866</td>
                    </tr>
                </tbody>
            </table>
        </>
    )
}