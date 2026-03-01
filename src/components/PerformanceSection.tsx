'use client';

import { useNCT } from '@/lib/useTranslation';
import { Suspense } from 'react';

function PerformanceContent() {
  const nct = useNCT();
  
  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl mb-4">
            {nct.performance.title}
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            {nct.performance.subtitle}
          </p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full border-collapse bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg">
            <thead>
              <tr className="bg-gray-100 dark:bg-gray-700">
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900 dark:text-white">{nct.performance.dimension}</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900 dark:text-white">v2.2</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900 dark:text-white">v3.0</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-blue-600 dark:text-blue-400">v3.1 ({nct.performance.improvement})</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-green-600 dark:text-green-400">{nct.performance.improvement}</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
              <tr>
                <td className="px-6 py-4 text-sm text-gray-900 dark:text-white">{nct.performance.accuracy}</td>
                <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-400">75%</td>
                <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-400">92%</td>
                <td className="px-6 py-4 text-sm font-semibold text-blue-600 dark:text-blue-400">92%</td>
                <td className="px-6 py-4 text-sm text-green-600 dark:text-green-400">+23%</td>
              </tr>
              <tr>
                <td className="px-6 py-4 text-sm text-gray-900 dark:text-white">{nct.performance.convergenceSpeed}</td>
                <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-400">1000 cycles</td>
                <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-400">200 cycles</td>
                <td className="px-6 py-4 text-sm font-semibold text-blue-600 dark:text-blue-400">~180 cycles</td>
                <td className="px-6 py-4 text-sm text-green-600 dark:text-green-400">5×</td>
              </tr>
              <tr>
                <td className="px-6 py-4 text-sm text-gray-900 dark:text-white">{nct.metrics.phiValue}</td>
                <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-400">0.3</td>
                <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-400">0.7</td>
                <td className="px-6 py-4 text-sm font-semibold text-blue-600 dark:text-blue-400">0.329 (d=768)</td>
                <td className="px-6 py-4 text-sm text-green-600 dark:text-green-400">2.3×</td>
              </tr>
              <tr>
                <td className="px-6 py-4 text-sm text-gray-900 dark:text-white">{nct.metrics.stdpLatency}</td>
                <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-400">-</td>
                <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-400">&lt;5ms</td>
                <td className="px-6 py-4 text-sm font-semibold text-blue-600 dark:text-blue-400">&lt;2ms</td>
                <td className="px-6 py-4 text-sm text-green-600 dark:text-green-400">-</td>
              </tr>
              <tr>
                <td className="px-6 py-4 text-sm text-gray-900 dark:text-white">{nct.metrics.freeEnergy}</td>
                <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-400">-</td>
                <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-400">80%</td>
                <td className="px-6 py-4 text-sm font-semibold text-blue-600 dark:text-blue-400">83.0%</td>
                <td className="px-6 py-4 text-sm text-green-600 dark:text-green-400">-</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

export default function PerformanceSection() {
  return (
    <Suspense fallback={null}>
      <PerformanceContent />
    </Suspense>
  );
}
