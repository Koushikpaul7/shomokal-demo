import React from 'react';
import { Link } from 'react-router-dom';
import '../Home.css';
import { AiOutlineDoubleRight } from 'react-icons/ai';
const BannerSide = () => {
    return (
        
        <div className='col-md-3 col-12 '>
            <div className='row'>
                <div className='col-12 col-md-12 d-flex justify-content-center'>
                    <img src="https://www.emythmaker.com/project/Template/NewsProtal/DailySamakal/Demo-3/media/Advertisement/Advertisement%20(300X250).png" className='img-fluid' alt="" />
                </div>
                
                    {/* Tab section  */}
                <div className='side-heading' id="exTab1">
                    <div className='mt-2  background text-center border-bottom '>
                        
                    
                        <ul class="nav nav-pills">
                            <li class="active  col-md-6">
                                <Link
                                   to="#1a" data-toggle="tab"
                                ><p className='bg text-dark p-3'>সর্বশেষ</p></Link>
                            </li>
                            <li class="nav-item col-md-6" role="presentation">
                                <a
                                    href="#2a" data-toggle="tab"><p className='bg text-dark p-3'>সর্বশেষ</p></a>
                            </li>
                            </ul>
                       
                    </div>
                    <div className='bodyHeight tab-content clearfix'>
                        <div className='tab-pane active' id="1a" >
                            <div className='d-flex flex-row latest py-2 border-bottom' >
                                <div className='d-flex align-items-center'>
                                    <span>১</span>
                                </div>
                                <p className=''>গুচ্ছ ভর্তি পরীক্ষায় প্রতি আসনে লড়বেন ১০ শিক্ষার্থী</p>
                            </div>
                            <div className='d-flex flex-row latest py-3 border-bottom'>
                                <div className='d-flex align-items-center'>
                                    <span>২</span>
                                </div>
                                <p className=''>অসাম্প্রদায়িক চেতনায় বাংলাদেশ গড়তে চাই ॥ প্রধানমন্ত্রী</p>
                            </div>
                            <div className='d-flex flex-row latest py-3 border-bottom'>
                                <div className='d-flex align-items-center'>
                                    <span>৩</span>
                                </div>
                                <p className=''>বাংলাদেশকে ১৪১ রানের লক্ষ্য ছুড়ে দিলো স্কটল্যান্ড</p>
                            </div>
                            <div className='d-flex flex-row latest py-3 border-bottom'>
                                <div className='d-flex align-items-center'>
                                    <span>৪</span>
                                </div>
                                <p className=''>
                                    আগামী নির্বাচনে সরকারের কোনো হস্তক্ষেপ থাকবে না: ওবায়দুল</p>
                            </div>
                            <div className='d-flex flex-row latest py-3 border-bottom'>
                                <div className='d-flex align-items-center'>
                                    <span>৫</span>
                                </div>
                                <p className=''>মুহিবুল্লাহ হত্যাকান্ডে জড়িত সন্দেহে আরসা ক্যাডার গ্রেফতার</p>
                            </div>
                            <div className='d-flex flex-row latest py-3 border-bottom'>
                                <div className='d-flex align-items-center'>
                                    <span>৬</span>
                                </div>
                                <p className=''>মার্কিন ধর্ম প্রচারকসহ পরিবারের ১৭ জন অপহৃত</p>
                            </div>
                            <div className='d-flex flex-row latest py-3 border-bottom'>
                                <div className='d-flex align-items-center'>
                                    <span>৭</span>
                                </div>
                                <p className=''>পীরগঞ্জে হিন্দু পল্লীতে আগুনের ঘটনায় ৪১ জন গ্রেপ্তার</p>
                            </div>
                        </div>
                        <div className='tab-pane ' id="2a" >
                            
                            <div className='d-flex flex-row latest py-3 border-bottom'>
                                <div className='d-flex align-items-center'>
                                    <span>১</span>
                                </div>
                                <p className=''>অসাম্প্রদায়িক চেতনায় বাংলাদেশ গড়তে চাই ॥ প্রধানমন্ত্রী</p>
                            </div>
                            <div className='d-flex flex-row latest py-2 border-bottom' >
                                <div className='d-flex align-items-center'>
                                    <span>২</span>
                                </div>
                                <p className=''>গুচ্ছ ভর্তি পরীক্ষায় প্রতি আসনে লড়বেন ১০ শিক্ষার্থী</p>
                            </div>
                            <div className='d-flex flex-row latest py-3 border-bottom'>
                                <div className='d-flex align-items-center'>
                                    <span>৩</span>
                                </div>
                                <p className=''>বাংলাদেশকে ১৪১ রানের লক্ষ্য ছুড়ে দিলো স্কটল্যান্ড</p>
                            </div>
                            <div className='d-flex flex-row latest py-3 border-bottom'>
                                <div className='d-flex align-items-center'>
                                    <span>৪</span>
                                </div>
                                <p className=''>
                                    আগামী নির্বাচনে সরকারের কোনো হস্তক্ষেপ থাকবে না: ওবায়দুল</p>
                            </div>
                            <div className='d-flex flex-row latest py-3 border-bottom'>
                                <div className='d-flex align-items-center'>
                                    <span>৫</span>
                                </div>
                                <p className=''>মুহিবুল্লাহ হত্যাকান্ডে জড়িত সন্দেহে আরসা ক্যাডার গ্রেফতার</p>
                            </div>
                            <div className='d-flex flex-row latest py-3 border-bottom'>
                                <div className='d-flex align-items-center'>
                                    <span>৬</span>
                                </div>
                                <p className=''>মার্কিন ধর্ম প্রচারকসহ পরিবারের ১৭ জন অপহৃত</p>
                            </div>
                            <div className='d-flex flex-row latest py-3 border-bottom'>
                                <div className='d-flex align-items-center'>
                                    <span>৭</span>
                                </div>
                                <p className=''>পীরগঞ্জে হিন্দু পল্লীতে আগুনের ঘটনায় ৪১ জন গ্রেপ্তার</p>
                            </div>
                        </div>
                    </div>
                    <div className='allnews-btn'>
                        <Link to='#'> <p className='d-flex align-items-center justify-content-center'>সব খবর <AiOutlineDoubleRight /></p></Link>
                    </div>
                </div>
                <div className='col-12 col-md-12'>
                    <div className='mt-2'>
                        <img src="https://www.emythmaker.com/project/Template/NewsProtal/DailySamakal/Demo-3/media/common/namaz.png" className='img-fluid' alt="" />
                    </div>
                    <div className='table-bg table-responsive'>
                        <table className='table'>
                            <tbody>
                                <tr>
                                    <td>ফজর</td>
                                    <td>৪:৫৮ ভোর</td>
                                </tr>
                                <tr>
                                    <td>যোহর</td>
                                    <td>১১:৪৭ দুপুর
                                    </td>
                                </tr>
                                <tr>
                                    <td>আছর</td>
                                    <td>৩:৩৬ বিকেল
                                    </td>
                                </tr>
                                <tr>
                                    <td>মাগরিব</td>
                                    <td>৫:১৫ সন্ধ্যা</td>
                                </tr>
                                <tr>
                                    <td>ইশা</td>
                                    <td>৬:৩২ রাত</td>
                                </tr>
                            </tbody>
                        </table>
                        <p className='py-2 px-2 text-center'>ঢাকা, মঙ্গলবার, ১৭ জানুয়ারি ২০২৩ </p>
                    </div>
                </div>
            
        </div>
        </div>
    );
};

export default BannerSide;