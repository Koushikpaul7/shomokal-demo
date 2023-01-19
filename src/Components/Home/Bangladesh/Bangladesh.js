import React from 'react';
import { Link } from 'react-router-dom';
import '../Bangladesh/Bangladesh.css'
const Bangladesh = () => {
    return (
        <div className='title'>
            <div className='col-md-12 '>
                <h6><Link  className='font'>
                <span className='box'></span>
                বাংলাদেশ</Link>
                </h6>
            </div>
        </div>
    );
};

export default Bangladesh;