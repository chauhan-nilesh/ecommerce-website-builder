import React from 'react'

function Header() {
    return (
        <header className="py-2 px-3 lg:px-4 top-0 sticky text-violet-600 border-b border-gray-200 bg-white lg:hidden">
            <div className="container flex justify-between h-[75px]">
                <a rel="noopener noreferrer" href="dashboard" aria-label="Back to homepage" className="flex items-center p-2">
                    <h2 className='text-xl font-bold'>Mini Store</h2>
                </a>
            </div>
        </header>
    )
}

export default Header