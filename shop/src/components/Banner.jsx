import React from 'react';

function Banner({ store, color1, color2 }) {

  if (!store) {
    return (
      <>
        <div className='hidden md:flex'>
          <div className='flex justify-center items-center text-4xl w-full h-96 font-bold'>
            <span className="loading loading-spinner loading-lg"></span>
          </div>
        </div>
        <div className='md:hidden flex'>
          <div className='flex justify-center items-center text-4xl w-full h-96 font-bold'>
            <span className="loading loading-spinner loading-lg"></span>
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
          <div className='flex justify-center items-center text-4xl w-full h-auto text-white font-bold'
            style={{ color: color2, backgroundColor: color1 }}>
            <img className='h-full w-full' src={store.mobileBanner} alt="store banner" loading='lazy' />
          </div>
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
