import React from 'react'
import { Link, NavLink } from "react-router-dom"

export default function Footer() {
    return (
        <footer className="px-4 divide-y bg-zinc-100 text-gray-800">
            <div className='flex justify-center items-center p-8'>
                <div>
                    <div className='flex justify-center items-center'>
                    <img className='h-20' src="/vite.svg" alt="logo" />
                    </div>
                    <div className='mt-10'>
                        <Link to="about-us"><p className='text-center text-xl font-bold'>About Us</p></Link>
                        <Link to="pricing"><p className='text-center text-xl font-bold mt-2'>Pricing</p></Link>
                        <Link to="terms-and-conditions"><p className='text-center text-xl font-bold mt-2'>Terms & Conditions</p></Link>
                        <Link><p className='text-center text-xl font-bold mt-2'>Contact</p></Link>

                    </div>
                </div>
            </div>
            <div className="py-6 text-sm text-center text-gray-700">©2024 Company Co. All rights reserved.</div>
        </footer>
    );
}
