import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '文档中心 | NCT 完整使用指南',
  description: '从快速开始到高级实验，提供完整的 NCT 使用教程、API 参考和技术文档。',
  keywords: ['NCT 文档', '使用教程', 'API 参考', '实验指南'],
  openGraph: {
    title: 'NCT 文档中心',
    description: '完整的使用指南和实验教程',
  },
};

export default function DocsPage() {
  const sections = [
    {
      title: '快速开始',
      description: '5 分钟快速了解 NCT 的基本使用方法',
      icon: '🚀',
      href: '/docs/quickstart',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      title: '安装指南',
      description: '详细的环境配置和依赖安装步骤',
      icon: '📦',
      href: '/docs/installation',
      color: 'from-purple-500 to-pink-500',
    },
    {
      title: 'API 参考',
      description: '完整的 API 文档和代码示例',
      icon: '📖',
      href: '/docs/api',
      color: 'from-green-500 to-emerald-500',
    },
    {
      title: '实验教程',
      description: 'MNIST、CIFAR-10 等完整实验示例',
      icon: '🧪',
      href: '/docs/tutorials',
      color: 'from-orange-500 to-red-500',
    },
    {
      title: '架构说明',
      description: 'NCT 核心模块的详细技术说明',
      icon: '🏗️',
      href: '/docs/architecture',
      color: 'from-indigo-500 to-blue-500',
    },
    {
      title: '常见问题',
      description: 'FAQ 和常见问题解答',
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

  return (
    <div className="min-h-screen bg-white dark:bg-black">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-black py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="max-w-4xl">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white sm:text-5xl mb-6">
              文档中心
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
              全面了解 NCT 的使用方法、API 和最佳实践
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
              快速开始
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
              查看完整快速开始指南 →
            </Link>
          </div>
        </div>
      </section>

      {/* Core Modules */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
            核心模块
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { name: 'NCTManager', file: 'nct_manager.py', description: '主控制器，管理整个 NCT 流程' },
              { name: 'NCTConfig', file: 'nct_core.py', description: '配置类，定义所有超参数' },
              { name: 'AttentionWorkspace', file: 'nct_workspace.py', description: '注意力工作空间，实现全局广播' },
              { name: 'PhiCalculator', file: 'nct_metrics.py', description: 'Φ值计算器，度量整合信息' },
              { name: 'HybridLearning', file: 'nct_hybrid_learning.py', description: 'Transformer-STDP 混合学习' },
              { name: 'PredictiveCoding', file: 'nct_predictive_coding.py', description: '预测编码模块' },
              { name: 'CrossModal', file: 'nct_cross_modal.py', description: '跨模态融合模块' },
              { name: 'GammaSync', file: 'nct_gamma_sync.py', description: 'γ同步机制' },
            ].map((module, index) => (
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
            需要更多帮助？
          </h2>
          <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
            查看 GitHub Issues 或加入社区讨论
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://github.com/wyg5208/nct/issues"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-white px-8 py-3.5 text-base font-medium text-blue-600 hover:bg-gray-100 transition-colors"
            >
              GitHub Issues
            </a>
            <a
              href="https://github.com/wyg5208/nct/discussions"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full border-2 border-white px-8 py-3.5 text-base font-medium text-white hover:bg-white/10 transition-colors"
            >
              社区讨论
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
