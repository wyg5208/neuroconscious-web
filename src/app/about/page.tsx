import type { Metadata } from 'next';
import AboutContent from '@/components/AboutContent';

export const metadata: Metadata = {
  title: '关于 NCT | WENG YONGGANG(翁勇刚)',
  description: '了解 NCT 项目的研发背景、核心团队和未来愿景。由马来西亚理工大学 WinClaw 研究团队开发。',
  keywords: ['NCT 团队', 'WinClaw', '马来西亚理工大学', '研发团队'],
  openGraph: {
    title: '关于 NCT - WENG YONGGANG(翁勇刚)',
    description: '马来西亚理工大学的意识计算前沿研究',
  },
};

export default function AboutPage() {
  return <AboutContent />;
}
