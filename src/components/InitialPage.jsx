import React from "react";

import DefaultHeader from './DefaultHeader'
import InitialCardsSelect from "./InitialCardsSelect";
import InitialCardProfitability from "./InitialCardProfitability";
import DefaultFooter from "./DefaultFooter";

export default function InitialPageProfitability() {
    return (
        <>
            <DefaultHeader/>
            <InitialCardsSelect/>
            <InitialCardProfitability/>
            <DefaultFooter/>
        </>
    )}
