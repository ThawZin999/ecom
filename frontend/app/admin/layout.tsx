import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Admin Dashboard - E-commerce Platform',
  description: 'Admin dashboard for managing products, orders, and customers',
}

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-lg">
        <div className="p-6 border-b border-gray-200">
          <h2 className="text-2xl font-bold text-primary">Admin Dashboard</h2>
        </div>
        <nav className="p-4">
          <ul className="space-y-1">
            <li>
              <a href="/admin" className="flex items-center px-4 py-3 text-gray-700 hover:bg-primary/10 hover:text-primary rounded-lg transition-all duration-200 font-medium">
                <span>Dashboard</span>
              </a>
            </li>
            <li>
              <a href="/admin/products" className="flex items-center px-4 py-3 text-gray-700 hover:bg-primary/10 hover:text-primary rounded-lg transition-all duration-200 font-medium">
                <span>Products</span>
              </a>
            </li>
            <li>
              <a href="/admin/orders" className="flex items-center px-4 py-3 text-gray-700 hover:bg-primary/10 hover:text-primary rounded-lg transition-all duration-200 font-medium">
                <span>Orders</span>
              </a>
            </li>
            <li>
              <a href="/admin/customers" className="flex items-center px-4 py-3 text-gray-700 hover:bg-primary/10 hover:text-primary rounded-lg transition-all duration-200 font-medium">
                <span>Customers</span>
              </a>
            </li>
          </ul>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8 overflow-auto bg-gray-100">
        <div className="max-w-7xl mx-auto">
          {children}
        </div>
      </main>
    </div>
  )
}