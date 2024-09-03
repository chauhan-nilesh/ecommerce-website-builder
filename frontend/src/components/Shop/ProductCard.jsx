import React from 'react'
import { Link } from 'react-router-dom'
import { useCart } from '../../store/CartContext';

function ProductCard({ products, color1, color2 }) {
    const { addToCart } = useCart();
    return (
        <div className="mt-6 grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-5">
            {products.map((product, index) => {
                if (product?.status === true && product?.stockStatus === true) {
                    return <div key={index} className="relative w-full max-w-xs overflow-hidden rounded-lg bg-white shadow-md">
                        <Link className='hover:opacity-75' to={"/product/"+product._id}>
                            <img className="h-fit w-auto rounded-t-lg object-cover" src={`${import.meta.env.VITE_API_URL}/uploads/` + product.images.featuredImage} alt="product image" loading='lazy' />
                        </Link>
                        {product?.salePrice < product?.originalPrice ?
                            <span className="absolute top-0 left-0 w-28 translate-y-4 -translate-x-6 -rotate-45 text-center text-sm " style={{backgroundColor: color1, color: color2}}>Sale</span>
                            : ""
                        }
                        <div className="mt-4 px-3 lg:px-5 pb-5">
                            <Link to={"/product/"+product?._id}>
                                <h5 className="text-base lg:text-xl font-semibold tracking-tight truncate" style={{color: color1}}>{product?.name}</h5>
                            </Link>
                            <div className="mt-2.5 lg:mb-5 flex items-center">
                                <span className="mr-2 rounded bg-yellow-200 px-2.5 py-0.5 text-xs font-semibold">5.0</span>
                                <svg aria-hidden="true" className="h-5 w-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                                </svg>
                                <svg aria-hidden="true" className="h-5 w-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                                </svg>
                                <svg aria-hidden="true" className="h-5 w-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                                </svg>
                                <svg aria-hidden="true" className="h-5 w-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                                </svg>
                                <svg aria-hidden="true" className="h-5 w-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                                </svg>
                            </div>
                            <div className="lg:flex items-center justify-between">
                                <p className='mb-4 lg:mb-0'>
                                    <span className="text-2xl font-bold" style={{color: color1}}>&#8377;{product?.salePrice}</span>
                                    <span className="text-sm line-through" style={{color: color1}}>&#8377;{product?.originalPrice}</span>
                                </p>
                                <button type='button' onClick={() => addToCart({ ...product, quantity: 1 })} className="flex items-center w-full lg:w-auto justify-center rounded-md px-5 py-2.5 text-center text-sm font-medium hover:opacity-75 focus:outline-none"
                                style={{color: color2, backgroundColor: color1}}
                                >
                                    <img className='h-5 lg:block hidden' src="./cart.svg" alt="" />&nbsp;
                                    <span>Add to cart</span></button>
                            </div>
                        </div>
                    </div>
                }
            })}
        </div>
    )
}

export default ProductCard