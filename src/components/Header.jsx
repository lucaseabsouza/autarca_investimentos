import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons/faBars'
import { Link } from 'react-router-dom'

export default function Header() {

  return (
    <>
      <div className='header'>
        <span>
        </span>
        <Link to="/"><img src='/imgs/logo_bg_white.png'/></Link>
        <nav>
          <FontAwesomeIcon icon={faBars} style={{color: "#000"}} id='btn-mobile' aria-expanded="false" aria-controls="menu" aria-haspopup="true" aria-label="Abrir Menu"/>
          <ul id='menu'>
            <li><Link to="/"></Link></li>
            <li><Link to="/carteira"></Link></li>
            <li><Link to="/proventos"></Link></li>
          </ul>
        </nav>
      </div>
    </>
  )
}