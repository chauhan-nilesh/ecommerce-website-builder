import React, { useEffect, useState } from 'react';
import { useOutletContext, useSearchParams } from 'react-router-dom';
import { ProductCard } from '../components';

function SearchPage() {
    const {color1, color2 } = useOutletContext();
    const [searchParams] = useSearchParams();
    const query = searchParams.get('q') || '';
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await fetch(`${import.meta.env.VITE_API_URL}/api/product/search?q=${query}`);
                const data = await response.json();
                setProducts(data.data);
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        };

        if (query) {
            fetchProducts();
        }
    }, [query]);

    return (
        <div className="bg-white">
        <div className="mx-auto px-4 py-5 sm:px-6 sm:py-10 lg:max-w-7xl lg:px-4">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">Search Results for "{query}"</h2>
  
          <ProductCard products={products} color1={color1} color2={color2}/>
        </div>
      </div>
    );
}

export default SearchPage;
