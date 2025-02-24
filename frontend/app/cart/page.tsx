'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Trash2, Plus, Minus } from 'lucide-react';

// Temporary mock data until we integrate with the backend
const mockCartItems = [
  {
    id: 1,
    title: 'Wireless Headphones',
    price: 199.99,
    quantity: 1,
    imageUrl: '/images/headphones.jpg'
  },
  {
    id: 2,
    title: 'Smartwatch',
    price: 299.99,
    quantity: 2,
    imageUrl: '/images/smartwatch.jpg'
  }
];

export default function CartPage() {
  const [cartItems, setCartItems] = useState(mockCartItems);

  const updateQuantity = (id: number, change: number) => {
    setCartItems(items =>
      items.map(item =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + change) }
          : item
      )
    );
  };

  const removeItem = (id: number) => {
    setCartItems(items => items.filter(item => item.id !== id));
  };

  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const tax = subtotal * 0.1; // 10% tax
  const total = subtotal + tax;

  return (
    <main className="min-h-screen p-8 bg-gray-50">
      <header className="mb-8">
        <h1 className="text-4xl font-bold text-gray-800">Shopping Cart</h1>
        <p className="text-lg text-gray-600 mt-2">Review and manage your items</p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          {cartItems.length === 0 ? (
            <div className="text-center py-12 bg-white rounded-lg shadow-sm border border-gray-100">
              <p className="text-gray-600">Your cart is empty</p>
            </div>
          ) : (
            <div className="space-y-4">
              {cartItems.map((item) => (
                <div key={item.id} className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 flex items-center gap-6 transition-all hover:shadow-md">
                  <div className="relative w-24 h-24 flex-shrink-0">
                    <Image
                      src={item.imageUrl}
                      alt={item.title}
                      fill
                      className="rounded-lg object-cover"
                    />
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-lg font-semibold text-gray-800">{item.title}</h3>
                    <p className="text-primary font-bold text-lg">${item.price.toFixed(2)}</p>
                  </div>
                  <div className="flex items-center gap-2 bg-gray-50 rounded-lg p-2">
                    <button
                      onClick={() => updateQuantity(item.id, -1)}
                      className="p-1.5 hover:bg-gray-200 rounded-md transition-colors"
                    >
                      <Minus className="h-4 w-4 text-gray-600" />
                    </button>
                    <span className="w-8 text-center font-medium">{item.quantity}</span>
                    <button
                      onClick={() => updateQuantity(item.id, 1)}
                      className="p-1.5 hover:bg-gray-200 rounded-md transition-colors"
                    >
                      <Plus className="h-4 w-4 text-gray-600" />
                    </button>
                  </div>
                  <button
                    onClick={() => removeItem(item.id)}
                    className="p-2 text-red-500 hover:bg-red-50 rounded-md transition-colors"
                  >
                    <Trash2 className="h-5 w-5" />
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="lg:col-span-1">
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Order Summary</h2>
            <div className="space-y-3 text-gray-600">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span className="font-medium">${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span>Tax (10%)</span>
                <span className="font-medium">${tax.toFixed(2)}</span>
              </div>
              <div className="h-px bg-gray-200 my-4"></div>
              <div className="flex justify-between text-lg font-semibold text-gray-800">
                <span>Total</span>
                <span>${total.toFixed(2)}</span>
              </div>
            </div>
            <button className="w-full mt-6 bg-primary text-white py-3 px-4 rounded-lg font-medium hover:bg-primary/90 transition-colors">
              Proceed to Checkout
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}