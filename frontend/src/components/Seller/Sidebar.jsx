import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import useStoreData from '../../Hooks/useStoreData'

function Sidebar() {
    const { user, loading } = useStoreData()

    return (
        <>
            {loading ? <div className="flex items-center p-2 space-x-4">
                <div data-theme="light" className="w-20 h-12 skeleton rounded-full"></div>
                <div className='w-full'>
                    <div data-theme="light" className="skeleton h-4 w-full"></div>
                    <div data-theme="light" className="flex items-center skeleton h-4 w-full mt-2"></div>
                </div>
            </div>
                :
                <div className="flex items-center p-2 space-x-4">
                    {user?.store?.favicon ?
                        <img src={`${import.meta.env.VITE_API_URL}/uploads/` + user?.store?.favicon} alt="" className="w-12 h-12 rounded-full bg-gray-500" />
                        :
                        <img src="/store-icon.jpg" alt="" className="w-12 h-12 rounded-full bg-gray-500" />
                    }
                    <div>
                        <h2 className="text-lg font-semibold">{user?.store?.name}</h2>
                        <span className="flex items-center space-x-1">
                            <Link to={`https://${user?.store?.subdomain}.${import.meta.env.VITE_HOSTNAME}`} className="text-xs hover:underline text-gray-600">View store</Link>
                        </span>
                    </div>
                </div>
            }
            <div className="divide-y divide-gray-300">
                <ul className="pt-2 pb-4 space-y-1 text-sm">
                    <li>
                        <NavLink to="dashboard" className={({ isActive }) => `flex items-center p-2 space-x-3 rounded-md ${isActive ? "bg-gray-100 text-gray-900 rounded-lg" : ""}`}>
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 fill-current text-gray-600" viewBox="0 0 122.88 122.566">
                                <path d="M3.78,66.082h47.875c2.045,0,3.717,1.988,3.717,4.414v46.479 c0,2.43-1.671,4.416-3.717,4.416H3.78c-2.043,0-3.717-1.986-3.717-4.416V70.496C0.063,68.07,
                            1.737,66.082,3.78,66.082L3.78,66.082z M71.224,0H119.1c2.046,0,3.717,1.986,3.717,4.415v46.479c0,2.429-1.671,4.413-3.717,4.413H71.224 c-2.045,
                            0-3.714-1.984-3.714-4.413V4.415C67.51,1.986,69.179,0,71.224,0L71.224,0z M3.714,0h47.878 c2.045,0,3.717,1.986,3.717,4.415v46.479c0,2.429-1.671,4.413-3.717,
                            4.413H3.714C1.671,55.307,0,53.323,0,50.894V4.415 C0,1.986,1.671,0,3.714,0L3.714,0z M71.287,67.26h47.876c2.043,0,3.717,1.986,3.717,4.416v46.479c0,2.426-1.674,
                            4.412-3.717,4.412 H71.287c-2.045,0-3.717-1.986-3.717-4.412V71.676C67.57,69.246,69.242,67.26,71.287,67.26L71.287,67.26z"/>
                            </svg>
                            <span>Dashboard</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="products" className={({ isActive }) => `flex items-center p-2 space-x-3 rounded-md ${isActive ? "bg-gray-100 text-gray-900 rounded-lg" : ""}`}>
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 fill-current text-gray-600" viewBox="0 0 122.88 114.5">
                                <path d="M118.66,9.63c0.67-0.13,1.37,0,1.95,0.35c0.99,0.41,1.69,1.38,1.69,2.52l0.57,79.58c0.05,0.98-0.43,1.95-1.33,2.48 l-32.5,19.39c-0.46,0.35-1.03,0.55-1.65,0.55c-0.15,0-0.3-0.01-0.44-0.04l-84.34-9.38C1.16,105.02,0,103.82,0,102.35V21.42h0 c-0.03-1.08,0.58-2.13,1.64-2.59l42.31-18.6l0,0c0.44-0.2,0.94-0.28,1.46-0.21L118.66,9.63L118.66,9.63z M90.14,33.86v73.06 l27.26-16.26l-0.53-73.65L90.14,33.86L90.14,33.86z M84.65,108.69V34.63l-35.97-4.59L47.5,64.41l-12.63-8.6l-12.63,7.14L24.85,27 L5.49,24.53v75.37L84.65,108.69L84.65,108.69z M78.96,9.94L52.43,25l34.51,4.4l24.19-15.24L78.96,9.94L78.96,9.94z M28.23,21.91 L53.95,6.66l-8.48-1.11L12.74,19.94L28.23,21.91L28.23,21.91z" />
                            </svg>
                            <span>Products</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="orders" className={({ isActive }) => `flex items-center p-2 space-x-3 rounded-md ${isActive ? "bg-gray-100 text-gray-900 rounded-lg" : ""}`}>
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 fill-current text-gray-600" viewBox="0 0 115.35 122.88">
                                <path d="M25.27,86.92c-1.81,0-3.26-1.46-3.26-3.26s1.47-3.26,3.26-3.26h21.49c1.81,0,3.26,1.46,3.26,3.26s-1.46,3.26-3.26,3.26 H25.27L25.27,86.92L25.27,86.92z M61.1,77.47c-0.96,0-1.78-0.82-1.78-1.82c0-0.96,0.82-1.78,1.78-1.78h4.65c0.04,0,0.14,0,0.18,0 c1.64,0.04,3.1,0.36,4.33,1.14c1.37,0.87,2.37,2.19,2.92,4.15c0,0.04,0,0.09,0.05,0.14l0.46,1.82h39.89c1,0,1.78,0.82,1.78,1.78 c0,0.18-0.05,0.36-0.09,0.55l-4.65,18.74c-0.18,0.82-0.91,1.37-1.73,1.37l0,0l-29.18,0c0.64,2.37,1.28,3.65,2.14,4.24 c1.05,0.68,2.87,0.73,5.93,0.68h0.04l0,0h20.61c1,0,1.78,0.82,1.78,1.78c0,1-0.82,1.78-1.78,1.78H87.81l0,0 c-3.79,0.04-6.11-0.05-7.98-1.28c-1.92-1.28-2.92-3.46-3.92-7.43l0,0L69.8,80.2c0-0.05,0-0.05-0.04-0.09 c-0.27-1-0.73-1.69-1.37-2.05c-0.64-0.41-1.5-0.59-2.51-0.59c-0.05,0-0.09,0-0.14,0H61.1L61.1,77.47L61.1,77.47z M103.09,114.13 c2.42,0,4.38,1.96,4.38,4.38s-1.96,4.38-4.38,4.38s-4.38-1.96-4.38-4.38S100.67,114.13,103.09,114.13L103.09,114.13L103.09,114.13z M83.89,114.13c2.42,0,4.38,1.96,4.38,4.38s-1.96,4.38-4.38,4.38c-2.42,0-4.38-1.96-4.38-4.38S81.48,114.13,83.89,114.13 L83.89,114.13L83.89,114.13z M25.27,33.58c-1.81,0-3.26-1.47-3.26-3.26c0-1.8,1.47-3.26,3.26-3.26h50.52 c1.81,0,3.26,1.46,3.26,3.26c0,1.8-1.46,3.26-3.26,3.26H25.27L25.27,33.58L25.27,33.58z M7.57,0h85.63c2.09,0,3.99,0.85,5.35,2.21 s2.21,3.26,2.21,5.35v59.98h-6.5V7.59c0-0.29-0.12-0.56-0.31-0.76c-0.2-0.19-0.47-0.31-0.76-0.31l0,0H7.57 c-0.29,0-0.56,0.12-0.76,0.31S6.51,7.3,6.51,7.59v98.67c0,0.29,0.12,0.56,0.31,0.76s0.46,0.31,0.76,0.31h55.05 c0.61,2.39,1.3,4.48,2.23,6.47H7.57c-2.09,0-3.99-0.85-5.35-2.21C0.85,110.24,0,108.34,0,106.25V7.57c0-2.09,0.85-4,2.21-5.36 S5.48,0,7.57,0L7.57,0L7.57,0z M25.27,60.25c-1.81,0-3.26-1.46-3.26-3.26s1.47-3.26,3.26-3.26h50.52c1.81,0,3.26,1.46,3.26,3.26 s-1.46,3.26-3.26,3.26H25.27L25.27,60.25L25.27,60.25z" />
                            </svg>
                            <span>Orders</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="categories" className={({ isActive }) => `flex items-center p-2 space-x-3 rounded-md ${isActive ? "bg-gray-100 text-gray-900 rounded-lg" : ""}`}>
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-4 fill-current text-gray-600" viewBox="0 0 122.88 112.5"><path d="M12.56,87.39c6.93,0,12.56,5.62,12.56,12.56c0,6.93-5.62,12.56-12.56,12.56C5.62,112.5,0,
                            106.88,0,99.95 C0,93.01,5.62,87.39,12.56,87.39L12.56,87.39z M35.07,88.24h86.38c0.79,0,1.43,0.64,1.43,1.43v19.93c0,0.79-0.64,1.43-1.43,1.43 H35.07c-0.79,0-1.43-0.64-1.43-1.43V89.67C33.64,88.88,34.29,88.24,35.07,88.24L35.07,88.24z M35.07,44.7h86.38 c0.79,0,1.43,0.64,1.43,1.43v19.93c0,0.79-0.64,1.43-1.43,1.43H35.07c-0.79,0-1.43-0.64-1.43-1.43V46.13 C33.64,45.34,34.29,44.7,35.07,44.7L35.07,44.7z M35.07,1.16h86.38c0.79,0,1.43,0.64,1.43,1.43v19.93c0,0.79-0.64,1.43-1.43,1.43 H35.07c-0.79,0-1.43-0.64-1.43-1.43V2.59C33.64,1.8,34.29,1.16,35.07,1.16L35.07,1.16z M12.56,43.69c6.93,0,12.56,5.62,12.56,12.56 c0,6.93-5.62,12.56-12.56,12.56C5.62,68.81,0,63.19,0,56.25C0,49.32,5.62,43.69,12.56,43.69L12.56,43.69z M12.56,0 c6.93,0,12.56,5.62,12.56,12.56c0,6.93-5.62,12.56-12.56,12.56C5.62,25.11,0,19.49,0,12.56C0,5.62,5.62,0,12.56,0L12.56,0z"/>
                            </svg>
                            <span>Category</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="customers" className={({ isActive }) => `flex items-center p-2 space-x-3 rounded-md ${isActive ? "bg-gray-100 text-gray-900 rounded-lg" : ""}`}>
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 fill-current text-gray-600" viewBox="0 0 512 330.83">
                                <path d="M319.11 245.22c4.63-5.51 6.04-11.98.8-19.15-8.11-11.13-15.46-18.95-22.81-30.7-5.31-7.83-8.12-14.82-8.12-20.43 0-5.97 3.17-12.96 9.52-14.54-.84-12.03-1.13-27.85-.56-40.72 2.01-22.1 17.86-38.38 38.33-45.6 8.11-3.08 4.2-15.4 13.15-15.67 20.98-.56 55.39 17.34 68.83 31.89 7.83 8.4 12.86 19.58 13.71 34.42l-.85 37.07c3.92 1.12 6.44 3.64 7.56 7.56 1.13 4.47 0 10.64-3.92 19.31 0 .27-.27.27-.27.56-8.64 14.23-17.64 23.66-27.53 36.85-13.92 18.55 24.65 34.64 37.67 38.02 29.2 7.6 60.31 6.59 66.94 59.11.29 1.16.44 2.32.44 3.49 0 2.29-1.85 4.14-4.13 4.14H354.39c.31-1.64.47-3.33.47-5.05 0-1.32-.14-3.01-.41-5.05l-.6-3.53c-5.46-41.37-17.81-61.03-34.74-71.98zM5.05 330.83c-2.79 0-5.05-2.25-5.05-5.05 0-1.44.2-2.86.55-4.26 8.09-64.1 36.48-62.93 72.07-72.14 17.14-4.42 51.14-21.53 47.01-43.62-8.61-7.98-17.17-19.02-18.66-35.47l-1.03.01c-2.39-.03-4.7-.57-6.85-1.79-4.75-2.7-7.36-7.88-8.61-13.8-2.64-18.02-3.31-27.24 6.31-31.25l.08-.04c-1.19-22.25 2.57-54.99-20.28-61.9 45.11-55.75 97.12-86.07 136.17-36.47 43.51 2.27 62.91 63.9 35.9 98.41h-1.15c9.62 4.01 8.17 14.36 6.32 31.25-1.26 5.92-3.86 11.1-8.61 13.8-2.15 1.22-4.47 1.76-6.85 1.79l-1.04-.01c-1.49 16.45-10.06 27.49-18.68 35.47-4.13 22.11 29.9 39.21 47.05 43.62 35.58 9.19 63.97 8.04 72.07 72.14.34 1.4.54 2.82.54 4.26 0 2.8-2.25 5.05-5.05 5.05H5.05z" />
                            </svg>
                            <span>Customers</span>
                        </NavLink>
                    </li>
                    {/* <li>
                        <NavLink to="analytics" className={({ isActive }) => `flex items-center p-2 space-x-3 rounded-md ${isActive ? "bg-gray-100 text-gray-900 rounded-lg" : ""}`}>
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 fill-current dark:text-gray-600" viewBox="0 0 103.12 122.88" >
                                <path d="M72.17,35.82l16.44,0.06c-0.02,4.38-1.78,8.58-4.9,11.65c-0.74,0.73-1.54,1.38-2.4,1.96L72.17,35.82 L72.17,35.82z M1.18,122.01C0.49,121.69,0,
                                121,0,120.18V2c0-1.1,0.89-2,2-2H21.4h79.72c1.1,0,2,0.89,2,2v107.73 c0,0.11-0.01,0.21-0.02,0.31c-0.28,3.93-1.56,6.99-3.86,9.18c-2.3,2.18-5.53,3.4-9.72,
                                3.64c-0.09,0.01-0.17,0.02-0.26,0.02H2.83 C2.15,122.88,1.54,122.53,1.18,122.01L1.18,122.01z M35.5,34.9h5.01c0.27,0,0.48,0.22,0.48,0.48v9.85c0,0.27-0.22,
                                0.48-0.48,0.48 H35.5c-0.27,0-0.48-0.22-0.48-0.48v-9.85C35.02,35.12,35.23,34.9,35.5,34.9L35.5,34.9z M16.85,28.87h5.01 c0.27,0,0.48,0.22,0.48,0.48v15.89c0,
                                0.27-0.22,0.48-0.48,0.48h-5.01c-0.27,0-0.48-0.22-0.48-0.48V29.35 C16.36,29.09,16.58,28.87,16.85,28.87L16.85,28.87L16.85,28.87z M26.18,25.48h5.01c0.27,0,
                                0.48,0.22,0.48,0.48v19.28 c0,0.27-0.22,0.48-0.48,0.48h-5.01c-0.27,0-0.48-0.22-0.48-0.48V25.96C25.69,25.69,25.91,25.48,26.18,25.48L26.18,25.48z M99.13,
                                109.68V3.99H21.4H3.99v114.9h85.26l0.04,0c3.21-0.18,5.61-1.04,7.2-2.55C98.06,114.85,98.93,112.62,99.13,109.68 L99.13,109.68z M16.82,106.64c-1.09,
                                0-1.98-0.89-1.98-2c0-1.1,0.88-1.99,1.98-1.99h70.5c1.09,0,1.98,0.89,1.98,1.99 c0,1.1-0.88,2-1.98,2H16.82L16.82,106.64z M17.14,92.08c-1.09,
                                0-1.98-0.89-1.98-2c0-1.1,0.88-2,1.98-2h70c1.09,0,1.98,0.89,1.98,2 c0,1.1-0.88,2-1.98,2H17.14L17.14,92.08z M16.82,77.52c-1.09,0-1.98-0.89-1.98-2c0-1.1,
                                0.88-1.99,1.98-1.99h30.13 c1.09,0,1.98,0.89,1.98,1.99c0,1.1-0.88,2-1.98,2H16.82L16.82,77.52z M54.64,77.52c-1.09,0-1.98-0.89-1.98-2 c0-1.1,0.88-1.99,
                                1.98-1.99h32.5c1.09,0,1.98,0.89,1.98,1.99c0,1.1-0.88,2-1.98,2H54.64L54.64,77.52z M16.82,64.53 c-1.09,0-1.98-0.89-1.98-2c0-1.1,0.88-2,1.98-2h24.84c1.09,0,
                                1.98,0.89,1.98,2c0,1.1-0.88,2-1.98,2H16.82L16.82,64.53z M16.82,13.91c-1.09,0-1.98-0.89-1.98-2s0.88-2,1.98-2h14.84c1.09,0,1.98,0.89,1.98,2s-0.88,2-1.98,
                                2H16.82L16.82,13.91z M70.49,32.56l-0.88-17.57c-0.02-0.35,0.25-0.64,0.6-0.66c0.1-0.01,0.22-0.01,0.35-0.01c0.11,0,0.23-0.01,0.35-0.01 c4.83-0.05,9.25,
                                1.78,12.56,4.82c3.31,3.05,5.5,7.31,5.84,12.13c0.02,0.35-0.24,0.65-0.58,0.67l-17.58,1.26 c-0.35,0.02-0.65-0.24-0.67-0.58C70.49,32.59,70.49,32.57,70.49,
                                32.56L70.49,32.56z M70.9,15.57l0.82,16.32l16.3-1.16 c-0.46-4.23-2.45-7.96-5.38-10.66c-3.08-2.84-7.21-4.54-11.7-4.49L70.9,15.57L70.9,15.57z M68.52,35.06l8.81,
                                15.26 c-2.68,1.55-5.72,2.36-8.81,2.36c-9.73,0-17.62-7.89-17.62-17.62c0-8.74,6.41-16.17,15.06-17.43L68.52,35.06L68.52,35.06z"/>
                            </svg>
                            <span>Analytics</span>
                        </NavLink>
                    </li> */}
                    <li>
                        <NavLink to="coupon" className={({ isActive }) => `flex items-center p-2 space-x-3 rounded-md ${isActive ? "bg-gray-100 text-gray-900 rounded-lg" : ""}`}>
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 fill-current dark:text-gray-600" viewBox="0 0 122.88 66.32"><title>voucher</title><path d="M31.74,27.23a2.86,2.86,0,0,0,5.68.44,3.25,3.25,0,0,0,0-.44V21.52a2.86,
                                2.86,0,0,0-5.68-.44,3.25,3.25,0,0,0,0,.44v5.71ZM5.76,0H117.12a5.77,5.77,0,0,1,5.76,5.76V12a2.36,2.36,0,0,1-2.35,2.36l-.34,0h0a6.27,6.27,0,0,0-4.46,1.87,6.48,6.48,0,0,0-1.9,
                                4.52v.16a6.37,6.37,0,0,0,1.92,4.55l.11.11a6.67,6.67,0,0,0,4.55,1.73h.11a2.34,2.34,0,0,1,2.35,2.33h0v7.9a2.35,2.35,0,0,1-2.35,2.35h-.12a6.65,6.65,0,0,0-4.64,1.84h0a6.38,6.38,
                                0,0,0-1.93,4.53v.16a6.53,6.53,0,0,0,1.9,4.53,6.29,6.29,0,0,0,4.46,1.87h.31a2.34,2.34,0,0,1,2.37,2.31v0h0v5.35a5.74,5.74,0,0,1-1.69,4.07l-.17.15a5.71,5.71,0,0,1-3.9,
                                1.55H5.76A5.77,5.77,0,0,1,1.7,64.63h0A5.78,5.78,0,0,1,0,60.55V55.2a2.35,2.35,0,0,1,2.35-2.35h.33A6.31,6.31,0,0,0,7.15,51a6.52,6.52,0,0,0,1.9-4.52v-.08H9a6.45,6.45,0,0,
                                0-6.46-6.47A2.35,2.35,0,0,1,.23,37.57L0,29.74a2.34,2.34,0,0,1,2.28-2.41h.18a6.65,6.65,0,0,0,4.66-1.83l.11-.1a6.36,6.36,0,0,0,1.81-4.45v-.17a6.34,6.34,0,0,0-1.92-4.54L7,
                                16.12A6.66,6.66,0,0,0,2.47,14.4l-.25,0A2.33,2.33,0,0,1,0,12.05H0V5.76A5.77,5.77,0,0,1,1.69,1.7h0A5.77,5.77,0,0,1,5.76,0ZM70.17,47.15a3.84,3.84,0,0,1-1.51,1.48,7.05,7.05,
                                0,0,1-3.19.53c-1.49,0-2.24-.4-2.24-1.19a1.47,1.47,0,0,1,.09-.36L79.48,19a8.24,8.24,0,0,1,.75-1.12,3.76,3.76,0,0,1,1.26-.77,5.83,5.83,0,0,1,2.28-.39c1.89,0,2.83.41,2.83,
                                1.23a.88.88,0,0,1-.09.41L70.17,47.15Zm-7.39-13a15,15,0,0,1-3.5-.36,8.08,8.08,0,0,1-2.76-1.28q-2.6-1.87-2.6-7.26t2.74-7a11.14,11.14,0,0,1,6.12-1.5,11.54,11.54,0,0,1,6.16,
                                1.5c1.82,1.19,2.74,3.53,2.74,7s-.87,6-2.61,7.26a10.89,10.89,0,0,1-6.29,1.64Zm0-4.43a.74.74,0,0,0,.59-.27c.39-.43.59-1.51.59-3.24a23.31,23.31,0,0,0-.18-3.58,2.66,2.66,0,0,
                                0-.41-1.21.77.77,0,0,0-.59-.23c-.8,0-1.19,1.42-1.19,4.27s.39,4.26,1.19,4.26Zm24,19.9a15,15,0,0,1-3.49-.36A7.89,7.89,0,0,1,80.53,48q-2.59-1.87-2.6-7.26c0-3.5.91-5.82,2.74-7a10.87,
                                10.87,0,0,1,6.11-1.55A11.29,11.29,0,0,1,93,33.73c1.82,1.16,2.73,3.48,2.73,7s-.86,6-2.6,7.26a10.83,10.83,0,0,1-6.3,1.64Zm0-4.42a.83.83,0,0,0,.6-.23c.39-.46.59-1.55.59-3.29a23.4,
                                23.4,0,0,0-.18-3.58,2.71,2.71,0,0,0-.41-1.21.83.83,0,0,0-.6-.23c-.79,0-1.18,1.42-1.18,4.27s.39,4.27,1.18,4.27ZM117.12,4.71H37.45v5.38a3,3,0,0,1,0,.43,2.86,2.86,0,0,
                                1-5.68-.43V4.71h-26A1,1,0,0,0,5,5H5a1,1,0,0,0-.3.74V9.9a11.34,11.34,0,0,1,5.53,2.82l.15.13a11,11,0,0,1,3.35,7.88V21a11,11,0,0,1-3.21,7.72l-.14.15A11.21,11.21,0,0,1,4.76,
                                31.8l.11,3.65a11.16,11.16,0,0,1,5.61,3,11.13,11.13,0,0,1,3.27,7.9s0,.09,0,.12a11.19,11.19,0,0,1-3.26,7.79,11.06,11.06,0,0,1-5.77,3.07v3.18a1,1,0,0,0,.3.75H5a1.06,1.06,0,0,
                                0,.74.3h26v-5.8a3,3,0,0,1,0-.43,2.86,2.86,0,0,1,5.68.43v5.8h79.67a1,1,0,0,0,.67-.24l.07-.07a1.07,1.07,0,0,0,.31-.75V57.36a11,11,0,0,1-5.77-3.06,11.16,11.16,0,0,
                                1-3.26-7.78v-.27a11,11,0,0,1,3.37-7.87,11.3,11.3,0,0,1,5.66-3V31.8a11.19,11.19,0,0,1-5.53-2.8l-.15-.13A11,11,0,0,1,109.14,21v-.28A11.18,11.18,0,0,1,112.4,13a11,11,0,0,1,
                                5.77-3.08V5.76a1.06,1.06,0,0,0-1-1ZM31.74,44.38a2.86,2.86,0,0,0,5.68.44,3.25,3.25,0,0,0,0-.44V38.67a2.86,2.86,0,0,0-5.68-.44,3.15,3.15,0,0,0,0,.44v5.71Z"/>
                            </svg>
                            <span>Coupon</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="payments" className={({ isActive }) => `flex items-center p-2 space-x-3 rounded-md ${isActive ? "bg-gray-100 text-gray-900 rounded-lg" : ""}`}>
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 fill-current text-gray-600" viewBox="0 0 117.34 122.88">
                                <path d="M85.14,14.83L43.26,40.28h11.91l30.92-18.79l4.54-2.76l13.09,21.55h7.62c1.66,0,3.16,0.68,4.25,1.76l0,0 c1.09,1.09,1.77,2.59,1.77,4.24v70.59c0,1.65-0.68,3.15-1.76,4.23v0.01c-1.09,1.09-2.59,1.76-4.25,1.76l-105.33,0 c-1.66,0-3.16-0.67-4.25-1.76v-0.01C0.68,120.02,0,118.52,0,116.88V46.28c0-1.65,0.68-3.16,1.76-4.24 c1.09-1.09,2.59-1.76,4.25-1.76h2.5L73.53,0.77v0C74.36,0.27,75.3,0,76.27,0c0.42,0,0.84,0.05,1.25,0.15 c1.36,0.33,2.54,1.19,3.26,2.39v0l6.63,10.91L85.14,14.83L85.14,14.83L85.14,14.83z M5.89,45.62c-0.23,0.25-0.42,0.53-0.56,0.84 v8.69h106.68v-8.87c0-0.19-0.07-0.36-0.19-0.47h-0.01c-0.12-0.12-0.29-0.2-0.48-0.2H6.01C5.97,45.61,5.93,45.61,5.89,45.62 L5.89,45.62z M15.98,84.71h19.05v7.13H15.98V84.71L15.98,84.71z M15.98,101.59h53.25v6.43H15.98V101.59L15.98,101.59z M86.21,84.71 h19.05v7.13H86.21V84.71L86.21,84.71z M62.8,84.71h19.05v7.13H62.8V84.71L62.8,84.71z M39.39,84.71h19.05v7.13H39.39V84.71 L39.39,84.71z M112.01,75.14H5.33v41.73c0,0.19,0.07,0.36,0.2,0.48l0.01,0c0.13,0.13,0.3,0.2,0.47,0.2l105.33,0 c0.18,0,0.35-0.08,0.48-0.2l0,0c0.13-0.13,0.2-0.3,0.2-0.48v0V75.14L112.01,75.14z" />
                            </svg>
                            <span>Payments</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="edit-store" className={({ isActive }) => `flex items-center p-2 space-x-3 rounded-md ${isActive ? "bg-gray-100 text-gray-900 rounded-lg" : ""}`}>
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 fill-current text-gray-600" viewBox="0 0 122.88 102.36"><path d="M69.19,77.45a1.75,1.75,0,1,1-1.75,1.75,1.75,1.75,0,0,1,1.75-1.75ZM22.11,22.84H3.44v3a8.48,8.48,0,0,0,8.43,8.46c2.32,0,6.24-.95,7.77-2.49a8.45,8.45,0,0,0,2.47-6v-3Zm-17.81-3H22.64l3-16.93h-14L4.3,19.82ZM74.43,2.89,75.7,19.82H96.21L92.75,2.89ZM71.69,19.82,70.43,2.89h-18L51.18,19.82Zm-24.52,0L48.41,2.89H29.66l-3,16.93ZM96.74,2.89l3.45,16.93h18.29L110.57,2.89Zm4,20v3a8.45,8.45,0,0,0,2.47,6c1.53,1.54,5.45,2.49,7.77,2.49a8.48,8.48,0,0,0,8.43-8.46v-3ZM76,22.84v3a8.42,8.42,0,0,0,2.48,6c1.53,1.54,5.44,2.49,7.76,2.49s6.23-.95,7.76-2.49a8.42,8.42,0,0,0,2.48-6v-3Zm-24.82,0v3a8.42,8.42,0,0,0,2.48,6c1.53,1.54,5.44,2.49,7.76,2.49s6.23-.95,7.76-2.49a8.42,8.42,0,0,0,2.48-6v-3Zm-24.82,0v3a8.42,8.42,0,0,0,2.48,6c1.53,1.54,5.44,2.49,7.76,2.49s6.23-.95,7.76-2.49a8.42,8.42,0,0,0,2.48-6v-3Zm79.71,13.79c-1.25-.58-4.33-1.38-5.3-2.35a12,12,0,0,1-2.12-2.88,12,12,0,0,1-2.12,2.88c-2.14,2.14-7,3.46-10.29,3.46S78.11,36.42,76,34.28a12,12,0,0,1-2.12-2.88,12,12,0,0,1-2.12,2.88c-2.14,2.14-7,3.46-10.29,3.46s-8.15-1.32-10.29-3.46A12,12,0,0,1,49,31.4a12,12,0,0,1-2.12,2.88c-2.14,2.14-7,3.46-10.29,3.46s-8.15-1.32-10.29-3.46a12,12,0,0,1-2.12-2.88,12,12,0,0,1-2.12,2.88c-1.41,1.41-5.12,2.46-7.08,3q-.64.08-1.32.12V95.86a1.12,1.12,0,0,0,.33.79,1.15,1.15,0,0,0,.81.34h45V56.62a9.76,9.76,0,0,1,9.74-9.74H85.64a9.76,9.76,0,0,1,9.73,9.74V97h12.68a1.13,1.13,0,0,0,.8-.34h0a1.13,1.13,0,0,0,.32-.79V37.48c0-.11,0-.22,0-.32a24.62,24.62,0,0,1-3.11-.53ZM64.33,97H90.85V56.62a5.24,5.24,0,0,0-5.22-5.22H69.55a5.24,5.24,0,0,0-5.22,5.22V97ZM30,54.32h16.1a2.27,2.27,0,0,1,2.27,2.26V80.51a2.27,2.27,0,0,1-2.27,2.27H30a2.27,2.27,0,0,1-2.27-2.27V56.58A2.27,2.27,0,0,1,30,54.32Zm13.84,4.53H32.25v19.4H43.84V58.85ZM8.37,37a10.49,10.49,0,0,1-4.9-2.67A11.77,11.77,0,0,1,0,25.94V21.3H0a1.45,1.45,0,0,1,.17-.67L9.45.69A1.33,1.33,0,0,1,10.62,0h100.9a1.35,1.35,0,0,1,1.21.76l10,19.83a1.35,1.35,0,0,1,.19.63h0a.57.57,0,0,1,0,.13v4.58a11.77,11.77,0,0,1-3.47,8.34,10,10,0,0,1-4.91,2.64,2.6,2.6,0,0,1,.06.56V95.86a6.49,6.49,0,0,1-1.92,4.58h0a6.49,6.49,0,0,1-4.6,1.91H14.83a6.49,6.49,0,0,1-4.59-1.91h0a6.46,6.46,0,0,1-1.91-4.58V37.48a3.07,3.07,0,0,1,0-.53Z" />
                            </svg>
                            <span>Store Settings</span>
                        </NavLink>
                    </li>
                </ul>
                <ul className="pt-4 pb-2 space-y-1 text-sm">
                    <li>
                        <NavLink to="settings" className={({ isActive }) => `flex items-center p-2 space-x-3 rounded-md ${isActive ? "bg-gray-100 text-gray-900 rounded-lg" : ""}`}>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-5 h-5 fill-current text-gray-600">
                                <path d="M245.151,168a88,88,0,1,0,88,88A88.1,88.1,0,0,0,245.151,168Zm0,144a56,56,0,1,1,56-56A56.063,56.063,0,0,1,245.151,312Z"></path>
                                <path d="M464.7,322.319l-31.77-26.153a193.081,193.081,0,0,0,0-80.332l31.77-26.153a19.941,19.941,0,0,0,4.606-25.439l-32.612-56.483a19.936,19.936,0,0,0-24.337-8.73l-38.561,14.447a192.038,192.038,0,0,0-69.54-40.192L297.49,32.713A19.936,19.936,0,0,0,277.762,16H212.54a19.937,19.937,0,0,0-19.728,16.712L186.05,73.284a192.03,192.03,0,0,0-69.54,40.192L77.945,99.027a19.937,19.937,0,0,0-24.334,8.731L21,164.245a19.94,19.94,0,0,0,4.61,25.438l31.767,26.151a193.081,193.081,0,0,0,0,80.332l-31.77,26.153A19.942,19.942,0,0,0,21,347.758l32.612,56.483a19.937,19.937,0,0,0,24.337,8.73l38.562-14.447a192.03,192.03,0,0,0,69.54,40.192l6.762,40.571A19.937,19.937,0,0,0,212.54,496h65.222a19.936,19.936,0,0,0,19.728-16.712l6.763-40.572a192.038,192.038,0,0,0,69.54-40.192l38.564,14.449a19.938,19.938,0,0,0,24.334-8.731L469.3,347.755A19.939,19.939,0,0,0,464.7,322.319Zm-50.636,57.12-48.109-18.024-7.285,7.334a159.955,159.955,0,0,1-72.625,41.973l-10,2.636L267.6,464h-44.89l-8.442-50.642-10-2.636a159.955,159.955,0,0,1-72.625-41.973l-7.285-7.334L76.241,379.439,53.8,340.562l39.629-32.624-2.7-9.973a160.9,160.9,0,0,1,0-83.93l2.7-9.972L53.8,171.439l22.446-38.878,48.109,18.024,7.285-7.334a159.955,159.955,0,0,1,72.625-41.973l10-2.636L222.706,48H267.6l8.442,50.642,10,2.636a159.955,159.955,0,0,1,72.625,41.973l7.285,7.334,48.109-18.024,22.447,38.877-39.629,32.625,2.7,9.972a160.9,160.9,0,0,1,0,83.93l-2.7,9.973,39.629,32.623Z"></path>
                            </svg>
                            <span>Settings</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/logout" className={({ isActive }) => `flex items-center p-2 space-x-3 rounded-md ${isActive ? "bg-gray-100 text-gray-900 rounded-lg" : ""}`}>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-5 h-5 fill-current text-gray-600">
                                <path d="M440,424V88H352V13.005L88,58.522V424H16v32h86.9L352,490.358V120h56V456h88V424ZM320,453.642,120,426.056V85.478L320,51Z"></path>
                                <rect width="32" height="64" x="256" y="232"></rect>
                            </svg>
                            <span>Logout</span>
                        </NavLink>
                    </li>
                </ul>
            </div>
        </>
    )
}

export default Sidebar