import React, {useState} from 'react'

import { images } from '../../constants'
import { AppWrap, MotionWrap } from '../../wrapper'
import { client } from '../../client'
import './Footer.scss'

const Footer = () => {
  const [formData, setFormData] = useState({name: '', email: '', message: ''});
  const [isFormSubmitted, setisFormSubmitted] = useState(false);
  const [isLoading, setisloading] = useState(false);

  const {name, email, message} = formData;

  const handleChangeInput = (e) => {
    const {name, value} = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  }

  const handleSubmit = () => {
    setisloading(true);
    const contact = {
      _type: 'contact',
      name: formData.name,
      email: formData.email,
      message: formData.message
    }

    client.create(contact)
      .then(
        () => {
          setisFormSubmitted(true);
          setisloading(false)
        }
      ).catch((err) => {
        throw(err)
      })
  };

  return (
    <>
      <h2 className="head-text">Take a coffee & chat with me</h2>
      <div className="app__footer-cards">
        <div className="app__footer-card">
          <img src={images.email} />
          <a href="mailto: ankhuetang03@gmail.com" className='p-text'>ankhuetang03@gmail.com</a>
        </div>
        <div className="app__footer-card">
          <img src={images.mobile} />
          <a href="tel: +1 (401) 919 9381" className='p-text'>401-919-9381</a>
        </div>
        <div className="app__footer-form app__flex">
          <div className='app__flex'>
            <input type="text" name='name' className="p-text" placeholder='Your name' value={name} onChange={handleChangeInput} />
          </div>
          <div className='app__flex'>
            <input type="email" name='email' className="p-text" placeholder='Email' value={email} onChange={handleChangeInput} />
          </div>
          <div className='app__flex'>
            <textarea name="message" id="" cols="30" rows="10" className="p-text" placeholder='Your message' value={message} onChange={handleChangeInput}/>
          </div>
          <button type='button' className="p-text" onClick={handleSubmit}>{isLoading? 'Sending': 'Send message' }</button>
        </div>
        {isFormSubmitted && <h3 className="head-text"> Thank you for getting in touch!</h3>}
      </div>
    </>
  )
}

export default AppWrap(MotionWrap(Footer, 'app__footer'), 'contact', 'app__primarybg')
