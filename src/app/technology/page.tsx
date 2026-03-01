import type { Metadata } from 'next';
import TechnologyContent from '@/components/TechnologyContent';

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
  return <TechnologyContent />;
}
