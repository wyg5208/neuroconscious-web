"use client";

import { useState } from 'react';
import DocsLayout from '@/components/DocsLayout';

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: 'NCT 是什么？',
      answer: 'NCT (NeuroConscious Transformer) 是一个下一代神经形态意识架构，它用 Transformer 技术重构经典意识神经科学理论。NCT 首次将 GWT（全局工作空间理论）、IIT（整合信息论）、Predictive Coding（预测编码）等 6 大核心理论统一于 Transformer 架构，实现了可学习、可验证、可复现的意识计算框架。',
    },
    {
      question: 'NCT 与传统神经网络有什么区别？',
      answer: '传统神经网络（如 CNN、RNN）专注于模式识别和序列处理，而 NCT 模拟的是意识的产生机制。关键区别：\n\n1. **理论基础**: NCT 基于 6 大意识理论，有明确的神经科学依据\n2. **架构设计**: 使用 Attention 工作空间实现全局广播和多候选竞争\n3. **学习机制**: Transformer-STDP 混合学习，结合局部时间关联和全局语义调制\n4. **评估指标**: 提供Φ值（整合信息）、自由能等意识度量指标\n5. **可解释性**: 注意力权重可视化，清晰的 Winner-take-all 过程',
    },
    {
      question: 'Φ值是什么？如何计算？',
      answer: 'Φ值（Phi）是整合信息论（IIT）中度量系统"意识程度"的指标。传统 IIT 计算复杂度为 O(2^N)，无法应用于大规模系统。\n\nNCT 的创新方法：\n- 从 Attention Flow 近似计算Φ值\n- 使用随机二分分割代替穷举搜索\n- 复杂度降至 O(n²)，与精确计算相关性 r=0.978\n- 实测结果：Φ=0.329 (d_model=768)\n\n计算公式：Φ = I_total - min_partition[I_A + I_B]\n其中 I 表示互信息，min_partition 寻找最小信息分割。',
    },
    {
      question: 'NCT 需要多少数据才能训练？',
      answer: 'NCT 支持多种学习模式：\n\n1. **Few-Shot Learning**: 每类仅需 5-10 个样本即可快速适应新任务\n2. **全监督训练**: 类似传统深度学习，需要大量标注数据\n3. **无监督学习**: 通过预测编码最小化自由能，无需标注\n\n建议起步：\n- MNIST: 每类 100-500 样本\n- CIFAR-10: 每类 1000-5000 样本\n- 实际应用：根据任务复杂度调整',
    },
    {
      question: 'NCT 的计算资源需求如何？',
      answer: '资源需求取决于模型规模：\n\n**小型配置** (d=256, n_heads=4):\n- GPU 内存：~2GB\n- 训练速度：快\n- 适用：原型验证、教学\n\n**标准配置** (d=768, n_heads=8):\n- GPU 内存：~8GB\n- 训练速度：中等\n- 适用：大多数研究场景\n\n**大型配置** (d=1024+, n_heads=12+):\n- GPU 内存：16GB+\n- 训练速度：较慢\n- 适用：高性能需求\n\n优化策略：\n- 梯度检查点（Gradient Checkpointing）降低内存\n- 混合精度训练加速\n- 批量化架构提升吞吐量',
    },
    {
      question: '多候选竞争机制是如何工作的？',
      answer: '多候选竞争是 NCT 的核心创新之一，模拟大脑的 Winner-take-all 机制：\n\n**流程**：\n1. **并行生成**: 同时生成 4 个候选表征（不同初始化/路径）\n2. **显著性计算**: 每个候选计算 salience score（基于注意力权重、情绪价值、任务相关性等）\n3. **动态抑制**: 高 salience 候选通过侧抑制降低其他候选的显著性\n4. **胜者输出**: salience 最高的候选成为"Winner"，进入后续处理\n5. **γ同步更新**: 每 25ms（40Hz）重新竞争一次\n\n**优势**：\n- 避免单一表征瓶颈\n- 提高鲁棒性和灵活性\n- 支持多任务并发处理\n- 匹配神经科学实验观察',
    },
    {
      question: '神经调质系统有什么作用？',
      answer: '神经调质（多巴胺 DA、5-羟色胺 5-HT、去甲肾上腺素 NE、乙酰胆碱 ACh）在 NCT 中实现学习速率的动态调节：\n\n**功能**：\n- **DA (多巴胺)**: 奖励预测误差，强化学习信号\n- **5-HT (血清素)**: 惩罚敏感性，风险规避\n- **NE (去甲肾上腺素)**: 警觉度调节，应对不确定性\n- **ACh (乙酰胆碱)**: 注意力聚焦，增强可塑性\n\n**数学公式**：\nη = exp(Σ w_k · Δn_k)\n\n其中 η 是有效学习率，w_k 是调质权重，Δn_k 是调质浓度变化。\n\n**效果**：\n- 时序关联学习提升 89%\n- Cohen\'s d = 1.41（大效应量）\n- 支持情感计算和类脑决策',
    },
    {
      question: '如何开始使用 NCT？',
      answer: '**步骤 1: 安装依赖**\n```bash\npip install torch numpy scipy\n```\n\n**步骤 2: 克隆代码**\n```bash\ngit clone https://github.com/wyg5208/nct.git\ncd nct\n```\n\n**步骤 3: 运行示例**\n```bash\npython examples/quickstart.py\n```\n\n**步骤 4: 运行实验**\n```bash\n# Few-shot MNIST\npython experiments/exp_mnist_few_shot.py\n\n# CIFAR-10 完整训练\npython experiments/run_cifar10_full.py\n```\n\n**步骤 5: 可视化**\n```bash\npip install streamlit plotly pandas\nstreamlit run visualization/nct_dashboard.py\n```\n\n详细文档请参考：/docs/quickstart',
    },
    {
      question: 'NCT 有哪些应用场景？',
      answer: 'NCT 适用于需要"意识-like"处理的场景：\n\n**已验证应用**：\n1. **图像分类**: MNIST, CIFAR-10（准确率 92%）\n2. **异常检测**: 时间序列数据中的异常模式识别\n3. **多模态融合**: 视觉 + 听觉 + 文本的语义对齐\n4. **少样本学习**: 快速适应新类别/新任务\n\n**潜在应用**：\n- **机器人导航**: 实时环境感知和决策\n- **医疗诊断**: 多症状整合分析\n- **金融风控**: 多因素关联预警\n- **教育 AI**: 模拟学生认知过程\n- **脑机接口**: 解码神经信号\n- **AI 安全**: 监控 AI 系统的"意识状态"\n\n**研究工具**：\n- 意识理论研究平台\n- 神经科学计算模拟\n- AI 可解释性分析',
    },
    {
      question: 'NCT 的局限性是什么？',
      answer: '诚实地讨论局限性：\n\n**当前限制**：\n1. **计算成本**: 比简单 CNN/RNN 需要更多资源\n2. **超参数敏感**: n_heads, d_model 等需要仔细调优\n3. **训练稳定性**: 多候选竞争可能导致震荡\n4. **理论简化**: 对真实大脑的简化程度仍有争议\n\n**正在改进**：\n- ✅ 批量化架构提升吞吐量（已完成）\n- ✅ 梯度检查点降低内存（已完成）\n- 🔄 自动化超参数搜索（进行中）\n- 🔄 更稳定的竞争机制（研究中）\n\n**开放问题**：\n- NCT 是否真的"有意识"？（哲学问题）\n- Φ值能否完全代表意识水平？\n- 如何扩展到更大规模（亿级参数）？\n\n我们鼓励社区参与解决这些挑战！',
    },
  ];

  return (
    <DocsLayout 
      slug="faq"
      title="常见问题"
      description="FAQ 和常见问题解答"
    >
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-black py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="max-w-4xl">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white sm:text-5xl mb-6">
              常见问题
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              关于 NCT 的常见问题解答
            </p>
          </div>
        </div>
      </section>

      {/* FAQ List */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="rounded-xl border border-gray-200 bg-white dark:border-gray-800 dark:bg-gray-900 overflow-hidden"
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
                >
                  <span className="text-lg font-semibold text-gray-900 dark:text-white pr-4">
                    {faq.question}
                  </span>
                  <svg
                    className={`w-6 h-6 text-gray-500 transform transition-transform ${
                      openIndex === index ? 'rotate-180' : ''
                    }`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                
                {openIndex === index && (
                  <div className="px-6 pb-4">
                    <div className="prose prose-blue dark:prose-invert max-w-none">
                      {faq.answer.split('\n').map((paragraph, idx) => (
                        <p key={idx} className="text-gray-700 dark:text-gray-300 leading-relaxed mb-2">
                          {paragraph.startsWith('**') ? (
                            <strong>{paragraph.replace(/\*\*/g, '')}</strong>
                          ) : paragraph.startsWith('```') ? null : (
                            paragraph.replace(/`([^`]+)`/g, '<code className="bg-gray-100 dark:bg-gray-800 px-2 py-0.5 rounded text-sm">$1</code>')
                          )}
                        </p>
                      ))}
                      <pre className="mt-4 p-4 bg-gray-900 text-gray-100 rounded-lg overflow-x-auto text-sm">
                        <code>{faq.answer.match(/```([\s\S]*?)```/)?.[1]?.trim()}</code>
                      </pre>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl text-center">
          <h2 className="text-3xl font-bold text-white sm:text-4xl mb-6">
            还有其他问题？
          </h2>
          <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
            欢迎通过 GitHub Issues 或邮件联系我们
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://github.com/wyg5208/nct/issues"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-white px-8 py-3.5 text-base font-medium text-blue-600 hover:bg-gray-100 transition-colors"
            >
              提交 Issue
            </a>
            <a
              href="mailto:weng@graduate.utm.my"
              className="inline-flex items-center justify-center rounded-full border-2 border-white px-8 py-3.5 text-base font-medium text-white hover:bg-white/10 transition-colors"
            >
              发送邮件
            </a>
          </div>
        </div>
      </section>
    </DocsLayout>
  );
}
