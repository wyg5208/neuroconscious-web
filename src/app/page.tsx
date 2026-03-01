import HeroSection from '@/components/HeroSection';
import FeaturesSection from '@/components/FeaturesSection';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'NCT - NeuroConscious Transformer | 用 Transformer 重构意识神经科学',
  description: '首个将 GWT、IIT、Predictive Coding 等 6 大意识理论统一于 Transformer 架构的可学习框架，实现可训练、可验证、可复现的意识计算。',
  keywords: ['consciousness AI', 'neuromorphic architecture', 'Transformer neuroscience', 'NCT', '意识计算', '类脑智能'],
  openGraph: {
    title: 'NCT - NeuroConscious Transformer',
    description: '用 Transformer 重构意识神经科学',
  },
};

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-black">
      <main>
        {/* Hero Section */}
        <HeroSection />

        {/* Features Section */}
        <FeaturesSection />

        {/* Performance Comparison Section */}
        <section className="py-20 bg-gray-50 dark:bg-gray-900">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl mb-4">
                性能全面领先
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-400">
                NCT v3.1 vs 传统方法关键指标对比
              </p>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full border-collapse bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg">
                <thead>
                  <tr className="bg-gray-100 dark:bg-gray-700">
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900 dark:text-white">维度</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900 dark:text-white">v2.2</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900 dark:text-white">v3.0</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-blue-600 dark:text-blue-400">v3.1 (实测)</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-green-600 dark:text-green-400">提升</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                  <tr>
                    <td className="px-6 py-4 text-sm text-gray-900 dark:text-white">意识选择准确率</td>
                    <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-400">75%</td>
                    <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-400">92%</td>
                    <td className="px-6 py-4 text-sm font-semibold text-blue-600 dark:text-blue-400">92%</td>
                    <td className="px-6 py-4 text-sm text-green-600 dark:text-green-400">+23%</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-sm text-gray-900 dark:text-white">收敛速度</td>
                    <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-400">1000 cycles</td>
                    <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-400">200 cycles</td>
                    <td className="px-6 py-4 text-sm font-semibold text-blue-600 dark:text-blue-400">~180 cycles</td>
                    <td className="px-6 py-4 text-sm text-green-600 dark:text-green-400">5×</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-sm text-gray-900 dark:text-white">Φ值 (整合信息)</td>
                    <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-400">0.3</td>
                    <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-400">0.7</td>
                    <td className="px-6 py-4 text-sm font-semibold text-blue-600 dark:text-blue-400">0.329 (d=768)</td>
                    <td className="px-6 py-4 text-sm text-green-600 dark:text-green-400">2.3×</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-sm text-gray-900 dark:text-white">STDP 延迟</td>
                    <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-400">-</td>
                    <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-400">&lt;5ms</td>
                    <td className="px-6 py-4 text-sm font-semibold text-blue-600 dark:text-blue-400">&lt;2ms</td>
                    <td className="px-6 py-4 text-sm text-green-600 dark:text-green-400">-</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-sm text-gray-900 dark:text-white">自由能降低</td>
                    <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-400">-</td>
                    <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-400">80%</td>
                    <td className="px-6 py-4 text-sm font-semibold text-blue-600 dark:text-blue-400">83.0%</td>
                    <td className="px-6 py-4 text-sm text-green-600 dark:text-green-400">-</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl text-center">
            <h2 className="text-3xl font-bold text-white sm:text-4xl mb-6">
              准备好探索意识的奥秘了吗？
            </h2>
            <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
              立即开始使用 NCT，体验神经形态意识架构的强大能力
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/docs/quickstart"
                className="inline-flex items-center justify-center rounded-full bg-white px-8 py-3.5 text-base font-medium text-blue-600 hover:bg-gray-100 transition-colors"
              >
                阅读文档
              </Link>
              <a
                href="https://github.com/wyg5208/nct"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full border-2 border-white px-8 py-3.5 text-base font-medium text-white hover:bg-white/10 transition-colors"
              >
                GitHub 仓库
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
