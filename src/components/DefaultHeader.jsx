import React from 'react';
import { useState } from 'react';
import { TfiMenu } from "react-icons/tfi";
import { Link } from 'react-router-dom';
import { MdHomeFilled } from "react-icons/md";
import { IoWalletSharp } from "react-icons/io5";
import { FaMoneyBill } from "react-icons/fa";
import { AiFillNotification } from "react-icons/ai";

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
            <div className={active ? "iconActive" : "iconClose"} onClick={ToggleMode}>
              <TfiMenu style={{color: "fff"}}/>
            </div>
            <div className={active ? "menu menuOpen" : "menu menuClose"}>
              <div className='list'>
                <ul className='listItems'>
                  <li className='items'><Link to="/"><MdHomeFilled /> Início</Link></li>
                  <li className='items'><Link to="/carteira"><IoWalletSharp /> Carteira</Link></li>
                  <li className='items'><Link to="/proventos"><FaMoneyBill /> Proventos</Link></li>
                  <li className='items'><Link to="/notificacoes"><AiFillNotification /> Notificações</Link></li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </>
  )
}