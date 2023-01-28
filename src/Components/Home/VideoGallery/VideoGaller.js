import React from 'react';
import { Link } from 'react-router-dom';
import '../Bangladesh/Bangladesh.css';
import '../MultiSection/Multi.css'
import '../VideoGallery/VedioGallery.css'
import Slider from './Slider';
const VideoGaller = () => {
    return (
        <div className='gallery '>
            <div className='container'>
            <div className='title '>
            <div className='col-md-12 '>
                <h6><Link to='/' className='font text-white'>
                <span className='box '></span>
                ভিডিও</Link>
                </h6>
            </div>
            </div>
            <div className='row'>
                <div className='col-md-4 col-12'>
                <div className='DVideoGalleryTopItem'>
                        <div className='DCatStyle'>
                            <div className='DCatStyle2Top'>
                            <div className='col-sm-12 thumbnail'>
                            <Link to='/'>
                            <div  className='Imgresize'>
                                <div className='ImgViewer'>
                                <img src="https://www.emythmaker.com/project/Template/NewsProtal/DailySamakal/Demo-3/media/imgAll/pori-samakal-63b92ddb1e951.webp" title='...' className='img-fluid' alt=""/>
                            <div class="card-video-img transition"></div>
                                </div>
                            </div>
                            <div class="Desc">
                                        <h3 class="Title2">মান-অভিমান শেষ, দুবাই যাচ্ছেন রাজ-পরী</h3>
                                    </div>
                            </Link>
                        </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col-md-8 col-12'>
                    <div className='row'>
                    <div className='col-md-6 col-6'>
                    <div className='DVideoGalleryTopItem'>
                        <div className='DCatStyle'>
                            <div className='DCatStyle2Top'>
                            <div className='col-sm-12 thumbnail'>
                            <Link to='/'>
                            <div  className='Imgresize'>
                                <div className='ImgViewer'>
                                <img src="https://www.emythmaker.com/project/Template/NewsProtal/DailySamakal/Demo-3/media/imgAll/pori-samakal-63b92ddb1e951.webp" title='...' className='img-fluid' alt=""/>
                            <div class="card-video-img transition"></div>
                                </div>
                            </div>
                            <div class="Desc">
                                        <h3 class="Title2">মান-অভিমান শেষ, দুবাই যাচ্ছেন রাজ-পরী</h3>
                                    </div>
                            </Link>
                        </div>
                            </div>
                        </div>
                    </div>
                        </div>
                    <div className='col-md-6 col-6'>
                    <div className='DVideoGalleryTopItem'>
                        <div className='DCatStyle'>
                            <div className='DCatStyle2Top'>
                            <div className='col-sm-12 thumbnail'>
                            <Link to='/'>
                            <div  className='Imgresize'>
                                <div className='ImgViewer'>
                                <img src="https://www.emythmaker.com/project/Template/NewsProtal/DailySamakal/Demo-3/media/imgAll/pori-samakal-63b92ddb1e951.webp" title='...' className='img-fluid' alt=""/>
                            <div class="card-video-img transition"></div>
                                </div>
                            </div>
                            <div class="Desc">
                                        <h3 class="Title2">মান-অভিমান শেষ, দুবাই যাচ্ছেন রাজ-পরী</h3>
                                    </div>
                            </Link>
                        </div>
                            </div>
                        </div>
                    </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>

            {/* slider */}
            <Slider/>
        </div>
    );
};

export default VideoGaller;