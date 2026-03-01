const features = [
  {
    icon: '🧠',
    title: 'Attention 工作空间',
    description: '用多头注意力机制替代简单竞争，实现 92% 的意识选择准确率（+23%）',
    gradient: 'from-blue-500 to-cyan-500',
  },
  {
    icon: '🔗',
    title: 'Transformer-STDP 混合学习',
    description: '局部时间可塑性 + 全局语义调制，收敛速度提升 5 倍',
    gradient: 'from-purple-500 to-pink-500',
  },
  {
    icon: '📊',
    title: 'Φ计算器',
    description: '从 Attention Flow 近似整合信息，O(n²) 复杂度解决 NP-hard 问题',
    gradient: 'from-green-500 to-emerald-500',
  },
  {
    icon: '🎯',
    title: '预测编码=Decoder 训练',
    description: 'Friston 自由能原理 = Transformer 训练目标的数学统一',
    gradient: 'from-orange-500 to-red-500',
  },
  {
    icon: '🌐',
    title: 'Cross-Modal 融合',
    description: '多模态语义级对齐，NCC 从 0.6 提升至 0.82（+42%）',
    gradient: 'from-indigo-500 to-blue-500',
  },
  {
    icon: '⚡',
    title: 'γ同步机制',
    description: '40Hz 伽马振荡作为意识更新周期，69.7ms 端到端延迟',
    gradient: 'from-yellow-500 to-orange-500',
  },
];

export default function FeaturesSection() {
  return (
    <section className="py-20 bg-white dark:bg-black">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl mb-4">
            六大核心创新
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            NCT 重构了经典意识神经科学理论，实现了六项关键技术突破
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl border border-gray-200 bg-white p-8 transition-all hover:shadow-xl hover:-translate-y-1 dark:border-gray-800 dark:bg-gray-900"
            >
              {/* Icon */}
              <div className={`inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-r ${feature.gradient} text-2xl mb-4`}>
                {feature.icon}
              </div>

              {/* Title */}
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                {feature.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                {feature.description}
              </p>

              {/* Decorative gradient orb */}
              <div className={`absolute -right-16 -bottom-16 h-32 w-32 rounded-full bg-gradient-to-r ${feature.gradient} opacity-10 blur-2xl group-hover:opacity-20 transition-opacity`} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
