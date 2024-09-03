import React from 'react'

function Category({categories}) {
    return (
        <>
            <div className='mx-auto px-4 py-5 sm:px-6 sm:py-10 lg:max-w-7xl lg:px-4'>
                <h2 className='text-2xl font-bold tracking-tight text-gray-900'>Categories</h2>
                <div className="mt-6 flex overflow-x-auto space-x-5">

                {categories?.map((category,index) => (
                    <div key={index} className="flex-shrink-0 group relative overflow-hidden border-[1px] border-gray-200 bg-white rounded-full lg:rounded-lg">
                        <div className="w-28 h-28 flex justify-center items-center bg-gray-200 group-hover:opacity-75 lg:w-56 lg:h-52">
                            <img
                                src={`${import.meta.env.VITE_API_URL}/uploads/`+category?.image}
                                alt="category"
                                className="h-full w-full object-cover object-center"
                                loading='lazy'
                            />
                        </div>
                        <div className="w-full hidden bg-white lg:flex items-center justify-center py-4">
                            <div>
                                <h3 className="text-base font-bold text-gray-700">
                                    <a href="">
                                        {category?.name}
                                    </a>
                                </h3>
                            </div>
                        </div>
                    </div>
                    ))}

                </div>
            </div>

        </>
    )
}

export default Category