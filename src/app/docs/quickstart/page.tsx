import Link from 'next/link';
import DocsLayout from '@/components/DocsLayout';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '快速开始 | NCT 5 分钟入门指南',
  description: '5 分钟快速了解 NCT 的基本使用方法，包含安装步骤和第一个示例代码。',
  keywords: ['NCT 快速开始', '入门教程', '安装指南'],
  openGraph: {
    title: 'NCT 快速开始 - 5 分钟入门',
    description: '从零开始学习 NCT',
  },
};

export default function QuickStartPage() {
  return (
    <DocsLayout 
      slug="quickstart"
      title="快速开始"
      description="5 分钟快速了解 NCT 的基本使用方法"
    >
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-black py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="max-w-4xl">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white sm:text-5xl mb-6">
              快速开始
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              5 分钟快速了解 NCT 的基本使用方法
            </p>
          </div>
        </div>
      </section>

      {/* Installation */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="max-w-3xl">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              1. 安装依赖
            </h2>
            <div className="rounded-xl bg-gray-900 p-6 overflow-x-auto">
              <pre className="text-sm text-gray-100 font-mono">
                <code>pip install torch numpy scipy</code>
              </pre>
            </div>
            <p className="mt-4 text-gray-700 dark:text-gray-300">
              NCT 的核心依赖非常简单，只需要 PyTorch、NumPy 和 SciPy。建议使用 Python 3.8+ 和 PyTorch 2.0+。
            </p>
          </div>
        </div>
      </section>

      {/* Basic Usage */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              2. 基本使用
            </h2>
            <div className="rounded-xl bg-gray-900 p-6 overflow-x-auto">
              <pre className="text-sm text-gray-100 font-mono">
{`from nct_modules import NCTManager, NCTConfig

# 创建配置
config = NCTConfig(
    n_heads=8,        # 注意力头数
    n_layers=6,       # Transformer 层数
    d_model=768,      # 模型维度
)

# 创建管理器
manager = NCTManager(config)

# 运行一个处理周期
sensory_data = generate_sensory_input()
state = manager.process_cycle(sensory_data)

# 查看结果
print(f"Φ值：{state.phi}")
print(f"自由能：{state.free_energy}")`}
              </pre>
            </div>
          </div>
        </div>
      </section>

      {/* Run Examples */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="max-w-3xl">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              3. 运行示例
            </h2>
            <div className="space-y-4">
              <div className="rounded-xl bg-gray-900 p-6 overflow-x-auto">
                <pre className="text-sm text-gray-100 font-mono">
                  <code># 运行快速示例
cd examples
python quickstart.py</code>
                </pre>
              </div>
              <div className="rounded-xl bg-gray-900 p-6 overflow-x-auto">
                <pre className="text-sm text-gray-100 font-mono">
                  <code># 运行测试
cd tests
python test_basic.py</code>
                </pre>
              </div>
              <div className="rounded-xl bg-gray-900 p-6 overflow-x-auto">
                <pre className="text-sm text-gray-100 font-mono">
                  <code># 运行完整实验
python experiments/run_all_experiments.py</code>
                </pre>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experiment Scripts */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="max-w-3xl">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              4. 实验脚本
            </h2>
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              NCT 提供了丰富的实验脚本，涵盖不同的应用场景：
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { name: 'MNIST Few-Shot', file: 'exp_mnist_few_shot.py', desc: '少样本学习实验' },
                { name: 'CIFAR-10 识别', file: 'run_cifar10_full.py', desc: '完整图像识别' },
                { name: '异常检测', file: 'run_anomaly_detection.py', desc: '时序异常检测' },
                { name: '猫识别', file: 'run_cat_recognition.py', desc: '实际应用场景' },
              ].map((exp, index) => (
                <div
                  key={index}
                  className="rounded-lg border border-gray-200 bg-white p-4 dark:border-gray-800 dark:bg-gray-900"
                >
                  <code className="text-sm font-semibold text-blue-600 dark:text-blue-400">
                    {exp.file}
                  </code>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                    {exp.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Visualization */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="max-w-3xl">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              5. 可视化 Dashboard
            </h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              NCT 提供实时的 Streamlit 可视化 Dashboard，可以监控：
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 mb-6">
              <li>Φ值动态变化</li>
              <li>自由能下降曲线</li>
              <li>注意力权重热图</li>
              <li>多候选竞争过程</li>
            </ul>
            <div className="rounded-xl bg-gray-900 p-6 overflow-x-auto">
              <pre className="text-sm text-gray-100 font-mono">
                <code># 启动 Dashboard
pip install streamlit plotly pandas
streamlit run visualization/nct_dashboard.py</code>
              </pre>
            </div>
          </div>
        </div>
      </section>

      {/* Next Steps */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl text-center">
            <h2 className="text-2xl font-bold text-white mb-6">
              下一步
            </h2>
            <p className="text-lg text-blue-100 mb-8">
              现在你已经掌握了 NCT 的基本使用方法！继续深入学习：
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/docs/api"
                className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-base font-medium text-blue-600 hover:bg-gray-100 transition-colors"
              >
                API 参考
              </Link>
              <Link
                href="/docs/tutorials"
                className="inline-flex items-center justify-center rounded-full border-2 border-white px-6 py-3 text-base font-medium text-white hover:bg-white/10 transition-colors"
              >
                实验教程
              </Link>
            </div>
          </div>
        </div>
      </section>
    </DocsLayout>
  );
}
