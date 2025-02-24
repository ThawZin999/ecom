import "./globals.css";
import { Inter } from "next/font/google";
import Navigation from "./components/navigation";
import { Metadata } from "next";
import { AuthProvider } from "./contexts/AuthContext";
import { CartProvider } from "./contexts/CartContext";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

export const metadata: Metadata = {
  title: "E-commerce Platform",
  description: "A modern e-commerce platform built with Next.js and Laravel",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthProvider>
          <CartProvider>
            <Navigation />
            {children}
          </CartProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
