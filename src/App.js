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

        <h2 className='projects-headline'> TOP PROJECTS</h2>
        <ProjectsSection />
       </section>

       <section ref={myRef2} className='about-me'>

       <h2 className='about-headline'>ABOUT ME</h2>
       <p>Hi, welcome to my portfolio! I am Ruslan Khomutov, a Full Stack Developer with expertise in creating robust and high-performance web applications. You can reach me at ruslanxkhomutov@gmail.com. <br /> <br />

I have spent the past two years honing my skills in web development, working with technologies such as React.js, Next.js, Node.js, and MongoDB. At Click Digital Solutions, I developed several web applications implementing SSR and SEO best practices to improve site performance and user experience, and also I developed 25+ WordPress websites using Elementor, Crocoblock plugins. My role required collaborating with cross-functional teams and managing both frontend and backend tasks to deliver top-notch solutions. At XRhealth USA Company, I focused on enhancing website functionality and user experience using tools like Elementor, jQuery, and various API integrations.
Throughout my career, I have developed a deep understanding of JavaScript frameworks, RESTful services, and cloud storage solutions like AWS S3. My key skills include problem-solving, project management, and effective communication, which have been instrumental in delivering successful projects and exceeding client expectations.</p>

       </section>

       <PhoneCall />
       <SocialMedia />
       
      </div>
  )
}

export default App