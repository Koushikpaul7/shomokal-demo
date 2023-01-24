import React from 'react';
import '../Footer/Footer.css';
const FooterBottom = () => {
    return (
        <div className='footer-bottom px-5'>
            <div className='row '>
                <div className='col-md-4 col-12'>
                <div class="DFooterLink">
                        <ul>
                            <li><a href="https://www.emythmaker.com/project/Template/NewsProtal/DailySamakal/Demo-3/">PRIVACY POLICY</a></li>
                            <li><a href="https://www.emythmaker.com/project/Template/NewsProtal/DailySamakal/Demo-3/">TERMS OF USE</a></li>
                        </ul>
                    </div>
                </div>
                <div className='col-md-8 col-12 d-flex justify-content-end'>
                <p className='text-white'>© ২০২৩ |সমকাল কর্তৃক সর্বসত্ব ® সংরক্ষিত | উন্নয়নে ইমিথমেকারস.কম</p>
                </div>
            </div>
        </div>
    );
};

export default FooterBottom;