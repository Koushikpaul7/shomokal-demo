import React from 'react';
import Banner from '../Home/Banner/Banner';
import SecondSection from './SecondSection/SecondSection';
import SubHeading from '../Navbar/SubHeading'
import Bangladesh from './Bangladesh/Bangladesh';
import Rajniti from './Rajniti/Rajniti';
import Binodon from './Binodon/Binodon';
import Binodon2 from './Binodon/Binodon2';
import Sports from './Sports/Sports';
import Sharadesh from './Sharadesh/Sharadesh';
const Home = () => {
    return (
        <div className='container my-3'>
            <Banner/>
            <SecondSection/>
            <Bangladesh/>
            <Rajniti/>
            <Binodon2/>
            <Sports/>
            <Sharadesh/>
        </div>
    );
};

export default Home;