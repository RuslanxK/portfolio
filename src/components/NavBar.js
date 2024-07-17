import React from 'react'

const NavBar = ({executeScroll, executeScrollAbout}) => {
  return (
    <nav className='navbar'>
  
     <img className='logo' src='./logo.png' alt='logo' width="70px" height="50px" />
     <div className='nav-details'>
    <span onClick={executeScroll}>Projects</span>
    <span onClick={executeScrollAbout}>About me</span>
  
    <a href="mailto:ruslanxkhomutov@gmail.com" class="btn btn-1">
      <svg>
        <rect x="0" y="0" fill="none" width="100%" height="100%"/>
      </svg>
      CONTACT ME
    </a>
    
     </div>
     </nav>

  )
}

export default NavBar