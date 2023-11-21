import React from 'react'
import Homepage from './Pages/Homepage/Homepage'
import { Route } from 'react-router-dom'
import { Routes } from 'react-router-dom'
import Signinpage from './Pages/Loginpage/Signinpage'
import Dashboard from './Pages/Dashboard/Dashboard'
import Transfer from './Pages/Dashboard/components/Transferpage/Transfer'
const App = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={ <Homepage/>}></Route>
            <Route path='/Login' element={ <Signinpage/>}></Route>
            <Route path='/Dashboard' element={ <Dashboard/>}></Route>
            <Route path='/Transfer' element={ <Transfer/>}></Route>
        </Routes>
     
    </div>
  )
}

export default App
