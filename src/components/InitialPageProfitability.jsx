import React from "react";

import DefaultHeader from './DefaultHeader'
import InitialCardSelectPatrimony from "./InitialCardSelectPatrimony";
import InitialCardSelectProfits from "./InitialCardSelectProfits";
import InitialCardProfitability from "./InitialCardProfitability";
import DefaultFooter from "./DefaultFooter";

export default function InitialPageProfitability() {
    return (
        <>
            <DefaultHeader/>
            <InitialCardSelectPatrimony/>
            <InitialCardSelectProfits/>
            <InitialCardProfitability/>
            <DefaultFooter/>
        </>
    )}
