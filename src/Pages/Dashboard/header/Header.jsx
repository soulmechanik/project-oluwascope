import React from 'react'
import './Header.scss'
import ChatOutlinedIcon from '@mui/icons-material/ChatOutlined';
import Person2OutlinedIcon from '@mui/icons-material/Person2Outlined';


const Header = () => {
  return (
    <div className='header_container'>
      
      <div className='header_profile'>
            <div className='image_container'> <Person2OutlinedIcon/> </div>
            <span> Hi, Oluwascope</span>
      </div>


      <div className='header_message'> <ChatOutlinedIcon className='message_icon'/></div>
  
    </div>
  )
}

export default Header
