import { useEffect, useRef } from 'react'
import Lottie from "lottie-web";

const PhoneCall = () => {

    const container = useRef(null)


    useEffect(() => {

        Lottie.loadAnimation({
           container: container.current,
           renderer: "svg",
           loop: true,
           autoplay: true,
           animationData: require('../phone-call.json')
        })
   
        return () => { Lottie.destroy() }
   
     }, []);
   



  return (
    <a className="contact-phone" href='tel:+972508124358'><div ref={container}></div></a>
  )
}

export default PhoneCall