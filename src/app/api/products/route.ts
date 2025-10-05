import { NextResponse } from 'next/server';

const BACKEND_API_URL = process.env.BACKEND_API_URL || 'http://13.62.55.88:8080/api/products';

export async function GET() {
  try {
    const response = await fetch(BACKEND_API_URL, {
      // Disable caching to get fresh data
      cache: 'no-store',
    });
    
    if (!response.ok) {
      throw new Error('Failed to fetch products from backend');
    }
    
    const data = await response.json();
    
    return NextResponse.json(data);
  } catch (error) {
    console.error('Error fetching products:', error);
    return NextResponse.json(
      { error: 'Failed to fetch products' },
      { status: 500 }
    );
  }
}

