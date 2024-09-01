import React, { useEffect, useState } from 'react';
import { ProductVariants, Tags } from '../../components/Seller';
import { useAuth } from '../../store/auth';
import { toast } from 'react-toastify';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

function AddProduct() {
  const [images, setImages] = useState({
    featuredImage: null,
    image1: null,
    image2: null,
    image3: null,
    image4: null
  });
  const [product, setProduct] = useState({
    name: '',
    shortDescription: '',
    description: '',
    originalPrice: '',
    salePrice: '',
    category: '',
    stockQty: 0,
    stockStatus: true
  });
  const [tags, setTags] = useState([]);
  const [status, setStatus] = useState(true);
  const { token } = useAuth();
  const [store, setStore] = useState({});
  const [categories, setCategories] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [variants, setVariants] = useState([]);
  const navigate = useNavigate()

  const getCategoryData = async () => {
    try {
      setIsLoading(true);
      const storeResponse = await fetch(`${import.meta.env.VITE_API_URL}/api/user/current-user`, {
        method: "GET",
        headers: { Authorization: `Bearer ${token}` }
      });
      const storeData = await storeResponse.json();
      setStore(storeData.data.store);

      const categoryResponse = await fetch(`${import.meta.env.VITE_API_URL}/api/category/get-data/${storeData.data.store._id}`, {
        method: "GET",
        headers: { "Content-Type": "application/json" }
      });

      if (categoryResponse.ok) {
        const categoryData = await categoryResponse.json();
        setCategories(categoryData.data);
      }
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getCategoryData();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct((prevProduct) => ({ ...prevProduct, [name]: value }));
  };

  const handleImageChange = (e) => {
    const { name, files } = e.target;
    setImages((prevImages) => ({ ...prevImages, [name]: files[0] }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    Object.keys(product).forEach((key) => formData.append(key, product[key]));
    Object.keys(images).forEach((key) => formData.append(key, images[key]));
    formData.append("storeId", store._id);
    formData.append("status", status);
    formData.append("tags", JSON.stringify(tags));
    formData.append("variants", JSON.stringify(variants));

    try {
      const response = await axios.post(`${import.meta.env.VITE_API_URL}/api/product/add-product`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      toast.success(response.data.message);
      setProduct({
        name: '',
        shortDescription: '',
        description: '',
        originalPrice: '',
        salePrice: '',
        category: '',
        stockQty: 0,
        stockStatus: true
      });
      setImages({
        featuredImage: null,
        image1: null,
        image2: null,
        image3: null,
        image4: null
      });
      setTags([]);
      setVariants([]);
      navigate("../products")
    } catch (error) {
      console.log(error);
    }
  };

  if (isLoading) {
    return <div className='flex h-screen w-full justify-center items-center'><span className="loading loading-spinner loading-lg"></span></div>;
  }

  return (
    <div className="bg-white lg:bg-gray-100 p-4 lg:p-10 lg:min-h-screen h-full lg:mb-0 mb-20">
      <div className='flex justify-between'>
        <h2 className="text-3xl font-extrabold text-gray-900">Add New Product</h2>
        <div>
          <button
            type="submit"
            onClick={handleSubmit}
            className="w-full px-4 py-2 font-bold text-white bg-indigo-600 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            Publish
          </button>
        </div>
      </div>
      <div className='lg:flex gap-5 mt-6'>
        <div className="w-full h-auto mt-10 lg:mt-0 space-y-6 rounded-lg">
          <div className="w-full h-auto mt-10 lg:mt-0 lg:p-8 space-y-6 bg-white rounded-lg">
            <div>
              <h4 className='font-bold text-lg'>Product Information</h4>
              <p className='text-gray-600 font-semibold text-sm tracking-tight'>Easily input essential details like name, price, and more to showcase your product.</p>
            </div>
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Product Name</label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  className="w-full px-3 py-2 mt-1 text-gray-900 bg-transparent border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                  value={product.name}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label htmlFor="shortDescription" className="block text-sm font-medium text-gray-700">Short Description</label>
                <textarea
                  id="shortDescription"
                  name="shortDescription"
                  required
                  className="w-full px-3 py-2 mt-1 text-gray-900 bg-transparent border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                  value={product.shortDescription}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label htmlFor="description" className="block text-sm font-medium text-gray-700">Description</label>
                <textarea
                  id="description"
                  name="description"
                  required
                  className="w-full px-3 py-2 mt-1 text-gray-900 bg-transparent border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                  value={product.description}
                  onChange={handleChange}
                />
              </div>
              <div className='flex gap-3'>
                <div className='w-full'>
                  <label htmlFor="originalPrice" className="block text-sm font-medium text-gray-700">Price</label>
                  <input
                    id="originalPrice"
                    name="originalPrice"
                    type="number"
                    required
                    className="w-full px-3 py-2 mt-1 text-gray-900 bg-transparent border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                    value={product.originalPrice}
                    onChange={handleChange}
                  />
                </div>
                <div className='w-full'>
                  <label htmlFor="salePrice" className="block text-sm font-medium text-gray-700">Discounted Price</label>
                  <input
                    id="salePrice"
                    name="salePrice"
                    type="number"
                    required
                    className="grow w-full px-3 py-2 mt-1 text-gray-900 bg-transparent border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                    value={product.salePrice}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <p className='text-gray-600 text-sm tracking-tight font-semibold'>Price: <span className='text-black'>&#8377;{product.salePrice}</span> <span className='line-through font-thin'>&#8377;{product.originalPrice}</span></p>
              <div>
                <div className='flex justify-between'>
                <label htmlFor="category" className="block text-sm font-medium text-gray-700">Product Category</label>
                <Link className='text-sm font-semibold text-blue-500' to="../add-category">Add new category</Link>
                </div>
                <select
                  onChange={handleChange}
                  value={product.category}
                  id="category"
                  name="category"
                  className="w-full px-3 py-2 mt-1 text-gray-900 bg-transparent border border-gray-300 rounded-md"
                >
                  <option value="" disabled>Select product category</option>
                  {categories.map((category, index) => (
                    <option value={category._id} key={index}>{category.name}</option>
                  ))}
                </select>
              </div>
              <div>
                <label htmlFor="stockQty" className="block text-sm font-medium text-gray-700">Stock Quantity</label>
                <input
                  id="stockQty"
                  name="stockQty"
                  type="number"
                  required
                  className="w-full px-3 py-2 mt-1 text-gray-900 bg-transparent border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                  value={product.stockQty}
                  onChange={handleChange}
                />
              </div>
              <div className="flex items-center">
                <label htmlFor="status" className="block text-sm font-medium text-gray-700 mr-3">Visibility Status</label>
                <input
                  data-theme='light'
                  id='status'
                  name='status'
                  type="checkbox"
                  className="toggle toggle-success text-red-600"
                  onChange={() => setStatus(!status)}
                  checked={status}
                />
              </div>
            </form>
          </div>
          <Tags tags={tags} setTags={setTags} />
        </div>
        <div className="w-full h-auto mt-10 lg:mt-0 space-y-6 rounded-lg">
          <div className="w-full h-auto mt-10 lg:mt-0 lg:p-8 space-y-6 bg-white rounded-lg">
            <div className="text-center">
              <h2 className="text-xl text-left font-bold">Product Media</h2>
              <p className="text-gray-600 text-sm font-semibold mb-4 text-left">Upload images to make your product stand out. Up to 5 images allowed</p>
              <div className="flex justify-center gap-6 mb-6">
                <div className="flex flex-col items-center cursor-pointer">
                  <input onChange={handleImageChange} type="file" id="featuredImage" name="featuredImage" accept="image/*" hidden />
                  <label htmlFor="featuredImage" className="flex flex-col items-center">
                    <div className="w-48 h-48 border border-gray-300 rounded flex justify-center items-center mb-2">
                      <img src={images.featuredImage ? URL.createObjectURL(images.featuredImage) : "/image.svg"} alt="Upload images" className="w-32 h-32" />
                    </div>
                    <span className="text-gray-700">Upload Featured Image</span>
                  </label>
                </div>
              </div>
              <div className="flex flex-wrap justify-center gap-2 lg:gap-4">
                {["image1", "image2", "image3", "image4"].map((img, idx) => (
                  <div key={idx}>
                    <input onChange={handleImageChange} type="file" id={img} name={img} accept="image/*" hidden />
                    <label htmlFor={img} className="flex flex-col items-center">
                      <img src={images[img] ? URL.createObjectURL(images[img]) : "/image.svg"} alt={`Image ${idx + 1}`} className="w-auto h-24 p-2 object-cover rounded border border-gray-400" />
                    </label>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <ProductVariants variants={variants} setVariants={setVariants} />
        </div>
      </div>
    </div>
  );
}

export default AddProduct;