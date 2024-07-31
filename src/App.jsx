import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import InitialPageProfitability from './components/InitialPageProfitability';
import WalletPage from './components/WalletPage';
import ProfitsPage from './components/ProfitsPage';


export default function App() {

  return (
      <Routes>
        <Route path='*' element={ <Navigate to='/' /> }/>
        <Route path='/' element={ <InitialPageProfitability/> } />
        <Route path='/carteira' element={ <WalletPage/> } />
        <Route path='/proventos' element={ <ProfitsPage/> } />
      </Routes>
  )
}