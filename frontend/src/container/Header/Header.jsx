import React from 'react'

import { AppWrap, wrapper } from '../../wrapper';
import {motion} from 'framer-motion';
import { images } from '../../constants';
import BackgroundAnimation from '../../components/BackgroundAnimation';
import { SocialMedia, NavigationDots } from '../../components';
import './Header2.scss'

const scaleVariants = {
  whileInView: {
    scale: [0, 1],
    opacity: [0, 1],
    transition: {
      duration: 1,
      ease: 'easeInOut',
    },
  },
};

const Header = () => {
  return (
    <>
    <div id='home' className="app__header">
      <SocialMedia/>
      <motion.div 
        whileInView={{x:[-100,0], opacity: [0,1]}}
        transition={{duration:2}}
        className="app__header-info"
      >
          <h1>Khue (Kay) Tang</h1>
          <h1 className="sub">Turning cool ideas into cooler products</h1>
          <p className="p-text">A software engineer specilizing in modern web technologies</p>
          <a href="#about">Get to know me</a>
      </motion.div>
      <div className="animation">
        <BackgroundAnimation/>
      </div>
      <NavigationDots active='home'/>
    </div>
    
    {/* <div className="app__header app__flex">
      <motion.div 
        whileInView={{x:[-100,0], opacity: [0,1]}}
        transition={{duration:2}}
        className="app__header-info"
      >
          <h1>Khue (Kay) Tang</h1>
          <h1 className="sub">Turning cool ideas into cooler products</h1>
          <p className="p-text">A software engineer specilizing in modern web technologies</p>
          <a href="#about">Get to know me</a>
      </motion.div>

      <motion.div
        variants={scaleVariants}
        whileInView={scaleVariants.whileInView}
        className="app__header-circles"
      >
        {[images.flutter, images.redux, images.sass].map((circle, index) => (
          <div className="circle-cmp app__flex" key={`circle-${index}`}>
            <img src={circle} alt="profile_bg" />
          </div>
        ))}
      </motion.div>
    </div> */}
    </>
  )
}

// export default AppWrap(Header, 'home')
export default Header;