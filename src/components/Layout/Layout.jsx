import React from 'react'
import Header from '../Header/Header'
import { Outlet } from 'react-router-dom'
import Footer from '../Footer/Footer'
import TestModal from '../TestModal/TestModal'

function Layout() {
  return (
    <div>
      <Header/>
      <TestModal/>
      <Outlet/>
      <Footer/>
    </div>
  )
}

export default Layout
