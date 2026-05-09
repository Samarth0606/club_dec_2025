import React from 'react'
import Header from './components/Header'
import Body from './components/Body'
import Footer from './components/Footer'
import ApiCalling from './components/ApiCalling'
import { Outlet } from 'react-router-dom'

function App() {
  return (
    <div>
      {/* <ApiCalling /> */}
      <Header />
      {/* <Body /> */}
      <Outlet />
      <Footer />
    </div>
  )
}

export default App