import React, { useEffect, useState } from 'react'
import { useCustomerAuth } from '../../store/customerAuth'
import { Link } from 'react-router-dom'
import dateFormat from 'dateformat'

function Order() {
    const { customerData, loading } = useCustomerAuth()
    const [orders, setOrders] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    const getAllOrders = async () => {
        setIsLoading(true)
        try {
            const response = await fetch(`${import.meta.env.VITE_API_URL}/api/order/all-orders/${customerData._id}`)

            if (response.ok) {
                const responseData = await response.json()
                setOrders(responseData.data)
            }
            setIsLoading(false)
        } catch (error) {
            console.error(error)
            setIsLoading(false)
        }
    }

    useEffect(() => {
        getAllOrders()
    }, [])

    if (loading) {
        return <div className='flex h-screen w-full justify-center items-center'><span className="loading loading-spinner loading-lg"></span></div>;
    }

    if (isLoading) {
        return <div className='flex h-screen w-full justify-center items-center'><span className="loading loading-spinner loading-lg"></span></div>;
    }

    return (
        <div className='w-full h-full bg-white'>
            <div className='px-5 lg:px-64 py-10'>
                <div>
                    <h2 className='text-4xl font-bold'>Orders</h2>
                    <p className='text-gray-600 mt-2'>Check the status of recent orders, manage returns, and discover similar products.</p>
                </div>

                {orders.length > 0 ?
                    <div className='grid grid-flow-row gap-3 mt-3'>
                        {orders.map((order, idx) => (
                                <div key={idx} className='bg-white rounded-xl border-[1px] border-gray-400 h-full w-full'>
                                    <div className='px-5 lg:px-10 py-5 border-b-[1px] border-gray-300 grid grid-cols-2 lg:grid-cols-4'>
                                        <div>
                                            <h3 className='font-bold'>Order Number</h3>
                                            <p className='text-gray-700 truncate'>{order._id}</p>
                                        </div>
                                        <div className='hidden lg:block'>
                                            <h3 className='font-bold'>Date placed</h3>
                                            <p className='text-gray-700'>{dateFormat(order.createdAt,"paddedShortDate")}</p>
                                        </div>
                                        <div className='hidden lg:block'>
                                            <h3 className='font-bold'>Total Amount</h3>
                                            <p className='text-gray-700 font-semibold'>&#8377;{order.product.soldPrice}</p>
                                        </div>
                                        <Link to={"/order/"+order._id} className='w-full text-right mt-3'>
                                            <h3 className='font-bold'>Details</h3>
                                        </Link>
                                    </div>

                                    <div className='px-5 lg:px-10 py-5 lg:flex hidden'>
                                        <div className='w-1/4 h-24 flex justify-center items-center'>
                                            <img className='h-full' src={"/uploads/" + order.product.images.featuredImage} alt="" />
                                        </div>
                                        <div className='w-2/4'>
                                            <h3 className='text-xl lg:text-2xl font-bold'>{order.product.name}</h3>
                                            <p className='text-gray-600'>{order.product.quantity} item | {order.product.selectColor || order.product.selectSize || order.product.selectOther}</p>
                                        </div>
                                        <div className='w-1/4 grid grid-rows-2 gap-2 text-right'>
                                            <Link to={"/product/" + order.product._id} className="btn btn-primary text-white">View Product</Link>
                                            <Link to={"/product/" + order.product._id} className="btn btn-neutral text-white">Buy again</Link>
                                        </div>
                                    </div>

                                    <div className='px-5 py-5 flex lg:hidden'>
                                        <div className='w-1/3 flex justify-center items-center h-20 border-[0.5px] border-gray-400 rounded-lg'>
                                            <img className='h-full' src={"/uploads/" + order.product.images.featuredImage} alt="" />
                                        </div>
                                        <div className='w-2/3 px-3'>
                                            <h3 className='font-bold'>{order.product.name}</h3>
                                            <p className='font-semibold'>&#8377;{order.product.soldPrice}</p>
                                            <p className='mt-2 font-semibold text-green-700'>Ordered on {order.createdAt.split("T")[0]}</p>
                                        </div>
                                    </div>

                                    <div className='px-5 py-5 border-t-[1px] border-gray-300 grid grid-cols-2 lg:hidden'>
                                        <Link to={"/product/" + order.product._id} className='font-bold text-center border-r-[1px] border-gray-300'>View Product</Link>
                                        <Link to={"/product/" + order.product._id} className='font-bold text-center'>Buy again</Link>
                                    </div>
                                </div>
                        ))}

                    </div>
                    :
                    <div className='h-screen flex justify-center'>
                        <div className='pt-20'>
                            <img className='h-44 ml-5' src="./order.png" alt="" />
                            <h1 className='text-center text-2xl font-semibold'>No order placed yet!</h1>
                        </div>
                    </div>
                }
            </div>
        </div>
    )
}

export default Order