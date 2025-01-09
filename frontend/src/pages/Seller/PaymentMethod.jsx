import React, { Fragment, useEffect, useState } from 'react';
import { Dialog, Transition } from '@headlessui/react'
import { useAuth } from '../../store/auth';
import toast from 'react-hot-toast';

function PaymentMethod() {
    let [isOpen, setIsOpen] = useState(false)
    const { token } = useAuth()
    const [store, setStore] = useState({})
    const [loading, setLoading] = useState(true);
    const [codStatus, setCodStatus] = useState(true);
    const [razorpayStatus, setRazorpayStatus] = useState(false)
    const [razorpayKeyId, setRazorpayKeyId] = useState('')
    const [razorpayKeySecret, setRazorpayKeySecret] = useState("")

    const getStoreData = async () => {
        try {
            setLoading(true);
            const response = await fetch(`${import.meta.env.VITE_API_URL}/api/user/current-user`, {
                method: "GET",
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });

            if (response.ok) {
                const responseData = await response.json();
                setStore(responseData.data.store);
                setRazorpayKeyId(responseData.data.store.razorpayKeyId);
                setRazorpayKeySecret(responseData.data.store.razorpayKeySecret)
            }

            setLoading(false);
        } catch (error) {
            console.log(error);
            setLoading(false);
        }
    };

    useEffect(() => {
        getStoreData()
    }, [codStatus])

    const handleCodStatus = async (e) => {
        setCodStatus(!codStatus)
        try {
            const response = await fetch(`${import.meta.env.VITE_API_URL}/api/store/cod/change-status/${store._id}`, {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    status: !codStatus
                })
            })

            const responseData = await response.json()
            if (response.ok) {
                toast.success(responseData.message)
                getStoreData()
            } else {
                toast.error(responseData.message)
            }
        } catch (error) {
            console.log(error)
        }
    }

    const deactivateRazorpayStatus = async (e) => {
        setRazorpayStatus(false)
        try {
            const response = await fetch(`${import.meta.env.VITE_API_URL}/api/store/razorpay/change-status/${store._id}`, {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    status: false
                })
            })

            const responseData = await response.json()
            if (response.ok) {
                toast.success(responseData.message)
                getStoreData()
            } else {
                toast.error(responseData.message)
            }
        } catch (error) {
            console.log(error)
        }
    }

    const activateRazorpayStatus = async (e) => {
        setRazorpayStatus(!razorpayStatus)
        try {
            if (razorpayKeyId === "" || razorpayKeySecret === "") {
                toast.error("All feilds are required")
            } else {
                const response = await fetch(`${import.meta.env.VITE_API_URL}/api/store/razorpay/change-status/${store._id}`, {
                    method: "PATCH",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        status: !razorpayStatus,
                        razorpayKeyId,
                        razorpayKeySecret
                    })
                })

                const responseData = await response.json()
                if (response.ok) {
                    toast.success(responseData.message)
                    getStoreData()
                    closeModal()
                } else {
                    toast.error(responseData.message)
                }
            }
        } catch (error) {
            console.log(error)
        }
    }

    function closeModal() {
        setIsOpen(false)
    }

    function openModal() {
        setIsOpen(true)
    }

    if (loading) {
        return <div className='flex h-[calc(100vh-100px)] lg:h-screen w-full justify-center items-center'><span className="loading loading-spinner loading-lg"></span></div>
    }


    return (
        <section className='bg-white flex-grow h-dvh min-w-80 lg:h-dvh lg:pb-0 pb-20'>
            <div className='lg:my-7 lg:mx-7 my-5 mx-3'>
                <h2 className='text-xl lg:text-3xl text-zinc-900 font-extrabold tracking-tight'>Set payment method</h2>
            </div>
            <div className="overflow-x-auto mt-7 mx-4 lg:mx-7">
                <table className="min-w-full text-xs">
                    <colgroup>
                        <col />
                        <col />
                        <col />
                        <col />
                        <col />
                    </colgroup>
                    <thead className="bg-gray-100">
                        <tr className="text-left">
                            <th className="p-3 text-base tracking-tighter">Name</th>
                            <th className="p-3 text-base tracking-tighter">Provider</th>
                            <th className="p-3 text-base tracking-tighter">Status</th>
                            <th className="p-3 text-base tracking-tighter">Modify</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="border-b border-opacity-20 border-gray-300 bg-white">
                            <td className="p-3 text-base tracking-tight">
                                <p>Cash on delivery (COD)</p>
                            </td>
                            <td className="p-3 text-base tracking-tight">
                                <p>Self</p>
                            </td>
                            <td className="p-3 text-base tracking-tight">
                                {store.cod ?
                                    <p className='text-green-800 font-bold'>Active</p>
                                    :
                                    <p className='text-red-800 font-bold'>Inactive</p>
                                }
                            </td>
                            <td className="p-3 text-base tracking-tight">
                                {store.cod ?
                                    <button type='button' onClick={handleCodStatus} className="px-3 py-1 font-semibold rounded-md bg-red-600 text-gray-50">
                                        Deactivate
                                    </button>
                                    : <button type='button' onClick={handleCodStatus} className="px-3 py-1 font-semibold rounded-md bg-green-700 text-gray-50">
                                        Activate
                                    </button>
                                }
                            </td>
                        </tr>
                        {/* <tr className="border-b border-opacity-20 border-gray-300 bg-gray-50">
                            <td className="p-3 text-base tracking-tight">
                                <p>Razorpay payment gateway</p>
                            </td>
                            <td className="p-3 text-base tracking-tight">
                                <p>Razorpay</p>
                            </td>
                            <td className="p-3 text-base tracking-tight">
                                {store.razorpay ?
                                    <p className='text-green-800 font-bold'>Active</p>
                                    :
                                    <p className='text-red-800 font-bold'>Inactive</p>
                                }
                            </td>
                            <td className="p-3 text-base tracking-tight">
                                {store.razorpay ?
                                    <button type='button' onClick={deactivateRazorpayStatus} className="px-3 py-1 font-semibold rounded-md bg-red-600 text-gray-50">
                                        Deactivate
                                    </button>
                                    : <button type='button' onClick={openModal} className="px-3 py-1 font-semibold rounded-md bg-green-700 text-gray-50">
                                        Activate
                                    </button>
                                }
                            </td>
                        </tr> */}

                        {/* For temporary basis starts */}
                        <tr className="border-b border-opacity-20 border-gray-300 bg-gray-50 opacity-50 pointer-events-none">
                            <td className="p-3 text-base tracking-tight">
                                <p>Razorpay payment gateway (Coming soon)</p>
                            </td>
                            <td className="p-3 text-base tracking-tight">
                                <p>Razorpay</p>
                            </td>
                            <td className="p-3 text-base tracking-tight">
                                {false ?
                                    <p className='text-green-800 font-bold'>Active</p>
                                    :
                                    <p className='text-red-800 font-bold'>Inactive</p>
                                }
                            </td>
                            <td className="p-3 text-base tracking-tight">
                                {false ?
                                    <button type='button' onClick={handleCodStatus} className="px-3 py-1 font-semibold rounded-md bg-red-600 text-gray-50">
                                        Deactivate
                                    </button>
                                    : <button type='button' onClick={handleCodStatus} className="px-3 py-1 font-semibold rounded-md bg-green-700 text-gray-50">
                                        Activate
                                    </button>
                                }
                            </td>
                        </tr>
                        <tr className="border-b border-opacity-20 border-gray-300 bg-gray-50 opacity-50 pointer-events-none">
                            <td className="p-3 text-base tracking-tight">
                                <p>Paytm payment gateway (Coming soon)</p>
                            </td>
                            <td className="p-3 text-base tracking-tight">
                                <p>Paytm</p>
                            </td>
                            <td className="p-3 text-base tracking-tight">
                                {false ?
                                    <p className='text-green-800 font-bold'>Active</p>
                                    :
                                    <p className='text-red-800 font-bold'>Inactive</p>
                                }
                            </td>
                            <td className="p-3 text-base tracking-tight">
                                {false ?
                                    <button type='button' onClick={handleCodStatus} className="px-3 py-1 font-semibold rounded-md bg-red-600 text-gray-50">
                                        Deactivate
                                    </button>
                                    : <button type='button' onClick={handleCodStatus} className="px-3 py-1 font-semibold rounded-md bg-green-700 text-gray-50">
                                        Activate
                                    </button>
                                }
                            </td>
                        </tr>
                        {/* for temporary basis ends */}

                    </tbody>
                </table>
                {/* Dialog Box */}
                <Transition appear show={isOpen} as={Fragment}>
                    <Dialog as="div" className="relative z-10" onClose={closeModal}>
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0"
                            enterTo="opacity-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                        >
                            <div className="fixed inset-0 bg-black/25" />
                        </Transition.Child>

                        <div className="fixed inset-0 overflow-y-auto">
                            <div className="flex min-h-full items-center justify-center p-4 text-center">
                                <Transition.Child
                                    as={Fragment}
                                    enter="ease-out duration-300"
                                    enterFrom="opacity-0 scale-95"
                                    enterTo="opacity-100 scale-100"
                                    leave="ease-in duration-200"
                                    leaveFrom="opacity-100 scale-100"
                                    leaveTo="opacity-0 scale-95"
                                >
                                    <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                                        <Dialog.Title
                                            as="h3"
                                            className="text-xl font-medium leading-6 text-gray-900"
                                        >
                                            Activate your razorpay payment gateway
                                        </Dialog.Title>
                                        <div className='mt-3'>
                                            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Razorpay Key ID<span className='text-red-700'>*</span></label>
                                            <input
                                                id="name"
                                                name="name"
                                                type="text"
                                                required
                                                className="w-full px-3 py-2 mt-1 text-gray-900 bg-transparent border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                                                value={razorpayKeyId}
                                                onChange={(e) => setRazorpayKeyId(e.target.value)}
                                            />
                                        </div>
                                        <div className='mt-3'>
                                            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Razorpay Key Secret<span className='text-red-700'>*</span></label>
                                            <input
                                                id="name"
                                                name="name"
                                                type="text"
                                                required
                                                className="w-full px-3 py-2 mt-1 text-gray-900 bg-transparent border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                                                value={razorpayKeySecret}
                                                onChange={(e) => setRazorpayKeySecret(e.target.value)}
                                            />
                                        </div>

                                        <div className="mt-4 flex float-end space-x-2">
                                            <button
                                                type="button"
                                                className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                                                onClick={closeModal}
                                            >
                                                Cancel
                                            </button>
                                            <button
                                                type="button"
                                                className="inline-flex justify-center rounded-md border border-transparent bg-green-100 px-4 py-2 text-sm font-medium text-green-900 hover:bg-green-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2"
                                                onClick={activateRazorpayStatus}
                                            >
                                                Activate
                                            </button>
                                        </div>
                                    </Dialog.Panel>
                                </Transition.Child>
                            </div>
                        </div>
                    </Dialog>
                </Transition>
            </div>
        </section>
    )
}

export default PaymentMethod