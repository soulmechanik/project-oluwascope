import React from 'react'
import './Actions.scss'

const Actions = ({ user }) => {
  return (
    <div className='Actions_container'>
    <div className="Actions">
        <div className="box">Transfer</div>
        <div className="box">Save</div>
        <div className="box">Borrow</div>
        <div className="box">Invest</div>
    </div>
    </div>
  )
}

export default Actions
