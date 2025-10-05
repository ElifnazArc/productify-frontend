import { Product } from '@/types/product';

const API_BASE_URL = 'http://13.62.55.88:8080/api/products';

export async function fetchProducts(): Promise<Product[]> {
  try {
    const response = await fetch(API_BASE_URL);
    if (!response.ok) {
      throw new Error('Failed to fetch products');
    }
    return await response.json();
  } catch (error) {
    console.error('Error fetching products:', error);
    return [];
  }
}

