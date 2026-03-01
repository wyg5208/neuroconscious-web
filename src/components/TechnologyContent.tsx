'use client';

import Link from 'next/link';
import { useNCT } from '@/lib/useTranslation';
import { Suspense } from 'react';
import ArchitectureDiagram from '@/components/ArchitectureDiagram';
import dynamic from 'next/dynamic';

// 懒加载图表组件
const FreeEnergyChart = dynamic(() => import('@/components/charts/FreeEnergyChart'), {
  loading: () => <div className="w-full h-[400px] bg-gray-100 dark:bg-gray-800 rounded-xl animate-pulse" />
});
const STDPComparisonChart = dynamic(() => import('@/components/charts/STDPComparisonChart'), {
  loading: () => <div className="w-full h-[400px] bg-gray-100 dark:bg-gray-800 rounded-xl animate-pulse" />
});
const AblationStudyChart = dynamic(() => import('@/components/charts/AblationStudyChart'), {
  loading: () => <div className="w-full h-[400px] bg-gray-100 dark:bg-gray-800 rounded-xl animate-pulse" />
});

function TechnologyPageContent() {
  const nct = useNCT();
  
  const theories = [
    {
      title: nct.technology.theoryGwtTitle,
      icon: '🧠',
      description: nct.technology.theoryGwtDesc,
      nctImplementation: nct.technology.theoryGwtImpl,
      improvement: nct.technology.theoryGwtImprove,
    },
    {
      title: nct.technology.theoryIitTitle,
      icon: '🔗',
      description: nct.technology.theoryIitDesc,
      nctImplementation: nct.technology.theoryIitImpl,
      improvement: nct.technology.theoryIitImprove,
    },
    {
      title: nct.technology.theoryPcTitle,
      icon: '🎯',
      description: nct.technology.theoryPcDesc,
      nctImplementation: nct.technology.theoryPcImpl,
      improvement: nct.technology.theoryPcImprove,
    },
    {
      title: nct.technology.theoryStdpTitle,
      icon: '⚡',
      description: nct.technology.theoryStdpDesc,
      nctImplementation: nct.technology.theoryStdpImpl,
      improvement: nct.technology.theoryStdpImprove,
    },
    {
      title: nct.technology.theoryNeuroTitle,
      icon: '💊',
      description: nct.technology.theoryNeuroDesc,
      nctImplementation: nct.technology.theoryNeuroImpl,
      improvement: nct.technology.theoryNeuroImprove,
    },
    {
      title: nct.technology.theoryGammaTitle,
      icon: '🌊',
      description: nct.technology.theoryGammaDesc,
      nctImplementation: nct.technology.theoryGammaImpl,
      improvement: nct.technology.theoryGammaImprove,
    },
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-black">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-black py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="max-w-4xl">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white sm:text-5xl mb-6">
              {nct.technology.title}
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
              {nct.technology.subtitle}
            </p>
          </div>
        </div>
      </section>

      {/* Theories Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="space-y-16">
            {theories.map((theory, index) => (
              <div
                key={index}
                className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start"
              >
                {/* Icon & Description */}
                <div className="lg:col-span-1">
                  <div className="inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-r from-blue-500 to-purple-500 text-3xl mb-4">
                    {theory.icon}
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                    {theory.title}
                  </h2>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                    {theory.description}
                  </p>
                </div>

                {/* Implementation & Improvement */}
                <div className="lg:col-span-2 space-y-6">
                  <div className="rounded-xl border border-gray-200 bg-gray-50 p-6 dark:border-gray-800 dark:bg-gray-900">
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                      {nct.technology.implementation}
                    </h3>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                      {theory.nctImplementation}
                    </p>
                  </div>

                  <div className="rounded-xl bg-gradient-to-r from-green-500 to-emerald-500 p-6 text-white">
                    <h3 className="font-semibold mb-2">{nct.technology.improvement}</h3>
                    <p className="text-lg">{theory.improvement}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Performance Charts */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            {nct.technology.chartsTitle}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <FreeEnergyChart />
            <STDPComparisonChart />
          </div>
          <div className="mt-8">
            <AblationStudyChart />
          </div>
        </div>
      </section>

      {/* Architecture Diagram */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl text-center">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
            {nct.technology.architectureTitle}
          </h2>
          <div className="rounded-2xl bg-white dark:bg-gray-800 p-4 shadow-xl">
            <ArchitectureDiagram />
          </div>
          <p className="mt-6 text-sm text-gray-500 dark:text-gray-400">
            {nct.technology.architectureDesc}
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl text-center">
          <h2 className="text-3xl font-bold text-white sm:text-4xl mb-6">
            {nct.technology.ctaTitle}
          </h2>
          <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
            {nct.technology.ctaDesc}
          </p>
          <Link
            href="/docs"
            className="inline-flex items-center justify-center rounded-full bg-white px-8 py-3.5 text-base font-medium text-blue-600 hover:bg-gray-100 transition-colors"
          >
            {nct.technology.ctaButton}
          </Link>
        </div>
      </section>
    </div>
  );
}

export default function TechnologyContent() {
  return (
    <Suspense fallback={null}>
      <TechnologyPageContent />
    </Suspense>
  );
}
