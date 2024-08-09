import React from 'react';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons/faBars';
import { Link } from 'react-router-dom';

export default function DefaultHeader() {
  const [active, setMode] = useState(false);
  const ToggleMode = () => {
    setMode(!active);
  }

  return (
    <>
      <div className='container'>
        <div className={active ? "header headerOpen" : "header headerClose"}>
          <div className={active ? "logo logoOpen" : "logo logoClose"}>
            <Link to="/"><img src='/imgs/logo_bg_black.png'/></Link>
          </div>
          <nav>
            <div className={active ? "icon iconActive" : "icon"} onClick={ToggleMode}>
              <FontAwesomeIcon icon={faBars} style={{color: "#fff"}} aria-label="Abrir Menu"/>
            </div>
            <div className={active ? "menu menuOpen" : "menu menuClose"}>
              <div className='list'>
                <ul className='listItems'>
                  <li className='items'><Link to="/">Início</Link></li>
                  <li className='items'><Link to="/carteira">Carteira</Link></li>
                  <li className='items'><Link to="/proventos">Proventos</Link></li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </>
  )
}