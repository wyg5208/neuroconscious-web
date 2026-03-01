import Link from 'next/link';
import DocsLayout from '@/components/DocsLayout';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'CIFAR-10 完整训练 | NCT 中级实验',
  description: '在 CIFAR-10 数据集上训练 NCT，45 分钟掌握数据增强、学习率调度和模型保存技巧。',
  keywords: ['CIFAR-10', '图像分类', '数据增强', '学习率调度'],
  openGraph: {
    title: 'CIFAR-10 完整训练 - NCT 中级实验',
    description: '掌握高级训练技巧',
  },
};

export default function CIFAR10FullPage() {
  return (
    <DocsLayout 
      slug="tutorials"
      title="CIFAR-10 完整训练"
      description="在 CIFAR-10 数据集上训练 NCT，掌握超参数调优"
    >
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-purple-50 to-white dark:from-gray-900 dark:to-black py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="max-w-4xl">
            <div className="flex items-center gap-3 mb-6">
              <span className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-purple-100 dark:bg-purple-900 text-purple-600 dark:text-purple-400 text-xl font-bold">
                🎯
              </span>
              <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
                CIFAR-10 完整训练
              </h1>
            </div>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-6">
              在 CIFAR-10 数据集上训练 NCT，掌握超参数调优
            </p>
            <div className="flex flex-wrap gap-4">
              <span className="inline-flex items-center px-4 py-2 rounded-full bg-purple-100 dark:bg-purple-900 text-purple-700 dark:text-purple-300 text-sm font-medium">
                ⏱️ 45 分钟
              </span>
              <span className="inline-flex items-center px-4 py-2 rounded-full bg-yellow-100 dark:bg-yellow-900 text-yellow-700 dark:text-yellow-300 text-sm font-medium">
                📊 中级
              </span>
              <span className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 text-sm font-medium">
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
              CIFAR-10 是一个更具挑战性的图像分类数据集，包含 10 个类别的 60,000 张 32x32 彩色图像。
              本实验将带你掌握数据增强、学习率调度、模型保存和可视化等高级技巧，
              帮助你在真实场景中获得最佳性能。
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

# 安装依赖（需要额外安装 torchvision）
pip install torch torchvision numpy scipy matplotlib

# 运行 CIFAR-10 完整训练
python experiments/run_cifar10_full.py`}</code>
            </pre>

            <h3 className="font-semibold text-gray-900 dark:text-white mb-4">
              方法 2：自定义配置训练
            </h3>
            <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto text-sm">
              <code>{`from nct_modules import NCTManager, NCTConfig
from datasets import load_cifar10

# 加载数据（带数据增强）
train_data, test_data = load_cifar10(
    './data/CIFAR-10',
    augment=True,  # 启用数据增强
    normalize=True
)

# 创建标准配置（d_model=768, n_heads=8）
config = NCTConfig(
    n_heads=8,
    d_model=768,
    n_layers=6,
    dropout=0.1
)

# 初始化并训练（带学习率调度）
manager = NCTManager(config, lr=1e-4)
manager.train(
    train_data,
    epochs=50,
    batch_size=64,
    scheduler='cosine',  # 余弦退火
    save_best=True,     # 保存最佳模型
    visualize=True      # 实时可视化
)`}</code>
            </pre>
          </div>
        </div>
      </section>

      {/* Key Techniques */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            关键技术点
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="rounded-xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
              <h3 className="font-semibold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
                <span>🔄</span> 数据增强
              </h3>
              <ul className="space-y-2 text-gray-700 dark:text-gray-300 text-sm">
                <li>• 随机水平翻转</li>
                <li>• 随机裁剪（padding=4）</li>
                <li>• 颜色抖动</li>
                <li>• CutMix/Mixup（可选）</li>
              </ul>
            </div>
            <div className="rounded-xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
              <h3 className="font-semibold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
                <span>📈</span> 学习率调度
              </h3>
              <ul className="space-y-2 text-gray-700 dark:text-gray-300 text-sm">
                <li>• Warmup（前 5 epoch）</li>
                <li>• 余弦退火（5-50 epoch）</li>
                <li>• 学习率范围：1e-4 ~ 1e-6</li>
                <li>• 梯度裁剪（max_norm=1.0）</li>
              </ul>
            </div>
            <div className="rounded-xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
              <h3 className="font-semibold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
                <span>💾</span> 模型保存
              </h3>
              <ul className="space-y-2 text-gray-700 dark:text-gray-300 text-sm">
                <li>• 每个 epoch 保存 checkpoint</li>
                <li>• 只保留 top-3 最佳模型</li>
                <li>• 自动删除旧文件节省空间</li>
                <li>• 支持断点续训</li>
              </ul>
            </div>
            <div className="rounded-xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
              <h3 className="font-semibold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
                <span>📊</span> 可视化监控
              </h3>
              <ul className="space-y-2 text-gray-700 dark:text-gray-300 text-sm">
                <li>• 实时训练/验证曲线</li>
                <li>• 注意力权重热图</li>
                <li>• 混淆矩阵</li>
                <li>• 错误案例分析</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="py-16 bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            预期结果
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="rounded-xl bg-white dark:bg-gray-900 p-6 text-center">
              <div className="text-4xl font-bold text-green-600 mb-2">
                ~92.3%
              </div>
              <div className="text-gray-600 dark:text-gray-400">
                测试集准确率
              </div>
            </div>
            <div className="rounded-xl bg-white dark:bg-gray-900 p-6 text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">
                ~45 分钟
              </div>
              <div className="text-gray-600 dark:text-gray-400">
                训练时间（GPU）
              </div>
            </div>
            <div className="rounded-xl bg-white dark:bg-gray-900 p-6 text-center">
              <div className="text-4xl font-bold text-purple-600 mb-2">
                Top-1
              </div>
              <div className="text-gray-600 dark:text-gray-400">
                CIFAR-10 SOTA
              </div>
            </div>
          </div>
          
          <div className="mt-8 rounded-xl bg-white dark:bg-gray-900 p-6">
            <h3 className="font-semibold text-gray-900 dark:text-white mb-4">
              🎯 学习目标
            </h3>
            <ul className="space-y-2 text-gray-700 dark:text-gray-300">
              <li>✅ 掌握 CIFAR-10 数据加载和增强</li>
              <li>✅ 学会使用学习率调度器</li>
              <li>✅ 能够保存和加载模型 checkpoint</li>
              <li>✅ 能够分析和可视化训练过程</li>
              <li>✅ 理解超参数对性能的影响</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Tips */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            💡 优化建议
          </h2>
          <div className="space-y-4">
            <div className="rounded-xl border-l-4 border-green-500 bg-green-50 dark:bg-green-900/20 p-6">
              <h3 className="font-semibold text-green-900 dark:text-green-300 mb-2">
                ✅ 推荐配置（平衡性能和速度）
              </h3>
              <p className="text-green-700 dark:text-green-300 text-sm">
                d_model=768, n_heads=8, n_layers=6, batch_size=64, lr=1e-4
              </p>
            </div>
            <div className="rounded-xl border-l-4 border-blue-500 bg-blue-50 dark:bg-blue-900/20 p-6">
              <h3 className="font-semibold text-blue-900 dark:text-blue-300 mb-2">
                🚀 高性能配置（追求最佳准确率）
              </h3>
              <p className="text-blue-700 dark:text-blue-300 text-sm">
                d_model=1024, n_heads=12, n_layers=8, batch_size=32, lr=5e-5
              </p>
            </div>
            <div className="rounded-xl border-l-4 border-yellow-500 bg-yellow-50 dark:bg-yellow-900/20 p-6">
              <h3 className="font-semibold text-yellow-900 dark:text-yellow-300 mb-2">
                ⚡ 快速原型配置（调试用）
              </h3>
              <p className="text-yellow-700 dark:text-yellow-300 text-sm">
                d_model=256, n_heads=4, n_layers=4, batch_size=128, lr=3e-4
              </p>
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
            href="/docs/tutorials/mnist-few-shot"
            className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
          >
            ← MNIST Few-Shot
          </Link>
        </div>
      </div>
    </DocsLayout>
  );
}
