import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {  GoSearch } from 'react-icons/go';
const NavBottom = () => {

  const [sidebarTop, setSidebarTop] = useState(undefined);

  useEffect(() => {
    const chatEl = document.querySelector('.sidebar').getBoundingClientRect();
   
    setSidebarTop(chatEl.top);
 
    if (!sidebarTop) 
    return;

    window.addEventListener('scroll', isSticky);
    return () => {
      window.removeEventListener('scroll', isSticky);
    };
  }, [sidebarTop]);

  const isSticky = (e) => {
    const chatEl = document.querySelector('.sidebar');
    const scrollTop = window.scrollY;
    if (scrollTop >= sidebarTop - 10) {
      chatEl.classList.add('is-sticky');
    } else {
      chatEl.classList.remove('is-sticky');
    }
  };
    return (
        <div id='navbar_top' className='nav-border sticky-top sidebar position'>
            <div className='container '>
            <nav class="navbar navbar-expand-lg navbar-light ">
  <div class="container-fluid">
   <div className='d-flex justify-content-between'>
  
        
   <Link to="/"> <a class="navbar-brand d-block d-md-none"  href={() => false}><img className='w-50 ' src="https://www.emythmaker.com/project/Template/NewsProtal/DailySamakal/Demo-3/media/common/logo.png" alt=""/></a> </Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
   </div>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0 ">
        <li class="nav-item ">
        <Link class="nav-link active" to="/">বাংলাদেশ </Link>
        </li>
        <li class="nav-item ">
        <Link class="nav-link active" to="/">রাজনীতি </Link>
        </li>
        <li class="nav-item ">
        <Link class="nav-link active" to="/">অর্থনীতি</Link>
        </li>
        <li class="nav-item ">
        <Link class="nav-link active" to="/">আন্তর্জাতিক </Link>
        </li>
        <li class="nav-item ">
        <Link class="nav-link active" to="/">খেলা </Link>
        </li>
        <li class="nav-item ">
        <Link class="nav-link active" to="/">বিনোদন </Link>
        </li>
        <li class="nav-item ">
        <Link class="nav-link active" to="/">সারাদেশ</Link>
        </li>
        <li class="nav-item ">
        <Link class="nav-link active" to="/">মতামত </Link>
        </li>
        <li class="nav-item ">
          <Link to="/" class="nav-link active"> প্রবাস </Link>
        </li>
        <li class="nav-item ">
          <Link class="nav-link active" to="/"> রাজধানী

</Link>
        </li>
        <li class="nav-item ">
          <Link to="/"> <a class="nav-link active"  href={() => false}>জীবনশৈলী
</a> </Link>
        </li>
        <li class="nav-item ">
          <Link to="/"> <a class="nav-link active"  href={() => false}>ভিডিও
</a> </Link>
        </li>
        <li class="nav-item dropdown">
          <Link to="/"> <a class="nav-link active dropdown-toggle"  href={() => false} id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="true">
          অন্যান্য
          </a> </Link>
          {/* <ul class="dropdown-menu w-full" aria-labelledby="navbarDropdown">
            <li><Link to="/"> <a class="dropdown-item"  href={() => false}>Action</a> </Link></li>
            <li><Link to="/"> <a class="dropdown-item"  href={() => false}>Another action</a> </Link></li>
            <li><hr class="dropdown-divider"/></li>
            <li><Link to="/"> <a class="dropdown-item"  href={() => false}>Something else here</a> </Link></li>
          </ul> */}
        </li>
        <li class="nav-item ">
          <Link to="/"> <a class="nav-link active"  href={() => false}>< GoSearch className='fs-4 ms-4'/>
</a> </Link>
        </li>
      </ul>
      <form class="d-flex">
      
      </form>
    </div>
  </div>
</nav>
        </div>
        </div>
    );
    
};


export default NavBottom;