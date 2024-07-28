import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons/faBars'

export default function Header() {

  return (
    <>
      <div className='header'>
        <span>
        </span>
        <img src='/imgs/logo_bg_white.png'/>
        <FontAwesomeIcon icon={faBars} style={{color: "#000"}}/>
      </div>
    </>
  )
}