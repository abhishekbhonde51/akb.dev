import React from 'react'
import linkedin from '../assets/Linkedin.jpg'
import x from '../assets/x.png';
import github from '../assets/github.jpeg'
import '../Styles/Links.css'
const Links = () => {
  return (
    <div>
        <div className='links'>
            <a href="https://www.linkedin.com/in/abhishek-bhonde-ba501a22a/">
                <img src={linkedin} alt="" />
            </a>
            <a href="https://github.com/abhishekbhonde">
                <img src={github} alt="" />
            </a>
            <a href="https://x.com/bhonde_abhishek">
                <img src={x} alt="" />
            </a>
           
        </div>
    </div>
  )
}

export default Links
