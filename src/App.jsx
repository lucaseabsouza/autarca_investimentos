import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import InitialPage from './components/InitialPage';
import WalletPage from './components/WalletPage';
import ProfitsPage from './components/ProfitsPage';
import NotificationsPage from './components/NotificationsPage';

export default function App() {

  return (
      <Routes>
        <Route path='*' element={ <Navigate to='/' /> }/>
        <Route path='/' element={ <InitialPage/> } />
        <Route path='/carteira' element={ <WalletPage/> } />
        <Route path='/proventos' element={ <ProfitsPage/> } />
        <Route path='/notificacoes' element={ <NotificationsPage/> } />
      </Routes>
  )
}