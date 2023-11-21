import React from 'react'
import './Sendmoneybox.scss'
import SyncAltIcon from '@mui/icons-material/SyncAlt';
import ControlPointOutlinedIcon from '@mui/icons-material/ControlPointOutlined';

const Sendmoneybox = () => {
  return (
    <div className="sendmoneybox_wrapper">
  
       <div className='sendmoneybox_container'>
        
      <div className='sendout'><span><SyncAltIcon/>  </span>Transfer</div>
      <div className='sendout'><span><ControlPointOutlinedIcon /> </span>Add Money</div>

    </div>

    </div>
   
  )
}

export default Sendmoneybox
