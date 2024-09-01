import React from 'react'
import { Link } from 'react-router-dom'

function Store() {
  return (

    <section className='bg-gray-100 flex-grow h-full lg:h-dvh lg:pb-8 pb-20'>
      <div className='lg:my-10 my-5 mx-5'>
        <h2 className='text-3xl text-zinc-900 font-extrabold tracking-tightr'>Store Settings</h2>
        <div className='w-full grid grid-flow-row-dense lg:grid-cols-2 gap-4 mt-7'>
          <Link to="/seller/customize-store">
            <div className='bg-white p-5'>
              <div className='flex'>
                <svg className='text-gray-600 h-8 w-8 mt-3' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 107.01 122.88"><path d="M107.01,20.54h-3.62v3.08c0,2.93-1.19,5.58-3.12,7.51c-1.93,1.92-4.58,3.12-7.51,3.12H22.71c-2.93,0-5.58-1.19-7.51-3.12 c-1.93-1.93-3.12-4.58-3.12-7.51V20.1h-1.45c-1.54,0-2.94,0.63-3.96,1.65c-1.02,1.02-1.65,2.42-1.65,3.96v16.24 c0,1.54,0.63,2.94,1.65,3.96c1.02,1.02,2.42,1.65,3.96,1.65h28.31c1.23,0,1.66-0.01,2.08-0.01c4.87-0.08,10.31-0.17,14.56,2.91 c1.46,1.05,2.62,2.39,3.46,4.04c0.81,1.58,1.3,3.44,1.46,5.59c0,0.06,0.01,0.12,0.01,0.18h0v8.21h4.29c1.88,0,3.59,0.77,4.82,2 c1.24,1.24,2,2.94,2,4.82v40.76c0,1.88-0.77,3.59-2,4.82c-1.24,1.24-2.94,2-4.82,2H51.46c-1.88,0-3.59-0.77-4.82-2 c-1.24-1.24-2-2.94-2-4.82V75.3c0-1.88,0.77-3.59,2-4.82c1.24-1.24,2.94-2,4.82-2h4.03v-8.16c-0.11-1.4-0.43-2.57-0.92-3.54 c-0.47-0.93-1.12-1.67-1.93-2.26c-2.91-2.11-7.47-2.04-11.54-1.97c-1.02,0.02-2.02,0.03-2.16,0.03H10.63 c-2.93,0-5.58-1.19-7.51-3.12C1.19,47.53,0,44.87,0,41.95V25.71c0-2.93,1.2-5.58,3.12-7.51c1.93-1.92,4.58-3.12,7.51-3.12h1.45 v-4.45c0-2.93,1.19-5.58,3.12-7.51C17.13,1.19,19.78,0,22.71,0h70.05c2.93,0,5.58,1.19,7.51,3.12c1.93,1.92,3.12,4.58,3.12,7.51 v4.89h3.62V20.54L107.01,20.54z M92.76,5.01H22.71c-1.54,0-2.94,0.63-3.96,1.65c-1.02,1.02-1.65,2.42-1.65,3.96v12.99 c0,1.54,0.63,2.94,1.65,3.96c1.02,1.02,2.42,1.65,3.96,1.65h70.05c1.54,0,2.94-0.63,3.96-1.65c1.02-1.02,1.65-2.42,1.65-3.96V10.63 c0-1.54-0.63-2.94-1.65-3.96C95.7,5.65,94.3,5.01,92.76,5.01L92.76,5.01z M64.79,73.49H51.46c-0.49,0-0.95,0.2-1.28,0.53 c-0.33,0.33-0.53,0.78-0.53,1.28v40.76c0,0.49,0.2,0.95,0.53,1.28c0.33,0.33,0.78,0.53,1.28,0.53h13.33c0.49,0,0.95-0.2,1.28-0.53 c0.33-0.33,0.53-0.78,0.53-1.28V75.3c0-0.49-0.2-0.95-0.53-1.28C65.74,73.69,65.28,73.49,64.79,73.49L64.79,73.49z" />
                </svg>
                <div className='ml-4'>
                  <h3 className='font-bold text-gray-800 text-xl'>Customize Title</h3>
                  <p className='text-sm text-gray-500'>Personlise store title and color</p>
                </div>
              </div>
            </div>
          </Link>

          <Link to="/seller/customize-banner">
            <div className='bg-white p-5'>
              <div className='flex'>
                <svg className='text-gray-600 h-8 w-8 mt-3' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 122.88 118.3"><path d="M7.51,0h107.85c2.05,0,3.93,0.85,5.29,2.21v0l0.01,0.01l0.01,0.01l0.01,0.01c1.36,1.37,2.2,3.24,2.2,5.29 v103.28c0,2.07-0.85,3.95-2.21,5.31c-1.36,1.36-3.24,2.21-5.31,2.21H7.51c-2.05,0-3.93-0.84-5.3-2.21l-0.01-0.01l-0.01-0.01 l-0.01-0.01c-1.36-1.37-2.2-3.24-2.2-5.29V7.51C0,5.44,0.84,3.56,2.2,2.2c0.08-0.08,0.16-0.16,0.25-0.23C3.79,0.75,5.57,0,7.51,0 L7.51,0z M65.79,98.75c-1.58,0-2.86-1.39-2.86-3.11c0-1.72,1.28-3.11,2.86-3.11h35.22c1.58,0,2.86,1.39,2.86,3.11 c0,1.72-1.28,3.11-2.86,3.11H65.79L65.79,98.75z M20.82,98.75c-1.56,0-2.83-1.39-2.83-3.11c0-1.72,1.27-3.11,2.83-3.11h32.65 c1.56,0,2.83,1.39,2.83,3.11c0,1.72-1.27,3.11-2.83,3.11H20.82L20.82,98.75z M19.69,85.16c-1.56,0-2.83-1.39-2.83-3.11 c0-1.72,1.27-3.11,2.83-3.11h32.65c1.56,0,2.83,1.39,2.83,3.11c0,1.72-1.27,3.11-2.83,3.11H19.69L19.69,85.16z M65.79,85.16 c-1.58,0-2.86-1.39-2.86-3.11c0-1.72,1.28-3.11,2.86-3.11h35.22c1.58,0,2.86,1.39,2.86,3.11c0,1.72-1.28,3.11-2.86,3.11H65.79 L65.79,85.16z M17.59,34.77h85.94v33.65H17.59V34.77L17.59,34.77z M116.09,26.93c-0.24,0.04-0.48,0.06-0.72,0.06H7.51 c-0.25,0-0.49-0.02-0.72-0.06v83.86c0,0.2,0.08,0.38,0.2,0.51l0,0l0.01,0.01c0.13,0.13,0.3,0.2,0.51,0.2h107.85 c0.19,0,0.37-0.08,0.51-0.22c0.13-0.13,0.22-0.31,0.22-0.51V26.93L116.09,26.93z M50.12,9.7c2.7,0,4.88,2.19,4.88,4.88 s-2.19,4.88-4.88,4.88s-4.88-2.19-4.88-4.88S47.43,9.7,50.12,9.7L50.12,9.7z M33.05,9.7c2.7,0,4.88,2.19,4.88,4.88 s-2.19,4.88-4.88,4.88c-2.7,0-4.88-2.19-4.88-4.88S30.36,9.7,33.05,9.7L33.05,9.7z M15.99,9.7c2.7,0,4.88,2.19,4.88,4.88 s-2.19,4.88-4.88,4.88c-2.7,0-4.88-2.19-4.88-4.88S13.29,9.7,15.99,9.7L15.99,9.7z" /></svg>
                <div className='ml-4'>
                  <h3 className='font-bold text-gray-800 text-xl'>Customize Store</h3>
                  <p className='text-sm text-gray-500'>Personlise logo, favicon, banner </p>
                </div>
              </div>
            </div>
          </Link>

          <Link to="/seller/customize-footer">
            <div className='bg-white p-5'>
              <div className='flex'>
                <svg className='text-gray-600 h-8 w-8 mt-3' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 122.88 122.881"><path d="M44.541,97.197V86.404c0-1.645,1.333-2.977,2.978-2.977h1.438V65.344h-1.701c-1.645,0-2.979-1.334-2.979-2.979v-11.48 c0-1.645,1.334-2.978,2.979-2.978h21.175c2.018,0,3.538,0.855,4.565,2.558c0.735,1.221,1.103,2.849,1.103,4.88v28.082h1.526 c1.645,0,2.979,1.332,2.979,2.977v10.793c0,1.645-1.334,2.979-2.979,2.979H47.519C45.874,100.176,44.541,98.842,44.541,97.197 L44.541,97.197z M61.44,5.956c-3.841,0-7.565,0.361-11.169,1.083c-3.61,0.722-7.09,1.799-10.439,3.229l0.002,0.004 c-3.412,1.467-6.585,3.181-9.515,5.147c-2.938,1.971-5.661,4.21-8.165,6.724l-0.012,0.011l0,0 c-2.513,2.504-4.752,5.227-6.724,8.165c-1.966,2.93-3.68,6.104-5.147,9.515c-0.021,0.048-0.042,0.095-0.065,0.142 c-1.4,3.304-2.456,6.737-3.168,10.295c-0.721,3.604-1.082,7.328-1.082,11.168c0,3.842,0.361,7.564,1.082,11.17 c0.723,3.609,1.799,7.09,3.229,10.438h0.004c1.467,3.41,3.182,6.584,5.147,9.514c1.971,2.938,4.21,5.662,6.724,8.166l0.011,0.012 l0-0.002c2.504,2.514,5.227,4.754,8.165,6.725c2.93,1.967,6.104,3.68,9.515,5.146c0.048,0.021,0.095,0.043,0.141,0.066 c3.305,1.398,6.737,2.455,10.296,3.168c3.604,0.721,7.328,1.082,11.169,1.082s7.564-0.361,11.169-1.082 c3.609-0.723,7.09-1.799,10.438-3.229l-0.002-0.006c3.412-1.467,6.586-3.18,9.516-5.146c2.938-1.971,5.66-4.211,8.164-6.725 l0.013-0.01h-0.001c2.514-2.504,4.753-5.229,6.724-8.166c1.966-2.93,3.681-6.104,5.147-9.514c0.021-0.049,0.043-0.096,0.065-0.143 c1.399-3.305,2.456-6.736,3.168-10.295c0.722-3.605,1.083-7.328,1.083-11.17c0-3.84-0.361-7.564-1.083-11.168 c-0.723-3.61-1.799-7.09-3.229-10.438l-0.004,0.001c-1.467-3.412-3.182-6.585-5.147-9.515c-1.971-2.938-4.21-5.661-6.724-8.165 l-0.011-0.012l-0.001,0c-2.504-2.514-5.227-4.752-8.164-6.724c-2.93-1.966-6.104-3.681-9.516-5.147 c-0.048-0.021-0.095-0.043-0.141-0.065c-3.305-1.399-6.737-2.456-10.296-3.168C69.005,6.317,65.281,5.956,61.44,5.956L61.44,5.956z M49.108,1.199C53.1,0.4,57.212,0,61.44,0s8.34,0.4,12.332,1.199c3.927,0.786,7.748,1.967,11.461,3.541 c0.055,0.02,0.108,0.042,0.163,0.064c3.7,1.592,7.191,3.483,10.469,5.683c3.267,2.192,6.291,4.678,9.066,7.462 c2.784,2.775,5.27,5.8,7.462,9.067c2.199,3.276,4.091,6.768,5.683,10.468l-0.005,0.002l0.005,0.01 c1.606,3.76,2.809,7.631,3.605,11.612c0.799,3.992,1.198,8.104,1.198,12.332c0,4.229-0.399,8.342-1.198,12.332 c-0.786,3.928-1.967,7.748-3.541,11.461c-0.02,0.055-0.041,0.109-0.064,0.164c-1.592,3.699-3.483,7.191-5.683,10.469 c-2.192,3.266-4.678,6.291-7.462,9.066c-2.775,2.783-5.8,5.27-9.066,7.461c-3.277,2.199-6.769,4.092-10.469,5.684l-0.002-0.004 l-0.011,0.004c-3.76,1.605-7.631,2.809-11.611,3.605c-3.992,0.799-8.104,1.199-12.332,1.199s-8.34-0.4-12.332-1.199 c-3.927-0.787-7.749-1.967-11.461-3.541c-0.055-0.02-0.109-0.041-0.163-0.064c-3.701-1.592-7.192-3.484-10.469-5.684 c-3.267-2.191-6.291-4.678-9.066-7.461c-2.784-2.775-5.27-5.801-7.462-9.066c-2.199-3.277-4.091-6.77-5.683-10.469l0.004-0.002 l-0.004-0.01c-1.607-3.76-2.809-7.633-3.605-11.613C0.4,69.781,0,65.668,0,61.439c0-4.228,0.4-8.34,1.199-12.332 c0.786-3.927,1.966-7.748,3.541-11.46c0.02-0.055,0.041-0.109,0.064-0.164c1.592-3.7,3.483-7.192,5.683-10.468 c2.192-3.267,4.678-6.292,7.462-9.067c2.775-2.784,5.799-5.27,9.066-7.462c3.277-2.199,6.768-4.091,10.469-5.683l0.002,0.004 l0.01-0.004C41.256,3.197,45.128,1.995,49.108,1.199L49.108,1.199z M50.497,89.328v4.891h22.149v-4.891 c-0.491-0.08-0.973-0.252-1.444-0.514c-0.498-0.273-0.967-0.635-1.412-1.078c-0.439-0.439-0.801-0.916-1.081-1.43 c-0.375-0.686-0.566-1.385-0.566-2.094V55.346c0-0.659-0.04-1.153-0.12-1.482H50.234v5.543c0.599,0.059,1.181,0.251,1.743,0.574 l-0.005,0.009l0.005,0.003c0.423,0.244,0.832,0.564,1.224,0.96c0.065,0.06,0.13,0.123,0.191,0.19 c0.426,0.465,0.762,0.928,1.001,1.389c0.345,0.662,0.521,1.338,0.521,2.027v19.654c0,0.619-0.14,1.227-0.414,1.822 c-0.032,0.078-0.068,0.156-0.108,0.232c-0.246,0.473-0.588,0.938-1.022,1.398c-0.441,0.469-0.907,0.844-1.401,1.125 C51.488,89.064,50.999,89.244,50.497,89.328L50.497,89.328z M61.484,44.549c-1.631,0-3.141-0.245-4.533-0.735 c-1.441-0.509-2.722-1.273-3.844-2.296c-0.053-0.047-0.103-0.097-0.151-0.147c-1.085-1.014-1.903-2.184-2.457-3.508 c-0.571-1.365-0.854-2.86-0.854-4.48c0-1.616,0.283-3.119,0.855-4.501c0.585-1.416,1.453-2.654,2.607-3.708l0.06-0.053 c1.098-1,2.355-1.754,3.772-2.264c1.407-0.507,2.922-0.759,4.545-0.759c1.662,0,3.194,0.249,4.599,0.747 c1.453,0.516,2.741,1.292,3.864,2.329l0.001-0.001c1.154,1.054,2.022,2.292,2.608,3.708c0.571,1.382,0.854,2.885,0.854,4.501 c0,1.621-0.282,3.116-0.854,4.481c-0.58,1.386-1.449,2.604-2.613,3.65l0.005,0.005c-1.12,1.021-2.412,1.786-3.877,2.296 C64.66,44.305,63.132,44.549,61.484,44.549L61.484,44.549z M58.929,38.207c0.731,0.258,1.583,0.387,2.556,0.387 c1.014,0,1.892-0.128,2.633-0.387c0.688-0.239,1.298-0.601,1.829-1.085l0.005,0.005l0.019-0.017 c0.489-0.438,0.854-0.947,1.097-1.526c0.26-0.622,0.389-1.356,0.389-2.201c0-0.865-0.129-1.614-0.39-2.245 c-0.24-0.582-0.613-1.105-1.119-1.567l0.002-0.001l-0.025-0.022c-0.522-0.485-1.128-0.851-1.817-1.095 c-0.748-0.266-1.622-0.398-2.621-0.398c-0.979,0-1.828,0.129-2.544,0.387c-0.649,0.233-1.235,0.587-1.757,1.06 c-0.024,0.024-0.048,0.047-0.074,0.07c-0.506,0.462-0.878,0.985-1.119,1.567c-0.26,0.63-0.39,1.38-0.39,2.244 c0,0.844,0.129,1.579,0.389,2.2c0.223,0.533,0.549,1.006,0.98,1.419c0.047,0.038,0.094,0.078,0.139,0.119 C57.64,37.604,58.246,37.966,58.929,38.207L58.929,38.207z" />
                </svg>
                <div className='ml-4'>
                  <h3 className='font-bold text-gray-800 text-xl'>About Store & Social Links</h3>
                  <p className='text-sm text-gray-500'>Write about store and social media links</p>
                </div>
              </div>
            </div>
          </Link>

          <Link to="/seller/domain-settings">
            <div className='bg-white p-5'>
              <div className='flex'>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className='text-gray-600 h-8 w-8 mt-3'>
                  <path d="M245.151,168a88,88,0,1,0,88,88A88.1,88.1,0,0,0,245.151,168Zm0,144a56,56,0,1,1,56-56A56.063,56.063,0,0,1,245.151,312Z"></path>
                  <path d="M464.7,322.319l-31.77-26.153a193.081,193.081,0,0,0,0-80.332l31.77-26.153a19.941,19.941,0,0,0,4.606-25.439l-32.612-56.483a19.936,19.936,0,0,0-24.337-8.73l-38.561,14.447a192.038,192.038,0,0,0-69.54-40.192L297.49,32.713A19.936,19.936,0,0,0,277.762,16H212.54a19.937,19.937,0,0,0-19.728,16.712L186.05,73.284a192.03,192.03,0,0,0-69.54,40.192L77.945,99.027a19.937,19.937,0,0,0-24.334,8.731L21,164.245a19.94,19.94,0,0,0,4.61,25.438l31.767,26.151a193.081,193.081,0,0,0,0,80.332l-31.77,26.153A19.942,19.942,0,0,0,21,347.758l32.612,56.483a19.937,19.937,0,0,0,24.337,8.73l38.562-14.447a192.03,192.03,0,0,0,69.54,40.192l6.762,40.571A19.937,19.937,0,0,0,212.54,496h65.222a19.936,19.936,0,0,0,19.728-16.712l6.763-40.572a192.038,192.038,0,0,0,69.54-40.192l38.564,14.449a19.938,19.938,0,0,0,24.334-8.731L469.3,347.755A19.939,19.939,0,0,0,464.7,322.319Zm-50.636,57.12-48.109-18.024-7.285,7.334a159.955,159.955,0,0,1-72.625,41.973l-10,2.636L267.6,464h-44.89l-8.442-50.642-10-2.636a159.955,159.955,0,0,1-72.625-41.973l-7.285-7.334L76.241,379.439,53.8,340.562l39.629-32.624-2.7-9.973a160.9,160.9,0,0,1,0-83.93l2.7-9.972L53.8,171.439l22.446-38.878,48.109,18.024,7.285-7.334a159.955,159.955,0,0,1,72.625-41.973l10-2.636L222.706,48H267.6l8.442,50.642,10,2.636a159.955,159.955,0,0,1,72.625,41.973l7.285,7.334,48.109-18.024,22.447,38.877-39.629,32.625,2.7,9.972a160.9,160.9,0,0,1,0,83.93l-2.7,9.973,39.629,32.623Z"></path>
                </svg>
                <div className='ml-4'>
                  <h3 className='font-bold text-gray-800 text-xl'>Settings</h3>
                  <p className='text-sm text-gray-500'>Custom domain & Deactivate/Delete Store</p>
                </div>
              </div>
            </div>
          </Link>

        </div>
      </div>
    </section>
  )
}

export default Store