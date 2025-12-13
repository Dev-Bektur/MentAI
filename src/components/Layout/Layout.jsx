import React from 'react'
import Header from '../Header/Header'
import { Outlet } from 'react-router-dom'
import Footer from '../Footer/Footer'
import TestModal from '../TestModal/TestModal'
import ChatConsulter from '../ChatConsulter/ChatConsulter'

function Layout() {
  return (
    <div>
      <Header/>
      <TestModal/>
      <ChatConsulter/>
      <Outlet/>
      <Footer/>
    </div>
  )
}

export default Layout
