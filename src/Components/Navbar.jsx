import React from 'react'
import '../Styles/Navbar.css';
import react from '../../public/react.png';
const Navbar = () => {
  return (
    <div className='Navbar'>
        <nav>
            <li className='left-side'>
                <img src={react} alt="" />
                <p>ABHISHEK</p>
            </li>
            <li className='left-side'>
                  <a href="https://discord.com/users/abhishekbhonde#7030">
                  <button>DISCORD</button>
                  </a>
            </li>
        </nav>
    </div>
  )
}

export default Navbar
