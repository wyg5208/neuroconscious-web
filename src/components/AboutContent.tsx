'use client';

import { useNCT } from '@/lib/useTranslation';
import { Suspense } from 'react';
import Image from 'next/image';

function AboutPageContent() {
  const nct = useNCT();
  
  const milestones = [
    {
      version: 'v2.2',
      date: '2026-02',
      title: nct.about.milestoneV22Title,
      description: nct.about.milestoneV22Desc,
    },
    {
      version: 'v3.0',
      date: '2026-02-21',
      title: nct.about.milestoneV30Title,
      description: nct.about.milestoneV30Desc,
    },
    {
      version: 'v3.1',
      date: '2026-02-22',
      title: nct.about.milestoneV31Title,
      description: nct.about.milestoneV31Desc,
    },
    {
      version: 'v3.1+',
      date: '2026-02-28',
      title: nct.about.milestoneV31pTitle,
      description: nct.about.milestoneV31pDesc,
    },
  ];

  const isZh = nct.about.contactUniv === '马来西亚理工大学';

  return (
    <div className="min-h-screen bg-white dark:bg-black">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-black py-12 sm:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="max-w-4xl">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white sm:text-5xl mb-4">
              {nct.about.title}
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              {nct.about.subtitle}
            </p>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-12 sm:py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start">
            {/* Mission Text - Left */}
            <div className="flex-1 max-w-3xl">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                {nct.about.missionTitle}
              </h2>
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                {isZh ? (
                  <>
                    NCT (NeuroConscious Transformer) 是一个<span className="font-semibold text-blue-600 dark:text-blue-400">下一代神经形态意识架构</span>，
                    旨在用 Transformer 技术重构经典意识神经科学理论。
                  </>
                ) : (
                  <>
                    NCT (NeuroConscious Transformer) is a <span className="font-semibold text-blue-600 dark:text-blue-400">next-generation neuromorphic consciousness architecture</span>,
                    aiming to reimagine classic consciousness neuroscience theories using Transformer technology.
                  </>
                )}
              </p>
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                {isZh ? (
                  <>
                    我们的目标是建立一个<span className="font-semibold text-purple-600 dark:text-purple-400">可学习、可验证、可复现</span>的
                    创新框架，将 GWT（全局工作空间理论）、IIT（整合信息论）、Predictive Coding（预测编码）
                    等 6 大核心理论统一于 Transformer 架构。
                  </>
                ) : (
                  <>
                    Our goal is to build a <span className="font-semibold text-purple-600 dark:text-purple-400">trainable, verifiable, reproducible</span>{' '}
                    innovative framework that unifies 6 core theories (GWT, IIT, Predictive Coding, etc.) within the Transformer architecture.
                  </>
                )}
              </p>
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                {nct.about.missionP3}
              </p>
            </div>

            {/* Logo - Right Side, vertically centered */}
            <div className="hidden lg:flex items-center justify-end pr-8">
              <div className="relative w-56 h-80">
                <Image
                  src="/logo.png"
                  alt="NCT Logo"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-12 text-center">
            {nct.about.teamTitle}
          </h2>
          <div className="max-w-2xl mx-auto">
            <div className="rounded-2xl border border-gray-200 bg-white p-8 dark:border-gray-800 dark:bg-gray-900">
              <div className="flex items-start space-x-6">
                <div className="flex-shrink-0">
                  <div className="h-24 w-24 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center text-3xl font-bold text-white">
                    YW
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    Yonggang Weng (翁勇刚)
                  </h3>
                  <p className="text-blue-600 dark:text-blue-400 font-medium mb-3">
                    {nct.about.teamRole}<br />
                    {nct.about.teamUniv}
                  </p>
                  <p className="text-gray-600 dark:text-gray-400">
                    {nct.about.teamBio}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-12 text-center">
            {nct.about.timelineTitle}
          </h2>
          <div className="max-w-3xl mx-auto">
            <div className="space-y-8 relative before:absolute before:left-8 before:h-full before:w-0.5 before:bg-gray-200 dark:before:bg-gray-700">
              {milestones.map((milestone, index) => (
                <div key={index} className="relative pl-20">
                  <div className="absolute left-8 h-4 w-4 -translate-x-1/2 rounded-full bg-blue-600 ring-4 ring-white dark:ring-gray-900" />
                  <div className="rounded-xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="inline-flex items-center rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-800 dark:bg-blue-900/30 dark:text-blue-400">
                        {milestone.version}
                      </span>
                      <span className="text-sm text-gray-500 dark:text-gray-400">
                        {milestone.date}
                      </span>
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                      {milestone.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      {milestone.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Key Achievements */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">
            {nct.about.achievementsTitle}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="text-5xl font-bold text-white mb-2">6</div>
              <div className="text-blue-100">{nct.about.achievementTheories}</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-white mb-2">92%</div>
              <div className="text-blue-100">{nct.about.achievementAccuracy}</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-white mb-2">5×</div>
              <div className="text-blue-100">{nct.about.achievementSpeed}</div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            {nct.about.contactTitle}
          </h2>
          <div className="max-w-2xl mx-auto text-center">
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-8">
              {nct.about.contactDesc}
            </p>
            <div className="space-y-4">
              <div className="flex items-center justify-center space-x-2 text-gray-600 dark:text-gray-400">
                <span>📧</span>
                <a href="mailto:weng@graduate.utm.my" className="hover:text-blue-600 dark:hover:text-blue-400">
                  weng@graduate.utm.my
                </a>
              </div>
              <div className="flex items-center justify-center space-x-2 text-gray-600 dark:text-gray-400">
                <span>💻</span>
                <a 
                  href="https://github.com/wyg5208/nct" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-blue-600 dark:hover:text-blue-400"
                >
                  github.com/wyg5208/nct
                </a>
              </div>
              <div className="flex items-center justify-center space-x-2 text-gray-600 dark:text-gray-400">
                <span>🏛️</span>
                <span>Yonggang Weng (翁勇刚), {nct.about.contactUniv}</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default function AboutContent() {
  return (
    <Suspense fallback={null}>
      <AboutPageContent />
    </Suspense>
  );
}
