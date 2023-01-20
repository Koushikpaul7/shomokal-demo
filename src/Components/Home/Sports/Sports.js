import React from 'react';
import { Link } from 'react-router-dom';
import '../Bangladesh/Bangladesh.css'
import '../Home.css'
import '../Sports/Sports.css'
const Sports = () => {
    return (
        <div className='title my-4'>
            <h6><Link className='font'>
                <span className='box'></span>
                খেলা</Link>
            </h6>
            <div className='row'>
                <div className='col-md-9 col-12'>
                    <div className='row'>
                        <div className='col-md-4 col-12'>
                            <p className='py-1 fw-bold effect B-head'>মাশরাফিকে বিসিবিতে চান পাপন</p>
                            <div className='py-2 Sp-font'>
                                <p>২০২০ সালে সবশেষ জাতীয় দলের হয়ে খেলেছিলেন মাশরাফি বিন মর্তুজা। এরপর জাতীয় দলে না খেললেও খেলছেন দেশের ঘরোয়া টুর্নামেন্টগুলোতে। অনেক ভক্তই চান, মাশরাফি এখন খেলা বাদ দিয়ে ক্রিকেট বোর্ড কিংবা জাতীয় দলের কোনো দায়িত্ব সম্পৃক্ত হোক। বছর দুয়েক আগে মাশরাফি বলেছিলেন, বোর্ড থেকে দায়িত্ব নেওয়ার ব্যাপারে সুনির্দিষ্ট কোনো প্রস্তাব পাননি </p>
                            </div>
                        </div>
                        <div className='col-md-8 col-12'>
                            <div className='B-lead'>
                                <Link to='/'>
                                    <div className='zoom '>
                                        <div className='imgContainer'>
                                            <img src="https://www.emythmaker.com/project/Template/NewsProtal/DailySamakal/Demo-3/media/imgAll/mash-papon-samakal-63bd1e1f60807.webp" alt="" className='fix-ratio-sp' />
                                        </div>
                                    </div>

                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col-md-3 col-12'>
                    <div className='B-lead'>
                        <Link to='/'>
                            <div className='zoom '>
                                <div className='imgContainer'>
                                    <img src="https://www.emythmaker.com/project/Template/NewsProtal/DailySamakal/Demo-3/media/imgAll/Alisson-samakal-63ba4fa041638.jpg" alt="" className='fix-ratio' />
                                </div>
                            </div>
                        </Link>
                    </div>
                    <p className='py-1 fw-bold effect B-head'>অ্যালিসনের ‘শিশুতোষ’ ভুল, অফসাইড বিতর্কে হার এড়াল লিভারপুল</p>
                    <div className='py-2 Sp-font'>
                        <p>লিভারপুল কোচ জার্গেন ক্লপের কাছে ফুটবল বিশ্লেষক ও ভক্তদের আর্জি- নতুন মিডফিল্ডার সাইন করান। ইনজুরি জর্জরিত দল তার। মিডফিল্ডাররা নিয়মিত খেলতে পারছেন না।</p>
                    </div>
                </div>
                {/* bottom part */}
                <div className='row mt-4'>
                    <div className='col-md-3 col-12'>
                        <div className='B-lead'>
                            <Link to='/'>
                                <div className='zoom '>
                                    <div className='imgContainer'>
                                        <img src="https://www.emythmaker.com/project/Template/NewsProtal/DailySamakal/Demo-3/media/imgAll/henry-samakal-63baa30722392.webp" alt="" className='fix-ratio' />
                                    </div>
                                </div>
                            </Link>
                        </div>
                        <p className='py-1 fw-bold effect Sp-head'>ইনজুরিতে পাকিস্তান ও ভারতের বিপক্ষে নেই হেনরি</p>
                    </div>
                    <div className='col-md-3 col-12'>
                        <div className='B-lead'>
                            <Link to='/'>
                                <div className='zoom '>
                                    <div className='imgContainer'>
                                        <img src="https://www.emythmaker.com/project/Template/NewsProtal/DailySamakal/Demo-3/media/imgAll/martinez-samakal-63ba6c0541c44.webp" alt="" className='fix-ratio' />
                                    </div>
                                </div>
                            </Link>
                        </div>
                        <p className='py-1 fw-bold effect Sp-head'>পর্তুগালের কোচ হচ্ছেন রবার্তো মার্টিনেজ</p>
                    </div>
                    <div className='col-md-3 col-12'>
                        <div className='B-lead'>
                            <Link to='/'>
                                <div className='zoom '>
                                    <div className='imgContainer'>
                                        <img src="https://www.emythmaker.com/project/Template/NewsProtal/DailySamakal/Demo-3/media/imgAll/khwaja-samakal-63bab7316d251.webp" alt="" className='fix-ratio' />
                                    </div>
                                </div>
                            </Link>
                        </div>
                        <p className='py-1 fw-bold effect Sp-head'>সিডনি টেস্ট ড্র, ২০০ করতে না পারার আক্ষেপ নেই খাজার</p>
                    </div>
                    <div className='col-md-3 col-12'>
                        <div className='B-lead'>
                            <Link to='/'>
                                <div className='zoom '>
                                    <div className='imgContainer'>
                                        <img src="https://www.emythmaker.com/project/Template/NewsProtal/DailySamakal/Demo-3/media/imgAll/shakib-1-samakal-63b98131427a3.webp" alt="" className='fix-ratio' />
                                    </div>
                                </div>
                            </Link>
                        </div>
                        <p className='py-1 fw-bold effect Sp-head'>সাকিব ঝড়ে রান পাহাড়ে বরিশাল</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Sports;