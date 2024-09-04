import React, { useState } from 'react'
import { useCart } from '../store/CartContext';
import toast from 'react-hot-toast';
import { useCustomerAuth } from '../store/customerAuth';
import { useNavigate } from 'react-router-dom';

function Checkout() {
    const { storeId, customerData } = useCustomerAuth()
    const navigate = useNavigate()
    const { cart, removeAllProductsFromCart, calculateTotal } = useCart();
    const [coupon, setCoupon] = useState("")
    const [isCouponApplied, setIsCouponApplied] = useState(false)
    const [discountValue, setDiscountValue] = useState(0)
    const [billingDetails, setBillingDetails] = useState({
        email: "",
        name: "",
        phoneNo: "",
        address1: "",
        address2: "",
        state: "",
        country: "India",
        pinCode: "",
        paymentMethod: ""
    })

    const handleInput = (e) => {
        const { name, value } = e.target;
        setBillingDetails({
            ...billingDetails,
            [name]: value,
        })
    }

    const handleCouponInput = (e) => {
        setCoupon(e.target.value)
    }

    const checkCoupon = async (e) => {
        try {
            const response = await fetch(`${import.meta.env.VITE_API_URL}/api/coupon/check`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    coupon,
                    storeId,
                    customerId: customerData._id
                })
            })

            const responseData = await response.json();

            if (response.ok) {
                if(responseData.data.type === "percentage"){
                    if(calculateSubtotal() >= responseData.data.minimumOrderValue){
                        if((calculateSubtotal() * ((responseData.data.percentValue) / 100)) > 100){
                            setDiscountValue(responseData.data.maximumDiscount)
                        }else{
                            setDiscountValue(Math.floor(calculateSubtotal() * ((responseData.data.percentValue) /100)))
                        }
                    }
                }
                if(responseData.data.type === "flat"){
                    if(calculateSubtotal() >= responseData.data.minimumOrderValue){
                        setDiscountValue(responseData.data.flatDiscountAmount)
                        toast.success(responseData.message)
                    } else {
                        toast.error(`This coupon is valid on shopping above ${"₹"+responseData.data.minimumOrderValue}`)
                    }
                }
                setIsCouponApplied(true)
            } else {
                toast.error(responseData.message);
            }
        } catch (error) {
            console.log(error)
        }
    }

    const handleCheckout = async (e) => {
        e.preventDefault()

        try {
            const response = await fetch(`${import.meta.env.VITE_API_URL}/api/order/place-order`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    storeId,
                    custId: customerData._id,
                    ...billingDetails,
                    cart: [...cart],
                    isCouponApplied,
                    coupon,
                    discountValue,
                    totalPrice: (calculateTotal() - discountValue),
                })
            })

            setBillingDetails({
                email: "",
                name: "",
                phoneNo: "",
                address1: "",
                address2: "",
                state: "",
                country: "India",
                pinCode: "",
                paymentMethod: ""
            })

            const responseData = await response.json()

            if (response.ok) {
                removeAllProductsFromCart()
                toast.success(responseData.message)
            } else {
                toast.error(responseData.message)
            }
            navigate("/orders")
        } catch (error) {
            console.log(error)
        }
    }


    const calculateSubtotal = () => {
        return cart.reduce((subtotal, item) => subtotal + item.salePrice * item.quantity, 0);
    };

    return (
        <>
            <h2 className='text-center text-3xl lg:text-4xl mt-3 font-extrabold'>Checkout</h2>
            <div className="grid sm:px-10 lg:grid-cols-2 lg:px-24">
                <div data-theme="light" className="px-4 pt-3">
                    <p className="text-xl font-medium">Shipping Details</p>
                    <p className="text-gray-400">Complete your order by providing your billing and shipping details.</p>
                    <div className="">
                        <label htmlFor="email" className="mt-4 mb-2 block text-base font-medium">Email</label>
                        <div className="relative">
                            <input
                                type="email"
                                id="email"
                                name="email"
                                onChange={handleInput}
                                value={billingDetails.email}
                                className="w-full rounded-md border border-gray-200 px-4 py-3 text-base shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"
                                placeholder="your.email@gmail.com"
                                required
                            />
                        </div>
                        <label htmlFor="card-holder" className="mt-4 mb-2 block text-base font-medium">Name</label>
                        <div className="relative">
                            <input
                                type="text"
                                id="name"
                                name="name"
                                onChange={handleInput}
                                value={billingDetails.name}
                                className="w-full rounded-md border border-gray-200 px-4 py-3 text-base shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"
                                placeholder="Enter your name"
                                required
                            />
                        </div>

                        <label htmlFor="phoneNo" className="mt-4 mb-2 block text-base font-medium">Phone no.</label>
                        <div className="relative">
                            <input
                                type="number"
                                id="phoneNo"
                                name="phoneNo"
                                onChange={handleInput}
                                value={billingDetails.phoneNo}
                                className="w-full rounded-md border border-gray-200 px-4 py-3 text-base shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"
                                placeholder="Enter your name"
                            />
                        </div>

                        <div className="gap-2 flex flex-col lg:flex-row">
                            <div className='w-full'>
                                <label htmlFor="address1" className="mt-4 mb-2 block text-base font-medium">House/Room/Floor No.</label>
                                <input
                                    type="text"
                                    name='address1'
                                    id='address1'
                                    onChange={handleInput}
                                    value={billingDetails.address1}
                                    placeholder='House/Room/Floor No.'
                                    required
                                    className="w-full rounded-md border border-gray-200 px-4 py-3 text-base shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"
                                />
                            </div>
                            <div className='w-full'>
                                <label htmlFor="address2" className="mt-4 mb-2 block text-base font-medium">Street/Colony/Landmark</label>
                                <input type="text"
                                    name='address2'
                                    id='address2'
                                    onChange={handleInput}
                                    value={billingDetails.address2}
                                    placeholder='Street/Colony/Landmark'
                                    required
                                    className="w-full rounded-md border border-gray-200 px-4 py-3 text-base shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"
                                />
                            </div>
                        </div>
                        <div className="gap-2 flex flex-col lg:flex-row">
                            <div className='w-full'>
                                <label htmlFor="state" className="mt-4 mb-2 block text-base font-medium">State</label>
                                <select
                                    name="state"
                                    id="state"
                                    onChange={handleInput}
                                    value={billingDetails.state}
                                    className="w-full rounded-md border border-gray-200 px-4 py-3 text-base shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"
                                >
                                    <option value="">Select State</option>
                                    <option value="Maharashtra">Maharashtra</option>
                                    <option value="Delhi">Delhi</option>
                                </select>
                            </div>
                            <div className='w-full'>
                                <label htmlFor="country" className="mt-4 mb-2 block text-base font-medium">Country</label>
                                <select
                                    name="country"
                                    id="country"
                                    onChange={handleInput}
                                    value={billingDetails.country}
                                    className="w-full rounded-md border border-gray-200 px-4 py-3 text-base shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"
                                >
                                    <option value="India"> India</option>
                                </select>

                            </div>
                        </div>
                        <div>
                            <label htmlFor="pinCode" className="mt-4 mb-2 block text-base font-medium">Pin code</label>
                            <input
                                type="number"
                                name='pinCode'
                                id='pinCode'
                                onChange={handleInput}
                                value={billingDetails.pinCode}
                                placeholder='Pin Code'
                                required
                                className="w-full rounded-md border border-gray-200 px-4 py-3 text-base shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"
                            />
                        </div>

                        <p className="mt-8 text-lg font-medium">Payment Methods</p>
                        <form className="mt-5 grid gap-6 mb-10">
                            <div className="relative">
                                <input
                                    className="peer hidden"
                                    id="radio_1"
                                    type="radio"
                                    name="paymentMethod"
                                    value="COD"
                                    onChange={handleInput}
                                />
                                <span className="peer-checked:border-gray-700 absolute right-4 top-1/2 box-content block h-3 w-3 -translate-y-1/2 rounded-full border-8 border-gray-300 bg-white"></span>
                                <label className="peer-checked:border-2 peer-checked:border-gray-700 peer-checked:bg-gray-50 flex cursor-pointer select-none rounded-lg border border-gray-300 p-4" htmlFor="radio_1">
                                    <img className="w-14 object-contain" src="./cash-on-delivery.png" alt="" />
                                    <div className="ml-5">
                                        <span className="mt-2 font-semibold">Cash on delivery</span>
                                        <p className="text-slate-500 text-base leading-6">Pay on delivery by cash</p>
                                    </div>
                                </label>
                            </div>
                            <div className="relative">
                                <input
                                    className="peer hidden"
                                    id="radio_2"
                                    type="radio"
                                    name="paymentMethod"
                                    value="UPI"
                                    onChange={handleInput}
                                />
                                <span className="peer-checked:border-gray-700 absolute right-4 top-1/2 box-content block h-3 w-3 -translate-y-1/2 rounded-full border-8 border-gray-300 bg-white"></span>
                                <label className="peer-checked:border-2 peer-checked:border-gray-700 peer-checked:bg-gray-50 flex cursor-pointer select-none rounded-lg border border-gray-300 p-4" htmlFor="radio_2">
                                    <img className="w-14 object-contain" src="./cashless-payment.png" alt="" />
                                    <div className="ml-5">
                                        <span className="mt-2 font-semibold">UPI</span>
                                        <p className="text-slate-500 text-base leading-6">Pay by scanning QR code</p>
                                    </div>
                                </label>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="px-4 lg:pt-4">

                    <p className="text-xl font-medium">Apply coupon</p>
                    <p className="text-gray-400">Apply your coupon to get offers</p>
                    <div className="mt-2 space-y-3 mb-8 rounded-lg border bg-white px-2 py-4 sm:px-6">
                        <div data-theme="light" className='w-full'>
                            <input
                                type="text"
                                name='coupon'
                                id='coupon'
                                onChange={handleCouponInput}
                                value={coupon}
                                placeholder='Coupon code'
                                required
                                className="w-full rounded-md border border-gray-200 px-4 py-3 text-base shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"
                            />
                            <button
                                onClick={checkCoupon}
                                className="mt-4 w-full rounded-md bg-gray-900 px-6 py-3 font-medium text-white">Apply</button>
                        </div>
                    </div>

                    <p className="text-xl font-medium">Order Summary</p>
                    <p className="text-gray-400">Check your items. And select a suitable shipping method.</p>
                    <div className="mt-8 space-y-3 rounded-lg border bg-white px-2 py-4 sm:px-6">
                        {cart.map((product, index) => (
                            <div key={index} className="flex flex-col rounded-lg bg-white sm:flex-row">
                                <img className="m-2 h-24 w-28 rounded-md border object-cover object-center" src={`${import.meta.env.VITE_API_URL}/uploads/` + product?.images?.featuredImage} alt="" />
                                <div className="flex w-full flex-col px-4 py-4">
                                    <span className="font-semibold">{product.name}</span>
                                    <span className="float-right text-gray-600 text-sm font-semibold">{"Qty: " + product?.quantity}</span>
                                    {product?.selectColor ? <span className="float-right text-gray-600">{"Color: " + product?.selectColor}</span> : <></>}
                                    {product?.selectSize ? <span className="float-right text-gray-600">{"Size: " + product?.selectSize}</span> : <></>}
                                    {product?.selectOther ? <span className="float-right text-gray-600">{"Other: " + product?.selectOther}</span> : <></>}
                                    <p className="text-lg font-bold">&#8377;{product?.salePrice}</p>
                                </div>
                            </div>
                        ))}

                        <div className="mt-6 border-t border-b py-2">
                            <div className="flex items-center justify-between">
                                <p className="text-base font-medium text-gray-900">Subtotal</p>
                                <p className="font-semibold text-gray-900">&#8377;{calculateSubtotal().toFixed(2)}</p>
                            </div>
                            <div className="flex items-center justify-between">
                                <p className="text-base font-medium text-gray-900">Shipping</p>
                                <p className="font-semibold text-gray-900">&#8377;0.00</p>
                            </div>
                            <div className="flex items-center justify-between">
                                <p className="text-base font-medium text-gray-900">Coupon</p>
                                <p className="font-semibold text-gray-900">&#8377;{discountValue}</p>
                            </div>
                        </div>
                        <div className="mt-6 flex items-center justify-between">
                            <p className="text-base font-medium text-gray-900">Total</p>
                            <p className="text-2xl font-semibold text-gray-900">&#8377;{(calculateTotal() - discountValue).toFixed(2)}</p>
                        </div>
                        <button
                            onClick={handleCheckout}
                            className="mt-4 mb-8 w-full rounded-md bg-gray-900 px-6 py-3 font-medium text-white">Place Order</button>
                    </div>



                </div>
            </div>

        </>
    )
}

export default Checkout