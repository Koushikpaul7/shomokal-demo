import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import "../VideoGallery/Slider.css";
import '../VideoGallery/VedioGallery.css'
// import required modules
import { FreeMode, Pagination } from "swiper";
import { Link } from 'react-router-dom';
const Slider = () => {
    return (
        <div className='mt-4'>
        <Swiper
        slidesPerView={4}
        loop={true}
        spaceBetween={30}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide><div className='DVideoGalleryTopItem'>
                        <div className='col-sm-12 thumbnail'>
                            <Link to='/'>
                            <img src="https://www.emythmaker.com/project/Template/NewsProtal/DailySamakal/Demo-3/media/imgAll/pori-samakal-63b92ddb1e951.webp" className='img-fluid' alt=""/>
                            <div class="card-video-img transition"></div>
                            
                            </Link>
                        </div>
                    </div></SwiperSlide>

        <SwiperSlide><div className='DVideoGalleryTopItem'>
                        <div className='col-sm-12 thumbnail'>
                            <Link to='/'>
                            <img src="https://www.emythmaker.com/project/Template/NewsProtal/DailySamakal/Demo-3/media/imgAll/Untitled-4-samakal-631cd7f8dd490.webp" className='img-fluid' alt=""/>
                            <div class="card-video-img transition"></div>
                           
                            </Link>
                        </div>
                    </div></SwiperSlide>
        <SwiperSlide><div className='DVideoGalleryTopItem'>
                        <div className='col-sm-12 thumbnail'>
                            <Link to='/'>
                            <img src="https://www.emythmaker.com/project/Template/NewsProtal/DailySamakal/Demo-3/media/imgAll/2-samakal-63b3b8b843a03.jpg" className='img-fluid' alt=""/>
                            <div class="card-video-img transition"></div>
                           
                            </Link>
                        </div>
                    </div></SwiperSlide>
        <SwiperSlide><div className='DVideoGalleryTopItem'>
                        <div className='col-sm-12 thumbnail'>
                            <Link to='/'>
                            <img src="https://www.emythmaker.com/project/Template/NewsProtal/DailySamakal/Demo-3/media/imgAll/mahia12-samakal-63ad95af3b438.webp" className='img-fluid' alt=""/>
                            <div class="card-video-img transition"></div>
                            
                            </Link>
                        </div>
                    </div></SwiperSlide>
        <SwiperSlide><div className='DVideoGalleryTopItem'>
                        <div className='col-sm-12 thumbnail'>
                            <Link to='/'>
                            <img src="https://www.emythmaker.com/project/Template/NewsProtal/DailySamakal/Demo-3/media/imgAll/pori-samakal-63b92ddb1e951.webp" className='img-fluid' alt=""/>
                            <div class="card-video-img transition"></div>
                            
                            </Link>
                        </div>
                    </div></SwiperSlide>
        
      </Swiper>
    </div>
    );
};

export default Slider;