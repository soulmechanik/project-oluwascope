import React from 'react'
import './Transactionhistory.scss'
import Person2OutlinedIcon from '@mui/icons-material/Person2Outlined';

const Transactionhistory = () => {
  return (
    <div className='transaction_history_wrapper'>
      <div className="transaction_history_container">
      <p className='dot'>Transaction History</p>
        <div className="transaction_history">
           
            <div className='TH_left'>
               <span><Person2OutlinedIcon/></span>
                <p> Receiver</p>
            </div>


            <div className='TH_right'> Pending</div>
        </div>
        <div className="transaction_history">
           
            <div className='TH_left'>
               <span><Person2OutlinedIcon/></span>
                <p> Receiver</p>
            </div>


            <div className='TH_right'> Sucessful</div>
        </div>
        <div className="transaction_history">
           
            <div className='TH_left'>
               <span><Person2OutlinedIcon/></span>
                <p> Receiver</p>
            </div>


            <div className='TH_right'> Pending</div>
        </div>
      </div>
    </div>
  )
}

export default Transactionhistory
