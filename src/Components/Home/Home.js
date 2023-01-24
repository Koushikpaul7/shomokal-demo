import React from 'react';
import Banner from '../Home/Banner/Banner';
import SecondSection from './SecondSection/SecondSection';
import Bangladesh from './Bangladesh/Bangladesh';
import Rajniti from './Rajniti/Rajniti';
import Binodon2 from './Binodon/Binodon2';
import Sports from './Sports/Sports';
import Sharadesh from './Sharadesh/Sharadesh';
import International from './International/International';
import AddSection from '../AddSection/AddSection';
import TechLife from './TechLife/TechLife';
import VideoGaller from './VideoGallery/VideoGaller';
import Jibon from './Jibon/Jibon';
import Rajdhani from './MultiSection/Rajdhani';
import Projukti from './Projukti/Projukti';
import Chakri from './MultiSectionTwo/Chakri';
import PhotoGallery from './PhotoGallery/PhotoGallery';
import Motamot from './Motamot/Motamot';
import Editorial from './Editorial/Editorial';
const Home = () => {
    return (
        <div>
            <Banner/>
            <SecondSection/>
            <AddSection/>
            <Editorial/>
            <Bangladesh/>
            <Rajniti/>
            <Motamot/>
            <Binodon2/>
            <Sports/>
            <Sharadesh/>
            <AddSection/>
            <International/>
            <AddSection/>
            <TechLife/>
            <VideoGaller/>
            <Jibon/>
            <Rajdhani/>
            <Projukti/>
            <Chakri/>
            <PhotoGallery/>
        </div>
    );
};

export default Home;