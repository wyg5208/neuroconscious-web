import Link from 'next/link';
import DocsLayout from '@/components/DocsLayout';
import dynamic from 'next/dynamic';
import type { Metadata } from 'next';

// 懒加载图表组件
const FreeEnergyChart = dynamic(() => import('@/components/charts/FreeEnergyChart'), {
  loading: () => <div className="w-full h-[400px] bg-gray-100 dark:bg-gray-800 rounded-xl animate-pulse" />
});
const STDPComparisonChart = dynamic(() => import('@/components/charts/STDPComparisonChart'), {
  loading: () => <div className="w-full h-[400px] bg-gray-100 dark:bg-gray-800 rounded-xl animate-pulse" />
});
const AblationStudyChart = dynamic(() => import('@/components/charts/AblationStudyChart'), {
  loading: () => <div className="w-full h-[400px] bg-gray-100 dark:bg-gray-800 rounded-xl animate-pulse" />
});

export const metadata: Metadata = {
  title: '实验教程 | NCT 实战指南',
  description: '6 个完整实验项目：MNIST、CIFAR-10、异常检测、Φ值计算、猫识别、神经调质门控，从零开始动手实践。',
  keywords: ['NCT 实验', 'MNIST', 'CIFAR-10', '异常检测', '实战教程'],
  openGraph: {
    title: 'NCT 实验教程 - 6 个完整实战项目',
    description: '从 MNIST 到猫识别，循序渐进的完整实验指南',
  },
};

export default function TutorialsPage() {
  const tutorials = [
    {
      title: 'MNIST Few-Shot 学习',
      level: '初级',
      duration: '15 分钟',
      file: 'exp_mnist_few_shot.py',
      description: '使用 NCT 进行少样本图像分类，理解基本工作流程',
      concepts: ['数据加载', '配置设置', '训练循环', '评估指标'],
      color: 'from-blue-500 to-cyan-500',
      slug: 'mnist-few-shot',
    },
    {
      title: 'CIFAR-10 完整训练',
      level: '中级',
      duration: '45 分钟',
      file: 'run_cifar10_full.py',
      description: '在 CIFAR-10 数据集上训练 NCT，掌握超参数调优',
      concepts: ['数据增强', '学习率调度', '模型保存', '可视化'],
      color: 'from-purple-500 to-pink-500',
      slug: 'cifar10-full',
    },
    {
      title: '时序异常检测',
      level: '中级',
      duration: '30 分钟',
      file: 'run_anomaly_detection.py',
      description: '使用时间序列数据进行异常检测，理解预测编码机制',
      concepts: ['预测编码', '自由能计算', '阈值设定', '性能评估'],
      color: 'from-green-500 to-emerald-500',
      slug: 'anomaly-detection',
    },
    {
      title: '猫识别实战',
      level: '高级',
      duration: '60 分钟',
      file: 'run_cat_recognition.py',
      description: '实际应用场景：从图像中识别猫，多模态融合示例',
      concepts: ['跨模态融合', '特征提取', '迁移学习', '部署优化'],
      color: 'from-orange-500 to-red-500',
      slug: 'cat-recognition',
    },
    {
      title: 'Φ值计算实验',
      level: '高级',
      duration: '25 分钟',
      file: 'test_multi_candidate.py',
      description: '测量和分析不同配置下的整合信息Φ值',
      concepts: ['Φ计算器', '信息整合', '分割分析', '统计验证'],
      color: 'from-indigo-500 to-blue-500',
      slug: 'phi-calculation',
    },
    {
      title: '神经调质门控实验',
      level: '高级',
      duration: '35 分钟',
      file: 'run_optimized_training_v3.py',
      description: '探索多巴胺、5-HT 等神经调质对学习的影响',
      concepts: ['神经调质', '门控机制', '时序关联', '强化学习'],
      color: 'from-yellow-500 to-orange-500',
      slug: 'neuromodulator-gating',
    },
  ];

  const steps = [
    {
      number: '01',
      title: '环境准备',
      description: '安装必要的依赖包',
      code: 'pip install torch numpy scipy matplotlib',
    },
    {
      number: '02',
      title: '选择实验',
      description: '根据兴趣和需求选择教程',
      code: 'cd experiments',
    },
    {
      number: '03',
      title: '运行脚本',
      description: '执行 Python 脚本开始实验',
      code: 'python <script_name>.py',
    },
    {
      number: '04',
      title: '查看结果',
      description: '分析输出和可视化图表',
      code: '# 结果保存在 results/ 目录',
    },
  ];

  return (
    <DocsLayout 
      slug="tutorials"
      title="实验教程"
      description="MNIST、CIFAR-10 等完整实验示例"
    >
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-black py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="max-w-4xl">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white sm:text-5xl mb-6">
              实验教程
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              从零开始，亲手实践 NCT 的强大功能
            </p>
          </div>
        </div>
      </section>

      {/* Quick Start Steps */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-12 text-center">
            快速开始
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-12 left-full w-full h-0.5 bg-gradient-to-r from-blue-600 to-transparent -translate-x-8 z-0" />
                )}
                <div className="relative z-10">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white text-2xl font-bold mb-4">
                    {step.number}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-3">
                    {step.description}
                  </p>
                  {step.code && (
                    <code className="block text-sm bg-gray-900 text-gray-100 p-3 rounded-lg overflow-x-auto">
                      {step.code}
                    </code>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tutorials Grid */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-12 text-center">
            实验列表
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {tutorials.map((tutorial, index) => (
              <div
                key={index}
                className="group rounded-2xl border border-gray-200 bg-white p-6 transition-all hover:shadow-xl hover:-translate-y-1 dark:border-gray-800 dark:bg-gray-900"
              >
                {/* Header */}
                <div className={`inline-flex items-center rounded-full bg-gradient-to-r ${tutorial.color} px-3 py-1 text-xs font-medium text-white mb-4`}>
                  {tutorial.level}
                </div>

                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  {tutorial.title}
                </h3>

                <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400 mb-4">
                  <span>⏱️ {tutorial.duration}</span>
                  <span>📄 {tutorial.file}</span>
                </div>

                <p className="text-gray-600 dark:text-gray-400 mb-6">
                  {tutorial.description}
                </p>

                {/* Concepts */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {tutorial.concepts.map((concept, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-xs"
                    >
                      {concept}
                    </span>
                  ))}
                </div>

                {/* Action Button */}
                <Link
                  href={`/docs/tutorials/${tutorial.slug || '#'}`}
                  className="block w-full py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-medium hover:opacity-90 transition-opacity text-center"
                >
                  开始实验
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Results Gallery */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
            实验结果展示
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <FreeEnergyChart />
            <STDPComparisonChart />
          </div>
          <div className="mt-8">
            <AblationStudyChart />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl text-center">
          <h2 className="text-3xl font-bold text-white sm:text-4xl mb-6">
            准备好开始实验了吗？
          </h2>
          <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
            下载源代码，立即动手实践
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://github.com/wyg5208/nct"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-white px-8 py-3.5 text-base font-medium text-blue-600 hover:bg-gray-100 transition-colors"
            >
              GitHub 下载代码
            </a>
            <Link
              href="/docs/api"
              className="inline-flex items-center justify-center rounded-full border-2 border-white px-8 py-3.5 text-base font-medium text-white hover:bg-white/10 transition-colors"
            >
              API 参考文档
            </Link>
          </div>
        </div>
      </section>
    </DocsLayout>
  );
}
