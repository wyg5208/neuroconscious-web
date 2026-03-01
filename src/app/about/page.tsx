import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '关于 NCT | WENG YONGGANG(翁勇刚)',
  description: '了解 NCT 项目的研发背景、核心团队和未来愿景。由马来西亚理工大学 WinClaw 研究团队开发。',
  keywords: ['NCT 团队', 'WinClaw', '马来西亚理工大学', '研发团队'],
  openGraph: {
    title: '关于 NCT - WENG YONGGANG(翁勇刚)',
    description: '马来西亚理工大学的意识计算前沿研究',
  },
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-black">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-black py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="max-w-4xl">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white sm:text-5xl mb-6">
              关于 NCT
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
              NeuroConscious Transformer - 用 Transformer 重构意识神经科学
            </p>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
              使命与愿景
            </h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
              NCT (NeuroConscious Transformer) 是一个<span className="font-semibold text-blue-600 dark:text-blue-400">下一代神经形态意识架构</span>，
              旨在用 Transformer 技术重构经典意识神经科学理论。
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
              我们的目标是建立一个<span className="font-semibold text-purple-600 dark:text-purple-400">可学习、可验证、可复现</span>的
              创新框架，将 GWT（全局工作空间理论）、IIT（整合信息论）、Predictive Coding（预测编码）
              等 6 大核心理论统一于 Transformer 架构。
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              通过工程化的实现，我们让意识计算从理论走向实践，为 AI 研究和神经科学提供全新的工具和视角。
            </p>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-12 text-center">
            核心团队
          </h2>
          <div className="max-w-2xl mx-auto">
            <div className="rounded-2xl border border-gray-200 bg-white p-8 dark:border-gray-800 dark:bg-gray-900">
              <div className="flex items-start space-x-6">
                <div className="flex-shrink-0">
                  <div className="h-24 w-24 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center text-3xl font-bold text-white">
                    YW
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    Yonggang Weng (翁勇刚)
                  </h3>
                  <p className="text-blue-600 dark:text-blue-400 font-medium mb-3">
                    Neuroconscious.link 首席科学家<br />
                    马来西亚理工大学 (UTM) 博士研究生
                  </p>
                  <p className="text-gray-600 dark:text-gray-400">
                    专注于意识计算的工程化实现，致力于将神经科学理论转化为可学习的 AI 架构。
                    NCT 项目的创始人和主要研究者。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-12 text-center">
            发展历程
          </h2>
          <div className="max-w-3xl mx-auto">
            <div className="space-y-8 relative before:absolute before:left-8 before:h-full before:w-0.5 before:bg-gray-200 dark:before:bg-gray-700">
              {[
                {
                  version: 'v2.2',
                  date: '2026-02',
                  title: '传统方法阶段',
                  description: '使用简单侧抑制实现全局工作空间，准确率 75%',
                },
                {
                  version: 'v3.0',
                  date: '2026-02-21',
                  title: 'NCT 初始版本',
                  description: '引入多头注意力机制，统一 6 大理论，准确率提升至 92%',
                },
                {
                  version: 'v3.1',
                  date: '2026-02-22',
                  title: '实验验证完成',
                  description: '完成所有 6 大核心实验验证，Φ值达到 0.329 (d=768)',
                },
                {
                  version: 'v3.1+',
                  date: '2026-02-28',
                  title: '官方网站上线',
                  description: 'neuroconscious.link 正式开放，提供完整文档和技术博客',
                },
              ].map((milestone, index) => (
                <div key={index} className="relative pl-20">
                  <div className="absolute left-8 h-4 w-4 -translate-x-1/2 rounded-full bg-blue-600 ring-4 ring-white dark:ring-gray-900" />
                  <div className="rounded-xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="inline-flex items-center rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-800 dark:bg-blue-900/30 dark:text-blue-400">
                        {milestone.version}
                      </span>
                      <span className="text-sm text-gray-500 dark:text-gray-400">
                        {milestone.date}
                      </span>
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                      {milestone.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      {milestone.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Key Achievements */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">
            关键成就
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="text-5xl font-bold text-white mb-2">6</div>
              <div className="text-blue-100">大理论统一</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-white mb-2">92%</div>
              <div className="text-blue-100">意识选择准确率</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-white mb-2">5×</div>
              <div className="text-blue-100">收敛速度提升</div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            联系我们
          </h2>
          <div className="max-w-2xl mx-auto text-center">
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-8">
              如果您对 NCT 感兴趣，想要合作或有任何问题，欢迎联系我们。
            </p>
            <div className="space-y-4">
              <div className="flex items-center justify-center space-x-2 text-gray-600 dark:text-gray-400">
                <span>📧</span>
                <a href="mailto:weng@graduate.utm.my" className="hover:text-blue-600 dark:hover:text-blue-400">
                  weng@graduate.utm.my
                </a>
              </div>
              <div className="flex items-center justify-center space-x-2 text-gray-600 dark:text-gray-400">
                <span>💻</span>
                <a 
                  href="https://github.com/wyg5208/nct" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-blue-600 dark:hover:text-blue-400"
                >
                  github.com/wyg5208/nct
                </a>
              </div>
              <div className="flex items-center justify-center space-x-2 text-gray-600 dark:text-gray-400">
                <span>🏛️</span>
                <span>WENG YONGGANG(翁勇刚), 马来西亚理工大学</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
