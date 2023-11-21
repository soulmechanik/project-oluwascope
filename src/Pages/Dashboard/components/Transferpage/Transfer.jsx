import React from 'react'
import './Transfer.scss'

const Transfer = () => {
  return (
    <div className='transfer_wrapper'>

   <div className="transfer_header">
<span> <i className="fas fa-shevron"></i> </span>
<span>New USA Recepient</span>
<span></span>
   </div>

   

   <div className="transferbody">
    <div className="bankname">
        
    <span> Bank Name</span>
    <input type="text" placeholder='Type Your Bank name' />
    </div>
    <div className="accountnumber">

    <span> Account Number</span>
    <input type="text"  placeholder='Enter Account Number'/>
    </div>
  
   </div>

   <div className="transferfooter">
    <button className='transferbutton'>Transfer</button>
   </div>
    </div>
  )
}

export default Transfer
