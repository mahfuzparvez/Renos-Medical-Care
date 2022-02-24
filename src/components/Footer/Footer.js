import React from 'react';
import './Footer.css';
import { BsFacebook, BsMessenger, BsTwitter, BsWhatsapp } from "react-icons/bs";
const Footer = () => {
    return (
        <div id='footer'>
            <div>
                <img className='footerlogo' src="https://i.postimg.cc/wTkc9PCL/logo-template-1.png" alt="" /><br />
                <small id='hiden'>©2022 Renos Medical Care All rights reserved</small>
            </div>
            <div className='mt-4'>
                <p>Contact us</p>
                <p>Events</p>
                <p>Career</p>
                <div id='icon'><p><BsFacebook /></p><p className='ms-4'><BsMessenger /></p><p className='ms-4'>< BsTwitter /></p><p className='ms-4'><BsWhatsapp /></p></div>
            </div>
        </div>
    );
};

export default Footer;