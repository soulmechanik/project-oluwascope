import React from 'react'
import Quickaccess from './components/quickaccess/quickaccess'
import Transactionhistory from './components/Transactionhistory/Transactionhistory'
import './Dashboard.scss'
import Header from './components/header/Header'
import Actions from './components/Actions/Actions'
import Balance from './components/Balance/Balance'
import Sendmoneybox from './components/sendmoneybox/Sendmoneybox'
import Navigation from './components/Navigation/Navigation'
const Dashboard = () => {
  return (
    <div className='dashboard'>
      <Header/>
            <Actions/>
            <Balance/>
            <Sendmoneybox/>
            <Quickaccess/>
            <Transactionhistory/>
            <Navigation/>


    </div>
  )
}

export default Dashboard
