import React from 'react';
import Banner from '../Home/Banner/Banner';
import SecondSection from './SecondSection/SecondSection';
import SubHeading from '../Navbar/SubHeading'
const Home = () => {
    return (
        <div className='container my-3'>
            <SubHeading/>
            <Banner/>
            <SecondSection/>

        </div>
    );
};

export default Home;