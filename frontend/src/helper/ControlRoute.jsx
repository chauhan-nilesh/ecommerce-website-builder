import React from 'react'

function ControlRoute({ children }) {
    return (
        <>
            {
                false ? children : <section className="flex items-center h-screen sm:p-16 bg-gray-50 text-gray-800" >
                    <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8 space-y-8 text-center sm:max-w-md">
                        <h2 className="mb-8 font-extrabold text-9xl text-gray-400">
                            <span className="sr-only">Error</span>404
                        </h2>
                        <p className="text-3xl">Looks like our services are currently offline</p>
                        <a rel="noopener noreferrer" href="#" className="px-8 py-3 font-semibold rounded bg-orange-600 text-gray-50">Back to homepage</a>
                    </div>
                </section >
            }
        </>
    )
}

export default ControlRoute