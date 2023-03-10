import React from 'react';
import '../Motamot/Mot.css';
import '../Bangladesh/Bangladesh.css';
import '../Home.css';
import { MdOutlineModeEdit } from 'react-icons/md';
import { Link } from 'react-router-dom';
const Motamot = () => {
    return (
        <div className='DBGWhite'>
            <div className='container'>
            <div className='title my-4'>
                        <div className='col-md-12 '>
                            <h6><Link to='/' className='font'>
                                <span className='box'></span>
                                মতামত</Link>
                            </h6>
                        </div>
                    </div>
            <div className='row'>
                <div className='col-md-3 col-12'>
                     <div className='DCatStyleList'>
                    <div className='row'>
                       <div className='col-md-4'>
                          <Link to='/'>
                          <div className='DImgZoomBlock'>
                           <img src="https://www.emythmaker.com/project/Template/NewsProtal/DailySamakal/Demo-3/media/imgAll/Untitled-1-Recovered-samakal-63bd9dbbc2571.jpg" title='...' className='img-fluid img100' alt=""/>
                           </div></Link>
                        </div>
                        <div className='col-md-8'>
                           <Link to='/'>
                           <h3 className='Title'>রাজউকের ওয়েবসাইট হ্যাক এবং আমাদের প্রস্তুতি পর্ব</h3>
                           </Link>
                           <i> <Link to='/'><p className='sub-heading-mot mt-1 writer'> <MdOutlineModeEdit className='me-2'/>জাকারিয়া স্বপন</p></Link></i>
                           
                        </div>
                    </div>
                       </div>
                </div>
                <div className='col-md-3 col-12'>
                <div className='DCatStyleList'>
                    <div className='row'>
                       <div className='col-md-4'>
                           <div className='DImgZoomBlock'>
                           <img src="https://www.emythmaker.com/project/Template/NewsProtal/DailySamakal/Demo-3/media/imgAll/Untitled-1-Recovered-samakal-63bd9dbbc2571.jpg" className='img-fluid img100' title='...' alt=""/>
                           </div>
                        </div>
                        <div className='col-md-8'>
                        <Link to='/'>
                           <h3 className='Title'>রাজউকের ওয়েবসাইট হ্যাক এবং আমাদের প্রস্তুতি পর্ব</h3>
                           </Link>
                           <i> <Link to='/'><p className='sub-heading-mot mt-1 writer'> <MdOutlineModeEdit className='me-2'/>জাকারিয়া স্বপন</p></Link></i>
                        
                        </div>
                    </div>
                       </div>
                </div>
                <div className='col-md-3 col-12'>
                <div className='DCatStyleList'>
                    <div className='row'>
                       <div className='col-md-4'>
                           <div className='DImgZoomBlock'>
                           <img src="https://www.emythmaker.com/project/Template/NewsProtal/DailySamakal/Demo-3/media/imgAll/Untitled-1-Recovered-samakal-63bd9dbbc2571.jpg" className='img-fluid img100' title='...' alt=""/>
                           </div>
                        </div>
                        <div className='col-md-8'>
                        <Link to='/'>
                           <h3 className='Title'>রাজউকের ওয়েবসাইট হ্যাক এবং আমাদের প্রস্তুতি পর্ব</h3>
                           </Link>
                           <i> <Link to='/'><p className='sub-heading-mot mt-1 writer'> <MdOutlineModeEdit className='me-2'/>জাকারিয়া স্বপন</p></Link></i>
                        </div>
                    </div>
                       </div>
                </div>
                <div className='col-md-3 col-12 '>
                <div className='DCatStyleList '>
                    <div className='row'>
                       <div className='col-md-4'>
                           <div className='DImgZoomBlock'>
                           <img src="https://www.emythmaker.com/project/Template/NewsProtal/DailySamakal/Demo-3/media/imgAll/Untitled-1-Recovered-samakal-63bd9dbbc2571.jpg" className='img-fluid img100' title='...' alt=""/>
                           </div>
                        </div>
                        <div className='col-md-8'>
                        <Link to='/'>
                           <h3 className='Title'>রাজউকের ওয়েবসাইট হ্যাক এবং আমাদের প্রস্তুতি পর্ব</h3>
                           </Link>
                           <i> <Link to='/'><p className='sub-heading-mot mt-1 writer'> <MdOutlineModeEdit className='me-2'/>জাকারিয়া স্বপন</p></Link></i>
                        </div>
                    </div>
                       </div>
                </div>
            </div>
            </div>
        </div>
    );
};

export default Motamot;