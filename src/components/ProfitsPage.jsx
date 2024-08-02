import React from "react";
import DefaultHeader from './DefaultHeader'
import ProfitsCardHistory from "./ProfitsCardHistory";
import ProfitsCardAssets from './ProfitsCardAssets'
import ProfitsTable from "./ProfitsTable";
import DefaultFooter from "./DefaultFooter";

export default function ProfitsPage() {
    return (
        <>
            <DefaultHeader/>
            <ProfitsCardHistory/>
            <ProfitsCardAssets/>
            <ProfitsTable/>
            <DefaultFooter/>
        </>
    )
}