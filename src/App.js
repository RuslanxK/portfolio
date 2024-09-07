import NavBar from './components/NavBar'
import PhoneCall from './components/PhoneCall'
import MainSection from './components/MainSection'
import ProjectsSection from './components/ProjectsSection'
import { useRef } from 'react'
import SocialMedia from './components/SocialMedia'

const App = () => {

  const myRef = useRef(null)

  const executeScroll = () => myRef.current.scrollIntoView()   

  return (
    <div className='main'>
    
      <NavBar executeScroll={executeScroll} />
      <MainSection executeScroll={executeScroll} />
    
       <section ref={myRef} className='projects'>

        <h2 className='projects-headline'> TOP PROJECTS</h2>
        <ProjectsSection />
       </section>

      
       <PhoneCall />
       <SocialMedia />
       
      </div>
  )
}

export default App