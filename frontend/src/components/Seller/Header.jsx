import React from 'react'

function Header() {
    return (
        <header className="py-2 px-4 sticky text-violet-600 border-b border-gray-200 bg-white lg:hidden">
            <div className="container flex justify-between h-16 mx-auto">
                <a rel="noopener noreferrer" href="dashboard" aria-label="Back to homepage" className="flex items-center p-2">
                    <h2 className='text-3xl font-bold'>Mini Store</h2>
                </a>
            </div>
        </header>
    )
}

export default Header