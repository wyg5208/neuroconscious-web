'use client';

import Link from 'next/link';
import { useNCT } from '@/lib/useTranslation';
import { Suspense } from 'react';

function CTAContent() {
  const nct = useNCT();
  const isZh = nct.nav.quickstart === '快速开始';
  
  return (
    <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl text-center">
        <h2 className="text-3xl font-bold text-white sm:text-4xl mb-6">
          {isZh ? '准备好探索意识的奥秘了吗？' : 'Ready to Explore the Mysteries of Consciousness?'}
        </h2>
        <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
          {isZh 
            ? '立即开始使用 NCT，体验神经形态意识架构的强大能力' 
            : 'Start using NCT now and experience the power of neuromorphic conscious architecture'}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/docs/quickstart"
            className="inline-flex items-center justify-center rounded-full bg-white px-8 py-3.5 text-base font-medium text-blue-600 hover:bg-gray-100 transition-colors"
          >
            {nct.nav.docsHome}
          </Link>
          <a
            href="https://github.com/wyg5208/nct"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-full border-2 border-white px-8 py-3.5 text-base font-medium text-white hover:bg-white/10 transition-colors"
          >
            {nct.nav.github}
          </a>
        </div>
      </div>
    </section>
  );
}

export default function CTASection() {
  return (
    <Suspense fallback={null}>
      <CTAContent />
    </Suspense>
  );
}
