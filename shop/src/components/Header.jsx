import React from 'react';
import { Link } from 'react-router-dom';
import { useCustomerAuth } from '../store/customerAuth';
import { useCart } from '../store/CartContext';

function Header({ store, color1, color2 }) {
  const { cart } = useCart();
  const { customerToken } = useCustomerAuth();

  return (
    <header className='h-[70px] top-0 sticky bg-white z-50 border-b border-gray-100'>
      <div className='lg:mx-28 mx-3 md:mx-5 flex flex-wrap justify-between items-center h-full'>
        <Link to="/">
          {store?.logo ? (
            <img className='h-12 lg:w-auto max-w-36' src={store?.logo} alt="Logo" loading='lazy' />
          ) : (
            <h2 className='text-3xl font-extrabold'>{store?.name || 'Store Name'}</h2>
          )}
        </Link>
        <div className='flex flex-wrap justify-center items-center'>
          <div className='lg:ml-4 flex justify-center items-center'>
            <Link to="/cart" style={{ position: 'relative', display: 'inline-block' }}>
              <svg className="w-7 h-7 lg:w-8 lg:h-8 font-bold fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 93.81 122.88">
                <path d="M28.98,31.32v-9.74..."></path>
              </svg>
              {cart.length > 0 && (
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
              )}
            </Link>
          </div>
          {customerToken ? (
            <div className='ml-1 lg:ml-4'>
              <div className="dropdown dropdown-end">
                <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                  <div className="lg:w-8 w-7 rounded-full">
                    <img alt="Avatar" src="/profile.svg" />
                  </div>
                </div>
                <ul className="menu menu-sm dropdown-content mt-3 z-[1] py-2 shadow rounded-box w-52">
                  <li><Link to="/account">Profile</Link></li>
                  <li><Link to="/orders">Orders</Link></li>
                  <li><Link to="/logout">Logout</Link></li>
                </ul>
              </div>
            </div>
          ) : (
            <>
              <Link to="/login" className='lg:block hidden font-semibold text-xl lg:text-base tracking-tighter pl-4 py-2 rounded-lg' style={{ color: color1 }}>
                Login
              </Link>
              <Link to="/login" className='lg:hidden pl-2 py-2 rounded-lg' style={{ color: color1 }}>
                <img alt="Avatar" src="/profile.svg" className='h-7' />
              </Link>
              <Link to="/signup" className='ml-4 font-bold tracking-tighter text-white px-4 py-2 rounded-lg' style={{ backgroundColor: color1 }}>
                Signup
              </Link>
            </>
          )}
        </div>
      </div>
    </header>
  );
}

export default Header;
