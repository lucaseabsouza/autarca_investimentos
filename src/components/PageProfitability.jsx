import React from "react";
import Header from './Header'
import CardSelectPatrimonyAndProfits from "./CardSelectPatrimonyAndProfits";
import CardProfitability from "./CardProfitability";
import Footer from "./Footer";

export default function PageProfitability() {
    return (
        <>
            <Header/>
            <CardSelectPatrimonyAndProfits/>
            <CardProfitability/>
            <Footer></Footer>
        </>
    )}
