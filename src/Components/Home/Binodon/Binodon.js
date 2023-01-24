import React from 'react';
import { Link } from 'react-router-dom';
import '../Binodon/Binodon.css'
import '../Bangladesh/Bangladesh.css'
const Binodon = () => {
    return (
        <div className='title my-3'>
            <div className='col-md-12 '>
                <h6><Link className='font'>
                    <span className='box'></span>
                    বিনোদন</Link>
                </h6>
            </div>
            <div className='row'>
                <div className='col-md-12 col-12'>
                    <div className='row'>
                        <div className='col-md-6 col-12'>
                                <div className='row'>
                                <div className='col-md-8 col-12 p-0'>
                                    <div className='B-lead'>
                                        <Link to='/'>
                                            <div className='zoom '>
                                                <div className='imgContainer'>
                                                    <img src="https://www.emythmaker.com/project/Template/NewsProtal/DailySamakal/Demo-3/media/imgAll/Untitled-1-samakal-63bac1fe6c990.webp" alt="" className='fix-ratio' />
                                                </div>
                                            </div>

                                        </Link>
                                    </div>
                               </div>
                                <div className='col-md-4'>
                                    <Link to='#' className='text-dark'><p className='Title'> আমরা একসঙ্গে আছি, এক ছাদের নিচেই আছি: পরীমণি</p></Link>
                                    <p className='Bin-line'>রাজের বাসায় থাকছেন না পরীমণি বা রাজ থাকছেন না পরীমণির বাসায়- গত কয়েকদিন ধরে এ নিয়ে চলে আলোচনা। তাদের বিচ্ছেদ হচ্ছে- এমন কথাও সংবাদ মাধ্যমে আসে। কিন্তু এরই মধ্যে বৃহস্পতিবার সমকালকে পরীমণি বললেন, 'আমরা আলাদা থাকছি না, একসঙ্গেই আছি, এক ছাদের নিচে আছি।'</p>
                                </div>
                                <div className='row g-2'>
                                <div className='col-md-6 col-12  p-0'>
                            <div className='B-lead '>
                                <Link to='/'>
                                    <div className='zoom '>
                                        <div className='imgContainer'>
                                            <img src="https://www.emythmaker.com/project/Template/NewsProtal/DailySamakal/Demo-3/media/imgAll/Parliament-Adhibession-samakal-63babf7dba9bd.jpg" alt="" className='fix-ratio' />
                                        </div>
                                    </div>

                                </Link>
                            </div>
                            <Link to='/'>
                              
                                    <p className='Title'>তিশার কঞ্জুস স্বামী ফারহান, বছর শুরুতেই মিলিয়নিয়ার</p>

                            </Link>
                            
                        </div>
                                <div className='col-md-6 col-12  p-0'>
                            <div className='B-lead '>
                                <Link to='/'>
                                    <div className='zoom '>
                                        <div className='imgContainer'>
                                            <img src="https://www.emythmaker.com/project/Template/NewsProtal/DailySamakal/Demo-3/media/imgAll/Parliament-Adhibession-samakal-63babf7dba9bd.jpg" alt="" className='fix-ratio' />
                                        </div>
                                    </div>

                                </Link>
                            </div>
                            <Link to='/'>
                                <div className='text-decoration-none text-dark'>
                                    <p className='py-1 fw-bold effect Bin-head p-2'>তিশার কঞ্জুস স্বামী ফারহান, বছর শুরুতেই মিলিয়নিয়ার</p>

                                </div>
                            </Link>
                            
                        </div>
                                </div>
                                </div>
                                   
                            </div>
                        </div>
                        
                       
                       
                        <div className='col-md-6'>
                            
                        </div>
                       
                    </div>
                </div>
            </div>

    );
};

export default Binodon;