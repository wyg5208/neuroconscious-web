'use client';

import Link from 'next/link';
import { useNCT } from '@/lib/useTranslation';
import { Suspense } from 'react';

function QuickstartPageContent() {
  const nct = useNCT();
  
  const experiments = [
    { name: 'MNIST Few-Shot', file: 'exp_mnist_few_shot.py', desc: nct.quickstart.expMnist },
    { name: 'CIFAR-10', file: 'run_cifar10_full.py', desc: nct.quickstart.expCifar },
    { name: 'Anomaly Detection', file: 'run_anomaly_detection.py', desc: nct.quickstart.expAnomaly },
    { name: 'Cat Recognition', file: 'run_cat_recognition.py', desc: nct.quickstart.expCat },
  ];

  const dashboardItems = [
    nct.quickstart.dashboardPhi,
    nct.quickstart.dashboardFreeEnergy,
    nct.quickstart.dashboardAttention,
    nct.quickstart.dashboardCompetition,
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-black">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-black py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="max-w-4xl">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white sm:text-5xl mb-6">
              {nct.quickstart.title}
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              {nct.quickstart.subtitle}
            </p>
          </div>
        </div>
      </section>

      {/* Installation */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="max-w-3xl">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              {nct.quickstart.step1Title}
            </h2>
            <div className="rounded-xl bg-gray-900 p-6 overflow-x-auto">
              <pre className="text-sm text-gray-100 font-mono">
                <code>pip install torch numpy scipy</code>
              </pre>
            </div>
            <p className="mt-4 text-gray-700 dark:text-gray-300">
              {nct.quickstart.step1Desc}
            </p>
          </div>
        </div>
      </section>

      {/* Basic Usage */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              {nct.quickstart.step2Title}
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
              {nct.quickstart.step3Title}
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
              {nct.quickstart.step4Title}
            </h2>
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              {nct.quickstart.step4Desc}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {experiments.map((exp, index) => (
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
              {nct.quickstart.step5Title}
            </h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              {nct.quickstart.step5Desc}
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 mb-6">
              {dashboardItems.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
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
              {nct.quickstart.nextStepsTitle}
            </h2>
            <p className="text-lg text-blue-100 mb-8">
              {nct.quickstart.nextStepsDesc}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/docs/api"
                className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-base font-medium text-blue-600 hover:bg-gray-100 transition-colors"
              >
                {nct.quickstart.nextApi}
              </Link>
              <Link
                href="/docs/tutorials"
                className="inline-flex items-center justify-center rounded-full border-2 border-white px-6 py-3 text-base font-medium text-white hover:bg-white/10 transition-colors"
              >
                {nct.quickstart.nextTutorials}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default function QuickstartContent() {
  return (
    <Suspense fallback={null}>
      <QuickstartPageContent />
    </Suspense>
  );
}
