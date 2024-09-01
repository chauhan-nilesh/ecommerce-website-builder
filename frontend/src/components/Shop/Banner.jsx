import React, { useEffect, useState } from 'react'

function Banner() {

    const [store, setStore] = useState({})
    const [color1, setColor1] = useState("")
    const [color2, setColor2] = useState("")
    const [loading, setLoading] = useState(true)

    const subdomain = window.location.hostname.split('.')[0];

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

    return (
        <>
            <div className='hidden md:flex'>
                {store.banner ?
                    <div className='flex justify-center items-center text-4xl w-full h-auto text-white font-bold' style={{ color: color2, backgroundColor: color1 }}>
                        <img className='h-full w-full' src={`${import.meta.env.VITE_API_URL}/uploads/` + store.banner} alt="store banner" />
                    </div>
                    : <div className='flex justify-center items-center text-4xl w-full h-96 text-white font-bold' style={{ color: color2, backgroundColor: color1 }}>
                        Sample Banner Text
                    </div>
                }
            </div>
            <div className='md:hidden flex'>
                {store.mobileBanner ?
                    <div className='flex justify-center items-center text-4xl w-full h-auto text-white font-bold' style={{ color: color2, backgroundColor: color1 }}>
                        <img className='h-full w-full' src={`${import.meta.env.VITE_API_URL}/uploads/` + store.mobileBanner} alt="store banner" />
                    </div>
                    : <div className='flex justify-center items-center text-4xl w-full h-96 text-white font-bold' style={{ color: color2, backgroundColor: color1 }}>
                        Sample Banner Text
                    </div>
                }
            </div>
        </>
    )
}

export default Banner