import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import dateFormat from "dateformat";
import toast from 'react-hot-toast';
import { useAuth } from '../../store/auth';

function SellerOrderPage() {
    const { id } = useParams()
    const { token } = useAuth()
    const [order, setOrder] = useState({})
    const [status, setStatus] = useState("")
    const [loading, setLoading] = useState(true)

    const getOrderData = async () => {
        try {
            setLoading(true)
            const response = await fetch(`${import.meta.env.VITE_API_URL}/api/order/get-data/${id}`)

            if (response.ok) {
                const responseData = await response.json()
                setOrder(responseData.data)
                setStatus(responseData.data.status)
            }
            setLoading(false)
        } catch (error) {
            console.error(error)
        }
    }

    useEffect(() => {
        getOrderData()
    }, [])

    const changeOrderStatus = async (e) => {
        try {
            const response = await fetch(`${import.meta.env.VITE_API_URL}/api/order/update-status/${id}`, {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`
                },
                body: JSON.stringify({ status })
            })

            const responseData = await response.json()
            if (response.ok) {
                toast.success(responseData.message)
            } else {
                toast.error(responseData.message)
            }
        } catch (error) {
            console.log(error)
        }
    }

    if (loading) {
        return <div className='flex h-screen w-full justify-center items-center'><span className="loading loading-spinner loading-lg"></span></div>
    }

    return (
        <div className='h-full mx-3 lg:mx-5 my-5 lg:my-8 mb-20'>
            <h2 className='text-xl lg:text-2xl font-bold'>View order details</h2>
            <div className='border border-gray-400 rounded-lg p-4 mt-6 flex'>
                <div className='w-1/3'>
                    <p className='text-gray-600'>Order date</p>
                    <p className='text-gray-600'>Order #</p>
                    <p className='text-gray-600'>Order total</p>
                </div>
                <div className='w-2/3'>
                    <p className='font-semibold ml-3'>{dateFormat(order?.createdAt, "mediumDate")}</p>
                    <p className='font-semibold ml-3 truncate'>{order?._id}</p>
                    <p className='font-semibold ml-3'>&#8377;{order?.product?.soldPrice}</p>
                </div>
            </div>
            <h3 className='lg:text-lg font-bold mt-4'>Product details</h3>
            <div className='border border-gray-400 rounded-lg px-6 mt-2'>
                <div className='py-5 flex'>
                    <div className='w-1/3 flex justify-center items-center h-20 lg:h-44 border-[0.5px] border-gray-400 rounded-lg'>
                        <img className='h-full' src={order?.product?.images.featuredImage} alt="" />
                    </div>
                    <div className='w-2/3 px-3'>
                        <Link to={`/seller/edit-product/${order?.product?._id}`}>
                            <p className='font-semibold text-xs'><span className='text-gray-800 truncate'>Product Id:</span> {order?.product?._id}</p>
                            <h3 className='font-bold'>{order?.product?.name}</h3>
                            <p className='font-semibold'>&#8377;{order?.product?.soldPrice}</p>
                            <p className='mt-2 font-semibold text-gray-500'>Qty: {order?.product?.quantity} {order?.product?.selectColor} {order?.product?.selectSize} {order?.product?.selectOther}</p>
                        </Link>
                    </div>
                </div>
            </div>
            <h3 className='lg:text-lg font-bold mt-4'>Status</h3>
            <div className='w-full border border-gray-400 rounded-lg p-4 mt-2'>
                {status !== "canceled" ?
                    <div>
                        <h3 className='lg:text-lg font-bold mt-4'>Order Status</h3>
                        <div className='border border-gray-400 bg-white rounded-lg p-4 mt-2'>
                            {status === "accepted" ?
                                <ul data-theme="light" className="steps steps-vertical lg:steps-horizontal lg:w-full font-bold">
                                    <li data-content="✓" className="step step-accent">Order placed</li>
                                    <li data-content="✓" className="step step-accent">Accepted</li>
                                    <li data-content="" className="step">Processed</li>
                                    <li data-content="" className="step">Shipped</li>
                                    <li data-content="" className="step">Delivered</li>
                                </ul>
                                : null}
                            {status === "processed" ?
                                <ul data-theme="light" className="steps steps-vertical lg:steps-horizontal lg:w-full font-bold">
                                    <li data-content="✓" className="step step-accent">Order placed</li>
                                    <li data-content="✓" className="step step-accent">Accepted</li>
                                    <li data-content="✓" className="step step-accent">Processed</li>
                                    <li data-content="" className="step">Shipped</li>
                                    <li data-content="" className="step">Delivered</li>
                                </ul>
                                : null}
                            {status === "canceled" ?
                                <ul data-theme="light" className="steps steps-vertical lg:steps-horizontal lg:w-full font-bold">
                                    <li data-content="✓" className="step step-error">Order placed</li>
                                    <li data-content="✓" className="step step-error">Canceled</li>
                                </ul>
                                : null}
                            {status === "shipped" ?
                                <ul data-theme="light" className="steps steps-vertical lg:steps-horizontal lg:w-full font-bold">
                                    <li data-content="✓" className="step step-accent">Order placed</li>
                                    <li data-content="✓" className="step step-accent">Accepted</li>
                                    <li data-content="✓" className="step step-accent">Processed</li>
                                    <li data-content="✓" className="step step-accent">Shipped</li>
                                    <li data-content="" className="step">Delivered</li>
                                </ul>
                                : null}
                            {status === "delivered" ?
                                <ul data-theme="light" className="steps steps-vertical lg:steps-horizontal lg:w-full font-bold">
                                    <li data-content="✓" className="step step-accent">Order placed</li>
                                    <li data-content="✓" className="step step-accent">Accepted</li>
                                    <li data-content="✓" className="step step-accent">Processed</li>
                                    <li data-content="✓" className="step step-accent">Shipped</li>
                                    <li data-content="✓" className="step step-accent">Delivered</li>
                                </ul>
                                : null}
                        </div>
                    </div>
                    :
                    <>
                        <select
                            name="status"
                            id="status"
                            onChange={(e) => setStatus(e.target.value)}
                            value={status}
                            className="w-full rounded-md bg-gray-100 border border-gray-400 px-4 py-3 text-baseoutline-none"
                        >
                            <option value="">Pending</option>
                            <option value="rejected">Rejected</option>
                            <option value="accepted">Accepted</option>
                            <option value="processed">Processed</option>
                            <option value="shipped">Shipped</option>
                            <option value="delivered">Delivered</option>
                        </select>
                        <button onClick={changeOrderStatus} type='button' className='btn btn-primary mt-2'>Update Status</button>
                    </>
                }
            </div>
            <h3 className='lg:text-lg font-bold mt-4'>Payment infomation</h3>
            <div className='border border-gray-400 rounded-lg p-4 mt-2'>
                <b className='tracking-tighter'>Payment method</b>
                <p className='text-sm'>{order?.paymentMethod}</p>
            </div>
            <h3 className='lg:text-lg font-bold mt-4'>Shipping Address</h3>
            <div className='border border-gray-400 rounded-lg p-4 mt-2 font-bold text-zinc-700'>
                <p className='tracking-tight text-sm'>{order?.name}</p>
                <p className='tracking-tight text-sm'>{order?.address1}</p>
                <p className='tracking-tight text-sm'>{order?.address2}</p>
                <p className='tracking-tight text-sm'>{order?.state}, {order.pinCode}</p>
                <p className='tracking-tight text-sm'>{order?.country}</p>
                <p className='tracking-tight text-sm mt-3'><span className='font-semibold'>Phone no:</span> {order?.phoneNo}</p>
            </div>
            <h3 className='lg:text-lg font-bold mt-4'>Order Summary</h3>
            <div className='border border-gray-400 rounded-lg p-4 flex mt-2'>
                <div className='w-2/3'>
                    <p>Items:</p>
                    <p>Packing:</p>
                    <p>Shipping:</p>
                    <p>Coupon discount:</p>
                    <b>Order Total:</b>
                </div>
                <div className='w-1/3'>
                    <p>Rs. {order?.product?.salePrice.toFixed(2)}</p>
                    <p>Rs. 0.00</p>
                    <p>Rs. 0.00</p>
                    <p>Rs. -{(Number(order?.product?.salePrice) - Number(order?.product?.soldPrice)).toFixed(2)}</p>
                    <b className='text-green-800'>Rs. {order?.product?.soldPrice.toFixed(2)}</b>
                </div>
            </div>
        </div>
    )
}

export default SellerOrderPage