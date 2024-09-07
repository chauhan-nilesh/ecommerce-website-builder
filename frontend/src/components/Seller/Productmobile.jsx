import React from 'react'
import { Link } from 'react-router-dom'

function Productmobile({products, openModal}) {
    return (
        <div>
            {products.map((product, index) => 
            (<div key={index} className='bg-zinc-100 p-7 rounded-lg flex mb-2'>
                <div className='h-full w-32 border-2 border-zinc-200 p-2 rounded-lg'>
                    <img className='h-20 w-full' src={product.images.featuredImage} alt="" />
                </div>
                <div className='ml-5'>
                    <h3 className='text-lg font-bold tracking-tight'>{product.name}</h3>
                    <p>Price: <span className='font-bold px-2 py-1 rounded-lg text-gray-700'>{product.originalPrice}</span></p>
                    <p>Status: 
                    {product.status ?
                        <span className='text-green-600 font-bold px-2 py-1 rounded-lg'>Visible</span>
                        :
                        <span className='text-red-600 font-bold px-2 py-1 rounded-lg'>Invisible</span>
                    }
                    </p>
                    <div className='flex flex-wrap gap-3 mt-2'>
                        <Link to={"../edit-product/"+product._id}>
                            <p className='bg-zinc-800 text-white px-4 py-1 rounded-lg w-fit'>Edit</p>
                        </Link>
                        <button onClick={() => openModal(product._id)}>
                            <p className='bg-red-600 text-white px-4 py-1 rounded-lg w-fit'>Delete</p>
                        </button>
                    </div>
                </div>
            </div>
            ))}
        </div>
    )
}

export default Productmobile