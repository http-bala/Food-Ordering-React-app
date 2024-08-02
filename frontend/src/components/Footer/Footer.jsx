import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
    return (
        <div className='footer' id='footer'>
            <div className="footer-content">
                <div className="footer-content-left">
                    <img src={assets.logo} alt=''/>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Soluta vitae, minima illum quos illo optio rem, exercitationem magnam quo nesciunt, earum deserunt ipsum quisquam neque labore qui officia quis! Voluptatum.</p>
                    <div className="footer-social-icons">
                        <img src={assets.facebook_icon} alt='facebook'/>
                        <img src={assets.twitter_icon} alt='twitter'/>
                        <img src={assets.linkedin_icon} alt='instagram'/>
                    </div>
                </div>

                <div className="footer-content-center">
                    <h2>Company</h2>
                    <ul>
                        <li>Home</li>
                        <li>About us</li>
                        <li>Delivery</li>
                        <li>Privacy Policy</li>
                    </ul>
                </div>

                <div className="footer-content-right">
                    <h2>GET IN TOUCH</h2>
                    <ul>
                        <li>+1-212-456-7890</li>
                        <li>contact@tamato.com</li>
                    </ul>
                </div>
            </div>
            <hr />
            <p className="footer-copyright">Copyright 2024 Tomato.com-All Right Reserved.</p>
        </div>
    )
}

export default Footer