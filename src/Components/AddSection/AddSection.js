import React from 'react';
import { Link } from 'react-router-dom';
import '../AddSection/AddSection.css'
const AddSection = () => {
    return (
        <div className='full-add text-center'>
            <div className='row'>
                <div className='col-md-12 col-12'>
                    <Link to='/'>
                    <img src="https://www.emythmaker.com/project/Template/NewsProtal/DailySamakal/Demo-3/media/Advertisement/Advertisement(970X90).png" className='img-fluid' alt=""/>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default AddSection;