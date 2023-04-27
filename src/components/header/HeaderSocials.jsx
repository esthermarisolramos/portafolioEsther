import React from 'react';
import { FaFacebook } from 'react-icons/fa';
import { BsWhatsapp } from 'react-icons/bs'

const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a href="https://www.facebook.com/stories/create/" target="_blank" rel="noreferrer" ><FaFacebook /></a>
      <a href="https://wa.me/qr/3MZ3WS477FIFB1/" target="_blank" rel="noreferrer" ><BsWhatsapp /></a>
    </div>
  )
}

export default HeaderSocials