import React, { useEffect, useState } from 'react'
import { Ordermobile } from '../../components/Seller'
import { useAuth } from '../../store/auth'
import { Link } from 'react-router-dom'

function Orders() {
  const { token } = useAuth()
  const [orders, setOrders] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  const getAllOrders = async () => {
    try {
      setIsLoading(true)

      const store = await fetch(`${import.meta.env.VITE_API_URL}/api/user/current-user`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      const storeData = await store.json()

      const response = await fetch(`${import.meta.env.VITE_API_URL}/api/order/get-orders/${storeData.data.store._id}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json"
        }
      })

      if (response.ok) {
        const responseData = await response.json()
        setOrders(responseData.data)
      }

      setIsLoading(false)

    } catch (error) {
      console.log(error)
      setIsLoading(false)
    }
  }

  useEffect(() => {
    getAllOrders()
  }, [])

  if (isLoading) {
    return <div className='flex min-h-dvh h-full w-full justify-center items-center'><span className="loading loading-spinner loading-lg"></span></div>
  }

  return (
    <section className='flex-grow min-h-dvh h-full lg:h-dvh lg:pb-0 pb-20'>
      <div className='lg:my-10 my-5 mx-3 lg:mx-5'>
        <h2 className='text-xl lg:text-3xl text-zinc-900 font-extrabold tracking-tight'>All Orders</h2>
      </div>

      {orders.length === 0 ?

        <div className='w-full mt-20'>
          <div className='flex justify-center items-center'>
            <img className='h-40 w-40' src="/order.png" alt="" />
          </div>
          <h1 className='text-center text-3xl font-semibold tracking-tighter text-gray-700 mt-3'>No orders yet!</h1>
        </div>
        :
        <>
          {/* Mobile View of Orders */}
          < div className='mx-5 flex flex-row lg:hidden'>
            <Ordermobile orders={orders} />
          </div>

          {/* Desktop View of Orders */}
          <div className='px-5'>
            <div className="overflow-x-auto mt-7 hidden lg:block">
              <table className="min-w-full text-xs">
                <colgroup>
                  <col />
                  <col />
                  <col />
                  <col />
                  <col />
                  <col />
                  <col />
                </colgroup>
                <thead className="bg-gray-100">
                  <tr className="text-left">
                    <th className="p-3 text-base tracking-tighter">Order ID</th>
                    <th className="p-3 text-base tracking-tighter">Image</th>
                    <th className="p-3 text-base tracking-tighter">Name</th>
                    <th className="p-3 text-base tracking-tighter">Date</th>
                    <th className="p-3 text-base tracking-tighter">Customer</th>
                    <th className="p-3 text-base tracking-tighter">Items</th>
                    <th className="p-3 text-base tracking-tighter">Payment</th>
                    <th className="p-3 text-base tracking-tighter">Status</th>
                    <th className="p-3 text-base tracking-tighter">Amount</th>
                  </tr>
                </thead>
                <tbody>
                  {orders.reverse().map((order, idx) => (
                    <tr key={idx} className="border-b border-opacity-20 border-gray-300 bg-white">
                      <td className="p-3 text-base tracking-tight">
                        <Link to={"/seller/orders/" + order?._id} className='underline font-semibold'>{"#" + order?._id}</Link>
                      </td>
                      <td className="p-3 text-base tracking-tight">
                        <img className='h-7 w-7' src={order?.product?.images?.featuredImage} alt="" />
                      </td>
                      <td className="p-3 text-base tracking-tight">
                        <p className=''>{order?.product?.name}</p>
                      </td>
                      <td className="p-3 text-base tracking-tight">
                        <p>{order?.createdAt.split("T")[0]}</p>
                      </td>
                      <td className="p-3 text-base tracking-tight">
                        <p>{order?.name}</p>
                      </td>
                      <td className="p-3 text-base tracking-tight">
                        <p>{order?.product?.quantity}</p>
                      </td>
                      <td className="p-3 text-base tracking-tight">
                        <span className="bg-orange-200 px-2 text-orange-500 font-bold tracking-tighter py-1">
                          <span>{order?.paymentMethod}</span>
                        </span>
                      </td>
                      <td className="p-3 text-base tracking-tight">
                        {order?.status === 'canceled' ?
                          <p className='text-red-600 font-bold tracking-tighter'>{(order?.status)[0].toUpperCase() + order?.status.slice(1)}</p>
                          :
                          <p className='text-green-600 font-bold tracking-tighter'>{(order?.status)[0].toUpperCase() + order?.status.slice(1)}</p>
                        }
                      </td>
                      <td className="p-3 text-base tracking-tight">
                        <p className='font-bold trac'>{"Rs. "+order?.product?.salePrice}</p>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </>
      }

    </section >
  )
}

export default Orders