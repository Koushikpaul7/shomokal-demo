import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
const NavBottom = () => {

  const [sidebarTop, setSidebarTop] = useState(undefined);

  useEffect(() => {
    const chatEl = document.querySelector('.sidebar').getBoundingClientRect();
   
    setSidebarTop(chatEl.top);
  }, []);

  useEffect(() => {
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
   <div className='d-flex '>
   <Link to="/"> <a class="navbar-brand d-block d-md-none"  href={() => false}><img className='w-50 ' src="https://www.emythmaker.com/project/Template/NewsProtal/DailySamakal/Demo-3/media/common/logo.png" alt=""/></a> </Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
   </div>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0 ">
        <li class="nav-item ">
          <Link to="/"> <a class="nav-link active" aria-current="page"  href={() => false}>বাংলাদেশ</a> </Link>
        </li>
        <li class="nav-item ">
          <Link to="/"> <a class="nav-link active"  href={() => false}>রাজনীতি
</a> </Link>
        </li>
        <li class="nav-item ">
          <Link to="/"> <a class="nav-link active"  href={() => false}>অর্থনীতি

</a> </Link>
        </li>
        <li class="nav-item ">
          <Link to="/"> <a class="nav-link active"  href={() => false}>আন্তর্জাতিক
</a> </Link>
        </li>
        <li class="nav-item ">
          <Link to="/"> <a class="nav-link active"  href={() => false}>খেলা
</a> </Link>
        </li>
        <li class="nav-item ">
          <Link to="/"> <a class="nav-link active"  href={() => false}>বিনোদন
</a> </Link>
        </li>
        <li class="nav-item ">
          <Link to="/"> <a class="nav-link active"  href={() => false}>সারাদেশ
</a> </Link>
        </li>
        <li class="nav-item ">
          <Link to="/"> <a class="nav-link active"  href={() => false}>মতামত
</a> </Link>
        </li>
        <li class="nav-item ">
          <Link to="/"> <a class="nav-link active"  href={() => false}>প্রবাস
</a> </Link>
        </li>
        <li class="nav-item ">
          <Link to="/"> <a class="nav-link active"  href={() => false}>রাজধানী

</a> </Link>
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