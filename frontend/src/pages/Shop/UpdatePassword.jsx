import React, { useState } from 'react'
import { useCustomerAuth } from '../../store/customerAuth'
import { toast } from 'react-toastify'

function UpdatePassword() {
    const { customerData, customerToken, loading } = useCustomerAuth()
    const [changePassword, setChangePassword] = useState({
        oldPassword: "",
        newPassword: ""
    })

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
                <h4 className="lg:ml-8 font-bold text-3xl border-b-4 border-b-black">Update Password</h4>
                <div className='mt-8 lg:ml-8'>
                    <div className='grid grid-flow-row'>
                        <label className='font-semibold tracking-tight text-zinc-700 text-lg' htmlFor="email">Your Email Id</label>
                        <input
                            type="email"
                            name='email'
                            id="email"
                            value={customerData?.email}
                            placeholder="Store Name"
                            className="input input-primary text-black disabled:bg-gray-200 disabled:text-gray-500 bg-transparent w-full max-w-xs"
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
                        className="input input-primary text-black bg-transparent w-full max-w-xs"
                    />
                    <label className='font-semibold tracking-tight text-zinc-700 text-lg mt-5' htmlFor="newPassword">Enter New Password</label>
                    <input
                        type="text"
                        name='newPassword'
                        id="newPassword"
                        onChange={handleInput}
                        value={changePassword?.newPassword}
                        placeholder="New Password"
                        className="input input-primary text-black bg-transparent w-full max-w-xs"
                    />
                    <button className="btn btn-primary text-white text-lg mt-6 w-44">Update Password</button>
                </form>
            </div>
        </div>
    )
}

export default UpdatePassword