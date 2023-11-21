import React from 'react'
import './Navigation.scss'
import HomeIcon from '@mui/icons-material/Home';
import SendIcon from '@mui/icons-material/Send';
import PaymentIcon from '@mui/icons-material/Payment';
import ShareLocationIcon from '@mui/icons-material/ShareLocation';
import { Home } from '@mui/icons-material';
import ListIcon from '@mui/icons-material/List';


const Navigation = () => {
  return (
    <div>
       <div className="Navigation_box ">
        <div className="box"> <Home className='airtime'/></div>
        <div className="box"> <SendIcon className='internet'/> </div>
        <div className="box"> <PaymentIcon className='utilities'/> </div>
        <div className="box"> <ShareLocationIcon className='transport'/></div>
        <div className="box"> <ListIcon className='transport'/></div>

    </div>

    </div>
  )
}

export default Navigation
