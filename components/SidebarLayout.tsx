'use client';
import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Home, Users, Settings, HelpCircle } from 'lucide-react';

const SidebarLayout = ({ children }) => {
  const pathname = usePathname();
  
  const navigation = [
    { name: 'Introduction', href: '/', icon: Home },
    { name: 'Installation', href: '/installation', icon: Users },
    { name: 'Data Storage', href: '/data-storage', icon: Settings },
    { name: 'API Methods', href: '/api-methods', icon: Settings },
  ];

  return (
    <div className="flex h-screen bg-gray-100">
      <div className="w-64 bg-white shadow-lg">
        <div className="p-4">
          <h1 className="text-xl font-bold text-gray-800">School_serve</h1>
        </div>
        
        <nav className="mt-4">
          {navigation.map((item) => {
            const isActive = pathname === item.href;
            const Icon = item.icon;
            
            return (
              <Link
                key={item.name}
                href={item.href}
                className={`flex items-center px-4 py-2 mx-2 rounded-md ${
                  isActive 
                    ? 'bg-blue-100 text-blue-600' 
                    : 'text-gray-600 hover:bg-gray-50'
                }`}
              >
                <Icon className="w-5 h-5 mr-3" />
                <span>{item.name}</span>
              </Link>
            );
          })}
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-auto">
        <main className="p-8">
          {children}
        </main>
      </div>
    </div>
  );
};

export default SidebarLayout;