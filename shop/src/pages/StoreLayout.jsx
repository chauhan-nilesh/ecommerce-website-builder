import React, { useEffect, useState } from 'react'
import { Outlet } from 'react-router-dom'
import { Footer, Header } from '../components'
import { useCustomerAuth } from '../store/customerAuth'

function StoreLayout() {

  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const { setStoreId, storeId } = useCustomerAuth()

  const subdomain = window.location.hostname.split('.')[0];

  useEffect(() => {
    try {
      setLoading(true)
        ; (async () => {
          const response = await fetch(`${import.meta.env.VITE_API_URL}/api/store/data`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify({ subdomain })
          })

          const responseData = await response.json();

          setLoading(false)
          if (response.ok) {
            setStoreId(responseData.data.store._id)
          }

        })()

    } catch (error) {
      setError(error)
      setLoading(false)
    }

  }, [])

  if (loading) {
    return <div className='flex h-screen w-full justify-center items-center'><span className="loading loading-spinner loading-lg"></span></div>
  }

  if (error) {
    return <h1>Error: {error}</h1>
  }
  return (

    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  )
}

export default StoreLayout