import Link from 'next/link';
import DocsLayout from '@/components/DocsLayout';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '时序异常检测 | NCT 预测编码应用',
  description: '使用时间序列数据进行异常检测，30 分钟理解预测编码机制和自由能计算。',
  keywords: ['异常检测', '时序数据', '预测编码', '自由能'],
  openGraph: {
    title: '时序异常检测 - NCT 预测编码应用',
    description: '工业监控和金融风控的利器',
  },
};

export default function AnomalyDetectionPage() {
  return (
    <DocsLayout 
      slug="tutorials"
      title="时序异常检测"
      description="使用时间序列数据进行异常检测，理解预测编码机制"
    >
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-green-50 to-white dark:from-gray-900 dark:to-black py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="max-w-4xl">
            <div className="flex items-center gap-3 mb-6">
              <span className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-green-100 dark:bg-green-900 text-green-600 dark:text-green-400 text-xl font-bold">
                📈
              </span>
              <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
                时序异常检测
              </h1>
            </div>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-6">
              使用时间序列数据进行异常检测，理解预测编码机制
            </p>
            <div className="flex flex-wrap gap-4">
              <span className="inline-flex items-center px-4 py-2 rounded-full bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300 text-sm font-medium">
                ⏱️ 30 分钟
              </span>
              <span className="inline-flex items-center px-4 py-2 rounded-full bg-yellow-100 dark:bg-yellow-900 text-yellow-700 dark:text-yellow-300 text-sm font-medium">
                📊 中级
              </span>
              <span className="inline-flex items-center px-4 py-2 rounded-full bg-purple-100 dark:bg-purple-900 text-purple-700 dark:text-purple-300 text-sm font-medium">
                🧪 异常检测
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
              本实验将带你使用 NCT 的预测编码机制进行时序数据异常检测。
              你将学习如何计算自由能（Free Energy）作为异常指标，设定合适的阈值，
              并评估模型在真实场景中的性能表现。这是 NCT 在工业监控、金融风控等领域的重要应用。
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
pip install torch numpy scipy matplotlib pandas

# 运行时序异常检测实验
python experiments/run_anomaly_detection.py`}</code>
            </pre>

            <h3 className="font-semibold text-gray-900 dark:text-white mb-4">
              方法 2：使用 Python API
            </h3>
            <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto text-sm">
              <code>{`from nct_modules import NCTManager, NCTConfig
from datasets import load_timeseries_data

# 加载时间序列数据
data = load_timeseries_data('./data/sensor_readings.csv')

# 创建配置（适合时序处理）
config = NCTConfig(
    n_heads=4,
    d_model=256,
    n_layers=4,
    use_predictive_coding=True  # 启用预测编码
)

# 初始化并训练
manager = NCTManager(config)
manager.train(data, epochs=20)

# 检测异常
anomalies = manager.detect_anomalies(
    test_data,
    threshold=2.5,  # 自由能阈值
    window_size=50
)

print(f"检测到 {len(anomalies)} 个异常点")`}</code>
            </pre>
          </div>
        </div>
      </section>

      {/* Theory */}
      <section className="py-16 bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            🧠 核心原理
          </h2>
          <div className="space-y-6">
            <div className="rounded-xl bg-white dark:bg-gray-900 p-6">
              <h3 className="font-semibold text-gray-900 dark:text-white mb-3">
                🎯 预测编码理论
              </h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                根据 Friston 的自由能原理，大脑通过最小化预测误差来感知世界。NCT 使用 Transformer Decoder 实现预测编码：
              </p>
              <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                <li>• <strong>生成模型：</strong>预测下一个时间步的数据</li>
                <li>• <strong>预测误差：</strong>实际值与预测值的差异</li>
                <li>• <strong>自由能：</strong>预测误差的对数似然下界</li>
                <li>• <strong>异常判定：</strong>自由能超过阈值 → 异常</li>
              </ul>
            </div>

            <div className="rounded-xl bg-white dark:bg-gray-900 p-6">
              <h3 className="font-semibold text-gray-900 dark:text-white mb-3">
                📐 数学公式
              </h3>
              <div className="bg-gray-900 text-gray-100 p-4 rounded-lg font-mono text-sm mb-4">
                F = -E_q[log p(x|z)] + D_KL(q(z|x) || p(z))
              </div>
              <p className="text-gray-700 dark:text-gray-300 text-sm">
                其中 F 是变分自由能，第一项是重构误差，第二项是 KL 散度。
                当自由能显著高于正常水平时，表明当前数据不符合 learned model，判定为异常。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Key Steps */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            关键步骤
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="rounded-xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
              <h3 className="font-semibold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
                <span>📊</span> 数据预处理
              </h3>
              <ul className="space-y-2 text-gray-700 dark:text-gray-300 text-sm">
                <li>• 归一化到 [0, 1] 区间</li>
                <li>• 滑动窗口切片（window_size=50）</li>
                <li>• 划分训练集/测试集</li>
                <li>• 添加人工噪声增强鲁棒性</li>
              </ul>
            </div>
            <div className="rounded-xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
              <h3 className="font-semibold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
                <span>🎚️</span> 阈值设定
              </h3>
              <ul className="space-y-2 text-gray-700 dark:text-gray-300 text-sm">
                <li>• 基于训练集自由能分布</li>
                <li>• 默认：μ + 2.5σ（95% 置信区间）</li>
                <li>• 可调参数平衡召回率和精确率</li>
                <li>• 支持动态自适应阈值</li>
              </ul>
            </div>
            <div className="rounded-xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
              <h3 className="font-semibold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
                <span>📈</span> 性能评估
              </h3>
              <ul className="space-y-2 text-gray-700 dark:text-gray-300 text-sm">
                <li>• 准确率（Accuracy）</li>
                <li>• 精确率（Precision）</li>
                <li>• 召回率（Recall）</li>
                <li>• F1-Score</li>
                <li>• AUC-ROC 曲线</li>
              </ul>
            </div>
            <div className="rounded-xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
              <h3 className="font-semibold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
                <span>🔍</span> 可视化分析
              </h3>
              <ul className="space-y-2 text-gray-700 dark:text-gray-300 text-sm">
                <li>• 原始数据 + 预测曲线</li>
                <li>• 自由能随时间变化</li>
                <li>• 异常点标记</li>
                <li>• 混淆矩阵</li>
              </ul>
            </div>
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
                📊 性能指标
              </h3>
              <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                <li className="flex justify-between">
                  <span>检测准确率:</span>
                  <span className="font-semibold text-green-600">~94.7%</span>
                </li>
                <li className="flex justify-between">
                  <span>精确率:</span>
                  <span className="font-semibold text-blue-600">~92.1%</span>
                </li>
                <li className="flex justify-between">
                  <span>召回率:</span>
                  <span className="font-semibold text-purple-600">~89.5%</span>
                </li>
                <li className="flex justify-between">
                  <span>F1-Score:</span>
                  <span className="font-semibold text-indigo-600">~0.908</span>
                </li>
              </ul>
            </div>
            <div className="rounded-xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
              <h3 className="font-semibold text-gray-900 dark:text-white mb-3">
                🎯 学习目标
              </h3>
              <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                <li>✅ 理解预测编码原理</li>
                <li>✅ 掌握自由能计算方法</li>
                <li>✅ 学会设定异常阈值</li>
                <li>✅ 能够评估检测性能</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Applications */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            🌐 实际应用场景
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="rounded-xl bg-white dark:bg-gray-800 p-4">
              <div className="text-2xl mb-2">🏭</div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">工业监控</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                设备故障预警、生产线异常检测
              </p>
            </div>
            <div className="rounded-xl bg-white dark:bg-gray-800 p-4">
              <div className="text-2xl mb-2">💰</div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">金融风控</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                信用卡欺诈检测、股市异常波动
              </p>
            </div>
            <div className="rounded-xl bg-white dark:bg-gray-800 p-4">
              <div className="text-2xl mb-2">🏥</div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">医疗健康</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                心电图异常检测、疾病早期预警
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
            href="/docs/tutorials/cifar10-full"
            className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
          >
            CIFAR-10 完整训练 →
          </Link>
        </div>
      </div>
    </DocsLayout>
  );
}
