import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { GoSearch } from 'react-icons/go';
const NavBottom = () => {

  const [sidebarTop, setSidebarTop] = useState(undefined);
  let [navbar2, setNavbar2] = useState(false)

  useEffect(() => {
    const chatEl = document.querySelector('.sidebar').getBoundingClientRect();
    const isSticky = (e) => {
      const chatEl = document.querySelector('.sidebar');
      const scrollTop = window.scrollY;
      if (scrollTop >= sidebarTop - 10) {
        chatEl.classList.add('is-sticky') ;
        
      } else {
        chatEl.classList.remove('is-sticky');
       
      }
    };

    setSidebarTop(chatEl.top);
    if (!sidebarTop)
      return;

    window.addEventListener('scroll', isSticky);
    return () => {
      window.removeEventListener('scroll', isSticky);
    };
  }, [sidebarTop]);

 
  return (
    <div id='navbar_top' className={`nav-border sticky-top sidebar position ${navbar2 ? "bg-light" : "bg-white"}`}>
      <div className='container'>
        <nav class="navbar navbar-expand-lg navbar-light">
          <div class="container-fluid">
            <div className='d-flex justify-content-between'>


              <Link to="/"> <Link class="navbar-brand d-block d-md-none" ><img className='w-50 ' src="https://www.emythmaker.com/project/Template/NewsProtal/DailySamakal/Demo-3/media/common/logo.png" alt="" /></Link ></Link>
              <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>
            </div>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav me-auto mb-2 mb-lg-0 position-relative ">
                <li class="nav-item ">
                  <Link to="/" class="nav-link active-list" aria-current="page"> বাংলাদেশ </Link>
                </li>
                <li class="nav-item ">
                <Link to="/" class="nav-link active-list">রাজনীতি
                   </Link>
                </li>
                <li class="nav-item ">
                <Link to="/" class="nav-link active-list">অর্থনীতি

                  </Link>
                </li>
                <li class="nav-item ">
                <Link to="/" class="nav-link active-list">আন্তর্জাতিক
                </Link>
                </li>
                <li class="nav-item ">
                <Link to="/" class="nav-link active-list">খেলা
                   </Link>
                </li>
                <li class="nav-item ">
                  <Link to="/" class="nav-link active-list"> বিনোদন
                   </Link>
                </li>
                <li class="nav-item ">
                  <Link to="/" class="nav-link active-list"> সারাদেশ </Link>
                </li>
                <li class="nav-item ">
                  <Link to="/" class="nav-link active-list">মতামত
                 </Link>
                </li>
                <li class="nav-item ">
                  <Link to="/" class="nav-link active-list"> প্রবাস
                 </Link>
                </li>
                <li class="nav-item ">
                  <Link to="/" class="nav-link active-list"> রাজধানী </Link>
                </li>
                <li class="nav-item ">
                  <Link to="/" class="nav-link active-list"> জীবনশৈলী
                   </Link>
                </li>
                <li class="nav-item ">
                  <Link to="/" class="nav-link active-list"> ভিডিও
                   </Link>
                </li>

                <li class="nav-item  has-megamenu">
                        <Link class="nav-link dropdown-toggle active-list" to="#" data-bs-toggle="dropdown">অন্যান্য</Link>
                        <div class="dropdown-menu megamenu" role="menu">
                            <div class="row w-100 ">
                                    <div class="col-md-3" style={{flex:" 0 0 20%",maxwidth: '20%'}}>
                                        <ul class="nav flex-column">
                                            <li><Link class="dropdown-item" href="#">চতুরঙ্গ</Link></li>
                                            <li><Link class="dropdown-item" href="#">নারী দিবস</Link></li>
                                            <li><Link class="dropdown-item" href="#">সাহিত্য ও সংস্কৃতি</Link></li>
                                        </ul>
                                    </div>
                                    <div class="col-md-3" style={{flex:" 0 0 20%",maxwidth: '20%'}}>
                                        <ul class="nav flex-column">
                                            <li><Link class="dropdown-item" href="#">সাহিত্য ও সংস্কৃতি</Link></li>
                                            <li><Link class="dropdown-item" href="#">জীবন সংগ্রাম</Link></li>
                                            <li><Link class="dropdown-item" href="#">ভ্রমণ</Link></li>
                                            <li><Link class="dropdown-item" href="#">ফিচার</Link></li>
                                        </ul>
                                    </div>
                                    <div class="col-md-3" style={{flex:" 0 0 20%",maxwidth: '20%'}}>
                                        <ul class="nav flex-column">
                                            <li><Link class="dropdown-item" href="#">শিল্প-বাণিজ্য</Link></li>
                                            <li><Link class="dropdown-item" href="#">সাক্ষাৎকার</Link></li>
                                            <li><Link class="dropdown-item" href="#">প্রযুক্তি</Link></li>
                                        </ul>
                                    </div>
                                    <div class="col-md-3" style={{flex:" 0 0 20%",maxwidth: '20%'}}>
                                        <ul class="nav flex-column">
                                            <li><Link class="dropdown-item" href="#">শেয়ারবাজার</Link></li>
                                            <li><Link class="dropdown-item" href="#">সমকাল অনুসন্ধান</Link></li>
                                            <li><Link class="dropdown-item" href="#">অফবিট</Link></li>
                                        </ul>
                                    </div>
                                    <div class="col-md-3" style={{flex:" 0 0 20%",maxwidth: '20%'}}>
                                        <ul class="nav flex-column">
                                            <li><Link class="dropdown-item" href="#">অপরাধ</Link></li>
                                            <li><Link class="dropdown-item" href="#">চাকরি </Link></li>
                                            <li><Link class="dropdown-item" href="#">শিল্পমঞ্চ</Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </li> 
      



                
                <div className={`position-absolute top-0 start-0 w-100 h-100 ${navbar2 ? "d-block" : "d-none"}`}>
                  <li className='d-flex justify-content-center p-1'>
                    <input type="text" class="form-control h-25 w-full " placeholder='এখানে খুঁজুন...'/>
                    <Link to="/" class="nav-link active-list text-dark  mx-auto fs-1"> < GoSearch style={{"width": "24","height":"24",padding:"4",marginBottom:"305px",backgroundColor: "#ddd"}}/>
                  </Link>
                  </li>
                </div>
              </ul>
              <p
                className="border-0 w-25"
                onClick={() => setNavbar2(!navbar2)}
              >
                {navbar2 ? (
                  <svg className='mt-2'
                  xmlns="http://www.w3.org/2000/svg"
                 
                  style={{"width": "24", "fontWeight": "900","padding":"4", backgroundColor: "#BFBFBF"}}
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>

                ) : (
                 < GoSearch />
                  
                )}
              </p>
              
            </div>
          </div>
        </nav>
      </div>
    </div>
  );

};


export default NavBottom;