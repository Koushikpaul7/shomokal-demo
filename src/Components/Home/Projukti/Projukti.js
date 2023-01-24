import React from 'react';
import { Link } from 'react-router-dom';
import '../Bangladesh/Bangladesh.css';
import '../Home.css'
const Projukti = () => {
    return (
        <div className='container'>
             <div className='title my-4'>
            <div className='col-md-12 '>
                <h6><Link className='font'>
                    <span className='box'></span>
                    প্রযুক্তি</Link>
                </h6>
                </div>
            </div>
            <div className='row'>
                <div className='col-md-3 col-12'>
                <div className='B-lead'>
                        <Link to='/'>
                            <div className='zoom '>
                                <div className='imgContainer'>
                                    <img src="https://www.emythmaker.com/project/Template/NewsProtal/DailySamakal/Demo-3/media/imgAll/Untitled-1-Recovered-samakal-63b9979de090e.jpg" alt="" className='fix-ratio' />
                                </div>
                            </div>

                        </Link>
                    </div>
                   <Link to='/'> <h3 className='Title'>এন্ট গ্রুপের নিয়ন্ত্রণ ছাড়ছেন জ্যাক মা</h3></Link>
                </div>
                <div className='col-md-3 col-12'>
                <div className='B-lead'>
                        <Link to='/'>
                            <div className='zoom '>
                                <div className='imgContainer'>
                                    <img src="https://www.emythmaker.com/project/Template/NewsProtal/DailySamakal/Demo-3/media/imgAll/Untitled-1-Recovered-samakal-63b997ea09673.jpg" alt="" className='fix-ratio' />
                                </div>
                            </div>

                        </Link>
                    </div>
                    <Link to='/'>  <h3 className='Title'>সিইএস ২০২৩ :আইওটি পণ্য প্রদর্শন করছে ওয়ালটন</h3></Link>
                   
                </div>
                <div className='col-md-3 col-12'>
                <div className='B-lead'>
                        <Link to='/'>
                            <div className='zoom '>
                                <div className='imgContainer'>
                                    <img src="https://www.emythmaker.com/project/Template/NewsProtal/DailySamakal/Demo-3/media/imgAll/TWITTER-samakal-63b7ab78bd56c.jpg" alt="" className='fix-ratio' />
                                </div>
                            </div>

                        </Link>
                    </div>
                    <Link to='/'><h3 className='Title'>টুইটারের ২০ কোটি ব্যবহারকারীর ই-মেইল হ্যাক</h3></Link>
                </div>
                <div className='col-md-3 col-12'>
                <div className='B-lead'>
                        <Link to='/'>
                            <div className='zoom '>
                                <div className='imgContainer'>
                                    <img src="https://www.emythmaker.com/project/Template/NewsProtal/DailySamakal/Demo-3/media/imgAll/Untitled-1-samakal-63a1f9522c1c0.jpg" alt="" className='fix-ratio' />
                                </div>
                            </div>

                        </Link>
                    </div>
                    <Link to='/'> <h3 className='Title'>স্কাইপেতে তাৎক্ষণিক ভাষান্তর সুবিধা চালু</h3></Link>
                </div>
            </div>
        </div>
    );
};

export default Projukti;