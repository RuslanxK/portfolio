import React, { useState } from 'react'

const MainSection = ({executeScroll}) => {

    const [changeTextStyleFirst, setChangeTextStyleFirst] = useState(false)
    const [changeTextStyleSecond, setChangeTextStyleSecond] = useState(true)
  
  
    const handleEnterChange = () => {
         setChangeTextStyleFirst(true)
         setChangeTextStyleSecond(false)
    }
  
    const handleLeaveChange = () => {
      setChangeTextStyleFirst(false)
      setChangeTextStyleSecond(true)
    }


  return (
    <section className='main-text'>


       <img src='./profile-ruslan.jpeg' width="300px" height="300px" alt='profile' style={{objectFit: "cover", marginBottom: "40px", marginTop: "40px", borderRadius: "100%"}}/>

      <div style={{display: "flex", flexDirection: "row", alignItems: "center"}}>
        

      <div>
      <span className='first-text'>Hi, my name is Ruslan</span>
      <h1 className={changeTextStyleFirst ? "apply-text-effect" : null }>Full Stack</h1>
      <h1 className={changeTextStyleSecond ? "apply-text-effect" : null} onMouseEnter={handleEnterChange} onMouseLeave={handleLeaveChange}>Developer</h1>
      </div>
      <div>
      
  

      </div>

      </div>
      
     
      <div className='companies-logos'>
        <img id='xrhealth' src='./xrhealth.png' alt='xrhealth' width="90px" onClick={() => window.open("https://www.xr.health/")}/>
        <img src='./click-digital.png' alt='click-digital' width="75px" onClick={() => window.open("https://click-digital.io/")}/>
     </div>
      <button className='arrow-button' onClick={executeScroll}><i class="fa-solid fa-arrow-down"></i></button>
    
    </section>
  )
}

export default MainSection