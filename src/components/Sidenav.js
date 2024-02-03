
import React from 'react'
//import { FaRobot } from "react-icons/fa";
import { FaCarAlt } from "react-icons/fa";
import './styleside.css';
export default function Sidenav({visible}) {
  return (
    <>
     <div className={visible ? 'sidenav active': 'sidenav' }>
        {/*<div className='title'>
            Select any AI chatbot
      </div>*/}
        <div className='list'>
            <div className='bot1'>
            
            <button className='b1'><FaCarAlt className='icon'/>Carwale Bot</button>
            </div>
            {/*<div className='bot1'>
            <button className='b1'><FaRobot className='icon'/> AI bot 3</button>
            </div>
            <div className='bot1'>
            <button className='b1'><FaRobot className='icon'/> AI bot 3</button>
            </div>*/}
        </div>
     </div>
    </>
  )
}
