import React from 'react';
import { BiCalendar } from 'react-icons/bi';
import { FiFacebook } from 'react-icons/fi';
import { AiOutlineTwitter } from 'react-icons/ai';
import { SiInstagram } from 'react-icons/si';
import { TfiYoutube } from 'react-icons/tfi';
import { BiRss } from 'react-icons/bi';
import { Link } from 'react-router-dom';
const NavMid = () => {
    return (
        <div className='py-4 d-none d-md-block'>
            <div className='container nav-font'>
                <div className='row '>
                    <div className='col-md-4  d-flex align-items-center'>
                      
                            <div className='date-time d-flex '>
                              <div>
                              <BiCalendar className='me-2' /><p> বৃহস্পতিবার, ১৯ জানুয়ারি ২০২৩</p>
                              </div>
                                <div>
                                <p> <samp>|</samp> ৪ মাঘ ১৪২৯</p>
                                </div>
                            </div>
                       
                    </div>
                    <div className='col-md-4'>
                        <div className='d-flex justify-content-center'>
                           <Link to='/'> <img src="https://www.emythmaker.com/project/Template/NewsProtal/DailySamakal/Demo-3/media/common/logo.png" alt=""/></Link>
                        </div>
                    </div>
                    <div className='col-md-4'>
                        <div className='d-flex  align-items-center justify-content-end'>
                        <div className='d-flex '>
                            <Link to='#' className='social-link-fb me-2'><FiFacebook/></Link>
                            <Link to='#' className='social-link-twit me-2'><AiOutlineTwitter/></Link>
                            <Link to='#' className='social-link-insta me-2'><SiInstagram/></Link>
                            <Link to='#' className='social-link-u-tube me-2'><TfiYoutube/></Link>
                            <Link to='#' className='social-link-rss'><BiRss/></Link>
                        </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default NavMid;