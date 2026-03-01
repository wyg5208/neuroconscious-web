"use client";

import { useState } from 'react';
import DocsSidebar from './DocsSidebar';
import DocsPagination from './DocsPagination';

interface DocsLayoutProps {
  children: React.ReactNode;
  slug: string;
  title?: string;
  description?: string;
}

export default function DocsLayout({ 
  children, 
  slug,
  title,
  description 
}: DocsLayoutProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white dark:bg-black">
      {/* Mobile Header */}
      <div className="lg:hidden sticky top-0 z-30 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800">
        <div className="flex items-center justify-between px-4 py-3">
          <button
            onClick={() => setSidebarOpen(true)}
            className="p-2 -ml-2 text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
          <span className="font-semibold text-gray-900 dark:text-white">文档中心</span>
          <div className="w-10" /> {/* Spacer for alignment */}
        </div>
      </div>

      <div className="flex">
        {/* Sidebar */}
        <DocsSidebar 
          isOpen={sidebarOpen} 
          onClose={() => setSidebarOpen(false)} 
        />

        {/* Main Content */}
        <main className="flex-1 min-w-0">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl py-12">
            {/* Page Header */}
            {(title || description) && (
              <div className="mb-12">
                {title && (
                  <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
                    {title}
                  </h1>
                )}
                {description && (
                  <p className="text-xl text-gray-600 dark:text-gray-300">
                    {description}
                  </p>
                )}
              </div>
            )}

            {/* Content */}
            <div className="prose prose-blue dark:prose-invert max-w-none">
              {children}
            </div>

            {/* Pagination */}
            <DocsPagination slug={slug} />
          </div>
        </main>
      </div>
    </div>
  );
}
