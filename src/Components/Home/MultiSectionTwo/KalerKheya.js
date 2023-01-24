import React from 'react';
import { Link } from 'react-router-dom';

const KalerKheya = () => {
    return (
        <div className='col-md-3 col-12'>
                <div className='title my-4'>
                    <div className='col-md-12 '>
                        <h6><Link className='font'>
                            <span className='box'></span>
                            কালের খেয়া</Link>
                        </h6>
                    </div>
                </div>
                <div className='DCatStyle'>
                        <div className='DCatStyle2Top'>
                            <div className='col-sm-12 thumbnail'>
                                <Link to='/' className='font'>
                                    <div className='Imgresize'>
                                        <div className='ImgViewer'>
                                            <img src="https://www.emythmaker.com/project/Template/NewsProtal/DailySamakal/Demo-3/media/imgAll/Untitled-56-samakal-63b72092b87b0.jpg" alt="" className='img-fluid' />
                                        </div>
                                        <div class="Desc">
                                            <h3 class="Title">গুচ্ছ গুচ্ছ কবিতা</h3>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className='DCatStyle3List'>
                        <div className='DCatStyle3ListItem'>

                            <Link to='/'> <h4 className='Title'> সভ্যতা-সংস্কৃতি ও নারী</h4></Link>

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

export default KalerKheya;