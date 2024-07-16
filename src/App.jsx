import React from 'react';
import { Routes, Route } from 'react-router-dom';
import PageProfitability from './components/PageProfitability';
import PageWallet from './components/PageWallet';
import PageProfits from './components/PageProfits';


export default function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={ <PageProfitability/> } />
        <Route path='/carteira' element={ <PageWallet/> } />
        <Route path='/proventos' element={ <PageProfits/> } />
      </Routes>
    </>
  )
}