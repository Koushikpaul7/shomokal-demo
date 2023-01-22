import React from 'react';
import { Link } from 'react-router-dom';
import '../PhotoGallery/Photo.css';
import '../Home.css'
const PhotoSide = () => {
    return (
       <div>
        <div className='DPhotoGalleryList'>
         <Link className='font'>
         <div className='row g-2'>
             <div className='col-md-7 col-12 '>
           <p className='p-2'>  একে অপরকে মাস্ক পরালেন দুই প্রার্থী</p>
            </div>
            <div className='col-md-5 col-12'>
              <img src="https://www.emythmaker.com/project/Template/NewsProtal/DailySamakal/Demo-3/media/imgAll/1_0.jpg" className='img-fluid' alt=""/>
            </div>
             <div className='col-md-7 col-12'>
           <p className='p-2'>  একে অপরকে মাস্ক পরালেন দুই প্রার্থী</p>
            </div>
            <div className='col-md-5 col-12'>
              <img src="https://www.emythmaker.com/project/Template/NewsProtal/DailySamakal/Demo-3/media/imgAll/1_0.jpg" className='img-fluid' alt=""/>
            </div>
             <div className='col-md-7 col-12'>
           <p className='p-2'>  একে অপরকে মাস্ক পরালেন দুই প্রার্থী</p>
            </div>
            <div className='col-md-5 col-12'>
              <img src="https://www.emythmaker.com/project/Template/NewsProtal/DailySamakal/Demo-3/media/imgAll/1_0.jpg" className='img-fluid' alt=""/>
            </div>
             <div className='col-md-7 col-12'>
           <p className='p-2'>  একে অপরকে মাস্ক পরালেন দুই প্রার্থী</p>
            </div>
            <div className='col-md-5 col-12'>
              <img src="https://www.emythmaker.com/project/Template/NewsProtal/DailySamakal/Demo-3/media/imgAll/1_0.jpg" className='img-fluid' alt=""/>
            </div>
        </div></Link>
       </div>
       </div>
    );
};

export default PhotoSide;