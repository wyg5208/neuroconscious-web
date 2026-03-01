"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { docsOrder } from '@/lib/docsConfig';

interface DocsSidebarProps {
  isOpen?: boolean;
  onClose?: () => void;
}

export default function DocsSidebar({ isOpen = true, onClose }: DocsSidebarProps) {
  const pathname = usePathname();

  return (
    <>
      {/* Mobile Overlay */}
      <div
        className={`fixed inset-0 bg-black/50 z-40 lg:hidden transition-opacity ${
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={onClose}
      />

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 h-full w-72 bg-white dark:bg-gray-900 border-r border-gray-200 dark:border-gray-800 z-50 transform transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:h-auto ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        {/* Header */}
        <div className="p-6 border-b border-gray-200 dark:border-gray-800">
          <Link href="/docs" className="flex items-center gap-3 group">
            <span className="text-3xl">📚</span>
            <div>
              <h2 className="text-lg font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                文档中心
              </h2>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                NeuroConscious Transformer
              </p>
            </div>
          </Link>
        </div>

        {/* Navigation */}
        <nav className="p-4 space-y-1 overflow-y-auto">
          {docsOrder.map((doc) => {
            const href = `/docs/${doc.slug}`;
            const isActive = pathname === href;

            return (
              <Link
                key={doc.slug}
                href={href}
                className={`flex items-start gap-3 px-4 py-3 rounded-lg transition-all duration-200 group ${
                  isActive
                    ? 'bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-600 dark:border-blue-400'
                    : 'hover:bg-gray-50 dark:hover:bg-gray-800 border-l-4 border-transparent'
                }`}
                onClick={onClose}
              >
                <span className="text-xl flex-shrink-0">{doc.icon}</span>
                <div className="flex-1 min-w-0">
                  <div className="font-medium text-sm truncate transition-colors">
                    <span className={isActive ? 'text-blue-700 dark:text-blue-300' : 'text-gray-900 dark:text-white'}>
                      {doc.title}
                    </span>
                  </div>
                  {doc.description && (
                    <div className="text-xs text-gray-500 dark:text-gray-400 mt-1 line-clamp-2 hidden xl:block">
                      {doc.description}
                    </div>
                  )}
                </div>
              </Link>
            );
          })}
        </nav>

        {/* Footer */}
        <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900">
          <div className="text-xs text-gray-500 dark:text-gray-400 space-y-2">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-green-500"></span>
              <span>v3.1.0 最新版</span>
            </div>
            <Link
              href="https://github.com/wyg5208/nct"
              target="_blank"
              rel="noopener noreferrer"
              className="block text-blue-600 dark:text-blue-400 hover:underline"
            >
              GitHub 仓库 →
            </Link>
          </div>
        </div>
      </aside>
    </>
  );
}
