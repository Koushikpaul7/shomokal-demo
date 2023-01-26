import React from 'react';
import { AiOutlineTwitter } from 'react-icons/ai';
import { BiRss } from 'react-icons/bi';
import { FiFacebook } from 'react-icons/fi';
import { SiInstagram } from 'react-icons/si';
import { TfiYoutube } from 'react-icons/tfi';
import { Link } from 'react-router-dom';
import '../Footer/Footer.css';
const FooterTop = () => {
    return (
        <div className='footer-top d-none d-md-block px-5'>
            <div className='row container'>
                <div className='col-md-6'>
                    <img src=" https://www.emythmaker.com/project/Template/NewsProtal/DailySamakal/Demo-3/media/common/logo.png" className='img-fluid logo' alt=""/>
                </div>
                <div className='col-md-6'>
                <div className='d-flex justify-content-end align-items-center'>
                            <Link to='#' className='social-link me-2'><FiFacebook /></Link>
                            <Link to='#' className='social-link me-2'><AiOutlineTwitter/></Link>
                            <Link to='#' className='social-link me-2'><SiInstagram/></Link>
                            <Link to='#' className='social-link me-2'><TfiYoutube/></Link>
                            <Link to='#' className='social-link'><BiRss/></Link>
                        </div>
                </div>
            </div>
        </div>
    );
};

export default FooterTop;