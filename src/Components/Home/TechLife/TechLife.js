import React from 'react';
import { Link } from 'react-router-dom';
import '../Bangladesh/Bangladesh.css';
import '../International/International.css';
import Campus from './Campus';
const TechLife = () => {
    return (
        <div>
            <div className='row'>
                <div className='col-md-6 col-12'>
                    <div className='title my-4'>
                        <div className='col-md-12 '>
                            <h6><Link className='font'>
                                <span className='box'></span>
                                টেকলাইফ</Link>
                            </h6>
                        </div>
                    </div>
                    <div className='row border-end'>
                        <div className='col-md-7 col-12 '>
                            <div className='B-lead'>
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
                                <div className='text-decoration-none text-dark'>
                                    <p className='py-1 fw-bold effect B-head'>ফোল্ডিং ফোনের জাদু</p>
                                    <div className='Int-line pb-3'>
                                        <p>নতুন প্রজন্মের ফোন হিসেবে ব্যবহারকারীদের আকৃষ্ট করছে ফোল্ডিং তথা ভাঁজযোগ্য ফোন। ফোল্ডিং ফোন হয়ে উঠেছে ফ্যাশন এবং আভিজাত্যের প্রতীক। নতুন উদ্ভাবনের মাধ্যমে গ্রাহক আকৃষ্টে স্মার্টফোনের শীর্ষ ব্র্যান্ডগুলো এরই মধ্যে ফোল্ডিং ফোন বাজারে এনেছে। এই তালিকায় রয়েছে স্যামসাং, হুয়াওয়ে, মটোরোলা, অপো, শাওমির মতো স্মার্ট ডিভাইস নির্মাতা প্রতিষ্ঠান। </p>
                                    </div>
                                </div>
                            </Link>
                        </div>
                        <div className='Inter-sub'>
                            <div className='row'>
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
                                            <Link className='font'> <p className='Int-sub-head effect'>ভারতে কয়লা খনি ধসে ১০ জন আটকে পড়ার শঙ্কা</p></Link>
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
                                            <Link className='font'> <p className='Int-sub-head effect'>ভারতে কয়লা খনি ধসে ১০ জন আটকে পড়ার শঙ্কা</p></Link>
                                            </div>
                                    </div>
                                </div>
                                <div className='col-md-4 col-12'>
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
                                            <Link className='font'> <p className='Int-sub-head effect'>ভারতে কয়লা খনি ধসে ১০ জন আটকে পড়ার শঙ্কা</p></Link>
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
                            <h6><Link className='font'>
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