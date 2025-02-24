import Image from "next/image";
import ProductCard from "./components/productcard";

export default function Home() {
  const products = [
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
      imageUrl:
        "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 3,
      title: "Travel Backpack",
      description: "Durable and spacious backpack for all your adventures",
      price: 79.99,
      imageUrl:
        "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=800&q=80",
    },
  ];

  return (
    <main className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>
    </main>
  );
}
