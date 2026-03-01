'use client';

import Link from 'next/link';
import { useNCT } from '@/lib/useTranslation';
import { Suspense } from 'react';

function DocsPageContent() {
  const nct = useNCT();
  
  const sections = [
    {
      title: nct.docs.quickstartTitle,
      description: nct.docs.quickstartDesc,
      icon: '🚀',
      href: '/docs/quickstart',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      title: nct.docs.installTitle,
      description: nct.docs.installDesc,
      icon: '📦',
      href: '/docs/installation',
      color: 'from-purple-500 to-pink-500',
    },
    {
      title: nct.docs.apiTitle,
      description: nct.docs.apiDesc,
      icon: '📖',
      href: '/docs/api',
      color: 'from-green-500 to-emerald-500',
    },
    {
      title: nct.docs.tutorialsTitle,
      description: nct.docs.tutorialsDesc,
      icon: '🧪',
      href: '/docs/tutorials',
      color: 'from-orange-500 to-red-500',
    },
    {
      title: nct.docs.architectureTitle,
      description: nct.docs.architectureDesc,
      icon: '🏗️',
      href: '/docs/architecture',
      color: 'from-indigo-500 to-blue-500',
    },
    {
      title: nct.docs.faqTitle,
      description: nct.docs.faqDesc,
      icon: '❓',
      href: '/docs/faq',
      color: 'from-yellow-500 to-orange-500',
    },
  ];

  const quickStartCode = `# 安装依赖
pip install torch numpy scipy

# 运行示例
cd examples
python quickstart.py

# 运行测试
cd tests
python test_basic.py`;

  const modules = [
    { name: 'NCTManager', file: 'nct_manager.py', description: nct.docs.moduleManager },
    { name: 'NCTConfig', file: 'nct_core.py', description: nct.docs.moduleConfig },
    { name: 'AttentionWorkspace', file: 'nct_workspace.py', description: nct.docs.moduleWorkspace },
    { name: 'PhiCalculator', file: 'nct_metrics.py', description: nct.docs.modulePhi },
    { name: 'HybridLearning', file: 'nct_hybrid_learning.py', description: nct.docs.moduleLearning },
    { name: 'PredictiveCoding', file: 'nct_predictive_coding.py', description: nct.docs.modulePredictive },
    { name: 'CrossModal', file: 'nct_cross_modal.py', description: nct.docs.moduleCrossmodal },
    { name: 'GammaSync', file: 'nct_gamma_sync.py', description: nct.docs.moduleGamma },
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-black">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-black py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="max-w-4xl">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white sm:text-5xl mb-6">
              {nct.docs.title}
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
              {nct.docs.subtitle}
            </p>
          </div>
        </div>
      </section>

      {/* Documentation Sections */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sections.map((section, index) => (
              <Link
                key={index}
                href={section.href}
                className="group block rounded-2xl border border-gray-200 bg-white p-6 transition-all hover:shadow-lg hover:-translate-y-1 dark:border-gray-800 dark:bg-gray-900"
              >
                <div className={`inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-r ${section.color} text-2xl mb-4`}>
                  {section.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {section.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {section.description}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Start Example */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
              {nct.docs.quickstartSectionTitle}
            </h2>
            <div className="rounded-xl bg-gray-900 p-6 overflow-x-auto">
              <pre className="text-sm text-gray-100 font-mono">
                <code>{quickStartCode}</code>
              </pre>
            </div>
            <Link
              href="/docs/quickstart"
              className="mt-6 inline-flex items-center text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 font-medium"
            >
              {nct.docs.quickstartLink}
            </Link>
          </div>
        </div>
      </section>

      {/* Core Modules */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
            {nct.docs.modulesTitle}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {modules.map((module, index) => (
              <div
                key={index}
                className="rounded-xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900"
              >
                <div className="flex items-start justify-between mb-2">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    {module.name}
                  </h3>
                  <code className="text-xs bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded text-gray-600 dark:text-gray-400">
                    {module.file}
                  </code>
                </div>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  {module.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl text-center">
          <h2 className="text-3xl font-bold text-white sm:text-4xl mb-6">
            {nct.docs.ctaTitle}
          </h2>
          <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
            {nct.docs.ctaDesc}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://github.com/wyg5208/nct/issues"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-white px-8 py-3.5 text-base font-medium text-blue-600 hover:bg-gray-100 transition-colors"
            >
              {nct.docs.ctaGithub}
            </a>
            <a
              href="https://github.com/wyg5208/nct/discussions"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full border-2 border-white px-8 py-3.5 text-base font-medium text-white hover:bg-white/10 transition-colors"
            >
              {nct.docs.ctaCommunity}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default function DocsContent() {
  return (
    <Suspense fallback={null}>
      <DocsPageContent />
    </Suspense>
  );
}
