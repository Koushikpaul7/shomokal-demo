import React from 'react';
import { Link } from 'react-router-dom';

const Navtop = () => {
    return (
        <div className='headerTopBar d-none d-md-block bar '>
                <div className='container'>
                    <div className='row ' >
                        <div className='col-md-6 link'>
                            
                            <div className='d-flex  top'>
                                <ul className='d-flex'>
                                <li ><Link to='/'>ইউনিকোড কনভার্টার </Link></li>
                                
                                
                                <li className='text-decoration-none'><Link to='/'> আর্কাইভ </Link></li>     
                                </ul>
                               
                                
                               
                            </div>
                        </div>
                        <div className='col-md-6 topBtn'>
                            <div className='d-flex justify-content-end '>
                            <ul className='d-flex'>
                                <li ><Link to='/' >ই-পেপার  </Link></li>
                                
                                
                                <li className='text-decoration-none'><Link to='/'> আর্কাইভ </Link></li>     
                                </ul>
                                                       
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    );
};

export default Navtop;