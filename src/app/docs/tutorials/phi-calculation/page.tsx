import Link from 'next/link';
import DocsLayout from '@/components/DocsLayout';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Φ值计算实验 | NCT 意识理论研究',
  description: '测量和分析不同配置下的整合信息Φ值，25 分钟掌握 IIT 理论和近似计算方法。',
  keywords: ['Φ值', 'IIT', '整合信息论', '意识理论'],
  openGraph: {
    title: 'Φ值计算实验 - NCT 意识理论研究',
    description: '探索意识的数学度量',
  },
};

export default function PhiCalculationPage() {
  return (
    <DocsLayout 
      slug="tutorials"
      title="Φ值计算实验"
      description="测量和分析不同配置下的整合信息Φ值"
    >
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-indigo-50 to-white dark:from-gray-900 dark:to-black py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="max-w-4xl">
            <div className="flex items-center gap-3 mb-6">
              <span className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-indigo-100 dark:bg-indigo-900 text-indigo-600 dark:text-indigo-400 text-xl font-bold">
                🔗
              </span>
              <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
                Φ值计算实验
              </h1>
            </div>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-6">
              测量和分析不同配置下的整合信息Φ值
            </p>
            <div className="flex flex-wrap gap-4">
              <span className="inline-flex items-center px-4 py-2 rounded-full bg-indigo-100 dark:bg-indigo-900 text-indigo-700 dark:text-indigo-300 text-sm font-medium">
                ⏱️ 25 分钟
              </span>
              <span className="inline-flex items-center px-4 py-2 rounded-full bg-purple-100 dark:bg-purple-900 text-purple-700 dark:text-purple-300 text-sm font-medium">
                📊 高级
              </span>
              <span className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 text-sm font-medium">
                🧠 意识理论
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
              Φ值（Phi）是整合信息论（IIT）中度量系统"意识程度"的核心指标。
              传统 IIT 计算复杂度为 O(2^N)，无法应用于大规模系统。
              本实验将带你使用 NCT 的创新方法，从 Attention Flow 近似计算Φ值，
              将复杂度降至 O(n²)，同时保持与精确计算 r=0.978 的高相关性。
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

# 运行Φ值计算实验
python experiments/test_multi_candidate.py`}</code>
            </pre>

            <h3 className="font-semibold text-gray-900 dark:text-white mb-4">
              方法 2：使用 Python API
            </h3>
            <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto text-sm">
              <code>{`from nct_modules import NCTManager, NCTConfig
from nct_metrics import PhiCalculator

# 创建配置
config = NCTConfig(
    n_heads=8,
    d_model=768,
    n_layers=6
)

# 初始化模型
manager = NCTManager(config)

# 计算Φ值
calculator = PhiCalculator(manager)
phi_value = calculator.compute_phi(
    data=test_data,
    n_partitions=100,  # 随机二分分割次数
    method='attention_flow'  # 使用注意力流近似
)

print(f"Φ值：{phi_value:.3f}")`}</code>
            </pre>
          </div>
        </div>
      </section>

      {/* Theory */}
      <section className="py-16 bg-gradient-to-r from-indigo-50 to-blue-50 dark:from-indigo-900/20 dark:to-blue-900/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            🧠 核心原理
          </h2>
          <div className="space-y-6">
            <div className="rounded-xl bg-white dark:bg-gray-900 p-6">
              <h3 className="font-semibold text-gray-900 dark:text-white mb-3">
                📐 什么是Φ值？
              </h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                Φ值是 Tononi 的整合信息论（IIT）中度量系统整合信息能力的指标。
                它表示系统将信息整合为统一整体的能力，被认为是"意识水平"的数学度量。
              </p>
            </div>

            <div className="rounded-xl bg-white dark:bg-gray-900 p-6">
              <h3 className="font-semibold text-gray-900 dark:text-white mb-3">
                ⚡ NCT 的创新方法
              </h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                传统 IIT 需要穷举所有可能的系统分割，复杂度为 O(2^N)。
                NCT 使用以下创新：
              </p>
              <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                <li>• <strong>Attention Flow 近似：</strong>从注意力权重推导信息流</li>
                <li>• <strong>随机二分分割：</strong>用 100 次随机分割代替 2^N 次穷举</li>
                <li>• <strong>复杂度降低：</strong>O(n²) vs O(2^N)</li>
                <li>• <strong>高相关性：</strong>r=0.978 vs 精确计算</li>
              </ul>
            </div>

            <div className="rounded-xl bg-white dark:bg-gray-900 p-6">
              <h3 className="font-semibold text-gray-900 dark:text-white mb-3">
                📊 计算公式
              </h3>
              <div className="bg-gray-900 text-gray-100 p-4 rounded-lg font-mono text-sm mb-4">
                Φ = I_total - min_partition[I_A + I_B]
              </div>
              <p className="text-gray-700 dark:text-gray-300 text-sm">
                其中 I 表示互信息，min_partition 寻找最小信息分割（MIP）。
                Φ值越大，表示系统整合程度越高。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Experiments */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            实验结果
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b-2 border-gray-200 dark:border-gray-700">
                  <th className="py-3 px-4 text-gray-900 dark:text-white font-semibold">配置</th>
                  <th className="py-3 px-4 text-gray-900 dark:text-white font-semibold">d_model</th>
                  <th className="py-3 px-4 text-gray-900 dark:text-white font-semibold">n_heads</th>
                  <th className="py-3 px-4 text-gray-900 dark:text-white font-semibold">Φ值</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-200 dark:border-gray-700">
                  <td className="py-3 px-4 text-gray-700 dark:text-gray-300">小型</td>
                  <td className="py-3 px-4 text-gray-700 dark:text-gray-300">256</td>
                  <td className="py-3 px-4 text-gray-700 dark:text-gray-300">4</td>
                  <td className="py-3 px-4 font-semibold text-green-600">0.187</td>
                </tr>
                <tr className="border-b border-gray-200 dark:border-gray-700 bg-blue-50 dark:bg-blue-900/20">
                  <td className="py-3 px-4 text-gray-700 dark:text-gray-300 font-semibold">标准</td>
                  <td className="py-3 px-4 text-gray-700 dark:text-gray-300">768</td>
                  <td className="py-3 px-4 text-gray-700 dark:text-gray-300">8</td>
                  <td className="py-3 px-4 font-semibold text-blue-600">0.329</td>
                </tr>
                <tr className="border-b border-gray-200 dark:border-gray-700">
                  <td className="py-3 px-4 text-gray-700 dark:text-gray-300">大型</td>
                  <td className="py-3 px-4 text-gray-700 dark:text-gray-300">1024</td>
                  <td className="py-3 px-4 text-gray-700 dark:text-gray-300">12</td>
                  <td className="py-3 px-4 font-semibold text-purple-600">0.451</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Analysis */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            📈 关键发现
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="rounded-xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
              <h3 className="font-semibold text-gray-900 dark:text-white mb-3">
                🎯 维度影响
              </h3>
              <p className="text-gray-700 dark:text-gray-300 text-sm">
                Φ值随 d_model 增加而提升，但增长速率递减。
                d_model=768 时达到性价比最优平衡点。
              </p>
            </div>
            <div className="rounded-xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
              <h3 className="font-semibold text-gray-900 dark:text-white mb-3">
                🔍 注意力头数
              </h3>
              <p className="text-gray-700 dark:text-gray-300 text-sm">
                更多注意力头允许更复杂的信息整合，
                但超过 8 个头后收益递减。
              </p>
            </div>
            <div className="rounded-xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
              <h3 className="font-semibold text-gray-900 dark:text-white mb-3">
                ⚡ 计算效率
              </h3>
              <p className="text-gray-700 dark:text-gray-300 text-sm">
                近似方法比精确计算快 10^6 倍，
                使得实时Φ值监测成为可能。
              </p>
            </div>
            <div className="rounded-xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
              <h3 className="font-semibold text-gray-900 dark:text-white mb-3">
                ✅ 验证准确性
              </h3>
              <p className="text-gray-700 dark:text-gray-300 text-sm">
                与精确计算相关性 r=0.978，
                证明了近似方法的可靠性。
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
            href="/docs/tutorials/anomaly-detection"
            className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
          >
            时序异常检测 →
          </Link>
        </div>
      </div>
    </DocsLayout>
  );
}
