import React from 'react'
import './quickaccess.scss'
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
import WifiOutlinedIcon from '@mui/icons-material/WifiOutlined';
import ElectricBoltOutlinedIcon from '@mui/icons-material/ElectricBoltOutlined';
import FlightTakeoffOutlinedIcon from '@mui/icons-material/FlightTakeoffOutlined';
const quickaccess = () => {
  return (
    <div className='quickaccess_wrapper'>
            <p className='qap'>Quick Access</p>
        <div className="quickaccess_container ">
        <div className="box"> <LocalPhoneOutlinedIcon className='airtime'/> <span> airtime</span></div>
        <div className="box"> <WifiOutlinedIcon className='internet'/> <span> Internet</span></div>
        <div className="box"> <ElectricBoltOutlinedIcon className='utilities'/> <span> Utilities</span></div>
        <div className="box"> <FlightTakeoffOutlinedIcon className='transport'/> <span> Transport</span></div>

        </div>
    
    
     
    
 
    </div>
  )
}

export default quickaccess
