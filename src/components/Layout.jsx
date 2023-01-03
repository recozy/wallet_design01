import React from 'react'
import Header from './Header'
import TabMenu from './TabMenu'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <>
        <Header/>
        <Outlet/>
        <TabMenu/>
    </>
  )
}

export default Layout