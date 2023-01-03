import React from 'react'
import TabMenu from './TabMenu'
import { Outlet } from 'react-router-dom'

const TabLayout = () => {
  return (
    <>
        <Outlet/>
        <TabMenu/>
    </>
  )
}

export default TabLayout