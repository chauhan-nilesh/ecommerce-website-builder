import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useCustomerAuth } from '../store/customerAuth';
import { useCart } from '../store/CartContext';

function Header() {
  const { cart } = useCart()
  const { customerToken } = useCustomerAuth();
  const [store, setStore] = useState({})
  const [color1, setColor1] = useState("")
  const [color2, setColor2] = useState("")
  const [loading, setLoading] = useState(true)

  const subdomain = window.location.hostname;

  async function getThemeColor() {
    try {
      setLoading(true)
      const response = await fetch(`${import.meta.env.VITE_API_URL}/api/store/subdomain/${subdomain}`)
      const responseData = await response.json()
      if (response.ok) {
        setStore(responseData.data)
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
    getThemeColor()
  }, [])

  if (loading) {
    // return <div className='flex h-screen w-full justify-center items-center'><span className="loading loading-spinner loading-lg"></span></div>
    return (
      <header className='h-[70px] top-0 sticky bg-white z-50 border-b border-gray-100'>
        <div className='lg:mx-28 mx-3 md:mx-5 flex flex-wrap justify-between items-center h-full'>
          <div data-theme='light' className='skeleton w-24 h-9'></div>
        </div>
      </header>
    )
  }

  return (
    <header className='h-[70px] top-0 sticky bg-white z-50 border-b border-gray-100'>
      <div className='lg:mx-28 mx-3 md:mx-5 flex flex-wrap justify-between items-center h-full'>
        <Link to="/">
          {store?.logo ?
            <img className='h-12 lg:w-auto max-w-36' src={store?.logo} alt="Logo" loading='lazy' />
            :
            <h2 className='text-3xl font-extrabold'>{store?.name}</h2>
          }
        </Link>
        <div className='flex flex-wrap justify-center items-center'>
          <div className='lg:ml-4 flex justify-center items-center'>
            <Link to="/cart" style={{ position: 'relative', display: 'inline-block' }}>
              <svg className="w-7 h-7 lg:w-8 lg:h-8 font-bold fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 93.81 122.88">
                <path d="M28.98,31.32v-9.74h-0.01c0-4.72,1.94-9.02,5.05-12.13c3.12-3.12,7.41-5.06,12.13-5.06V4.4h0.03V4.39 c4.72,0,9.02,1.94,12.13,5.05c3.12,3.12,5.05,7.41,5.06,12.13h-0.01v9.86c-2.09,0.69-3.6,2.65-3.6,4.97c0,2.89,2.34,5.24,5.24,5.24 c2.89,0,5.24-2.35,5.24-5.24c0-1.88-0.99-3.52-2.47-4.44V21.57h-0.01c-0.01-5.93-2.43-11.32-6.33-15.22 c-3.91-3.91-9.31-6.34-15.24-6.34V0l-0.03,0v0.01c-5.93,0-11.32,2.43-15.22,6.33c-3.91,3.91-6.34,9.31-6.34,15.24h-0.01v10.65 c-1.26,0.96-2.08,2.47-2.08,4.17c0,2.89,2.35,5.24,5.24,5.24c2.89,0,5.24-2.35,5.24-5.24C32.98,33.94,31.27,31.88,28.98,31.32 L28.98,31.32L28.98,31.32z M10.99,31.49h6.56c-0.86,1.61-1.36,3.46-1.36,5.42c0,0.68,0.06,1.34,0.17,1.98h-3.23l-5.56,76.59h78.67 l-5.56-76.59h-4.6c0.11-0.64,0.17-1.31,0.17-1.98c0-1.96-0.49-3.8-1.36-5.42h7.92c1.41,0,2.64,0.57,3.55,1.48 c0.88,0.88,1.44,2.07,1.53,3.36l5.89,81.19c0.01,0.16,0.02,0.28,0.02,0.35c0,1.39-0.59,2.62-1.5,3.52c-0.85,0.83-2,1.38-3.24,1.47 c-0.16,0.01-0.29,0.02-0.36,0.02H5.1c-0.07,0-0.2-0.01-0.36-0.02c-1.23-0.09-2.39-0.63-3.24-1.47c-0.92-0.9-1.5-2.13-1.5-3.53 c0-0.07,0.01-0.18,0.02-0.35l5.89-81.19c0.09-1.29,0.65-2.48,1.53-3.36C8.36,32.06,9.59,31.49,10.99,31.49L10.99,31.49z M37.81,31.49h16.83c-0.86,1.61-1.36,3.46-1.36,5.42c0,0.68,0.06,1.34,0.17,1.98H38.99c0.11-0.64,0.17-1.31,0.17-1.98 C39.17,34.95,38.67,33.11,37.81,31.49L37.81,31.49z" />
              </svg>
              {cart.length === 0 ?
                ""
                :
                <span style={{
                  position: 'absolute',
                  top: '-4px',
                  right: '-4px',
                  background: color1,
                  color: color2,
                  borderRadius: '50%',
                  padding: '0.1em 0.39em',
                  fontSize: '0.65rem',
                  fontWeight: 'bold'
                }}>
                  {cart.length}
                </span>
              }
            </Link>

          </div>
          {customerToken ?
            <div className='ml-1 lg:ml-4'>
              <div className="dropdown dropdown-end">
                <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                  <div className="lg:w-8 w-7 rounded-full">
                    <img alt="Avatar" src="/profile.svg" />
                  </div>
                </div>
                <ul data-theme="light" tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] py-2 shadow rounded-box w-52">
                  <li>
                    <Link to="/account" className="justify-between">
                      Profile
                    </Link>
                  </li>
                  <li><Link to="orders">Orders</Link></li>
                  <li><Link to="logout">Logout</Link></li>
                </ul>
              </div>
            </div>
            :
            <>
              <div className='lg:block hidden font-semibold text-xl lg:text-base tracking-tighter bg-transparent pl-4 py-2 rounded-lg' style={{ color: color1 }}>
                <Link to="/login">
                  Login
                </Link>
              </div>
              <div className='lg:hidden lg:font-semibold text-base tracking-tighter bg-transparent pl-2 py-2 rounded-lg' style={{ color: color1 }}>
                <Link to="/login">
                  <img alt="Avatar" src="/profile.svg" className='h-7'/>
                </Link>
              </div>
              <div className='ml-4 lg:block hidden'>
                <Link to="/signup" className='font-bold tracking-tighter lg:font-semibold text-white px-4 py-2 rounded-lg' style={{ backgroundColor: color1 }}>
                  Signup
                </Link>
              </div>
            </>
          }
        </div>
      </div>
    </header>
  );
}

export default Header;
