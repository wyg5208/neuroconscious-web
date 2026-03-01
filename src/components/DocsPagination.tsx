import Link from 'next/link';
import { getPreviousDoc, getNextDoc } from '@/lib/docsConfig';

interface DocsPaginationProps {
  slug: string;
}

export default function DocsPagination({ slug }: DocsPaginationProps) {
  const previousDoc = getPreviousDoc(slug);
  const nextDoc = getNextDoc(slug);

  if (!previousDoc && !nextDoc) {
    return null;
  }

  return (
    <div className="mt-16 pt-8 border-t border-gray-200 dark:border-gray-800">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Previous */}
        {previousDoc && (
          <Link
            href={`/docs/${previousDoc.slug}`}
            className="group flex flex-col items-start gap-3 p-6 rounded-xl border border-gray-200 bg-white hover:border-blue-300 hover:shadow-md transition-all dark:border-gray-800 dark:bg-gray-900 dark:hover:border-blue-700"
          >
            <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
              <svg className="w-5 h-5 transform group-hover:-translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              <span>上一页</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-2xl">{previousDoc.icon}</span>
              <div>
                <div className="font-semibold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {previousDoc.title}
                </div>
                {previousDoc.description && (
                  <div className="text-sm text-gray-500 dark:text-gray-400 line-clamp-1">
                    {previousDoc.description}
                  </div>
                )}
              </div>
            </div>
          </Link>
        )}

        {/* Next */}
        {nextDoc && (
          <Link
            href={`/docs/${nextDoc.slug}`}
            className="group flex flex-col items-end gap-3 p-6 rounded-xl border border-gray-200 bg-white hover:border-blue-300 hover:shadow-md transition-all dark:border-gray-800 dark:bg-gray-900 dark:hover:border-blue-700 md:ml-auto"
          >
            <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
              <span>下一页</span>
              <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
            <div className="flex items-center gap-3">
              <div className="text-right">
                <div className="font-semibold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {nextDoc.title}
                </div>
                {nextDoc.description && (
                  <div className="text-sm text-gray-500 dark:text-gray-400 line-clamp-1">
                    {nextDoc.description}
                  </div>
                )}
              </div>
              <span className="text-2xl">{nextDoc.icon}</span>
            </div>
          </Link>
        )}
      </div>

      {/* Back to Docs Home */}
      <div className="mt-8 text-center">
        <Link
          href="/docs"
          className="inline-flex items-center gap-2 text-sm text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors"
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-8 0h6" />
          </svg>
          返回文档首页
        </Link>
      </div>
    </div>
  );
}
