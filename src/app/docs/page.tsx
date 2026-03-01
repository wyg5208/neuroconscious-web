import type { Metadata } from 'next';
import DocsContent from '@/components/DocsContent';

export const metadata: Metadata = {
  title: '文档中心 | NCT 完整使用指南',
  description: '从快速开始到高级实验，提供完整的 NCT 使用教程、API 参考和技术文档。',
  keywords: ['NCT 文档', '使用教程', 'API 参考', '实验指南'],
  openGraph: {
    title: 'NCT 文档中心',
    description: '完整的使用指南和实验教程',
  },
};

export default function DocsPage() {
  return <DocsContent />;
}
