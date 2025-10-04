'use client';

import { useEffect, useState } from 'react';
import ProductCard from '@/components/ProductCard';
import Carousel from '@/components/Carousel';
import { fetchProducts } from '@/lib/api';
import { Product } from '@/types/product';

export default function Home() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadProducts() {
      setLoading(true);
      const data = await fetchProducts();
      setProducts(data);
      setLoading(false);
    }

    loadProducts();
  }, []);

  return (
    <div className="page-container">
      <main className="main-content">
        <h1 className="page-title">Product List</h1>

        {loading ? (
          <div className="loading">Loading products...</div>
        ) : products.length === 0 ? (
          <div className="no-products">No products available</div>
        ) : (
          <Carousel itemsPerView={4}>
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </Carousel>
        )}
      </main>
    </div>
  );
}
