import React, {useEffect, useState} from 'react'
import Quickaccess from './components/quickaccess/quickaccess'
import Transactionhistory from './components/Transactionhistory/Transactionhistory'
import './Dashboard.scss'
import Header from './components/header/Header'
import Actions from './components/Actions/Actions'
import Balance from './components/Balance/Balance'
import Sendmoneybox from './components/sendmoneybox/Sendmoneybox'
import Navigation from './components/Navigation/Navigation'
const Dashboard = () => {
    const [loggedInUser, setLoggedInUser] = useState(null);

    useEffect(() => {
        // Check if 'loggedInUser' is available in session storage
        const storedUser = sessionStorage.getItem('loggedInUser');
        if (storedUser) {
            setLoggedInUser(JSON.parse(storedUser));
        }
        else{
            window.location.replace('/login');
        }
    }, [loggedInUser]);

  return (
    <div className='dashboard'>
        <Header user={loggedInUser}/>
        <Actions user={loggedInUser}/>
        <Balance user={loggedInUser}/>
        <Sendmoneybox user={loggedInUser}/>
        <Quickaccess user={loggedInUser}/>
        <Transactionhistory user={loggedInUser}/>
        <Navigation user={loggedInUser}/>
    </div>
  )
}

export default Dashboard
