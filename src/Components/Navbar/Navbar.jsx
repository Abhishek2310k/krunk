import React from 'react'
import './Navbar.scss'
const Navbar = () => {
  return (
    <div className='navbar'>
        <div className='nav_content'>
        <div className='profile'>
            <div className='profile_img'>
                <img src='/chat_logo.png' alt='logo'/>
                <img src='/ping.png' alt='ping' className='ping'/>
            </div>
            <div className='name'>
                <span className='main_name'>
                    <span style={{fontSize:'18px'}}>Timpu</span> 
                    <img src='/tick.png' alt='tick'/>
                </span>
                <span style={{fontSize:'15px'}}>Chat Assistant</span>
            </div>
        </div>
        <div className='status'>
            <img src='/ping.png' alt='ping'/>
            <span style={{fontSize:"15px",fontWeight:"500"}}>Online</span>
        </div>
        </div>
    </div>
  )
}

export default Navbar