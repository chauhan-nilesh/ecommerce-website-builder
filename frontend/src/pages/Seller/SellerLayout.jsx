import React from 'react'
import { Outlet } from 'react-router-dom'
import { BottomNavBar, Header, Sidebar } from '../../components/Seller'

function Layout() {
  return (
    <>
      <Header />
      <div className='flex bg-gray-100'>
        <aside className='h-screen sticky top-0 p-3 space-y-2 w-60 bg-slate-900 text-gray-100 hidden lg:block'>
          <Sidebar />
        </aside>
        <main className='w-full bg-gray-100 h-full'>
          <Outlet />
        </main>
      </div>
      <BottomNavBar />
    </>
  )
}

export default Layout