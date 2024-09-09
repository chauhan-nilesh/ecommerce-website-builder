import React, { useEffect, useState } from 'react'

function Returnpolicy() {

    const [store, setStore] = useState({})
    const [isLoading, setIsLoading] = useState(true)

    const subdomain = window.location.hostname.split('.')[0];

    async function getStoreData() {
        try {
            setIsLoading(true)
            const response = await fetch(`${import.meta.env.VITE_API_URL}/api/store/subdomain/${subdomain}`)
            const responseData = await response.json()
            if (response.ok) {
                setStore(responseData.data)
            }
            setIsLoading(false)
        } catch (error) {
            console.log(error)
            setIsLoading(false)
        }
    }

    useEffect(() => {
        getStoreData()
    }, [])

    if (isLoading) {
        return <div className='flex h-screen w-full justify-center items-center'><span className="loading loading-spinner loading-lg"></span></div>
    }

    return (
        <div className="container mx-auto px-2 py-10">
            <header className="text-center">
                <h1 className="text-4xl font-bold text-black">Return & replacement Policy</h1>
            </header>
            <section className="bg-white p-8 rounded-lg lg:mx-28">
                <div className="mb-8">
                    <p className="text-gray-600 text-lg">
                        { store.returnPolicy }
                    </p>
                </div>
            </section>
        </div>
    );
}

export default Returnpolicy