import React from 'react';
import '../Navbar/Navbar.css'
import NavBottom from './NavBottom';
import NavMid from './NavMid';
import Navtop from './Navtop';

const Navbar = () => {
    return (
        <div>
            <Navtop/>
            <NavMid/>
            <NavBottom/>
            
        </div>
    );

};


export default Navbar;