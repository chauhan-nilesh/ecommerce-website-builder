import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { useAuth } from '../../store/auth'

function Login() {

    const [user, setUser] = useState({
        email: "",
        password: ""
    })

    const navigate = useNavigate()

    const { storeTokenInLS, setUserId } = useAuth()

    const [error, setError] = useState("")

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
            const response = await fetch(`${import.meta.env.VITE_API_URL}/api/user/login`, {
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
                // localStorage.setItem("token", responseData.data.token)
                toast.success(responseData.message)
                if(responseData.data.user.store){
                    navigate("/seller/dashboard")
                } else {
                    navigate("/create-store")
                }
            } else {
                toast.error(responseData.message)
            }

        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className='flex flex-wrap justify-center items-center h-auto py-10'>
            <div className="w-96 mx-auto bg-white p-8 rounded-2xl shadow-none lg:shadow-md">
                <h1 className="text-3xl text-black font-bold mb-6 flex flex-wrap justify-center">Login</h1>
                <h3 className="text-gray-700">Not registered? <Link className='font-bold' to="/signup">Register</Link></h3>
                <form onSubmit={handleSubmit}>
                    <div className="form-input mt-5 mb-6">
                        <label htmlFor="email">Email</label><br />
                        <input onChange={handleInput} type="email" placeholder=" " className="input input-bordered bg-gray-50 w-full max-w-xs" value={user.email} name='email' id="email" />
                    </div>
                    <div className="form-input mb-6">
                        <label htmlFor="password">Password</label><br />
                        <input onChange={handleInput} placeholder=" " className="input input-bordered bg-gray-50 w-full max-w-xs" value={user.password} type="password" name='password' id="password" />
                    </div>
                    <button type="submit"
                        className="bg-black w-full text-xl font-bold text-white py-4 px-4 rounded-md hover:bg-zinc-900 transition duration-200">Login</button>
                </form>
            </div>
        </div>
    )
}

export default Login