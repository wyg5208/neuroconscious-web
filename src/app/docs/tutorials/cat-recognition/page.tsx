import Link from 'next/link';
import DocsLayout from '@/components/DocsLayout';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '猫识别实战 | NCT 多模态融合应用',
  description: '实际应用场景：从图像中识别猫，60 分钟掌握迁移学习和跨模态融合技术。',
  keywords: ['猫识别', '迁移学习', '多模态融合', '实际应用'],
  openGraph: {
    title: '猫识别实战 - NCT 多模态融合应用',
    description: '构建完整的图像分类项目',
  },
};

export default function CatRecognitionPage() {
  return (
    <DocsLayout 
      slug="tutorials"
      title="猫识别实战"
      description="实际应用场景：从图像中识别猫，多模态融合示例"
    >
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-orange-50 to-white dark:from-gray-900 dark:to-black py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="max-w-4xl">
            <div className="flex items-center gap-3 mb-6">
              <span className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-orange-100 dark:bg-orange-900 text-orange-600 dark:text-orange-400 text-xl font-bold">
                🐱
              </span>
              <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
                猫识别实战
              </h1>
            </div>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-6">
              实际应用场景：从图像中识别猫，多模态融合示例
            </p>
            <div className="flex flex-wrap gap-4">
              <span className="inline-flex items-center px-4 py-2 rounded-full bg-orange-100 dark:bg-orange-900 text-orange-700 dark:text-orange-300 text-sm font-medium">
                ⏱️ 60 分钟
              </span>
              <span className="inline-flex items-center px-4 py-2 rounded-full bg-red-100 dark:bg-red-900 text-red-700 dark:text-red-300 text-sm font-medium">
                📊 高级
              </span>
              <span className="inline-flex items-center px-4 py-2 rounded-full bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300 text-sm font-medium">
                🧪 实际应用
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
              这是一个完整的实际应用场景：构建一个能够识别猫的 AI 系统。
              你将学习如何使用迁移学习加速训练、如何提取和融合多模态特征、
              以及如何优化模型以便部署到生产环境。这个项目可以作为你作品集的亮点项目。
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

# 安装依赖（需要额外包）
pip install torch torchvision Pillow requests

# 运行猫识别实验
python experiments/run_cat_recognition.py`}</code>
            </pre>

            <h3 className="font-semibold text-gray-900 dark:text-white mb-4">
              方法 2：完整 API 示例
            </h3>
            <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto text-sm">
              <code>{`from nct_modules import NCTManager, NCTConfig
from nct_cross_modal import CrossModalFusion
from PIL import Image
import requests

# 下载示例图片
url = "https://example.com/cat.jpg"
response = requests.get(url)
with open('cat.jpg', 'wb') as f:
    f.write(response.content)

# 加载图片
image = Image.open('cat.jpg')

# 创建多模态融合模型
fusion_config = NCTConfig(
    n_heads=8,
    d_model=768,
    use_cross_modal=True
)

# 初始化
manager = NCTManager(fusion_config)
model = CrossModalFusion(manager)

# 预测
result = model.predict(image)
print(f"识别结果：{result['label']}")
print(f"置信度：{result['confidence']:.2%}")`}</code>
            </pre>
          </div>
        </div>
      </section>

      {/* Key Techniques */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            关键技术点
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="rounded-xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
              <h3 className="font-semibold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
                <span>🔄</span> 迁移学习
              </h3>
              <ul className="space-y-2 text-gray-700 dark:text-gray-300 text-sm">
                <li>• 使用 ImageNet 预训练权重</li>
                <li>• 冻结底层卷积层</li>
                <li>• 微调顶层 Transformer</li>
                <li>• 大幅减少训练时间</li>
              </ul>
            </div>
            <div className="rounded-xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
              <h3 className="font-semibold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
                <span>🎨</span> 特征提取
              </h3>
              <ul className="space-y-2 text-gray-700 dark:text-gray-300 text-sm">
                <li>• ResNet-50 骨干网络</li>
                <li>• 多尺度特征金字塔</li>
                <li>• 全局平均池化</li>
                <li>• 注意力加权融合</li>
              </ul>
            </div>
            <div className="rounded-xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
              <h3 className="font-semibold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
                <span>🔗</span> 跨模态融合
              </h3>
              <ul className="space-y-2 text-gray-700 dark:text-gray-300 text-sm">
                <li>• 视觉 + 文本语义对齐</li>
                <li>• Cross-Attention 机制</li>
                <li>• 多模态联合表示</li>
                <li>• CLIP 风格对比学习</li>
              </ul>
            </div>
            <div className="rounded-xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
              <h3 className="font-semibold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
                <span>⚡</span> 部署优化
              </h3>
              <ul className="space-y-2 text-gray-700 dark:text-gray-300 text-sm">
                <li>• 模型量化（FP32→INT8）</li>
                <li>• 剪枝压缩</li>
                <li>• ONNX 格式转换</li>
                <li>• TensorRT 加速</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="py-16 bg-gradient-to-r from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            预期结果
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="rounded-xl bg-white dark:bg-gray-900 p-6 text-center">
              <div className="text-4xl font-bold text-green-600 mb-2">
                ~96.5%
              </div>
              <div className="text-gray-600 dark:text-gray-400">
                识别准确率
              </div>
            </div>
            <div className="rounded-xl bg-white dark:bg-gray-900 p-6 text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">
                ~60 分钟
              </div>
              <div className="text-gray-600 dark:text-gray-400">
                完整训练时间
              </div>
            </div>
            <div className="rounded-xl bg-white dark:bg-gray-900 p-6 text-center">
              <div className="text-4xl font-bold text-orange-600 mb-2">
                &lt;50ms
              </div>
              <div className="text-gray-600 dark:text-gray-400">
                单次推理延迟
              </div>
            </div>
          </div>
          
          <div className="mt-8 rounded-xl bg-white dark:bg-gray-900 p-6">
            <h3 className="font-semibold text-gray-900 dark:text-white mb-4">
              🎯 学习目标
            </h3>
            <ul className="space-y-2 text-gray-700 dark:text-gray-300">
              <li>✅ 掌握迁移学习技术</li>
              <li>✅ 学会多模态特征融合</li>
              <li>✅ 能够进行模型优化和部署</li>
              <li>✅ 理解实际应用场景</li>
              <li>✅ 构建完整的项目作品</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Dataset Info */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            📊 数据集信息
          </h2>
          <div className="space-y-4">
            <div className="rounded-xl border-l-4 border-blue-500 bg-blue-50 dark:bg-blue-900/20 p-6">
              <h3 className="font-semibold text-blue-900 dark:text-blue-300 mb-2">
                🐱 The Oxford-IIIT Pet Dataset
              </h3>
              <p className="text-blue-700 dark:text-blue-300 text-sm mb-2">
                包含 37 个品种的猫和狗，共约 7,400 张图像，带有精细标注。
              </p>
              <a href="https://www.robots.ox.ac.uk/~vgg/data/pets/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline text-sm">
                下载地址 →
              </a>
            </div>
            <div className="rounded-xl border-l-4 border-green-500 bg-green-50 dark:bg-green-900/20 p-6">
              <h3 className="font-semibold text-green-900 dark:text-green-300 mb-2">
                🌐 替代数据源
              </h3>
              <ul className="text-green-700 dark:text-green-300 text-sm space-y-1">
                <li>• ImageNet Cats（1000 类）</li>
                <li>• COCO Dataset（通用物体检测）</li>
                <li>• Kaggle Cats vs Dogs</li>
                <li>• 自定义采集数据</li>
              </ul>
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
            href="/docs/tutorials/phi-calculation"
            className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
          >
            Φ值计算实验 →
          </Link>
        </div>
      </div>
    </DocsLayout>
  );
}
