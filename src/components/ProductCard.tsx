'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Product, ColorOption, ColorInfo } from '@/types/product';

const COLOR_OPTIONS: ColorInfo[] = [
  { name: 'Yellow Gold', hex: '#E6CA97', key: 'yellow' },
  { name: 'White Gold', hex: '#D9D9D9', key: 'white' },
  { name: 'Rose Gold', hex: '#E1A4A9', key: 'rose' },
];

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const [selectedColor, setSelectedColor] = useState<ColorOption>('yellow');

  // Convert popularity score (0-1) to a 5-point scale with 1 decimal
  const rating = (product.popularityScore * 5).toFixed(1);

  // Get the current image URL based on selected color
  const currentImage = product.images[selectedColor];

  return (
    <div className="product-card">
      {/* Product Image */}
      <div className="product-image-container">
        <div className="product-image-wrapper">
          <Image
            src={currentImage}
            alt={product.name}
            fill
            className="product-image"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
      </div>

      {/* Product Info */}
      <div className="product-info">
        <h3 className="product-title">{product.name}</h3>
        <p className="product-price">${product.price.toFixed(2)} USD</p>

        {/* Color Picker */}
        <div className="color-picker">
          {COLOR_OPTIONS.map((color) => (
            <button
              key={color.key}
              className={`color-option ${selectedColor === color.key ? 'active' : ''}`}
              style={{ backgroundColor: color.hex }}
              onClick={() => setSelectedColor(color.key)}
              aria-label={color.name}
              title={color.name}
            />
          ))}
        </div>

        {/* Color Name */}
        <p className="color-name">
          {COLOR_OPTIONS.find((c) => c.key === selectedColor)?.name}
        </p>

        {/* Star Rating */}
        <div className="rating">
          <div className="stars">
            {[1, 2, 3, 4, 5].map((star) => {
              const fillPercentage = Math.min(
                100,
                Math.max(0, (parseFloat(rating) - (star - 1)) * 100)
              );
              return (
                <span key={star} className="star-wrapper">
                  <span className="star-empty">☆</span>
                  <span
                    className="star-filled"
                    style={{ width: `${fillPercentage}%` }}
                  >
                    ★
                  </span>
                </span>
              );
            })}
          </div>
          <span className="rating-text">{rating}/5</span>
        </div>
      </div>
    </div>
  );
}

