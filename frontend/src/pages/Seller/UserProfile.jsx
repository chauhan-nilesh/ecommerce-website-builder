import React, { useEffect, useState } from 'react'
import { useAuth } from '../../store/auth'
import { toast } from 'react-toastify'

function UserProfile() {
    const [userDetails, setUserDetails] = useState({})
    const [loading, setLoading] = useState(true)
    const [changePassword, setChangePassword] = useState({
        oldPassword: "",
        newPassword: ""
    })
    const { token } = useAuth()

    async function getUserData() {
        try {
            setLoading(true)

            const response = await fetch(`${import.meta.env.VITE_API_URL}/api/user/current-user`, {
                method: "GET",
                headers: {
                    Authorization: `Bearer ${token}`,
                }
            });

            if (response.ok) {
                const responseData = await response.json()
                setUserDetails(responseData.data)
            }

            setLoading(false)
        } catch (error) {
            console.log(error)
            setLoading(false)
        }
    }

    useEffect(() => {
        getUserData()
    }, [])

    if (loading) {
        return <div className='flex h-screen w-full justify-center items-center'><span className="loading loading-spinner loading-lg"></span></div>
    }


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
            const response = await fetch(`${import.meta.env.VITE_API_URL}/api/user/update-password/${userDetails._id}`, {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
                body: JSON.stringify(changePassword)
            })

            const data = await response.json()
            setChangePassword({
                oldPassword: "",
                newPassword: ""
            })
            if (response.ok) {
                toast.success(data.message)
            } else {
                toast.error(data.message)
            }
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className='w-full h-screen'>
            <div className='lg:my-7 lg:mx-10 my-3 mx-5'>
                <h2 className='text-2xl lg:text-4xl text-zinc-900 font-bold tracking-tight'>Profile</h2>
                <div className='mt-8'>
                    <div className='grid grid-flow-row'>
                        <label className='font-semibold tracking-tight text-zinc-700 text-lg' htmlFor="email">Your Email Id</label>
                        <input
                            type="email"
                            name='email'
                            id="email"
                            value={userDetails.email}
                            placeholder="Store Name"
                            className="input input-primary text-black disabled:bg-gray-200 disabled:text-gray-500 bg-transparent w-full max-w-xs"
                            readOnly
                            disabled
                        />
                    </div>
                    <div className='mt-14'>
                        <h3 className='text-2xl lg:text-3xl text-zinc-900 font-bold tracking-tighter'>Change Password</h3>
                        <form onSubmit={handleSubmit} className='grid grid-flow-row mt-6'>
                            <label className='font-semibold tracking-tight text-zinc-700 text-lg' htmlFor="oldPassword">Enter Old Password</label>
                            <input
                                type="text"
                                name='oldPassword'
                                id="oldPassword"
                                onChange={handleInput}
                                value={changePassword.oldPassword}
                                placeholder="Old Password"
                                className="input input-primary text-black bg-transparent w-full max-w-xs"
                            />
                            <label className='font-semibold tracking-tight text-zinc-700 text-lg mt-5' htmlFor="newPassword">Enter New Password</label>
                            <input
                                type="text"
                                name='newPassword'
                                id="newPassword"
                                onChange={handleInput}
                                value={changePassword.newPassword}
                                placeholder="Old Password"
                                className="input input-primary text-black bg-transparent w-full max-w-xs"
                            />
                            <button className="btn btn-primary text-white text-lg mt-6 w-44">Update Password</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserProfile