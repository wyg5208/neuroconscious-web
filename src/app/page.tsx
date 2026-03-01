import HeroSection from '@/components/HeroSection';
import FeaturesSection from '@/components/FeaturesSection';
import PerformanceSection from '@/components/PerformanceSection';
import CTASection from '@/components/CTASection';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'NCT - NeuroConscious Transformer | 用 Transformer 重构意识神经科学',
  description: '首个将 GWT、IIT、Predictive Coding 等 6 大意识理论统一于 Transformer 架构的可学习框架，实现可训练、可验证、可复现的意识计算。',
  keywords: ['consciousness AI', 'neuromorphic architecture', 'Transformer neuroscience', 'NCT', '意识计算', '类脑智能'],
  openGraph: {
    title: 'NCT - NeuroConscious Transformer',
    description: '用 Transformer 重构意识神经科学',
  },
};

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-black">
      <main>
        {/* Hero Section */}
        <HeroSection />

        {/* Features Section */}
        <FeaturesSection />

        {/* Performance Comparison Section */}
        <PerformanceSection />

        {/* CTA Section */}
        <CTASection />
      </main>
    </div>
  );
}
