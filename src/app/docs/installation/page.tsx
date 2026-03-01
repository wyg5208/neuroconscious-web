"use client";

import { useState } from 'react';
import Link from 'next/link';
import DocsLayout from '@/components/DocsLayout';

export default function InstallationPage() {
  const [activeTab, setActiveTab] = useState<'pip' | 'conda' | 'docker'>('pip');

  const installCommands = {
    pip: `# 基础安装
pip install torch numpy scipy

# 完整安装（推荐）
pip install nct-ai[full]

# 开发版本
pip install git+https://github.com/wyg5208/nct.git`,

    conda: `# 创建虚拟环境
conda create -n nct python=3.10
conda activate nct

# 安装 PyTorch（带 CUDA 支持）
conda install pytorch torchvision torchaudio pytorch-cuda=11.8 -c pytorch -c nvidia

# 安装 NCT 依赖
pip install numpy scipy matplotlib`,

    docker: `# 拉取镜像
docker pull wyg5208/nct:latest

# 运行容器
docker run -it --gpus all wyg5208/nct:latest

# 挂载本地代码
docker run -it --gpus all -v $(pwd):/workspace wyg5208/nct:latest`,
  };

  const steps = [
    {
      number: '01',
      title: '系统要求',
      icon: '💻',
      content: (
        <div className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="rounded-lg bg-blue-50 dark:bg-blue-900/20 p-4">
              <h4 className="font-semibold text-blue-900 dark:text-blue-300 mb-2">最低配置</h4>
              <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-1">
                <li>• Python 3.8+</li>
                <li>• 4GB RAM</li>
                <li>• 2GB GPU 内存（可选）</li>
                <li>• 1GB 磁盘空间</li>
              </ul>
            </div>
            <div className="rounded-lg bg-purple-50 dark:bg-purple-900/20 p-4">
              <h4 className="font-semibold text-purple-900 dark:text-purple-300 mb-2">推荐配置</h4>
              <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-1">
                <li>• Python 3.10+</li>
                <li>• 16GB RAM</li>
                <li>• 8GB+ GPU 内存</li>
                <li>• 10GB SSD 空间</li>
              </ul>
            </div>
          </div>
          <div className="rounded-lg bg-green-50 dark:bg-green-900/20 p-4">
            <h4 className="font-semibold text-green-900 dark:text-green-300 mb-2">操作系统支持</h4>
            <div className="flex gap-4 text-sm text-gray-700 dark:text-gray-300">
              <span>✅ Linux (Ubuntu 20.04+)</span>
              <span>✅ macOS 11+</span>
              <span>✅ Windows 10/11 (WSL2 推荐)</span>
            </div>
          </div>
        </div>
      ),
    },
    {
      number: '02',
      title: '安装步骤',
      icon: '📦',
      content: (
        <div className="space-y-6">
          {/* Tab Buttons */}
          <div className="flex gap-2">
            <button
              onClick={() => setActiveTab('pip')}
              className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                activeTab === 'pip'
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
              }`}
            >
              pip 安装
            </button>
            <button
              onClick={() => setActiveTab('conda')}
              className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                activeTab === 'conda'
                  ? 'bg-green-600 text-white'
                  : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
              }`}
            >
              conda 安装
            </button>
            <button
              onClick={() => setActiveTab('docker')}
              className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                activeTab === 'docker'
                  ? 'bg-purple-600 text-white'
                  : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
              }`}
            >
              Docker
            </button>
          </div>

          {/* Code Block */}
          <div className="rounded-xl bg-gray-900 p-6 overflow-x-auto">
            <pre className="text-sm text-gray-100 font-mono">
              <code>{installCommands[activeTab]}</code>
            </pre>
          </div>

          {/* Tips */}
          <div className="rounded-lg bg-yellow-50 dark:bg-yellow-900/20 p-4 border-l-4 border-yellow-400">
            <h4 className="font-semibold text-yellow-900 dark:text-yellow-300 mb-2">💡 提示</h4>
            <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-1">
              {activeTab === 'pip' && (
                <>
                  <li>• 使用国内镜像加速：<code className="bg-gray-100 dark:bg-gray-800 px-2 py-0.5 rounded">pip install -i https://pypi.tuna.tsinghua.edu.cn/simple</code></li>
                  <li>• 如果遇到权限问题，添加 <code className="bg-gray-100 dark:bg-gray-800 px-2 py-0.5 rounded">--user</code> 参数</li>
                  <li>• 建议使用虚拟环境（venv/virtualenv）</li>
                </>
              )}
              {activeTab === 'conda' && (
                <>
                  <li>• 先安装 Miniconda 或 Anaconda</li>
                  <li>• CUDA 版本需与 GPU 驱动匹配</li>
                  <li>• 可使用 <code className="bg-gray-100 dark:bg-gray-800 px-2 py-0.5 rounded">conda env export &gt; environment.yml</code> 导出环境</li>
                </>
              )}
              {activeTab === 'docker' && (
                <>
                  <li>• 需要安装 NVIDIA Container Toolkit</li>
                  <li>• 首次运行会自动下载 ~2GB 镜像</li>
                  <li>• 使用 <code className="bg-gray-100 dark:bg-gray-800 px-2 py-0.5 rounded">-v</code> 挂载数据卷</li>
                </>
              )}
            </ul>
          </div>
        </div>
      ),
    },
    {
      number: '03',
      title: 'GPU 加速配置',
      icon: '🚀',
      content: (
        <div className="space-y-4">
          <div className="rounded-lg bg-gray-50 dark:bg-gray-800 p-6">
            <h4 className="font-semibold text-gray-900 dark:text-white mb-4">NVIDIA GPU 配置步骤</h4>
            <ol className="space-y-3 text-gray-700 dark:text-gray-300">
              <li className="flex items-start gap-2">
                <span className="font-bold text-blue-600">1.</span>
                <span>安装 NVIDIA 驱动（版本 &gt;= 520.00）</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-bold text-blue-600">2.</span>
                <span>安装 CUDA 11.8 Toolkit</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-bold text-blue-600">3.</span>
                <span>安装 cuDNN 8.7+</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-bold text-blue-600">4.</span>
                <span>验证安装：<code className="bg-gray-100 dark:bg-gray-900 px-2 py-0.5 rounded text-sm">nvidia-smi</code></span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-bold text-blue-600">5.</span>
                <span>安装 PyTorch GPU 版本</span>
              </li>
            </ol>
          </div>

          <div className="rounded-xl bg-gray-900 p-6 overflow-x-auto">
            <pre className="text-sm text-gray-100 font-mono">
              <code>{`# 验证 GPU 是否可用
python -c "import torch; print(f'CUDA available: {torch.cuda.is_available()}')"
print(f"GPU count: {torch.cuda.device_count()}")
print(f"GPU name: {torch.cuda.get_device_name(0)}")`}</code>
            </pre>
          </div>

          <div className="rounded-lg bg-green-50 dark:bg-green-900/20 p-4">
            <h4 className="font-semibold text-green-900 dark:text-green-300 mb-2">✅ 性能对比</h4>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <span className="text-gray-600 dark:text-gray-400">CPU 训练速度:</span>
                <span className="ml-2 font-semibold text-red-600">~100 steps/s</span>
              </div>
              <div>
                <span className="text-gray-600 dark:text-gray-400">GPU 训练速度:</span>
                <span className="ml-2 font-semibold text-green-600">~500 steps/s (5x)</span>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      number: '04',
      title: '验证安装',
      icon: '✅',
      content: (
        <div className="space-y-6">
          <div className="rounded-xl bg-gray-900 p-6 overflow-x-auto">
            <pre className="text-sm text-gray-100 font-mono">
              <code>{`# 测试导入
python -c "from nct_modules import NCTManager, NCTConfig; print('✅ NCT 导入成功！')"

# 运行快速测试
python -c "
from nct_modules import NCTManager, NCTConfig
import torch

config = NCTConfig(n_heads=4, d_model=256)
manager = NCTManager(config)
print(f'✅ NCT 初始化成功！')
print(f'设备：{\"CUDA\" if torch.cuda.is_available() else \"CPU\"}')
"`}</code>
            </pre>
          </div>

          <div className="rounded-lg bg-blue-50 dark:bg-blue-900/20 p-4">
            <h4 className="font-semibold text-blue-900 dark:text-blue-300 mb-2">预期输出</h4>
            <pre className="text-sm text-gray-700 dark:text-gray-300 font-mono">
{`✅ NCT 导入成功！
✅ NCT 初始化成功！
设备：CUDA (或 CPU)`}
            </pre>
          </div>

          <div className="flex gap-4">
            <Link
              href="/docs/quickstart"
              className="inline-flex items-center justify-center rounded-full bg-blue-600 px-6 py-3 text-base font-medium text-white hover:bg-blue-700 transition-colors"
            >
              开始使用 →
            </Link>
            <a
              href="https://github.com/wyg5208/nct/issues"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full border border-gray-300 bg-white px-6 py-3 text-base font-medium text-gray-700 hover:bg-gray-50 transition-colors dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300"
            >
              报告问题
            </a>
          </div>
        </div>
      ),
    },
  ];

  return (
    <DocsLayout 
      slug="installation"
      title="安装指南"
      description="详细的环境配置和依赖安装步骤"
    >
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-black py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="max-w-4xl">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white sm:text-5xl mb-6">
              安装指南
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              5 分钟完成 NCT 环境配置，开始意识计算之旅
            </p>
          </div>
        </div>
      </section>

      {/* Installation Steps */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          <div className="space-y-16">
            {steps.map((step, index) => (
              <div key={index}>
                {/* Step Header */}
                <div className="flex items-center gap-4 mb-6">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white text-2xl font-bold">
                    {step.icon}
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                      {step.title}
                    </h2>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      STEP {step.number}
                    </p>
                  </div>
                </div>

                {/* Step Content */}
                <div className="pl-16">
                  {step.content}
                </div>

                {/* Divider */}
                {index < steps.length - 1 && (
                  <div className="mt-16 border-t border-gray-200 dark:border-gray-800" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Troubleshooting */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
            常见问题排查
          </h2>
          <div className="space-y-4">
            {[
              {
                problem: 'pip 安装权限错误',
                solution: '添加 --user 参数或使用 sudo（不推荐）',
              },
              {
                problem: 'CUDA 版本不匹配',
                solution: '检查 nvidia-smi 显示的 CUDA 版本，安装对应版本的 PyTorch',
              },
              {
                problem: '导入错误 ModuleNotFoundError',
                solution: '确认当前激活的 Python 环境与安装环境一致',
              },
              {
                problem: 'GPU 不可用',
                solution: '检查 NVIDIA 驱动、CUDA、cuDNN 是否正确安装',
              },
            ].map((item, index) => (
              <div
                key={index}
                className="rounded-xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900"
              >
                <h3 className="font-semibold text-red-600 dark:text-red-400 mb-2">
                  ❗ {item.problem}
                </h3>
                <p className="text-gray-700 dark:text-gray-300">
                  <span className="font-semibold text-green-600 dark:text-green-400">解决方案：</span>
                  {item.solution}
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
            安装完成？
          </h2>
          <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
            现在可以开始学习 NCT 的基本使用方法了
          </p>
          <Link
            href="/docs/quickstart"
            className="inline-flex items-center justify-center rounded-full bg-white px-8 py-3.5 text-base font-medium text-blue-600 hover:bg-gray-100 transition-colors"
          >
            快速开始教程 →
          </Link>
        </div>
      </section>
    </DocsLayout>
  );
}
