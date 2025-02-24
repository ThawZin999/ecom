"use client";

import ProductCard from "../components/productcard";

// Temporary mock data until we integrate with the backend
const mockProducts = [
  {
    id: 1,
    title: "Premium Headphones",
    description: "Wireless noise-cancelling headphones with premium sound quality",
    price: 299.99,
    imageUrl: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 2,
    title: "Smartwatch Elite",
    description: "Advanced smartwatch with health monitoring features",
    price: 249.99,
    imageUrl: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 3,
    title: "Travel Backpack",
    description: "Durable and spacious backpack for all your adventures",
    price: 79.99,
    imageUrl: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=800&q=80"
  }
];

export default function ProductsPage() {
  return (
    <main className="min-h-screen p-8">
      <header className="mb-8">
        <h1 className="text-4xl font-bold text-primary">Our Products</h1>
        <p className="text-lg text-gray-600 mt-2">
          Browse our collection of premium products
        </p>
      </header>

      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {mockProducts.map((product) => (
          <ProductCard
            key={product.id}
            id={product.id}
            title={product.title}
            description={product.description}
            price={product.price}
            imageUrl={product.imageUrl}
          />
        ))}
      </section>
    </main>
  );
}
