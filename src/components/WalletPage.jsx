import React from "react";
import DefaultHeader from './DefaultHeader';
import WalletCardRebalance from './WalletCardRebalance';
import WalletCardDistribution from './WalletCardDistribution'
import WalletTableClasses from "./WalletTableClasses";
import WalletTableAnalyze from "./WalletTableAnalyze";
import DefaultFooter from "./DefaultFooter";

export default function WalletPage() {
    return (
        <>
            <DefaultHeader/>
            <WalletCardRebalance/>
            <WalletCardDistribution/>
            <WalletTableClasses/>
            <WalletTableAnalyze/>
            <DefaultFooter/>
        </>
    )}