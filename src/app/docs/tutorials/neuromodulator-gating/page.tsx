import Link from 'next/link';
import DocsLayout from '@/components/DocsLayout';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '神经调质门控实验 | NCT 类脑 AI',
  description: '探索多巴胺、5-HT 等神经调质对学习的影响，35 分钟实现类脑决策和情感计算。',
  keywords: ['神经调质', '多巴胺', '类脑 AI', '情感计算'],
  openGraph: {
    title: '神经调质门控实验 - NCT 类脑 AI',
    description: '模拟大脑的学习调节机制',
  },
};

export default function NeuromodulatorGatingPage() {
  return (
    <DocsLayout 
      slug="tutorials"
      title="神经调质门控实验"
      description="探索多巴胺、5-HT 等神经调质对学习的影响"
    >
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-yellow-50 to-white dark:from-gray-900 dark:to-black py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="max-w-4xl">
            <div className="flex items-center gap-3 mb-6">
              <span className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-yellow-100 dark:bg-yellow-900 text-yellow-600 dark:text-yellow-400 text-xl font-bold">
                💊
              </span>
              <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
                神经调质门控实验
              </h1>
            </div>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-6">
              探索多巴胺、5-HT 等神经调质对学习的影响
            </p>
            <div className="flex flex-wrap gap-4">
              <span className="inline-flex items-center px-4 py-2 rounded-full bg-yellow-100 dark:bg-yellow-900 text-yellow-700 dark:text-yellow-300 text-sm font-medium">
                ⏱️ 35 分钟
              </span>
              <span className="inline-flex items-center px-4 py-2 rounded-full bg-orange-100 dark:bg-orange-900 text-orange-700 dark:text-orange-300 text-sm font-medium">
                📊 高级
              </span>
              <span className="inline-flex items-center px-4 py-2 rounded-full bg-purple-100 dark:bg-purple-900 text-purple-700 dark:text-purple-300 text-sm font-medium">
                🧠 类脑 AI
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
              神经调质系统（多巴胺 DA、5-羟色胺 5-HT、去甲肾上腺素 NE、乙酰胆碱 ACh）
              在大脑中实现学习速率的动态调节。本实验将带你实现 NCT 的神经调质门控机制，
              通过指数门控公式动态调节突触可塑性，显著提升时序关联学习能力。
              这是实现类脑决策和情感计算的关键技术。
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

# 运行神经调质门控实验
python experiments/run_optimized_training_v3.py`}</code>
            </pre>

            <h3 className="font-semibold text-gray-900 dark:text-white mb-4">
              方法 2：使用 Python API
            </h3>
            <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto text-sm">
              <code>{`from nct_modules import NCTManager, NCTConfig
from nct_hybrid_learning import NeuromodulatorSystem

# 创建配置
config = NCTConfig(
    n_heads=8,
    d_model=768,
    use_neuromodulation=True  # 启用神经调质
)

# 初始化神经调质系统
neuromodulator = NeuromodulatorSystem(
    da_weight=0.4,   # 多巴胺权重（奖励）
    ht_weight=0.3,   # 5-HT 权重（惩罚）
    ne_weight=0.2,   # NE 权重（警觉）
    ach_weight=0.1   # ACh 权重（注意力）
)

# 初始化并训练
manager = NCTManager(config, neuromodulator)
manager.train(data, epochs=30)

# 查看调质浓度变化
print(f"DA 变化：{neuromodulator.da_delta:.3f}")
print(f"有效学习率：{neuromodulator.effective_lr:.6f}")`}</code>
            </pre>
          </div>
        </div>
      </section>

      {/* Theory */}
      <section className="py-16 bg-gradient-to-r from-yellow-50 to-orange-50 dark:from-yellow-900/20 dark:to-orange-900/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            🧠 核心原理
          </h2>
          <div className="space-y-6">
            <div className="rounded-xl bg-white dark:bg-gray-900 p-6">
              <h3 className="font-semibold text-gray-900 dark:text-white mb-3">
                💊 四种关键神经调质
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="border-l-4 border-green-500 pl-4">
                  <h4 className="font-semibold text-green-900 dark:text-green-300 mb-2">
                    多巴胺 (DA)
                  </h4>
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    奖励预测误差，强化学习信号。当结果好于预期时释放，增强相关突触连接。
                  </p>
                </div>
                <div className="border-l-4 border-red-500 pl-4">
                  <h4 className="font-semibold text-red-900 dark:text-red-300 mb-2">
                    5-羟色胺 (5-HT)
                  </h4>
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    惩罚敏感性，风险规避。调节冲动控制和延迟满足能力。
                  </p>
                </div>
                <div className="border-l-4 border-blue-500 pl-4">
                  <h4 className="font-semibold text-blue-900 dark:text-blue-300 mb-2">
                    去甲肾上腺素 (NE)
                  </h4>
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    警觉度调节，应对不确定性。在意外事件发生时大量释放。
                  </p>
                </div>
                <div className="border-l-4 border-purple-500 pl-4">
                  <h4 className="font-semibold text-purple-900 dark:text-purple-300 mb-2">
                    乙酰胆碱 (ACh)
                  </h4>
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    注意力聚焦，增强可塑性。促进学习和记忆形成。
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-xl bg-white dark:bg-gray-900 p-6">
              <h3 className="font-semibold text-gray-900 dark:text-white mb-3">
                📐 数学公式
              </h3>
              <div className="bg-gray-900 text-gray-100 p-4 rounded-lg font-mono text-sm mb-4">
                η_effective = exp(Σ w_k · Δn_k)
              </div>
              <p className="text-gray-700 dark:text-gray-300 text-sm mb-4">
                其中 η_effective 是有效学习率，w_k 是调质权重，Δn_k 是调质浓度变化。
              </p>
              <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  <strong>示例计算：</strong>
                  <br />
                  DA↑ (+0.5), 5-HT↓ (-0.3), NE↑ (+0.2), ACh↑ (+0.1)
                  <br />
                  η = exp(0.4×0.5 + 0.3×(-0.3) + 0.2×0.2 + 0.1×0.1)
                  <br />
                  η = exp(0.20) ≈ 1.22（学习率提升 22%）
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            实验结果
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="rounded-xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
              <h3 className="font-semibold text-gray-900 dark:text-white mb-3">
                📈 性能提升
              </h3>
              <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                <li className="flex justify-between">
                  <span>时序关联学习:</span>
                  <span className="font-semibold text-green-600">+89%</span>
                </li>
                <li className="flex justify-between">
                  <span>效应量 (Cohen's d):</span>
                  <span className="font-semibold text-blue-600">1.41</span>
                </li>
                <li className="flex justify-between">
                  <span>收敛速度:</span>
                  <span className="font-semibold text-purple-600">快 2.3 倍</span>
                </li>
                <li className="flex justify-between">
                  <span>最终准确率:</span>
                  <span className="font-semibold text-indigo-600">+5.7%</span>
                </li>
              </ul>
            </div>
            <div className="rounded-xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
              <h3 className="font-semibold text-gray-900 dark:text-white mb-3">
                🎯 学习目标
              </h3>
              <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                <li>✅ 理解神经调质功能</li>
                <li>✅ 掌握门控机制实现</li>
                <li>✅ 学会调节调质权重</li>
                <li>✅ 能够分析实验结果</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Applications */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            🌐 应用场景
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="rounded-xl bg-white dark:bg-gray-800 p-4">
              <div className="text-2xl mb-2">🤖</div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">强化学习</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                奖励 shaping、策略优化
              </p>
            </div>
            <div className="rounded-xl bg-white dark:bg-gray-800 p-4">
              <div className="text-2xl mb-2">❤️</div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">情感计算</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                情绪建模、共情 AI
              </p>
            </div>
            <div className="rounded-xl bg-white dark:bg-gray-800 p-4">
              <div className="text-2xl mb-2">🎮</div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">游戏 AI</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                NPC 行为调节、自适应难度
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
            href="/docs/tutorials/cat-recognition"
            className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
          >
            猫识别实战 →
          </Link>
        </div>
      </div>
    </DocsLayout>
  );
}
