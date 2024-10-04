import React, { useEffect, useState } from 'react'
import { useCustomerAuth } from '../store/customerAuth'
import toast from 'react-hot-toast';

function UpdatePassword() {
    const [loading, setLoading] = useState(true)
    const [customerData, setCustomerData] = useState({})
    const [customerToken, setCustomerToken] = useState(localStorage.getItem("customerToken"))
    const [changePassword, setChangePassword] = useState({
        oldPassword: "",
        newPassword: ""
    })

    const customerAuthentication = async () => {
        try {
            setLoading(true)
            const response = await fetch(`${import.meta.env.VITE_API_URL}/api/customer/current-customer`, {
                method: "GET",
                headers: {
                    Authorization: `Bearer ${customerToken}`
                }
            })

            if(response.ok){
                const data = await response.json();
                setCustomerData(data.data)
                setLoading(false)
            } else {
                setLoading(false)
            }
        } catch (error) {
            console.log("Error while fetching customer data")
        }
    }

    useEffect(()=> {
        if(customerToken){
            customerAuthentication()
        }
    },[])

    const handleInput = (e) => {
        const { name, value } = e.target;

        setChangePassword({
            ...changePassword,
            [name]: value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch(`${import.meta.env.VITE_API_URL}/api/customer/update-password`, {
                method: "PATCH",
                headers: {
                    Authorization: `Bearer ${customerToken}`,
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ ...changePassword })
            })

            if (response.ok) {
                const responseData = await response.json();
                setChangePassword({
                    oldPassword: "",
                    newPassword: ""
                })
                toast.success(responseData.message)
            }
        } catch (error) {
            console.log(error)
        }
    };


    if (loading) {
        return <div className='flex h-screen w-full justify-center items-center'><span className="loading loading-spinner loading-lg"></span></div>
    }
    return (

        <div className="lg:w-3/4 mt-8 lg:mt-0 h-full">
            <div>
                <h4 className="lg:ml-8 font-semibold text-2xl border-b-4 border-b-black">Update Password</h4>
                <div className='mt-8 lg:ml-8'>
                    <div className='grid grid-flow-row'>
                        <label className='font-semibold tracking-tight text-zinc-700 text-lg' htmlFor="email">Your Email Id</label>
                        <input
                            type="email"
                            name='email'
                            id="email"
                            value={customerData?.email}
                            placeholder="Store Name"
                            className="border px-3 py-3 rounded-lg outline-none text-black disabled:bg-gray-200 disabled:text-gray-500 bg-transparent w-full max-w-xs"
                            readOnly
                            disabled
                        />
                    </div>
                </div>
                <form onSubmit={handleSubmit} className='grid grid-flow-row lg:ml-8 mt-6'>
                    <label className='font-semibold tracking-tight text-zinc-700 text-lg' htmlFor="oldPassword">Enter Old Password</label>
                    <input
                        type="text"
                        name='oldPassword'
                        id="oldPassword"
                        onChange={handleInput}
                        value={changePassword?.oldPassword}
                        placeholder="Old Password"
                        className="border px-3 py-3 rounded-lg outline-none text-black bg-transparent w-full max-w-xs"
                    />
                    <label className='font-semibold tracking-tight text-zinc-700 text-lg mt-5' htmlFor="newPassword">Enter New Password</label>
                    <input
                        type="text"
                        name='newPassword'
                        id="newPassword"
                        onChange={handleInput}
                        value={changePassword?.newPassword}
                        placeholder="New Password"
                        className="border px-3 py-3 rounded-lg outline-none text-black bg-transparent w-full max-w-xs"
                    />
                    <button className=" text-white py-2 rounded-lg tracking-tight hover:bg-orange-700 bg-black text-base mt-6 mb-10 w-full lg:w-56">Update Password</button>
                </form>
            </div>
        </div>
    )
}

export default UpdatePassword