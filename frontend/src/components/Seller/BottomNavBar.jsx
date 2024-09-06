import React from 'react'
import { Link, NavLink } from 'react-router-dom'

function BottomNavBar() {
    return (
        <div data-theme="light" className="btm-nav lg:hidden bottom-0">
            <NavLink to="dashboard" className={({ isActive }) => `${isActive ? "active" : ""}`}>
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 fill-current" viewBox="0 0 122.88 121.135">
                    <path d="M74.401,65.787h41.427c1.943,0,3.707,0.791,4.982,2.068c1.276,1.275,2.069,3.039,2.069,4.982v41.246 c0,1.941-0.793,3.707-2.069,4.98c-1.275,1.277-3.039,2.07-4.982,2.07H74.401c-1.942,0-3.706-0.793-4.982-2.07 c-1.275-1.273-2.068-3.039-2.068-4.98V72.838c0-1.943,0.793-3.707,2.068-4.982C70.695,66.578,72.459,65.787,74.401,65.787 L74.401,65.787z M7.052,0h41.426c1.942,0,3.707,0.792,4.983,2.069s2.068,3.04,2.068,4.983v41.245c0,1.943-0.792,3.707-2.068,4.982 c-1.276,1.276-3.041,2.069-4.983,2.069H7.052c-1.934,0-3.692-0.793-4.969-2.069l-0.007-0.006l-0.007,0.006 C0.792,52.003,0,50.239,0,48.296V7.052c0-1.943,0.792-3.707,2.069-4.983C2.162,1.976,2.26,1.888,2.359,1.807 C3.607,0.685,5.255,0,7.052,0L7.052,0z M48.131,7.397H7.397V47.95h40.733V7.397L48.131,7.397z M74.401,0h41.427 c1.943,0,3.707,0.792,4.982,2.069c1.276,1.276,2.069,3.04,2.069,4.983v41.245c0,1.943-0.793,3.707-2.069,4.982 c-1.275,1.276-3.039,2.069-4.982,2.069H74.401c-1.942,0-3.706-0.793-4.982-2.069c-1.275-1.275-2.068-3.04-2.068-4.982V7.052 c0-1.943,0.793-3.707,2.068-4.983C70.695,0.792,72.459,0,74.401,0L74.401,0z M115.482,7.397H74.748V47.95h40.734V7.397 L115.482,7.397z M7.052,65.787h41.426c1.942,0,3.707,0.791,4.983,2.068c1.276,1.275,2.068,3.039,2.068,4.982v41.246 c0,1.941-0.792,3.707-2.068,4.98c-1.276,1.277-3.041,2.07-4.983,2.07H7.052c-1.934,0-3.692-0.793-4.969-2.07l-0.007-0.006 l-0.007,0.006C0.792,117.791,0,116.025,0,114.084V72.838c0-1.943,0.792-3.707,2.069-4.982c0.093-0.094,0.191-0.182,0.291-0.264 C3.607,66.471,5.255,65.787,7.052,65.787L7.052,65.787z M48.131,73.184H7.397v40.553h40.733V73.184L48.131,73.184z M115.482,73.184 H74.748v40.553h40.734V73.184L115.482,73.184z" />
                </svg>
                <span className="btm-nav-label text-xs lg:text-sm">Home</span>
            </NavLink>
            <NavLink to="products" className={({ isActive }) => `${isActive ? "active" : ""}`}>
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 fill-current" viewBox="0 0 122.88 114.5">
                    <path d="M118.66,9.63c0.67-0.13,1.37,0,1.95,0.35c0.99,0.41,1.69,1.38,1.69,2.52l0.57,79.58c0.05,0.98-0.43,1.95-1.33,2.48 l-32.5,19.39c-0.46,0.35-1.03,0.55-1.65,0.55c-0.15,0-0.3-0.01-0.44-0.04l-84.34-9.38C1.16,105.02,0,103.82,0,102.35V21.42h0 c-0.03-1.08,0.58-2.13,1.64-2.59l42.31-18.6l0,0c0.44-0.2,0.94-0.28,1.46-0.21L118.66,9.63L118.66,9.63z M90.14,33.86v73.06 l27.26-16.26l-0.53-73.65L90.14,33.86L90.14,33.86z M84.65,108.69V34.63l-35.97-4.59L47.5,64.41l-12.63-8.6l-12.63,7.14L24.85,27 L5.49,24.53v75.37L84.65,108.69L84.65,108.69z M78.96,9.94L52.43,25l34.51,4.4l24.19-15.24L78.96,9.94L78.96,9.94z M28.23,21.91 L53.95,6.66l-8.48-1.11L12.74,19.94L28.23,21.91L28.23,21.91z" />
                </svg>
                <span className="btm-nav-label text-xs lg:text-sm">Products</span>
            </NavLink>
            <NavLink to="edit-store" className={({ isActive }) => `${isActive ? "active" : ""}`}>
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-5 fill-current" viewBox="0 0 122.88 102.36"><path d="M69.19,77.45a1.75,1.75,0,1,1-1.75,1.75,1.75,1.75,0,0,1,1.75-1.75ZM22.11,22.84H3.44v3a8.48,8.48,0,0,0,8.43,8.46c2.32,0,6.24-.95,7.77-2.49a8.45,8.45,0,0,0,2.47-6v-3Zm-17.81-3H22.64l3-16.93h-14L4.3,19.82ZM74.43,2.89,75.7,19.82H96.21L92.75,2.89ZM71.69,19.82,70.43,2.89h-18L51.18,19.82Zm-24.52,0L48.41,2.89H29.66l-3,16.93ZM96.74,2.89l3.45,16.93h18.29L110.57,2.89Zm4,20v3a8.45,8.45,0,0,0,2.47,6c1.53,1.54,5.45,2.49,7.77,2.49a8.48,8.48,0,0,0,8.43-8.46v-3ZM76,22.84v3a8.42,8.42,0,0,0,2.48,6c1.53,1.54,5.44,2.49,7.76,2.49s6.23-.95,7.76-2.49a8.42,8.42,0,0,0,2.48-6v-3Zm-24.82,0v3a8.42,8.42,0,0,0,2.48,6c1.53,1.54,5.44,2.49,7.76,2.49s6.23-.95,7.76-2.49a8.42,8.42,0,0,0,2.48-6v-3Zm-24.82,0v3a8.42,8.42,0,0,0,2.48,6c1.53,1.54,5.44,2.49,7.76,2.49s6.23-.95,7.76-2.49a8.42,8.42,0,0,0,2.48-6v-3Zm79.71,13.79c-1.25-.58-4.33-1.38-5.3-2.35a12,12,0,0,1-2.12-2.88,12,12,0,0,1-2.12,2.88c-2.14,2.14-7,3.46-10.29,3.46S78.11,36.42,76,34.28a12,12,0,0,1-2.12-2.88,12,12,0,0,1-2.12,2.88c-2.14,2.14-7,3.46-10.29,3.46s-8.15-1.32-10.29-3.46A12,12,0,0,1,49,31.4a12,12,0,0,1-2.12,2.88c-2.14,2.14-7,3.46-10.29,3.46s-8.15-1.32-10.29-3.46a12,12,0,0,1-2.12-2.88,12,12,0,0,1-2.12,2.88c-1.41,1.41-5.12,2.46-7.08,3q-.64.08-1.32.12V95.86a1.12,1.12,0,0,0,.33.79,1.15,1.15,0,0,0,.81.34h45V56.62a9.76,9.76,0,0,1,9.74-9.74H85.64a9.76,9.76,0,0,1,9.73,9.74V97h12.68a1.13,1.13,0,0,0,.8-.34h0a1.13,1.13,0,0,0,.32-.79V37.48c0-.11,0-.22,0-.32a24.62,24.62,0,0,1-3.11-.53ZM64.33,97H90.85V56.62a5.24,5.24,0,0,0-5.22-5.22H69.55a5.24,5.24,0,0,0-5.22,5.22V97ZM30,54.32h16.1a2.27,2.27,0,0,1,2.27,2.26V80.51a2.27,2.27,0,0,1-2.27,2.27H30a2.27,2.27,0,0,1-2.27-2.27V56.58A2.27,2.27,0,0,1,30,54.32Zm13.84,4.53H32.25v19.4H43.84V58.85ZM8.37,37a10.49,10.49,0,0,1-4.9-2.67A11.77,11.77,0,0,1,0,25.94V21.3H0a1.45,1.45,0,0,1,.17-.67L9.45.69A1.33,1.33,0,0,1,10.62,0h100.9a1.35,1.35,0,0,1,1.21.76l10,19.83a1.35,1.35,0,0,1,.19.63h0a.57.57,0,0,1,0,.13v4.58a11.77,11.77,0,0,1-3.47,8.34,10,10,0,0,1-4.91,2.64,2.6,2.6,0,0,1,.06.56V95.86a6.49,6.49,0,0,1-1.92,4.58h0a6.49,6.49,0,0,1-4.6,1.91H14.83a6.49,6.49,0,0,1-4.59-1.91h0a6.46,6.46,0,0,1-1.91-4.58V37.48a3.07,3.07,0,0,1,0-.53Z" />
                </svg>
                <span className="btm-nav-label text-xs lg:text-sm">Store</span>
            </NavLink>
            <NavLink to="orders" className={({ isActive }) => `${isActive ? "active" : ""}`}>
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 fill-current" viewBox="0 0 115.35 122.88">
                    <path d="M25.27,86.92c-1.81,0-3.26-1.46-3.26-3.26s1.47-3.26,3.26-3.26h21.49c1.81,0,3.26,1.46,3.26,3.26s-1.46,3.26-3.26,3.26 H25.27L25.27,86.92L25.27,86.92z M61.1,77.47c-0.96,0-1.78-0.82-1.78-1.82c0-0.96,0.82-1.78,1.78-1.78h4.65c0.04,0,0.14,0,0.18,0 c1.64,0.04,3.1,0.36,4.33,1.14c1.37,0.87,2.37,2.19,2.92,4.15c0,0.04,0,0.09,0.05,0.14l0.46,1.82h39.89c1,0,1.78,0.82,1.78,1.78 c0,0.18-0.05,0.36-0.09,0.55l-4.65,18.74c-0.18,0.82-0.91,1.37-1.73,1.37l0,0l-29.18,0c0.64,2.37,1.28,3.65,2.14,4.24 c1.05,0.68,2.87,0.73,5.93,0.68h0.04l0,0h20.61c1,0,1.78,0.82,1.78,1.78c0,1-0.82,1.78-1.78,1.78H87.81l0,0 c-3.79,0.04-6.11-0.05-7.98-1.28c-1.92-1.28-2.92-3.46-3.92-7.43l0,0L69.8,80.2c0-0.05,0-0.05-0.04-0.09 c-0.27-1-0.73-1.69-1.37-2.05c-0.64-0.41-1.5-0.59-2.51-0.59c-0.05,0-0.09,0-0.14,0H61.1L61.1,77.47L61.1,77.47z M103.09,114.13 c2.42,0,4.38,1.96,4.38,4.38s-1.96,4.38-4.38,4.38s-4.38-1.96-4.38-4.38S100.67,114.13,103.09,114.13L103.09,114.13L103.09,114.13z M83.89,114.13c2.42,0,4.38,1.96,4.38,4.38s-1.96,4.38-4.38,4.38c-2.42,0-4.38-1.96-4.38-4.38S81.48,114.13,83.89,114.13 L83.89,114.13L83.89,114.13z M25.27,33.58c-1.81,0-3.26-1.47-3.26-3.26c0-1.8,1.47-3.26,3.26-3.26h50.52 c1.81,0,3.26,1.46,3.26,3.26c0,1.8-1.46,3.26-3.26,3.26H25.27L25.27,33.58L25.27,33.58z M7.57,0h85.63c2.09,0,3.99,0.85,5.35,2.21 s2.21,3.26,2.21,5.35v59.98h-6.5V7.59c0-0.29-0.12-0.56-0.31-0.76c-0.2-0.19-0.47-0.31-0.76-0.31l0,0H7.57 c-0.29,0-0.56,0.12-0.76,0.31S6.51,7.3,6.51,7.59v98.67c0,0.29,0.12,0.56,0.31,0.76s0.46,0.31,0.76,0.31h55.05 c0.61,2.39,1.3,4.48,2.23,6.47H7.57c-2.09,0-3.99-0.85-5.35-2.21C0.85,110.24,0,108.34,0,106.25V7.57c0-2.09,0.85-4,2.21-5.36 S5.48,0,7.57,0L7.57,0L7.57,0z M25.27,60.25c-1.81,0-3.26-1.46-3.26-3.26s1.47-3.26,3.26-3.26h50.52c1.81,0,3.26,1.46,3.26,3.26 s-1.46,3.26-3.26,3.26H25.27L25.27,60.25L25.27,60.25z" />
                </svg>
                <span className="btm-nav-label text-xs lg:text-sm">Orders</span>
            </NavLink>
            <div className="dropdown dropdown-top dropdown-end pr-3">
                <div tabIndex={0} role="button" className="btn m-1 lg:ml-3 bg-white border-2 shadow-none border-white">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 fill-current" viewBox="0 0 122.88 29.956"><path d="M122.88,14.978c0,8.271-6.708,14.979-14.979,14.979s-14.976-6.708-14.976-14.979 C92.926,6.708,99.631,0,107.901,0S122.88,6.708,122.88,14.978L122.88,14.978z M29.954,14.978c0,8.271-6.708,14.979-14.979,14.979 S0,23.248,0,14.978C0,6.708,6.705,0,14.976,0S29.954,6.708,29.954,14.978L29.954,14.978z M76.417,14.978 c0,8.271-6.708,14.979-14.979,14.979c-8.27,0-14.978-6.708-14.978-14.979C46.46,6.708,53.168,0,61.438,0 C69.709,0,76.417,6.708,76.417,14.978L76.417,14.978z" /></svg>
                   <span className="btm-nav-label text-xs lg:text-sm">More</span></div>
                <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                    <li><Link to="coupon" className='text-md'>Coupon</Link></li>
                    <li><Link to="payments" className='text-md'>Payment</Link></li>
                    <li><Link to="customers" className='text-md'>Customers</Link></li>
                    <li><Link to="categories" className='text-md'>Category</Link></li>
                    <li><Link to="settings" className='text-md'>Settings</Link></li>
                    <li><Link to="/logout" className='text-md'>Logout</Link></li>
                </ul>
            </div>
        </div>
    )
}

export default BottomNavBar