import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { useAuth } from '../../store/auth'

function SignUp() {
    const [user, setUser] = useState({
        email: "",
        password: ""
    })
    const navigate = useNavigate()

    const { storeTokenInLS, setUserId } = useAuth()

    const handleInput = (e) => {
        let name = e.target.name;
        let value = e.target.value;

        setUser({
            ...user,
            [name]: value,
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const response = await fetch(`${import.meta.env.VITE_API_URL}/api/user/register`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(user)
            })

            setUser({
                email: "",
                password: ""
            })

            const responseData = await response.json()

            if (response.ok) {
                setUserId(responseData.data.user._id)
                storeTokenInLS(responseData.data.token)
                toast.success(responseData.message)
                navigate("/create-store")
            } else {
                toast.error(responseData.message)
            }

        } catch (error) {
            console.log(error)
        }
    }

    return (
        <>
            <div className='flex flex-wrap justify-center items-center h-auto py-10'>
                <div className="w-96 mx-auto bg-white p-8 rounded-2xl shadow-none lg:shadow-md">
                    <h1 className="text-3xl text-black font-bold mb-6 flex flex-wrap justify-center">Sign Up</h1>
                    <h3 className="text-gray-700">Already registered? <Link className='font-bold' to="/login">Login</Link></h3>
                    <form onSubmit={handleSubmit}>
                        <div className="form-input mt-5 mb-6">
                            <label htmlFor="email">Email</label><br />
                            <input onChange={handleInput} value={user.email} className='w-full bg-gray-50 rounded-md px-3 py-3' type="email" name='email' id="email" placeholder=" " />
                        </div>
                        <div className="form-input mb-6">
                            <label htmlFor="password">Password</label><br />
                            <input onChange={handleInput} value={user.password} className='w-full bg-gray-50 rounded-md px-3 py-3' type="password" name="password" id="password" placeholder=" " />
                        </div>
                        <button type="submit"
                            className="bg-black w-full text-xl font-bold text-white py-4 px-4 rounded-md hover:bg-zinc-900 transition duration-200">Register</button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default SignUp