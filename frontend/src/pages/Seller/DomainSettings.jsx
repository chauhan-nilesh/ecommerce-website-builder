import React, { Fragment,useEffect, useState } from 'react'
import { useAuth } from '../../store/auth';
import { toast } from 'react-toastify';
import { Dialog, Transition } from '@headlessui/react'
import { useNavigate } from 'react-router-dom';

function DomainSettings() {
  let [isOpen, setIsOpen] = useState(false)
  const navigate = useNavigate()
  const [store, setStore] = useState({})
  const [storeId, setStoreId] = useState("")
  const [updateStoreStatus, setUpdateStoreStatus] = useState(true)
  const [loading, setLoading] = useState(true)
  const { token } = useAuth();

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
        setStoreId(responseData.data.store._id);
        setStore(responseData.data.store);
        setUpdateStoreStatus(responseData.data.store.status);
      }

      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    getStoreData();
  }, []);

  if (loading) {
    return <h1>Loading...</h1>
  }

  const changeStoreStatus = async (e) => {
    e.preventDefault()
    setUpdateStoreStatus(!updateStoreStatus)
    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/api/store/update/status/${storeId}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          status: !updateStoreStatus
        }),
      });

      if (response.ok) {
        const responseData = await response.json()
        toast.success(responseData.message)
      } else {
        toast.error("Something went wrong");
        console.log(error);
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

  const deleteStore = async (e) => {
    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/api/store/delete/${storeId}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({}),
      });

      if (response.ok) {
        const responseData = await response.json()
        toast.success(responseData.message)
        navigate("/login")
      } else {
        toast.error("Something went wrong");
        console.log(error);
      } 
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
      <div className='flex-grow h-screen'>
        <div className='lg:my-7 lg:mx-10 my-3 mx-3'>
          <h2 className='text-2xl lg:text-3xl text-zinc-900 font-bold tracking-tighter'>Domain Settings</h2>
          <div className='mt-8'>
            <h2 className='font-semibold text-xl tracking-tight text-gray-700'>Your store is live at</h2>
            <div className='mt-4 flex'>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6" viewBox="0 0 512 511.999"><path d="M476.335 35.664v.001c47.554 47.552 47.552 125.365.002 172.918l-101.729 101.73c-60.027 60.025-162.073 42.413-194.762-32.45 35.888-31.191 53.387-21.102 87.58-6.638 20.128 8.512 43.74 3.955 60.08-12.387l99.375-99.371c21.49-21.493 21.492-56.662 0-78.155-21.489-21.488-56.677-21.472-78.151 0l-71.278 71.28c-23.583-11.337-50.118-14.697-75.453-10.07a121.476 121.476 0 0118.767-24.207l82.651-82.65c47.554-47.551 125.365-47.555 172.918-.001zM35.664 476.334l.001.001c47.554 47.552 125.365 47.552 172.917 0l85.682-85.682a121.496 121.496 0 0019.325-25.157c-27.876 6.951-57.764 4.015-83.932-8.805l-70.192 70.19c-21.472 21.471-56.658 21.492-78.149 0-21.492-21.491-21.493-56.658 0-78.149l99.375-99.376c20.363-20.363 61.002-26.435 91.717 1.688 29.729-3.133 41.275-8.812 59.742-26.493-39.398-69.476-137.607-80.013-194.757-22.863L35.664 303.417c-47.552 47.553-47.552 125.364 0 172.917z" /></svg>
              <a className='ml-2 font-bold underline text-xl' href={"http://" + store.subdomain + ":5173"}>{store.subdomain}</a>
            </div>
            <h2 className='mt-12 lg:text-3xl tracking-tighter font-bold text-zinc-900 text-2xl'>Deactivate & Delete Store</h2>
            <div className='mt-6 w-[160px] grid grid-flow-row gap-3'>
              {store.status === true ?
                <button onClick={changeStoreStatus} className="btn btn-error text-white">Deactivate Store</button>
                :
                <button onClick={changeStoreStatus} className="btn btn-success text-white">Activate Store</button>
              }
              <button type="button" onClick={openModal} className="btn btn-error text-white">Delete Store </button>

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
                                        Are you sure?
                                    </Dialog.Title>
                                    <div className="mt-2">
                                        <p className="text-md tracking-tight text-gray-500">
                                            You want to delete your store permenently. This action cannot be reversed
                                        </p>
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
                                            className="inline-flex justify-center rounded-md border border-transparent bg-red-100 px-4 py-2 text-sm font-medium text-red-900 hover:bg-red-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2"
                                            onClick={deleteStore}
                                        >
                                            Delete Store
                                        </button>
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default DomainSettings