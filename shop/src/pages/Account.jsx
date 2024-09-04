import React from 'react'
import { Link, Outlet } from 'react-router-dom'

function Account() {

    return (
        <div className="m-5 lg:m-10">
            <h4 className="text-2xl font-bold">Hello,</h4>
            <div className="lg:flex flex-wrap mt-6">
                <div className="lg:w-1/4 w-full lg:h-full ">
                    <div className="grid grid-rows-4 h-[26rem]">
                        <Link className="text-xl border-t-2 border-t-black border-x-2 border-x-black flex flex-wrap justify-center items-center"
                            to="/account">Profile</Link>
                        <Link className="text-xl border-t-2 border-t-black border-x-2 border-x-black flex flex-wrap justify-center items-center"
                            to="/orders">Orders</Link>
                        <Link className="text-xl border-t-2 border-t-black border-x-2 border-x-black flex flex-wrap justify-center items-center"
                            to="./update-password">Change Password</Link>
                        <Link className="text-xl border-y-2 border-y-black border-x-2 border-x-black flex flex-wrap justify-center items-center"
                            to="/logout">Logout</Link>
                    </div>
                </div>

                <Outlet />
            </div>
        </div>
    )
}

export default Account