import React from 'react';
import { Link } from 'react-router-dom';
import '../Bangladesh/Bangladesh.css';
import '../International/International.css';
import Campus from './Campus';
const TechLife = () => {
    return (
        <div className='container'>
            <div className='row border-bottom pb-3'>
                <div className='col-md-6 col-12'>
                    <div className='title my-4'>
                        <div className='col-md-12 '>
                            <h6><Link to='/' className='font'>
                                <span className='box'></span>
                                টেকলাইফ</Link>
                            </h6>
                        </div>
                    </div>
                    <div className='row '>
                      <div className='col-md-12 border-end'>
                        <div className='row DTechCamTop'>
                        <div className='col-md-7 col-12 '>
                            <div className='lead'>
                                <Link to='/'>
                                    <div className='zoom '>
                                        <div className='imgContainer'>
                                            <img src="https://www.emythmaker.com/project/Template/NewsProtal/DailySamakal/Demo-3//media/imgAll/Untitled-27-samakal-63bb17ca6af77.webp" alt="" className='fix-ratio' />
                                        </div>
                                    </div>

                                </Link>
                            </div>
                        </div>
                        <div className='col-md-5 col-12'>
                            <Link to='/'>
                             
                                    <h3 className='Title'>ফোল্ডিং ফোনের জাদু</h3>
                                    <div className='Brief'>
                                        <p>নতুন প্রজন্মের ফোন হিসেবে ব্যবহারকারীদের আকৃষ্ট করছে ফোল্ডিং তথা ভাঁজযোগ্য ফোন। ফোল্ডিং ফোন হয়ে উঠেছে ফ্যাশন এবং আভিজাত্যের প্রতীক। নতুন উদ্ভাবনের মাধ্যমে গ্রাহক আকৃষ্টে স্মার্টফোনের শীর্ষ ব্র্যান্ডগুলো এরই মধ্যে ফোল্ডিং ফোন বাজারে এনেছে। এই তালিকায় রয়েছে স্যামসাং, হুয়াওয়ে, মটোরোলা, অপো, শাওমির মতো স্মার্ট ডিভাইস নির্মাতা প্রতিষ্ঠান। </p>
                                    </div>
                              
                            </Link>
                        </div>
                        </div>
                      </div>
                        <div className='Inter-sub DTechCam3List'>
                            <div className='row'>
                                <div className='col-md-4 col-12 border-end'>
                                    <div className='Inter-sub-list'>
                                        <div className='col-md-12 col-5'>
                                                <div className='lead'>
                                                    <Link to='/'>
                                                        <div className='zoom '>
                                                            <div className='imgContainer'>
                                                                <img src="https://www.emythmaker.com/project/Template/NewsProtal/DailySamakal/Demo-3/media/imgAll/Obaidur-Kader--samakal-63b96d5d964f9.jpg" alt="" className='fix-ratio' />
                                                            </div>
                                                        </div>

                                                    </Link>
                                                </div>
                                            </div>
                                            <div className='col-md-12 col-7 '>
                                            <Link to='/' className='font'> <h3 className='Title'>ভারতে কয়লা খনি ধসে ১০ জন আটকে পড়ার শঙ্কা</h3></Link>
                                            </div>
                                    </div>
                                </div>
                                <div className='col-md-4 col-12 border-end'>
                                    <div className='Inter-sub-list'>
                                        <div className='col-md-12 col-5'>
                                                <div className='B-lead'>
                                                    <Link to='/'>
                                                        <div className='zoom '>
                                                            <div className='imgContainer'>
                                                                <img src="https://www.emythmaker.com/project/Template/NewsProtal/DailySamakal/Demo-3/media/imgAll/Obaidur-Kader--samakal-63b96d5d964f9.jpg" alt="" className='fix-ratio' />
                                                            </div>
                                                        </div>

                                                    </Link>
                                                </div>
                                            </div>
                                            <div className='col-md-12 col-7 '>
                                            <Link to='/' className='font'> <h3 className='Title'>ভারতে কয়লা খনি ধসে ১০ জন আটকে পড়ার শঙ্কা</h3></Link>
                                            </div>
                                    </div>
                                </div>
                                <div className='col-md-4 col-12 border-end'>
                                    <div className='Inter-sub-list '>
                                        <div className='col-md-12 col-5'>
                                                <div className='B-lead'>
                                                    <Link to='/'>
                                                        <div className='zoom '>
                                                            <div className='imgContainer'>
                                                                <img src="https://www.emythmaker.com/project/Template/NewsProtal/DailySamakal/Demo-3/media/imgAll/Obaidur-Kader--samakal-63b96d5d964f9.jpg" alt="" className='fix-ratio' />
                                                            </div>
                                                        </div>

                                                    </Link>
                                                </div>
                                            </div>
                                            <div className='col-md-12 col-7 '>
                                            <Link to='/' className='font'> <h3 className='Title'>ভারতে কয়লা খনি ধসে ১০ জন আটকে পড়ার শঙ্কা</h3></Link>
                                            </div>
                                    </div>
                                </div>
                               
                            </div>
                        </div>
                    </div>
                </div>
                {/* Economics */}
                <div className='col-md-6 col-12'>
                    <div className='title my-4'>
                        <div className='col-md-12 '>
                            <h6><Link to='/' className='font'>
                                <span className='box'></span>
                                ক্যাম্পাস</Link>
                            </h6>
                        </div>
                    </div>
                    <Campus/>
                </div>
            </div>
        </div>
    );
};

export default TechLife;