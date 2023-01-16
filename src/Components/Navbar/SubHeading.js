import React from 'react';
import { Link } from 'react-router-dom';

const SubHeading = () => {
    return (
        <div className='sub-head py-2'>
            <div className='container'>
                <div className='row'>
                    <div className='col-12 col-md-12 d-flex justify-content-center'>
                    <p className='text-danger me-5 fw-bold'>আলোচিত:</p>
                        <ul>
                        
                            <li><Link to="/"> <p>বিএনপির গণঅবস্থান</p></Link></li>
                            <li><Link to="/"> <p>শৈত্যপ্রবাহ</p></Link></li>
                            <li><Link to="/"> <p>বিপিএল</p></Link></li>
                            <li><Link to="/"> <p>মেট্রোরেল</p></Link></li>
                            <li><Link to="/"> <p>চাকরির-খবর</p></Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SubHeading;