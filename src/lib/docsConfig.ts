export interface DocPage {
  slug: string;
  title: string;
  icon: string;
  description?: string;
}

export const docsOrder: DocPage[] = [
  { 
    slug: 'quickstart', 
    title: '快速开始', 
    icon: '🚀',
    description: '5 分钟快速了解 NCT 的基本使用方法'
  },
  { 
    slug: 'installation', 
    title: '安装指南', 
    icon: '📦',
    description: '详细的环境配置和依赖安装步骤'
  },
  { 
    slug: 'api', 
    title: 'API 参考', 
    icon: '📖',
    description: '完整的 API 文档和代码示例'
  },
  { 
    slug: 'tutorials', 
    title: '实验教程', 
    icon: '🧪',
    description: 'MNIST、CIFAR-10 等完整实验示例'
  },
  { 
    slug: 'architecture', 
    title: '架构说明', 
    icon: '🏗️',
    description: 'NCT 核心模块的详细技术说明'
  },
  { 
    slug: 'faq', 
    title: '常见问题', 
    icon: '❓',
    description: 'FAQ 和常见问题解答'
  },
];

export function getDocBySlug(slug: string): DocPage | undefined {
  return docsOrder.find(doc => doc.slug === slug);
}

export function getPreviousDoc(slug: string): DocPage | null {
  const index = docsOrder.findIndex(doc => doc.slug === slug);
  if (index <= 0) return null;
  return docsOrder[index - 1];
}

export function getNextDoc(slug: string): DocPage | null {
  const index = docsOrder.findIndex(doc => doc.slug === slug);
  if (index === -1 || index >= docsOrder.length - 1) return null;
  return docsOrder[index + 1];
}
