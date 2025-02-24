"use client";

import NextImage from "next/image";
import { ShoppingCart as ShoppingCartIcon } from "lucide-react";
import { useCart } from "../contexts/CartContext";
import { useState } from "react";

interface ProductCardProps {
  id: number;
  title: string;
  description: string;
  price: number;
  imageUrl: string;
}

export default function ProductCard({
  id,
  title,
  description,
  price,
  imageUrl
}: ProductCardProps) {
  const { addItem } = useCart();
  const [isAdding, setIsAdding] = useState(false);

  const handleAddToCart = () => {
    setIsAdding(true);
    addItem({ id, title, price, imageUrl });
    setTimeout(() => setIsAdding(false), 500);
  };

  return (
    <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 p-4 flex flex-col h-full">
      <div className="relative w-full h-48 mb-4 overflow-hidden rounded-lg group">
        <NextImage
          src={imageUrl}
          alt={title}
          fill
          className="object-cover transform group-hover:scale-105 transition-transform duration-300"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <h2 className="text-xl font-semibold mb-2 truncate hover:text-primary transition-colors">
        {title}
      </h2>
      <p className="text-gray-600 mb-4 line-clamp-2 flex-grow">{description}</p>
      <div className="flex justify-between items-center mt-auto">
        <span className="text-lg font-bold text-primary">
          ${price.toFixed(2)}
        </span>
        <button
          onClick={handleAddToCart}
          disabled={isAdding}
          className={`btn-primary flex items-center gap-2 transition-all duration-300 ${
            isAdding ? "opacity-75 cursor-not-allowed" : "hover:scale-105"
          }`}
        >
          <ShoppingCartIcon
            className={`h-5 w-5 ${isAdding ? "animate-bounce" : ""}`}
          />
          {isAdding ? "Adding..." : "Add to Cart"}
        </button>
      </div>
    </div>
  );
};
// In your ProductCard component, you can use a fallback image URL
const imageUrl = '/images/headphones.jpg';
// Or use a placeholder service
const fallbackImage = 'https://placehold.co/400x300';
