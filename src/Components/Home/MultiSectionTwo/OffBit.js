import React from 'react';
import { Link } from 'react-router-dom';

const OffBit = () => {
    return (
        <div className='col-md-3 col-12'>
            <div className='title my-4'>
                <div className='col-md-12 '>
                    <h6><Link to='/' className='font'>
                        <span className='box'></span>
                        অফবিট</Link>
                    </h6>
                </div>
            </div>
            <div className='DCatStyle'>
                        <div className='DCatStyle2Top'>
                            <div className='col-sm-12 thumbnail'>
                                <Link to='/' className='font'>
                                    <div className='Imgresize'>
                                        <div className='ImgViewer'>
                                            <img src="https://www.emythmaker.com/project/Template/NewsProtal/DailySamakal/Demo-3/media/imgAll/----4-samakal-63ba732358e25.webp" alt="" className='img-fluid' />
                                        </div>
                                        <div class="Desc">
                                            <h3 class="Title">এক কুকুরের দাম উঠল ২০ কোটি রুপি!</h3>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className='DCatStyle3List'>
                        <div className='DCatStyle3ListItem'>

                            <Link to='/'> <h5 className='Title'>এসএসসি পাসেই শ্রম ও কর্মসংস্থান মন্ত্রণালয়ে চাকরির সুযোগ</h5></Link>

                        </div>
                        <div className='DCatStyle3ListItem'>
                            <Link to='/'><h3 className='Title'>  ১২ পদে ২২৩৭ জনকে নিয়োগ দেবে এলজিইডি</h3></Link>
                        </div>
                        <div className='DCatStyle3ListItem'>
                            <Link to='/'><h3 className='Title'>   এমপিওভুক্ত ৬৮ হাজার শিক্ষক নিয়োগে বিজ্ঞপ্তি</h3></Link>
                        </div>
                    </div>
        </div>
    );
};

export default OffBit;