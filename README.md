# Productify - Product Listing Frontend

A modern, responsive product listing application built with Next.js, React, and TypeScript.

## Features

- 🎨 **Interactive Product Carousel** - Browse products with smooth navigation and swipe support
- 🎯 **Color Picker** - Switch between Yellow Gold, White Gold, and Rose Gold variants
- ⭐ **Dynamic Ratings** - Product popularity displayed as 5-star ratings
- 📱 **Responsive Design** - Optimized for desktop, tablet, and mobile devices
- ⚡ **Fast & Modern** - Built with Next.js 15 and React 19

## Prerequisites

Before running the frontend, ensure the backend API is running:

- Backend API should be accessible at `http://localhost:8080/api/products`
- See the backend documentation for setup instructions

## Getting Started

### 1. Install Dependencies

```bash
npm install
```

### 2. Run the Development Server

```bash
npm run dev
```

### 3. Open in Browser

Navigate to [http://localhost:3000](http://localhost:3000) to see the product listing.

## Project Structure

```
src/
├── app/
│   ├── page.tsx          # Main product listing page
│   ├── layout.tsx        # Root layout
│   └── globals.css       # Global styles
├── components/
│   ├── ProductCard.tsx   # Individual product card component
│   └── Carousel.tsx      # Carousel with swipe support
├── lib/
│   └── api.ts            # API service for fetching products
└── types/
    └── product.ts        # TypeScript type definitions
```

## Features in Detail

### Product Display

- Product image with color variants
- Product name and dynamically calculated price
- Color picker with visual feedback
- Star rating based on popularity score (converted from 0-1 scale to 5-star scale)

### Carousel Navigation

- **Arrow Navigation**: Click left/right arrows to browse products
- **Swipe Support**: Touch/drag to scroll on mobile and desktop
- **Smooth Animations**: Elegant transitions between products
- **Responsive**: Automatically adjusts items per view based on screen size

### Color Selection

Each product can be viewed in three gold variants:

- Yellow Gold (#F6CA97)
- White Gold (#D9D9D9)
- Rose Gold (#E1A4A9)

## Custom Fonts

The project uses custom fonts for a polished look:

- **Avenir** - Used for headings (Product List title)
- **Montserrat** - Used for body text and product details

Fonts are loaded from the `/public` directory.

## API Integration

The frontend fetches product data from the backend API:

**Endpoint**: `GET http://localhost:8080/api/products`

**Response Format**:

```json
[
  {
    "id": 1,
    "name": "Engagement Ring 1",
    "popularityScore": 0.85,
    "weight": 2.1,
    "images": {
      "yellow": "https://cdn.shopify.com/...",
      "rose": "https://cdn.shopify.com/...",
      "white": "https://cdn.shopify.com/..."
    },
    "price": 484.77
  }
]
```

## Build for Production

```bash
npm run build
npm start
```

## Technologies Used

- **Next.js 15** - React framework with App Router
- **React 19** - UI library
- **TypeScript** - Type safety
- **Tailwind CSS 4** - Utility-first CSS framework
- **CSS Modules** - Component-scoped styling

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://react.dev)
- [TypeScript Documentation](https://www.typescriptlang.org/docs)
