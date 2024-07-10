import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEllipsisVertical } from '@fortawesome/free-solid-svg-icons'

function Header() {

  return (
    <>
      <div className='header'>
        <span>
        </span>
        <img src='/imgs/logo_bg_black.png'/>
        <FontAwesomeIcon icon={faEllipsisVertical} style={{color: "#ffffff"}} />
      </div>
    </>
  )
}

export default Header