import Link from 'next/link';
import ArchitectureDiagram from '@/components/ArchitectureDiagram';
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
  title: '技术框架 | NCT 重构 6 大意识理论',
  description: '深入了解 NCT 如何用 Transformer 统一 GWT、IIT、Predictive Coding、STDP、神经调质和γ振荡 6 大意识理论。',
  keywords: ['GWT', 'IIT', 'Predictive Coding', 'STDP', '意识理论', 'Transformer'],
  openGraph: {
    title: 'NCT 技术框架 - 6 大意识理论的 Transformer 统一',
    description: 'GWT、IIT、Predictive Coding 等 6 大理论的工程实现',
  },
};

export default function TechnologyPage() {
  const theories = [
    {
      title: '全局工作空间理论 (GWT)',
      icon: '🧠',
      description: 'Baars 的全局工作空间理论认为，意识是大脑中信息全局广播的结果。',
      nctImplementation: 'NCT 使用多头注意力机制实现全局工作空间，8 个注意力头分别负责不同功能：视觉/听觉显著性检测、情绪价值评估、任务相关性判断、新颖性检测。',
      improvement: '准确率从 75% 提升至 92% (+23%)',
    },
    {
      title: '整合信息论 (IIT)',
      icon: '🔗',
      description: 'Tononi 的 IIT 理论认为，意识是系统整合信息的度量，用Φ值表示。',
      nctImplementation: 'NCT 从 Attention Flow 计算Φ值，使用随机二分分割近似，将复杂度从 O(2^N) 降至 O(n²)，与精确计算相关性 r=0.978。',
      improvement: 'Φ值达到 0.329 (d=768)，提升 2.3 倍',
    },
    {
      title: '预测编码 (Predictive Coding)',
      icon: '🎯',
      description: 'Friston 的自由能原理认为，大脑通过最小化预测误差来感知世界。',
      nctImplementation: 'NCT 证明 Transformer Decoder 的训练目标等价于最小化变分自由能，统一了预测编码与深度学习。',
      improvement: '自由能降低 83.0%',
    },
    {
      title: 'STDP 可塑性',
      icon: '⚡',
      description: '脉冲时序依赖可塑性 (STDP) 是赫布学习的时间精细版本。',
      nctImplementation: 'NCT 提出 Transformer-STDP 混合学习：Δw = (δ_STDP + λ·δ_attention) · η_neuromodulator，结合局部时间关联与全局语义调制。',
      improvement: '收敛速度提升 5 倍，延迟 <2ms',
    },
    {
      title: '神经调质系统',
      icon: '💊',
      description: '多巴胺 (DA)、5-羟色胺 (5-HT)、去甲肾上腺素 (NE)、乙酰胆碱 (ACh) 调节学习速率。',
      nctImplementation: 'NCT 实现指数门控公式：η = exp(Σ w_k·Δn_k)，动态调节突触可塑性。',
      improvement: '时序关联学习提升 89% (Cohen\'s d = 1.41)',
    },
    {
      title: 'γ同步振荡',
      icon: '🌊',
      description: '40Hz 伽马振荡与意识知觉的时间整合相关。',
      nctImplementation: 'NCT 使用简化 PING 模型实现相位锁定，作为意识更新的周期信号。',
      improvement: '端到端延迟 69.7ms (d=768)，匹配 2.8 个γ周期',
    },
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-black">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-black py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="max-w-4xl">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white sm:text-5xl mb-6">
              理论框架
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
              NCT 重构了 6 大经典意识神经科学理论，实现了数学统一与工程落地
            </p>
          </div>
        </div>
      </section>

      {/* Theories Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="space-y-16">
            {theories.map((theory, index) => (
              <div
                key={index}
                className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start"
              >
                {/* Icon & Description */}
                <div className="lg:col-span-1">
                  <div className="inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-r from-blue-500 to-purple-500 text-3xl mb-4">
                    {theory.icon}
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                    {theory.title}
                  </h2>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                    {theory.description}
                  </p>
                </div>

                {/* Implementation & Improvement */}
                <div className="lg:col-span-2 space-y-6">
                  <div className="rounded-xl border border-gray-200 bg-gray-50 p-6 dark:border-gray-800 dark:bg-gray-900">
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                      NCT 实现方式
                    </h3>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                      {theory.nctImplementation}
                    </p>
                  </div>

                  <div className="rounded-xl bg-gradient-to-r from-green-500 to-emerald-500 p-6 text-white">
                    <h3 className="font-semibold mb-2">性能提升</h3>
                    <p className="text-lg">{theory.improvement}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Performance Charts */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            实验结果可视化
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

      {/* Architecture Diagram */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl text-center">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
            系统架构
          </h2>
          <div className="rounded-2xl bg-white dark:bg-gray-800 p-4 shadow-xl">
            <ArchitectureDiagram />
          </div>
          <p className="mt-6 text-sm text-gray-500 dark:text-gray-400">
            NCT 系统架构：多模态输入 → 特征编码 → Attention 工作空间（多候选竞争）→ 混合学习 + 预测编码 + Φ值计算
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl text-center">
          <h2 className="text-3xl font-bold text-white sm:text-4xl mb-6">
            深入了解技术细节
          </h2>
          <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
            阅读完整技术文档，了解 NCT 的工程实现
          </p>
          <Link
            href="/docs"
            className="inline-flex items-center justify-center rounded-full bg-white px-8 py-3.5 text-base font-medium text-blue-600 hover:bg-gray-100 transition-colors"
          >
            查看文档 →
          </Link>
        </div>
      </section>
    </div>
  );
}
