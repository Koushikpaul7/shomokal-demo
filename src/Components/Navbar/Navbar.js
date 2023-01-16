import React from 'react';
import '../Navbar/Navbar.css'
import NavBottom from './NavBottom';
import NavMid from './NavMid';
import Navtop from './Navtop';
import SubHeading from './SubHeading';
const Navbar = () => {
    return (
        <div>
            <Navtop/>
            <NavMid/>
            <NavBottom/>
            <SubHeading/>
        </div>
    );
};

export default Navbar;