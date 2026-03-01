import type { Metadata } from 'next';
import QuickstartContent from '@/components/QuickstartContent';

export const metadata: Metadata = {
  title: '快速开始 | NCT 5 分钟入门指南',
  description: '5 分钟快速了解 NCT 的基本使用方法，包含安装步骤和第一个示例代码。',
  keywords: ['NCT 快速开始', '入门教程', '安装指南'],
  openGraph: {
    title: 'NCT 快速开始 - 5 分钟入门',
    description: '从零开始学习 NCT',
  },
};

export default function QuickStartPage() {
  return <QuickstartContent />;
}
