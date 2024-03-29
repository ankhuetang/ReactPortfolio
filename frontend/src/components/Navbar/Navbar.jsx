import React from 'react'
import { useState } from 'react'

import {HiMenuAlt4, HiX} from 'react-icons/hi'
import {motion} from 'framer-motion'

import { images } from '../../constants'
import './Navbar.scss'

const Navbar = () => {
  const [toggle, setToggle] = useState(false)


  return (
    <div className='center'>
    <nav className='app__navbar'>
      <ul className='app__navbar-links'>
        {['home', 'about', 'work', 'skills', 'contact'].map((item)=> (
          <li className='app__flex p-text' key={`link-${item}`}>
            <div/>
            <a href={`#${item}`}>{item}</a>
          </li>
        ))}
      </ul>

      {/* implement hamburger menu */}
      <div className="app__navbar-menu">
        <HiMenuAlt4 onClick={()=> setToggle(true)} />
        {
          toggle && (
            <motion.div whileInView={{x:[300,0]}} transition={{duration:0.85, ease:'easeOut'}}> 
              {/* nut X */}
              <HiX onClick={() => (setToggle(false))} /> 
              <ul>
                {['home', 'about', 'work', 'skills', 'contact',].map((item)=> (
                <li key={item}>
                  <a onClick={()=> (setToggle(false))} href={`#${item}`}>{item}</a>
                </li>))}
              </ul>
            </motion.div>
          )
        }
      </div>
          
    </nav>
    </div>
  )
}

export default Navbar