import React from 'react'
import './Header.scss'
import ChatOutlinedIcon from '@mui/icons-material/ChatOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';


const Header = () => {
  return (
    <div className='Header_container'>
      
      <div className='Header_profile'>
      <AccountCircleOutlinedIcon/>
        <span> Hi, Oluwascope</span>

    
      </div>

      <div className='Header message'> <ChatOutlinedIcon/></div>
   
    </div>
  )
}

export default Header
