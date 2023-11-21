import React from 'react'
import './Balance.scss'
import VisibilityOffOutlinedIcon from '@mui/icons-material/VisibilityOffOutlined';

const Balance = () => {
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
                    <div className="cash"><span>$ 8,050,000.00</span> </div>
                    <div className="toggle"><VisibilityOffOutlinedIcon/></div>
                   </div>

                <div className="updated">last updated:</div>
                </div>
      
                
                </div>
              
                
               
            </div>


   
  )
}

export default Balance
