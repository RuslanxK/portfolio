import React from 'react'

const ProjectsSection = () => {


  return (
    <div className='project-boxes'>

        <div className='box-main' onClick={() => window.open("https://bags-app-gilt.vercel.app/")}>
        <div className='project-div'>
        <h2 className='project-headline'>Light Pack Planner  </h2>
        <a href='https://github.com/RuslanxK/light-pack-planner-next/tree/master' target="_blank" rel="noreferrer" onClick={(e) => e.stopPropagation()}><i class="fa-brands fa-github"></i>Source code</a>

        </div>
        <div className='box'>
        <img src='./lighter-pack-planner.png' alt='light-pack-planner'/>
        <img src='./lighter-pack-planner-2.png' alt='light-pack-planner'/> 
        <img src='./lighter-pack-planner-3.png' alt='light-pack-planner'/>
        </div>
        </div>


        
       <div className='box-main'>
       <div className='project-div'>
       <h2 className='project-headline'> Stellar staff</h2>
       <a href='https://github.com/RuslanxK/StellarStaff' target="_blank" rel="noreferrer" onClick={(e) => e.stopPropagation()}><i class="fa-brands fa-github"></i>Source code</a>
       </div>
       <div className='box'>
       <img src='./va.png' alt='movies'/>
       <img src='./va-2.png' alt='movies'/> 
       <img src='./va-3.png' alt='movies'/> 

       </div>
       </div>


       <div className='box-main' onClick={() => window.open("https://compresso-5zgx.onrender.com/")}>
       <div className='project-div'>
       <h2 className='project-headline'>Compresso.io</h2>
       <a href='https://github.com/RuslanxK/compresso' target="_blank" rel="noreferrer" onClick={(e) => e.stopPropagation()}><i class="fa-brands fa-github"></i>Source code</a>

       </div>
       <div className='box'>
       <img src='./compresso.png' alt='compresso'/>
       <img src='./compresso-2.png' alt='compresso'/> 
       <img src='./compresso-2.png' alt='compresso'/> 

       </div>
       </div>

       <div className='box-main' onClick={() => window.open("https://chat-app-client-0yba.onrender.com/")}>
       <div className='project-div'>
       <h2 className='project-headline'>Chat App</h2>
       <a href='https://github.com/RuslanxK/Chat-App' target="_blank" rel="noreferrer" onClick={(e) => e.stopPropagation()}><i class="fa-brands fa-github"></i>Source code</a>

       </div>
       <div className='box'>
       <img src='./chat-app.png' alt='chat-app'/>
       <img src='./chat-app-2.png' alt='chat-app'/> 
       <img src='./chat-app-3.png' alt='chat-app'/> 

       </div>
       </div>

       
       <div className='box-main' onClick={() => window.open("https://movies-client-vfw8.onrender.com")}>
      <div className='project-div'>
       <h2 className='project-headline'>Movies Online </h2>
       <a href='https://github.com/RuslanxK/MoviesProject' target="_blank" rel="noreferrer" onClick={(e) => e.stopPropagation()}><i class="fa-brands fa-github"></i>Source code</a>
       </div>
       <div className='box'>
       <img src='./movies.png' alt='movies'/>
       <img src='./movies-2.png' alt='movies'/> 
       <img src='./movies-3.png' alt='movies'/> 

       </div>
       </div>


       <div className='box-main' onClick={() => window.open("https://maayanot-ziv.com/")}>
      <div className='project-div'>
       <h2 className='project-headline'>Maayanot Ziv Water Corporation - WP</h2>
       </div>
       <div className='box'>
       <img src='./maayanot-ziv.png' alt='maayanot-ziv'/>
       <img src='./maayanot-ziv-2.png' alt='maayanot-ziv'/> 
       <img src='./maayanot-ziv-3.png' alt='maayanot-ziv'/> 

       </div>
       </div>

       <div className='box-main' onClick={() => window.open("https://milouoff.co.il/")}>
      <div className='project-div'>
       <h2 className='project-headline'>Milouoff - WP</h2>
       </div>
       <div className='box'>
       <img src='./milouoff.png' alt='milouoff'/>
       <img src='./milouoff-2.png' alt='milouoff'/> 
       <img src='./milouoff-3.png' alt='milouoff'/> 

       </div>
       </div>

       <div className='box-main' onClick={() => window.open("https://www.xr.health/")}>
      <div className='project-div'>
       <h2 className='project-headline'>XRHealth - WP</h2>
       </div>
       <div className='box'>
       <img src='./xrhealth-1.png' alt='xrhealth'/>
       <img src='./xrhealth-2.png' alt='xrhealth'/> 
       <img src='./xrhealth-3.png' alt='xrhealth'/> 

       </div>
       </div>


    </div>
  )
}

export default ProjectsSection