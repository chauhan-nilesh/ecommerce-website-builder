import React, { useState } from 'react';

function Banner({ store, color1, color2 }) {

  const [imageLoaded, setImageLoaded] = useState(false)

  if (true) {
    return (
      <>
        <div data-theme="light" className='hidden md:flex'>
          <div className='flex justify-center skeleton rounded-none items-center text-4xl w-full h-96 font-bold'>
          </div>
        </div>
        <div data-theme="light" className='md:hidden flex'>
          <div className='flex justify-center skeleton rounded-none items-center text-4xl w-full h-96 font-bold'>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      {/* Desktop Banner */}
      <div className='hidden md:flex'>
        {store.banner ? (
          <div className='flex justify-center items-center text-4xl w-full h-auto text-white font-bold'
            style={{ color: color2, backgroundColor: color1 }}>
            <img className='h-full w-full' src={store.banner} alt="store banner" loading='lazy' />
          </div>
        ) : (
          <div className='flex justify-center items-center text-4xl w-full h-96 text-white font-bold'
            style={{ color: color2, backgroundColor: color1 }}>
            Sample Banner Text
          </div>
        )}
      </div>

      {/* Mobile Banner */}
      <div className='md:hidden flex'>
        {store.mobileBanner ? (
          <>
            {!imageLoaded && (
              <div data-theme="light" className='flex skeleton justify-center rounded-none items-center w-full h-96 text-white font-bold'>
              </div>
            )}
            <div className='flex justify-center items-center text-4xl w-full h-auto text-white font-bold'
              style={{ color: color2, backgroundColor: color1 }}>
              <img className='h-full w-full' src={store.mobileBanner} alt="store banner" onLoad={() => setImageLoaded(true)} />
            </div>
          </>
        ) : (
          <div className='flex justify-center items-center text-4xl w-full h-96 text-white font-bold'
            style={{ color: color2, backgroundColor: color1 }}>
            Sample Banner Text
          </div>
        )}
      </div>
    </>
  );
}

export default Banner;
