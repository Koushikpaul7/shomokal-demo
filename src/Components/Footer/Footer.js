import React from 'react';
import FooterBottom from './FooterBottom';
import FooterTop from './FooterTop';

const Footer = () => {
    return (
        <div className=''>
            <FooterTop />
            <div className='main-footer px-5'>
                <div className='row'>
                    <div className='col-md-6 col-12'>
                        <div class="DAddress">
                            <h6>ভারপ্রাপ্ত সম্পাদক : মোজাম্মেল হোসেন। প্রকাশক : আবুল কালাম আজাদ</h6>
                            <p>টাইমস মিডিয়া ভবন (৫ম তলা) | ৩৮৭ তেজগাঁও শিল্প এলাকা, ঢাকা - ১২০৮ ।</p>
                            <p>ফোন : <a href="tel:৫৫০২৯৮৩২-৩৮">৫৫০২৯৮৩২-৩৮</a></p>
                            <p>বিজ্ঞাপন : <a href="tel:+৮৮০১৭১৪০৮০৩৭৮">+৮৮০১৭১৪০৮০৩৭৮</a></p>
                            <p>ই-মেইল: <a href="mailto:samakalad@gmail.com">samakalad@gmail.com</a>, <a href="mailto:marketingonline@samakal.com">marketingonline@samakal.com</a></p>
                        </div>
                    </div>
                    <div className='col-md-6 col-12'>
                        <div class="AboutMenu">
                            <ul>
                                <li><a href="https://www.emythmaker.com/project/Template/NewsProtal/DailySamakal/Demo-3/">বিশেষ আয়োজন</a></li>
                                <li><a href="https://www.emythmaker.com/project/Template/NewsProtal/DailySamakal/Demo-3/">কালের খেয়া</a></li>
                                <li><a href="https://www.emythmaker.com/project/Template/NewsProtal/DailySamakal/Demo-3/">ছবি</a></li>
                                <li><a href="https://www.emythmaker.com/project/Template/NewsProtal/DailySamakal/Demo-3/">ভিডিও</a></li>
                                <li><a href="https://www.emythmaker.com/project/Template/NewsProtal/DailySamakal/Demo-3/">ই-পেপার</a></li>
                                <li><a href="https://www.emythmaker.com/project/Template/NewsProtal/DailySamakal/Demo-3/">ফিচার</a></li>
                                <li><a href="https://www.emythmaker.com/project/Template/NewsProtal/DailySamakal/Demo-3/">মতামত</a></li>
                                <li><a href="https://www.emythmaker.com/project/Template/NewsProtal/DailySamakal/Demo-3/">ইউনিকোড কনভার্টার</a></li>
                                <li><a href="https://www.emythmaker.com/project/Template/NewsProtal/DailySamakal/Demo-3/">আজকের পত্রিকা</a></li>
                                <li><a href="https://www.emythmaker.com/project/Template/NewsProtal/DailySamakal/Demo-3/">ফেসবুক লাইভ</a></li>
                                <li><a href="https://www.emythmaker.com/project/Template/NewsProtal/DailySamakal/Demo-3/">বিজ্ঞাপন মূল্য তালিকা</a></li>
                                <li><a href="https://www.emythmaker.com/project/Template/NewsProtal/DailySamakal/Demo-3/">আর্কাইভ</a></li>
                            </ul>
                        </div>
                    </div>
                    
                </div>
            </div>
            <FooterBottom/>
        </div>
    );
};

export default Footer;