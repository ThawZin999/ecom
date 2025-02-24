"use client";

import ProductCard from "../components/productcard";

// Temporary mock data until we integrate with the backend
const mockProducts = [
  {
    id: 1,
    title: "Wireless Headphones",
    description:
      "High-quality wireless headphones with noise cancellation feature",
    price: 199.99,
    imageUrl: "/images/headphones.jpg",
  },
  {
    id: 2,
    title: "Smartwatch",
    description: "Feature-rich smartwatch with health tracking capabilities",
    price: 299.99,
    imageUrl: "/images/smartwatch.jpg",
  },
  {
    id: 3,
    title: "Laptop Backpack",
    description:
      "Durable and spacious laptop backpack with multiple compartments",
    price: 79.99,
    imageUrl: "/images/backpack.jpg",
  },
  // Add more mock products as needed
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
