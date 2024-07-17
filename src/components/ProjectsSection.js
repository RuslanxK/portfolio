import React from 'react'

const ProjectsSection = () => {


  return (
    <div className='project-boxes'>

        <div className='box-main' onClick={() => window.open("https://bags-app-gilt.vercel.app/")}>
        <h2 className='project-headline'>Light Pack - Planner App</h2>
        <div className='box'>
        <img src='./lighter-pack-planner.png' alt='lighter-pack-planner'/>
        <img src='./lighter-pack-planner-2.png' alt='lighter-pack-planner'/> 
        <img src='./lighter-pack-planner-3.png' alt='lighter-pack-planner'/>
        </div>
        </div>

       <div className='box-main' onClick={() => window.open("https://compresso-tgpo.onrender.com/")}>
       <h2 className='project-headline'>Compresso.io App</h2>
       <div className='box'>
       <img src='./compresso.png' alt='compresso'/>
       <img src='./compresso-2.png' alt='compresso'/> 
       <img src='./compresso-2.png' alt='compresso'/> 

       </div>
       </div>

       <div className='box-main' onClick={() => window.open("https://chat-app-client-0yba.onrender.com/")}>
       <h2 className='project-headline'>Chat App</h2>
       <div className='box'>
       <img src='./chat-app.png' alt='chat-app'/>
       <img src='./chat-app-2.png' alt='chat-app'/> 
       <img src='./chat-app.png' alt='chat-app'/> 

       </div>
       </div>

       
       <div className='box-main' onClick={() => window.open("https://chat-app-client-0yba.onrender.com/")}>
       <h2 className='project-headline'>Movies App</h2>
       <div className='box'>
       <img src='./movies.png' alt='movies'/>
       <img src='./movies-2.png' alt='movies'/> 
       <img src='./movies-3.png' alt='movies'/> 

       </div>
       </div>


    </div>
  )
}

export default ProjectsSection