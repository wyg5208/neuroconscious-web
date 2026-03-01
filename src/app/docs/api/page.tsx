import Link from 'next/link';
import DocsLayout from '@/components/DocsLayout';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'API 参考 | NCT 完整模块文档',
  description: 'NCTManager、NCTConfig 等核心类的完整 API 文档，包含参数说明和使用示例。',
  keywords: ['NCT API', 'NCTManager', 'NCTConfig', '模块文档'],
  openGraph: {
    title: 'NCT API 参考 - 完整模块文档',
    description: '详细的类、方法和参数说明',
  },
};

export default function APIPage() {
  const modules = [
    {
      name: 'NCTManager',
      file: 'nct_manager.py',
      description: '主控制器，管理 NCT 的完整处理流程',
      methods: [
        { name: '__init__', params: 'config: NCTConfig', returns: 'None', desc: '初始化 NCT 管理器' },
        { name: 'process_cycle', params: 'sensory_data: dict', returns: 'NCTState', desc: '执行一个完整的处理周期' },
        { name: 'get_state', params: '', returns: 'NCTState', desc: '获取当前状态' },
      ],
    },
    {
      name: 'NCTConfig',
      file: 'nct_core.py',
      description: '配置类，定义所有超参数和架构设置',
      properties: [
        { name: 'n_heads', type: 'int', default: '8', desc: '注意力头数（工作空间容量）' },
        { name: 'n_layers', type: 'int', default: '6', desc: 'Transformer 层数（皮层深度）' },
        { name: 'd_model', type: 'int', default: '768', desc: '模型维度（神经元数量）' },
        { name: 'n_candidates', type: 'int', default: '4', desc: '多候选表征数量' },
        { name: 'gamma_freq', type: 'float', default: '40.0', desc: 'γ同步频率 (Hz)' },
      ],
    },
    {
      name: 'AttentionWorkspace',
      file: 'nct_workspace.py',
      description: '注意力工作空间，实现全局广播和多候选竞争',
      methods: [
        { name: 'forward', params: 'x: Tensor', returns: 'Tensor, Tensor', desc: '前向传播，返回输出和注意力权重' },
        { name: 'compute_salience', params: 'candidates: List[Tensor]', returns: 'List[float]', desc: '计算每个候选的显著性' },
      ],
    },
    {
      name: 'PhiCalculator',
      file: 'nct_metrics.py',
      description: 'Φ值计算器，度量整合信息',
      methods: [
        { name: 'compute_phi', params: 'attention_maps: Tensor', returns: 'float', desc: '从注意力图计算Φ值' },
        { name: 'find_min_partition', params: 'mi_matrix: Tensor', returns: 'tuple', desc: '寻找最小信息分割' },
      ],
    },
    {
      name: 'HybridLearning',
      file: 'nct_hybrid_learning.py',
      description: 'Transformer-STDP 混合学习机制',
      methods: [
        { name: 'apply_stdp', params: 'pre_spike: Tensor, post_spike: Tensor', returns: 'Tensor', desc: '应用 STDP 规则更新权重' },
        { name: 'neuromodulate', params: 'delta_w: Tensor, modulators: dict', returns: 'Tensor', desc: '神经调质门控' },
      ],
    },
    {
      name: 'PredictiveCoding',
      file: 'nct_predictive_coding.py',
      description: '预测编码模块，实现自由能最小化',
      methods: [
        { name: 'predict', params: 'latent: Tensor', returns: 'Tensor', desc: '从隐变量生成预测' },
        { name: 'compute_free_energy', params: 'prediction: Tensor, actual: Tensor', returns: 'Tensor', desc: '计算变分自由能' },
      ],
    },
    {
      name: 'CrossModal',
      file: 'nct_cross_modal.py',
      description: '跨模态融合模块，使用 Cross-Attention',
      methods: [
        { name: 'fuse', params: 'modal1: Tensor, modal2: Tensor', returns: 'Tensor', desc: '融合两个模态的特征' },
        { name: 'align', params: 'features: List[Tensor]', returns: 'Tensor', desc: '语义对齐多模态特征' },
      ],
    },
    {
      name: 'GammaSync',
      file: 'nct_gamma_sync.py',
      description: 'γ同步机制，模拟 40Hz 振荡',
      methods: [
        { name: 'generate_phase', params: 't: float', returns: 'float', desc: '生成γ相位信号' },
        { name: 'phase_lock', params: 'signals: List[Tensor]', returns: 'Tensor', desc: '实现相位锁定' },
      ],
    },
  ];

  return (
    <DocsLayout 
      slug="api"
      title="API 参考"
      description="完整的 API 文档和代码示例"
    >
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-black py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="max-w-4xl">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white sm:text-5xl mb-6">
              API 参考
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              完整的 API 文档和代码示例
            </p>
          </div>
        </div>
      </section>

      {/* Modules Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="space-y-12">
            {modules.map((module, index) => (
              <div
                key={index}
                className="rounded-2xl border border-gray-200 bg-white p-8 dark:border-gray-800 dark:bg-gray-900"
              >
                {/* Module Header */}
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                      {module.name}
                    </h2>
                    <code className="text-sm bg-gray-100 dark:bg-gray-800 px-3 py-1 rounded text-blue-600 dark:text-blue-400">
                      {module.file}
                    </code>
                  </div>
                </div>

                <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
                  {module.description}
                </p>

                {/* Methods or Properties */}
                <div className="space-y-4">
                  {module.methods && module.methods.map((method, idx) => (
                    <div
                      key={idx}
                      className="rounded-lg bg-gray-50 dark:bg-gray-800 p-4"
                    >
                      <div className="flex flex-wrap items-center gap-2 mb-2">
                        <code className="text-base font-semibold text-purple-600 dark:text-purple-400">
                          {method.name}
                        </code>
                        <code className="text-sm text-gray-600 dark:text-gray-400">
                          ({method.params})
                        </code>
                        {method.returns && (
                          <code className="text-sm text-gray-500 dark:text-gray-500">
                            → {method.returns}
                          </code>
                        )}
                      </div>
                      <p className="text-sm text-gray-700 dark:text-gray-300">
                        {method.desc}
                      </p>
                    </div>
                  ))}

                  {module.properties && module.properties.map((prop, idx) => (
                    <div
                      key={idx}
                      className="rounded-lg bg-gray-50 dark:bg-gray-800 p-4"
                    >
                      <div className="flex flex-wrap items-center gap-2 mb-2">
                        <code className="text-base font-semibold text-green-600 dark:text-green-400">
                          {prop.name}
                        </code>
                        <code className="text-sm text-blue-600 dark:text-blue-400">
                          : {prop.type}
                        </code>
                        <code className="text-xs text-gray-500 dark:text-gray-500">
                          = {prop.default}
                        </code>
                      </div>
                      <p className="text-sm text-gray-700 dark:text-gray-300">
                        {prop.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Usage Example */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
              使用示例
            </h2>
            <div className="rounded-xl bg-gray-900 p-6 overflow-x-auto">
              <pre className="text-sm text-gray-100 font-mono">
{`from nct_modules import NCTManager, NCTConfig

# 创建配置
config = NCTConfig(
    n_heads=8,
    n_layers=6,
    d_model=768,
    n_candidates=4,
)

# 创建管理器
manager = NCTManager(config)

# 运行处理周期
for step in range(100):
    sensory_input = get_sensory_data()
    state = manager.process_cycle(sensory_input)
    
    # 查看意识指标
    print(f"Step {step}:")
    print(f"  Φ值：{state.phi:.3f}")
    print(f"  自由能：{state.free_energy:.3f}")
    print(f"  Winner: {state.winner_index}")`}
              </pre>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl text-center">
          <h2 className="text-3xl font-bold text-white sm:text-4xl mb-6">
            需要更多帮助？
          </h2>
          <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
            查看源代码和实验教程
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/docs/tutorials"
              className="inline-flex items-center justify-center rounded-full bg-white px-8 py-3.5 text-base font-medium text-blue-600 hover:bg-gray-100 transition-colors"
            >
              实验教程
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
