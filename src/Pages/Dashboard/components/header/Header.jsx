import React from 'react'
import './Header.scss'
import ChatOutlinedIcon from '@mui/icons-material/ChatOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';


    const Header = ({ user }) => {
        // const handleLogout = () => {
        //     // Clear session storage
        //     sessionStorage.removeItem('loggedInUser');
        //
        //     // Redirect to login page
        //     window.location.replace('/login');
        // };
  return (
    <div className='Header_container'>
      
      <div className='Header_profile'>
      <AccountCircleOutlinedIcon/>
        <span> Hi, { user.name }</span>

    
      </div>

        <div className={'flex '}>
            <div className='Header message mr-2'> <ChatOutlinedIcon/></div>
                  <div className='Header message ml-2'>
                      {/*<button onClick={handleLogout}>Logout</button>*/}
                  </div>
        </div>


    </div>
  )
}

export default Header
