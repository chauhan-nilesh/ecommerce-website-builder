import React, { useState } from 'react'
import useStoreData from '../../Hooks/useStoreData'
import axios from 'axios';
import { toast } from 'react-toastify';

function CustomizeBanner() {
  const { user, loading } = useStoreData()
  const [logo, setLogo] = useState("")
  const [favicon, setFavicon] = useState("")
  const [banner, setBanner] = useState("")
  const [mobileBanner, setMobileBanner] = useState("")

  if (loading) {
    return <div className='flex h-screen w-full justify-center items-center'><span className="loading loading-spinner loading-lg"></span></div>
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const formdata = new FormData()
    formdata.append('logo', logo)
    formdata.append('favicon', favicon)
    formdata.append('banner', banner)
    formdata.append('mobileBanner', mobileBanner)
    formdata.append('storeId', user.store._id)
    axios.post(`${import.meta.env.VITE_API_URL}/api/store/upload/images`, formdata)
      .then(res => {
        toast.success(res.data.message)
      })
      .catch(err => console.log(err))
  }

  return (
    <div className='flex-grow h-full mb-20'>
      <div className='lg:my-7 lg:mx-10 my-3 mx-3'>
        <h2 className='text-xl lg:text-3xl text-zinc-900 font-bold tracking-tighter'>Customize Store</h2>
        <div className='mt-8'>
          <form className='grid grid-flow-row'>
            <label className='font-semibold tracking-tight text-zinc-800 text-lg' htmlFor="logo">Logo</label>
            <input
              type="file"
              id='logo'
              name='logo'
              onChange={e => setLogo(e.target.files[0])}
              className="file-input file-input-bordered bg-transparent file-input-primary w-full max-w-xs"
            />

            {user.store.logo ?
              <>
                <h3 className='mt-5 font-semibold'>Current Logo:</h3>
                <img className='h-20 border border-gray-500 rounded-lg p-2' src={`${import.meta.env.VITE_API_URL}/uploads/` + user.store.logo} alt="" />
              </>
              : ""}
            <label className='font-semibold tracking-tight text-zinc-800 text-lg mt-7' htmlFor="favicon">Favicon</label>
            <input
              type="file"
              name='favicon'
              id='favicon'
              onChange={e => setFavicon(e.target.files[0])}
              className="file-input file-input-bordered bg-transparent file-input-accent w-full max-w-xs"
            />
            {user.store.favicon ?
              <>
                <h3 className='mt-5 font-semibold'>Current Favicon:</h3>
                <img className='h-20 border border-gray-500 rounded-lg p-2' src={`${import.meta.env.VITE_API_URL}/uploads/` + user.store.favicon} alt="" />
              </>
              : ""}
            <label className='font-semibold tracking-tight text-zinc-800 text-lg mt-7' htmlFor="storeTitle">Upload Banner Image</label>
            <input
              type="file"
              name='banner'
              id='banner'
              onChange={e => setBanner(e.target.files[0])}
              className="file-input file-input-bordered bg-transparent mt-1 file-input-primary w-full max-w-xs"
            />
            <p className='text-sm text-gray-500'>Cover should be atleast 1200 X 400px</p>
            {user.store.banner ?
              <>
                <h3 className='mt-5 font-semibold'>Current Banner:</h3>
                <img className='h-20 border border-gray-500 rounded-lg p-2' src={`${import.meta.env.VITE_API_URL}/uploads/` + user.store.banner} alt="" />
              </>
              : ""}
            {/* <label className='font-semibold tracking-tight text-zinc-800 text-lg mt-7' htmlFor="storeTitle">Add Banner Text</label>
            <input type="text" name='storeTitle' id="storeTitle" placeholder="Banner Text" className="input input-primary text-black bg-transparent w-full max-w-xs" />
            <div className="form-control mt-7 w-44">
              <label className="label cursor-pointer">
                <span className="label-text text-lg tracking-tight text-black font-semibold">Hide Banner Text</span>
                <input type="checkbox" defaultChecked className="checkbox checkbox-primary border border-gray-700" />
              </label>
            </div> */}

            <label className='font-semibold tracking-tight text-zinc-800 text-lg' htmlFor="mobileBanner">Mobile Banner</label>
            <input
              type="file"
              id='mobileBanner'
              name='mobileBanner'
              onChange={e => setMobileBanner(e.target.files[0])}
              className="file-input file-input-bordered bg-transparent file-input-primary w-full max-w-xs"
            />

            {user.store.mobileBanner ?
              <>
                <h3 className='mt-5 font-semibold'>Current Mobile Banner:</h3>
                <img className='h-20 border border-gray-500 rounded-lg p-2' src={`${import.meta.env.VITE_API_URL}/uploads/` + user.store.mobileBanner} alt="" />
              </>
              : ""}

            <button onClick={handleSubmit} className="btn btn-primary text-lg mt-6 w-28">Save</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default CustomizeBanner