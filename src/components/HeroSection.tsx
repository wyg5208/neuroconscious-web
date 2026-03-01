import Link from 'next/link';

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-black py-20 sm:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="flex flex-col items-center text-center">
          {/* Badge */}
          <div className="mb-6 inline-flex items-center rounded-full bg-blue-100 px-4 py-1.5 text-sm font-medium text-blue-800 dark:bg-blue-900/30 dark:text-blue-400">
            🧠 NeuroConscious Transformer v3.1
          </div>

          {/* Main Title */}
          <h1 className="max-w-4xl text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-6xl mb-6">
            用{' '}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Transformer
            </span>{' '}
            重构意识神经科学
          </h1>

          {/* Slogan */}
          <div className="mb-8 inline-block rounded-lg bg-gradient-to-r from-blue-600/10 to-purple-600/10 px-6 py-3 backdrop-blur-sm dark:from-blue-600/20 dark:to-purple-600/20">
            <p className="text-base sm:text-lg font-medium text-gray-700 dark:text-gray-300">
              解码意识，重构智能
            </p>
            <p className="mt-1 text-sm text-gray-500 dark:text-gray-400 italic">
              Decoding Consciousness, Reimagining Intelligence
            </p>
          </div>

          {/* Subtitle */}
          <p className="max-w-2xl text-lg text-gray-600 dark:text-gray-300 mb-8">
            首个将 GWT、IIT、Predictive Coding 等 6 大意识理论统一于 Transformer 架构的
            <span className="font-semibold text-gray-900 dark:text-white">可学习、可验证、可复现</span>
            创新框架
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/docs/quickstart"
              className="inline-flex items-center justify-center rounded-full bg-blue-600 px-8 py-3.5 text-base font-medium text-white hover:bg-blue-700 transition-colors shadow-lg shadow-blue-600/20"
            >
              开始使用 →
            </Link>
            <Link
              href="/technology"
              className="inline-flex items-center justify-center rounded-full border border-gray-300 bg-white px-8 py-3.5 text-base font-medium text-gray-900 hover:bg-gray-50 transition-colors dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700"
            >
              了解技术
            </Link>
            <a
              href="https://github.com/wyg5208/nct"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full border border-gray-300 bg-white px-8 py-3.5 text-base font-medium text-gray-900 hover:bg-gray-50 transition-colors dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700"
            >
              GitHub ⭐
            </a>
          </div>

          {/* Key Metrics Preview */}
          <div className="mt-16 grid grid-cols-2 gap-8 sm:grid-cols-4">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">0.329</div>
              <div className="mt-1 text-sm text-gray-600 dark:text-gray-400">Φ值 (d=768)</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600 dark:text-purple-400">83.0%</div>
              <div className="mt-1 text-sm text-gray-600 dark:text-gray-400">自由能降低</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600 dark:text-green-400">&lt;2ms</div>
              <div className="mt-1 text-sm text-gray-600 dark:text-gray-400">STDP 延迟</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-600 dark:text-orange-400">5×</div>
              <div className="mt-1 text-sm text-gray-600 dark:text-gray-400">收敛速度提升</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
