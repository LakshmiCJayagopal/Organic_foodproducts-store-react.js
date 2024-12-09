import React from 'react'
import './footer.css'
import footerlogo from "../assets/ecolivelogo.webp"
import instagram from '../assets/instagram_icon.png'
import pint from '../assets/pintester_icon.png'
import whatsapp from '../assets/whatsapp_icon.png'
import { Link } from 'react-router-dom'
const Footer = () => {
  return (
<div className='footer'>
<div className="footerlogo">
        <img src={footerlogo} alt="" />
        <p>ECO LIVE</p>
 </div>
      <ul className="footerlinks">
      <li>Company</li>  
      <Link style={{textDecoration:"none"}} to='/faq'> <li>FAQ</li> </Link> 
        <li>Offices</li>
        <Link  style={{textDecoration:"none"}} to='/about'> <li>About</li> </Link> 
        <Link style={{textDecoration:"none"}} to='/contact'><li>Contact</li> </Link>  </ul>
      <div className="footer-social-icon">
        <div className="footer-icons-container">
            <img src={instagram} alt="" />
        </div>
        <div className="footer-icons-container">
            <img src={pint} alt="" />
        </div>
        <div className="footer-icons-container">
            <img src={whatsapp} alt="" />
        </div>
      </div>
      <div className="footer-copyright">
        <hr />
        <p>Copyright @ 2024 - All Right Reserved.</p>
      </div>
    </div>
  )
}

export default Footer
;