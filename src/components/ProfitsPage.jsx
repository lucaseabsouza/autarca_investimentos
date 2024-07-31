import React from "react";
import DefaultHeader from './DefaultHeader'
import DefaultFooter from "./DefaultFooter";
import ProfitsCardHistory from "./ProfitsCardHistory";
import ProfitsTable from "./ProfitsTable";

export default function ProfitsPage() {
    return (
        <>
            <DefaultHeader/>
            <ProfitsCardHistory/>
            <ProfitsTable/>
            <DefaultFooter/>
        </>
    )
}