import React, { Suspense } from 'react'
// import Reff from './components/Reff'
// import Refff from './components/Refff'
import { Link, Route, Routes } from 'react-router-dom'
// import Dashboard from './components/Dashboard'
const Dashboard = React.lazy( ()=> import('./components/Dashboard') )

// import Profile from './components/Profile'
const Profile = React.lazy( ()=> import('./components/Profile') )

function App() {
  return (
    <div>
      <Routes>
        <Route element={ <Suspense fallback="loading1..."> <Dashboard /> </Suspense> } path="/dashboard" />
        <Route element={ <Suspense fallback="loading2..."> <Profile /> </Suspense> }   path="/profile" />
      </Routes>
      {/* <a href="/dashboard">Visit Dashboard</a> */}
      {/* <a href="/profile">Visit Profile</a> */}
      <Link to='/dashboard'>DASHBOARD</Link>
      <Link to='/profile'>PROFILE</Link>
      {/* <Reff /> */}
      {/* <Refff /> */}
    </div>
  )
}

export default App