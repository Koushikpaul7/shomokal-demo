import React from 'react';
import Banner from '../Home/Banner/Banner';
import SecondSection from './SecondSection/SecondSection';
import SubHeading from '../Navbar/SubHeading'
import Bangladesh from './Bangladesh/Bangladesh';
const Home = () => {
    return (
        <div className='container my-3'>
            <Banner/>
            <SecondSection/>
            <Bangladesh/>

        </div>
    );
};

export default Home;