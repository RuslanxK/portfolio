import NavBar from './components/NavBar'
import PhoneCall from './components/PhoneCall'
import MainSection from './components/MainSection'
import ProjectsSection from './components/ProjectsSection'
import { useRef } from 'react'
import SocialMedia from './components/SocialMedia'

const App = () => {

  const myRef = useRef(null)
  const myRef2 = useRef(null)

  const executeScroll = () => myRef.current.scrollIntoView()   
  const executeScrollAbout = () => myRef2.current.scrollIntoView()   

  return (
    <div className='main'>
    
      <NavBar executeScroll={executeScroll} executeScrollAbout={executeScrollAbout}/>
      <MainSection executeScroll={executeScroll} />
    
       <section ref={myRef} className='projects'>

        <h2 className='projects-headline'>PROJECTS</h2>
        <ProjectsSection />
       </section>

       <section ref={myRef2} className='about-me'>

       <h2 className='about-headline'>ABOUT ME</h2>
       <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Malesuada fames ac
         turpis egestas. Sed faucibus turpis in eu mi bibendum neque. In massa tempor nec feugiat nisl pretium fusce id velit. Purus semper eget duis at tellus at urna condimentum mattis. <br /> <br /> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Malesuada fames ac
         turpis egestas. Sed faucibus turpis in eu mi bibendum neque. In massa tempor nec feugiat nisl pretium fusce id velit. Purus semper eget duis at tellus at urna condimentum mattis. <br /> <br /> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Malesuada fames ac
         turpis egestas. Sed faucibus turpis in eu mi bibendum neque. In massa tempor nec feugiat nisl pretium fusce id velit. Purus semper eget duis at tellus at urna condimentum mattis.</p>

       </section>

       <PhoneCall />
       <SocialMedia />
       
      </div>
  )
}

export default App