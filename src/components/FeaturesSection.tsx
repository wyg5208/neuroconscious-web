'use client';

import { useNCT } from '@/lib/useTranslation';
import { Suspense } from 'react';

function FeaturesContent() {
  const nct = useNCT();
  
  const features = [
    {
      icon: '🧠',
      title: nct.features.gwtTitle,
      description: nct.features.gwtDesc,
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      icon: '🔗',
      title: nct.features.stdpTitle,
      description: nct.features.stdpDesc,
      gradient: 'from-purple-500 to-pink-500',
    },
    {
      icon: '📊',
      title: nct.features.iitTitle,
      description: nct.features.iitDesc,
      gradient: 'from-green-500 to-emerald-500',
    },
    {
      icon: '🎯',
      title: nct.features.predictiveCodingTitle,
      description: nct.features.predictiveCodingDesc,
      gradient: 'from-orange-500 to-red-500',
    },
    {
      icon: '🌐',
      title: nct.features.crossModalTitle,
      description: nct.features.crossModalDesc,
      gradient: 'from-indigo-500 to-blue-500',
    },
    {
      icon: '⚡',
      title: nct.features.gammaSyncTitle,
      description: nct.features.gammaSyncDesc,
      gradient: 'from-yellow-500 to-orange-500',
    },
  ];
  
  return (
    <section className="py-20 bg-white dark:bg-black">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl mb-4">
            {nct.features.title}
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            {nct.features.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl border border-gray-200 bg-white p-8 transition-all hover:shadow-xl hover:-translate-y-1 dark:border-gray-800 dark:bg-gray-900"
            >
              {/* Icon */}
              <div className={`inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-r ${feature.gradient} text-2xl mb-4`}>
                {feature.icon}
              </div>

              {/* Title */}
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                {feature.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                {feature.description}
              </p>

              {/* Decorative gradient orb */}
              <div className={`absolute -right-16 -bottom-16 h-32 w-32 rounded-full bg-gradient-to-r ${feature.gradient} opacity-10 blur-2xl group-hover:opacity-20 transition-opacity`} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function FeaturesSection() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <FeaturesContent />
    </Suspense>
  );
}
