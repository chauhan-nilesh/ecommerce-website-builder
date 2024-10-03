import React from 'react';
import { Link } from "react-router-dom";

export default function Footer({ store, color1, color2 }) {

  return (
    <footer className="px-4 mt-4 divide-y text-gray-800" style={{ backgroundColor: color2 }}>
      <div className="container flex flex-col justify-between py-10 lg:px-2 lg:mx-auto space-y-8 lg:flex-row lg:space-y-0">
        <div className="lg:w-1/3 lg:mx-8">
          <Link to="/" className="flex space-x-3 justify-start">
            <h3 className="self-center text-2xl lg:text-3xl font-bold tracking-tight" style={{ color: color1 }}>
              About {store?.name || "Our Store"}
            </h3>
          </Link>
          <p className='mt-3 text-justify text-base tracking-tight' style={{ color: color1 }}>
            {store?.bio || "Welcome to our store. We provide quality products."}
          </p>
        </div>
        <div className="grid grid-cols-1 text-lg gap-x-3 gap-y-8 lg:w-2/3 sm:grid-cols-3">
          <div className="space-y-3">
            <h3 className="tracking-tight uppercase text-base font-bold" style={{ color: color1 }}>Company</h3>
            <ul className="space-y-1 tracking-tight text-base" style={{ color: color1 }}>
              <li className="hover:brightness-150"><Link to="/shipping-policy">Shipping Policy</Link></li>
              <li className="hover:brightness-150"><Link to="/return-policy">Return & Replacement Policy</Link></li>
            </ul>
          </div>
          <div className="space-y-3">
            <div className="text-base uppercase font-bold tracking-tight" style={{ color: color1 }}>Social Media</div>
            <div className="flex justify-start space-x-3">
              {store?.facebook && (
                <a href={store.facebook} title="Facebook" className="flex items-center p-1">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="w-5 h-5 fill-current" style={{ color: color1 }}>
                    <path d="M32 16c0-8.839-7.167-16..."></path>
                  </svg>
                </a>
              )}
              {store?.twitter && (
                <a href={store.twitter} title="Twitter" className="flex items-center p-1">
                  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 fill-current" style={{ color: color1 }}>
                    <path d="M..."></path>
                  </svg>
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
