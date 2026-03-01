'use client';

import { useState, useEffect } from 'react';
import { Globe } from 'lucide-react';

export default function LanguageSwitcher() {
  const [currentLang, setCurrentLang] = useState<'zh' | 'en'>('zh');
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // 从 URL 参数或 localStorage 读取语言设置
    const savedLang = localStorage.getItem('locale') as 'zh' | 'en' || 'zh';
    setCurrentLang(savedLang);
  }, []);

  const switchLanguage = (newLang: 'zh' | 'en') => {
    setCurrentLang(newLang);
    localStorage.setItem('locale', newLang);
    
    // 更新 URL 参数
    const url = new URL(window.location.href);
    url.searchParams.set('lang', newLang);
    window.history.pushState({}, '', url.toString());
    
    // 刷新页面以应用新语言
    window.location.reload();
  };

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-1.5 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
        aria-label="Switch Language"
      >
        <Globe className="w-4 h-4" />
        <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
          {currentLang === 'zh' ? '中文' : 'EN'}
        </span>
        <svg
          className={`w-3 h-3 transition-transform ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-1 w-32 bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 z-50">
          <button
            onClick={() => {
              switchLanguage('zh');
              setIsOpen(false);
            }}
            className={`w-full px-4 py-2 text-left text-sm hover:bg-gray-100 dark:hover:bg-gray-700 rounded-t-lg ${
              currentLang === 'zh' ? 'bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400' : 'text-gray-700 dark:text-gray-300'
            }`}
          >
            🇨🇳 中文
          </button>
          <button
            onClick={() => {
              switchLanguage('en');
              setIsOpen(false);
            }}
            className={`w-full px-4 py-2 text-left text-sm hover:bg-gray-100 dark:hover:bg-gray-700 rounded-b-lg ${
              currentLang === 'en' ? 'bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400' : 'text-gray-700 dark:text-gray-300'
            }`}
          >
            🇺🇸 English
          </button>
        </div>
      )}
    </div>
  );
}
