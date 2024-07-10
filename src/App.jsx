import React from 'react'
import Header from './components/Header'
import infoCardInsights from './components/InfoCardInsights'
import createCardInsights from './components/CreateCardInsights'

function App() {

  return (
    <>
      <Header/>
      {infoCardInsights.map(createCardInsights)}
    </>
  )
}

export default App
