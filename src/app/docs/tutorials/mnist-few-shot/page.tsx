import Link from 'next/link';
import DocsLayout from '@/components/DocsLayout';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'MNIST Few-Shot 学习 | NCT 入门实验',
  description: '使用 NCT 进行少样本图像分类，15 分钟快速上手，理解基本工作流程和核心概念。',
  keywords: ['MNIST', 'Few-Shot', '图像分类', '入门实验'],
  openGraph: {
    title: 'MNIST Few-Shot 学习 - NCT 入门实验',
    description: '15 分钟快速上手 NCT',
  },
};

export default function MNISTFewShotPage() {
  return (
    <DocsLayout 
      slug="tutorials"
      title="MNIST Few-Shot 学习"
      description="使用 NCT 进行少样本图像分类，理解基本工作流程"
    >
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-black py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="max-w-4xl">
            <div className="flex items-center gap-3 mb-6">
              <span className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400 text-xl font-bold">
                🚀
              </span>
              <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
                MNIST Few-Shot 学习
              </h1>
            </div>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-6">
              使用 NCT 进行少样本图像分类，理解基本工作流程
            </p>
            <div className="flex flex-wrap gap-4">
              <span className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 text-sm font-medium">
                ⏱️ 15 分钟
              </span>
              <span className="inline-flex items-center px-4 py-2 rounded-full bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300 text-sm font-medium">
                📊 初级
              </span>
              <span className="inline-flex items-center px-4 py-2 rounded-full bg-purple-100 dark:bg-purple-900 text-purple-700 dark:text-purple-300 text-sm font-medium">
                🧪 图像分类
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            实验概述
          </h2>
          <div className="prose prose-blue dark:prose-invert max-w-none">
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              本实验将带你使用 NCT 在 MNIST 数据集上进行少样本学习。你将亲手实践如何配置模型、加载数据、训练网络，并评估性能。
              通过这个实验，你将深入理解 NCT 的基本工作流程和核心概念。
            </p>
          </div>
        </div>
      </section>

      {/* Code Example */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            运行实验
          </h2>
          <div className="rounded-xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
            <h3 className="font-semibold text-gray-900 dark:text-white mb-4">
              方法 1：直接运行脚本
            </h3>
            <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto text-sm mb-6">
              <code>{`# 克隆仓库
git clone https://github.com/wyg5208/nct.git
cd nct

# 安装依赖
pip install torch numpy scipy matplotlib

# 运行实验
python experiments/exp_mnist_few_shot.py`}</code>
            </pre>

            <h3 className="font-semibold text-gray-900 dark:text-white mb-4">
              方法 2：使用 Python API
            </h3>
            <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto text-sm">
              <code>{`from nct_modules import NCTManager, NCTConfig
from datasets import load_mnist

# 加载数据
train_data, test_data = load_mnist('./data/MNIST')

# 创建配置
config = NCTConfig(
    n_heads=4,
    d_model=256,
    n_layers=4
)

# 初始化并训练
manager = NCTManager(config)
manager.train(train_data, epochs=10)`}</code>
            </pre>
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            预期结果
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="rounded-xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
              <h3 className="font-semibold text-gray-900 dark:text-white mb-3">
                📈 性能指标
              </h3>
              <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                <li className="flex justify-between">
                  <span>准确率:</span>
                  <span className="font-semibold text-green-600">~97.8%</span>
                </li>
                <li className="flex justify-between">
                  <span>训练时间:</span>
                  <span className="font-semibold">~15 分钟</span>
                </li>
                <li className="flex justify-between">
                  <span>Few-shot 适应:</span>
                  <span className="font-semibold text-blue-600">5-10 样本/类</span>
                </li>
              </ul>
            </div>
            <div className="rounded-xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
              <h3 className="font-semibold text-gray-900 dark:text-white mb-3">
                🎯 学习目标
              </h3>
              <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                <li>✅ 掌握 NCT 基本配置</li>
                <li>✅ 理解数据加载流程</li>
                <li>✅ 学会训练循环编写</li>
                <li>✅ 能够评估模型性能</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Navigation */}
      <div className="mt-16 pt-8 border-t border-gray-200 dark:border-gray-800">
        <div className="flex justify-between">
          <Link
            href="/docs/tutorials"
            className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
          >
            ← 返回实验列表
          </Link>
          <Link
            href="/docs/quickstart"
            className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
          >
            快速开始 →
          </Link>
        </div>
      </div>
    </DocsLayout>
  );
}
