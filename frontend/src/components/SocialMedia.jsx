import React from 'react'
import {BsTwitter, BsInstagram} from 'react-icons/bs' //bs = boostrap icon
import {FaFacebookF} from 'react-icons/fa'

const SocialMedia = className => {
  return (
    <div className={`app__social ${className}`}>
        <div>
            <BsTwitter/>
        </div>
        <div>
            <FaFacebookF/>
        </div>
        <div>
            <BsInstagram/>
        </div>
    </div>
  )
}

export default SocialMedia;