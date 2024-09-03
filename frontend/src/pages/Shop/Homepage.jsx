import React, { useEffect, useState, Suspense, lazy } from 'react'
import { ProductCard, Category } from "../../components/Shop"
import LazyLoadingPage from '../../components/Shop/LazyLoadingPage'

function Homepage() {
  const [store, setStore] = useState({})
  const [products, setProducts] = useState({})
  const [color1, setColor1] = useState("")
  const [color2, setColor2] = useState("")
  const [loading, setLoading] = useState(true)

  const subdomain = window.location.hostname.split('.')[0];
  const Banner = lazy(() => import('../../components/Shop/Banner'));

  async function getStoreData() {
    try {
      setLoading(true)
      const response = await fetch(`${import.meta.env.VITE_API_URL}/api/store/subdomain/${subdomain}`)
      const responseData = await response.json()
      if (response.ok) {
        setStore(responseData.data)
        setProducts(responseData.data.products)
        setColor1(responseData.data.themeColorOne)
        setColor2(responseData.data.themeColorTwo)
      }
      setLoading(false)
    } catch (error) {
      console.log(error)
      setLoading(false)
    }
  }

  useEffect(() => {
    getStoreData()
  }, [])


  if (loading) {
    return <LazyLoadingPage />
  }


  return (
    <>
      <Suspense fallback={<div data-theme='light' className="skeleton rounded-none h-96 w-full"></div>}>
        <Banner />
      </Suspense>
      {store.hideCategory === false ?
        <Category categories={store?.categories} />
        : ""
      }

      {/* New Arrivals */}
      <div className="bg-white">
        <div className="mx-auto px-4 py-5 sm:px-6 sm:py-10 lg:max-w-7xl lg:px-4">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">New Arrivals</h2>

          <ProductCard products={products} color1={color1} color2={color2} />
        </div>
      </div>

      {/* All Products */}
      <div className="mx-auto px-4 py-5 sm:px-6 sm:py-10 lg:max-w-7xl lg:px-4 mb-10">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">All Products</h2>
        <ProductCard products={products} color1={color1} color2={color2} />
      </div>
    </>
  )
}

export default Homepage