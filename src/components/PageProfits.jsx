import React from "react";
import Header from './Header'
import Footer from "./Footer";
import CardProfits from "./CardProfits";
import TableProfits from "./TableProfits";

export default function PageProfits() {
    return (
        <>
            <Header/>
            <CardProfits/>
            <TableProfits/>
            <Footer/>
        </>
    )
}