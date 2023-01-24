import React from 'react';
import { Link } from 'react-router-dom';
import '../PhotoGallery/Photo.css';
import '../Bangladesh/Bangladesh.css';
import '../MultiSection/Multi.css';
import '../Home.css';
import PhotoSide from './PhotoSide';
const PhotoGallery = () => {
    return (
        <div className='photo'>
            <div className='container'>
            <div className='title my-4'>
                <div className='col-md-12 '>
                    <h6><Link className='font'>
                        <span className='box'></span>
                        ফটো গ্যালারী</Link>
                    </h6>
                </div>
            </div>
            <div className='row'>
                <div className='col-md-8 col-12'>
                    <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
                        <div class="carousel-inner">
                            <div class="carousel-item active">
                                <div className='DCatStyle'>
                                    <div className='DCatStyle2Top'>
                                        <div className='col-sm-12 thumbnail'>
                                            <Link to='/'>
                                                <div className='Imgresize VideoIcon'>
                                                    <div className='ImgViewer'>
                                                        <img src="https://www.emythmaker.com/project/Template/NewsProtal/DailySamakal/Demo-3/media/imgAll/Ctg-_-Accsident_-12--700x400-629cb2a283608.webp" alt="" className=' d-block w-100' />
                                                    </div>
                                                    <div class="Desc">
                                                        <h3 class="Title2">ঘন কুয়াশায় শাহজালাল বিমানবন্দরে ফ্লাইটের অবতরণ-উড্ডয়ন বন্ধ</h3>
                                                    </div>
                                                </div>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="carousel-item">
                                <div className='DCatStyle'>
                                    <div className='DCatStyle2Top'>
                                        <div className='col-sm-12 thumbnail'>
                                            <Link to='/'>
                                                <div className='Imgresize'>
                                                    <div className='ImgViewer VideoIcon'>
                                                        <img src="https://www.emythmaker.com/project/Template/NewsProtal/DailySamakal/Demo-3/media/imgAll/chatak-1-62b3124721d6d.jpg" alt="" className=' d-block w-100' />
                                                    </div>
                                                    <div class="Desc">
                                                        <h3 class="Title2">ঘন কুয়াশায় শাহজালাল বিমানবন্দরে ফ্লাইটের অবতরণ-উড্ডয়ন বন্ধ</h3>
                                                    </div>
                                                </div>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="carousel-item">
                                <div className='DCatStyle'>
                                    <div className='DCatStyle2Top'>
                                        <div className='col-sm-12 thumbnail'>
                                            <Link to='/'>
                                                <div className='Imgresize'>
                                                    <div className='ImgViewer VideoIcon'>
                                                        <img src="https://www.emythmaker.com/project/Template/NewsProtal/DailySamakal/Demo-3/media/imgAll/flight-r-samakal-63ba385f47357.webp" alt="" className=' d-block w-100' />
                                                    </div>
                                                    <div class="Desc">
                                                        <h3 class="Title2">ঘন কুয়াশায় শাহজালাল বিমানবন্দরে ফ্লাইটের অবতরণ-উড্ডয়ন বন্ধ</h3>
                                                    </div>
                                                </div>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Previous</span>
                        </button>
                        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>
                <div className='col-md-4 col-12'>
                    <PhotoSide/>
                </div>

            </div>
            </div>
        </div>
    );
};

export default PhotoGallery; <div>

</div>