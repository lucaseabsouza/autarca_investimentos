import React from "react";


export default function InitialBtnSelectClass() {
    return (
        <>
            <select name="select" className="select">
                <option value="Classes">Classes</option>
                <option value="Ações">Ações</option>
                <option value="FIIs">FIIs</option>
                <option value="Renda Fixa">Renda Fixa</option>
                <option value="ETFs">ETFs</option>
                <option value="Criptomoedas">Criptomoedas</option>
            </select>
        </>
    )
}