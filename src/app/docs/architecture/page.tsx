import Link from 'next/link';
import ArchitectureDiagram from '@/components/ArchitectureDiagram';
import DocsLayout from '@/components/DocsLayout';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '架构说明 | NCT 核心模块详解',
  description: '深入了解 NCT 的 8 大核心模块：NCTManager、Attention Workspace、多候选竞争、STDP 学习等。',
  keywords: ['NCT 架构', '模块设计', 'Attention', '多候选竞争'],
  openGraph: {
    title: 'NCT 架构说明 - 核心模块详解',
    description: '8 大核心模块的技术实现细节',
  },
};

export default function ArchitecturePage() {
  const modules = [
    {
      name: 'NCTManager',
      file: 'nct_manager.py',
      icon: '🎯',
      color: 'from-blue-500 to-cyan-500',
      description: '主控制器，协调所有模块的工作流程',
      responsibilities: [
        '初始化配置和模块加载',
        '管理处理周期（process_cycle）',
        '状态跟踪和日志记录',
        '异常处理和恢复机制',
      ],
      keyMethods: [
        '__init__(config)',
        'process_cycle(sensory_data)',
        'get_state()',
        'reset()',
      ],
    },
    {
      name: 'NCTConfig',
      file: 'nct_core.py',
      icon: '⚙️',
      color: 'from-purple-500 to-pink-500',
      description: '配置中心，定义所有超参数和架构设置',
      responsibilities: [
        '模型维度配置（d_model, n_heads, n_layers）',
        '多候选参数（n_candidates）',
        '学习率和优化器设置',
        'γ同步频率等生物参数',
      ],
      keyProperties: [
        'd_model=768',
        'n_heads=8',
        'n_layers=6',
        'n_candidates=4',
        'gamma_freq=40.0',
      ],
    },
    {
      name: 'AttentionWorkspace',
      file: 'nct_workspace.py',
      icon: '🧠',
      color: 'from-green-500 to-emerald-500',
      description: '注意力工作空间，实现全局广播和多候选竞争',
      responsibilities: [
        '多头自注意力计算（8 头）',
        '显著性分数计算',
        'Winner-take-all 竞争机制',
        '侧抑制和动态选择',
      ],
      keyMethods: [
        'forward(x)',
        'compute_salience(candidates)',
        'select_winner(attention_weights)',
      ],
      innovation: '用 Transformer 注意力替代简单竞争，准确率提升 23%',
    },
    {
      name: 'PhiCalculator',
      file: 'nct_metrics.py',
      icon: '📊',
      color: 'from-orange-500 to-red-500',
      description: 'Φ值计算器，度量整合信息（IIT 理论核心）',
      responsibilities: [
        '从 Attention Flow 计算Φ值',
        '随机二分分割近似算法',
        '互信息矩阵分析',
        '最小信息分割搜索',
      ],
      keyMethods: [
        'compute_phi(attention_maps)',
        'find_min_partition(mi_matrix)',
        'calculate_mutual_information(matrix)',
      ],
      performance: 'O(n²) 复杂度，r=0.978 相关性，Φ=0.329 (d=768)',
    },
    {
      name: 'HybridLearning',
      file: 'nct_hybrid_learning.py',
      icon: '🔗',
      color: 'from-indigo-500 to-blue-500',
      description: 'Transformer-STDP 混合学习机制',
      responsibilities: [
        'STDP 时间依赖可塑性',
        '注意力梯度调制',
        '神经调质门控（DA/5-HT/NE/ACh）',
        '突触权重更新',
      ],
      keyMethods: [
        'apply_stdp(pre_spike, post_spike)',
        'neuromodulate(delta_w, modulators)',
        'hybrid_update(local_delta, global_delta)',
      ],
      formula: 'Δw = (δ_STDP + λ·δ_attention) · η_neuromodulator',
      improvement: '收敛速度提升 5 倍，延迟 <2ms',
    },
    {
      name: 'PredictiveCoding',
      file: 'nct_predictive_coding.py',
      icon: '🎯',
      color: 'from-yellow-500 to-orange-500',
      description: '预测编码模块，实现自由能最小化',
      responsibilities: [
        '生成自上而下的预测',
        '计算预测误差（自由能）',
        '更新隐变量减少误差',
        '层级化预测编码',
      ],
      keyMethods: [
        'predict(latent_state)',
        'compute_free_energy(pred, actual)',
        'update_latents(error)',
      ],
      theory: 'Friston 自由能原理 = Transformer 训练目标',
      result: '自由能降低 83.0%',
    },
    {
      name: 'CrossModal',
      file: 'nct_cross_modal.py',
      icon: '🌐',
      color: 'from-pink-500 to-rose-500',
      description: '跨模态融合模块，语义级多模态对齐',
      responsibilities: [
        'Cross-Attention 特征融合',
        '模态间语义对齐',
        '注意力权重分配',
        '特征投影到共享空间',
      ],
      keyMethods: [
        'fuse(modal1_features, modal2_features)',
        'align(multiple_modalities)',
        'compute_cross_attention(Q, K, V)',
      ],
      application: '视觉 + 听觉 + 文本的语义融合',
      metric: 'NCC 从 0.6 提升至 0.82 (+42%)',
    },
    {
      name: 'GammaSync',
      file: 'nct_gamma_sync.py',
      icon: '⚡',
      color: 'from-teal-500 to-cyan-500',
      description: 'γ同步机制，模拟 40Hz 振荡节律',
      responsibilities: [
        '生成γ相位信号（40Hz）',
        '相位锁定和同步',
        '更新周期控制（~25ms）',
        '跨脑区协调',
      ],
      keyMethods: [
        'generate_phase(t)',
        'phase_lock(signals)',
        'compute_phase_difference(signal1, signal2)',
      ],
      biology: '简化 PING 模型（Pyramidal-Interneuronal Gamma）',
      timing: '69.7ms 端到端延迟 ≈ 2.8 个γ周期',
    },
  ];

  const dataflow = [
    { stage: '输入', desc: '多模态感官数据', icon: '📥' },
    { stage: '编码', desc: '特征提取和投影', icon: '🔧' },
    { stage: '工作空间', desc: '多候选竞争与选择', icon: '🧠' },
    { stage: '学习', desc: 'STDP+Attention 更新', icon: '📈' },
    { stage: '预测', desc: '自由能最小化', icon: '🎯' },
    { stage: '输出', desc: '意识表征和行为', icon: '📤' },
  ];

  return (
    <DocsLayout 
      slug="architecture"
      title="架构说明"
      description="NCT 核心模块的详细技术说明"
    >
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-black py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="max-w-4xl">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white sm:text-5xl mb-6">
              系统架构
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              深入理解 NCT 的 8 大核心模块和数据流
            </p>
          </div>
        </div>
      </section>

      {/* Architecture Diagram */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            整体架构图
          </h2>
          <div className="rounded-2xl bg-white dark:bg-gray-800 p-4 shadow-xl">
            <ArchitectureDiagram />
          </div>
          <p className="mt-6 text-center text-sm text-gray-500 dark:text-gray-400">
            NCT 系统架构：多模态输入 → 特征编码 → Attention 工作空间（多候选竞争）→ 混合学习 + 预测编码 + Φ值计算
          </p>
        </div>
      </section>

      {/* Data Flow */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-12 text-center">
            数据处理流程
          </h2>
          <div className="flex flex-wrap justify-center items-center gap-4">
            {dataflow.map((item, index) => (
              <div key={index} className="flex items-center">
                <div className="flex flex-col items-center">
                  <div className="w-20 h-20 rounded-2xl bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center text-3xl text-white shadow-lg">
                    {item.icon}
                  </div>
                  <div className="mt-3 text-center">
                    <div className="font-semibold text-gray-900 dark:text-white">
                      {item.stage}
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">
                      {item.desc}
                    </div>
                  </div>
                </div>
                {index < dataflow.length - 1 && (
                  <div className="mx-4 text-2xl text-gray-400">→</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Module Details */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-12 text-center">
            8 大核心模块详解
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {modules.map((module, index) => (
              <div
                key={index}
                className="rounded-2xl border border-gray-200 bg-white p-8 transition-all hover:shadow-xl dark:border-gray-800 dark:bg-gray-900"
              >
                {/* Header */}
                <div className="flex items-start gap-4 mb-6">
                  <div className={`inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-r ${module.color} text-3xl`}>
                    {module.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
                      {module.name}
                    </h3>
                    <code className="text-xs bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded text-blue-600 dark:text-blue-400">
                      {module.file}
                    </code>
                  </div>
                </div>

                {/* Description */}
                <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
                  {module.description}
                </p>

                {/* Responsibilities */}
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                    核心职责
                  </h4>
                  <ul className="space-y-1 text-gray-700 dark:text-gray-300">
                    {module.responsibilities.map((resp, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-green-500 mt-1">✓</span>
                        <span>{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Methods or Properties */}
                <div className="mb-4">
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                    {module.keyMethods ? '关键方法' : '关键属性'}
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {(module.keyMethods || module.keyProperties).map((item, idx) => (
                      <code
                        key={idx}
                        className="px-3 py-1.5 bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-lg text-sm font-mono"
                      >
                        {item}
                      </code>
                    ))}
                  </div>
                </div>

                {/* Performance/Innovation */}
                {(module.performance || module.innovation || module.formula || module.result || module.metric) && (
                  <div className="rounded-lg bg-gradient-to-r from-green-500 to-emerald-500 p-4 text-white">
                    <h4 className="font-semibold mb-2">核心优势</h4>
                    <p className="text-sm">
                      {module.performance || module.innovation || module.formula || module.result || module.metric}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Design Principles */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            架构设计原则
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: '模块化设计',
                icon: '🧩',
                desc: '8 大模块职责清晰，低耦合高内聚，便于扩展和维护',
              },
              {
                title: '生物启发',
                icon: '🧬',
                desc: '从神经科学理论汲取灵感，如 GWT、IIT、Predictive Coding',
              },
              {
                title: '可解释性',
                icon: '🔍',
                desc: '注意力权重可视化，Winner 选择过程透明，Φ值可度量',
              },
              {
                title: '可扩展性',
                icon: '📈',
                desc: '支持不同规模配置（d=256~1024+），适配多种硬件',
              },
              {
                title: '性能优先',
                icon: '⚡',
                desc: '批量化架构，GPU 加速，梯度检查点降低内存占用',
              },
              {
                title: '理论统一',
                icon: '🔗',
                desc: '首次将 6 大意识理论统一于 Transformer 框架',
              },
            ].map((principle, index) => (
              <div
                key={index}
                className="rounded-xl border border-gray-200 bg-white p-6 text-center dark:border-gray-800 dark:bg-gray-900"
              >
                <div className="text-4xl mb-4">{principle.icon}</div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                  {principle.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {principle.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl text-center">
          <h2 className="text-3xl font-bold text-white sm:text-4xl mb-6">
            深入了解代码实现？
          </h2>
          <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
            查看 API 文档和源代码，探索工程细节
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/docs/api"
              className="inline-flex items-center justify-center rounded-full bg-white px-8 py-3.5 text-base font-medium text-blue-600 hover:bg-gray-100 transition-colors"
            >
              API 参考文档
            </Link>
            <a
              href="https://github.com/wyg5208/nct"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full border-2 border-white px-8 py-3.5 text-base font-medium text-white hover:bg-white/10 transition-colors"
            >
              GitHub 源码
            </a>
          </div>
        </div>
      </section>
    </DocsLayout>
  );
}
