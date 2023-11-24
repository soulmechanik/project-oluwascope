import React, {useEffect, useState} from 'react'
import './Balance.scss'
import VisibilityOffOutlinedIcon from '@mui/icons-material/VisibilityOffOutlined';
// import axios from 'axios';

// const USER_URL = 'http://localhost:3001/users'; // Replace with your JSON Server API endpoint


const Balance = ({ user }) => {
    useEffect(() => {
        const balance = user.bal.toLocaleString('en-US', {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
        });
    }, [balance]);



  return (
    <div className='Balance_Wrapper'>

       <div className="Balance_container">
            <div className="top">
                <div>
                <img src="flag.png" alt="" width={25} /> 
                </div>
                 <div> <p>US Dollars</p></div>



              </div>

              <div className="middle_wrapper">

                  <div className="middle">
                    <div className="cash"><span>$ { balance }</span> </div>
                    <div className="toggle"><VisibilityOffOutlinedIcon/></div>
                   </div>

                <div className="updated">last updated:</div>
                </div>
      
                
                </div>
              
                
               
            </div>


   
  )
}

export default Balance
