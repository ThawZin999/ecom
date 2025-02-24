'use client';

import Link from 'next/link';
import { useState } from 'react';
import { ShoppingCart, Menu, X } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { isAuthenticated, logout } = useAuth();

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <Link href="/" className="flex items-center">
              <span className="text-xl font-bold text-primary">E-Shop</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/products" className="text-gray-600 hover:text-primary">
              Products
            </Link>
            <Link href="/categories" className="text-gray-600 hover:text-primary">
              Categories
            </Link>
            <Link href="/cart" className="text-gray-600 hover:text-primary">
              <ShoppingCart className="h-6 w-6" />
            </Link>
            {isAuthenticated ? (
              <>
                <Link href="/admin" className="text-gray-600 hover:text-primary">
                  Admin
                </Link>
                <button
                  onClick={logout}
                  className="text-gray-600 hover:text-primary"
                >
                  Logout
                </button>
              </>
            ) : (
              <Link href="/admin" className="text-gray-600 hover:text-primary">
                Admin Login
              </Link>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-600 hover:text-primary"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              href="/products"
              className="block px-3 py-2 text-gray-600 hover:text-primary"
            >
              Products
            </Link>
            <Link
              href="/categories"
              className="block px-3 py-2 text-gray-600 hover:text-primary"
            >
              Categories
            </Link>
            <Link
              href="/cart"
              className="block px-3 py-2 text-gray-600 hover:text-primary"
            >
              Cart
            </Link>
            {isAuthenticated ? (
              <>
                <Link
                  href="/admin"
                  className="block px-3 py-2 text-gray-600 hover:text-primary"
                >
                  Admin
                </Link>
                <button
                  onClick={logout}
                  className="block w-full text-left px-3 py-2 text-gray-600 hover:text-primary"
                >
                  Logout
                </button>
              </>
            ) : (
              <Link
                href="/admin"
                className="block px-3 py-2 text-gray-600 hover:text-primary"
              >
                Admin Login
              </Link>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}