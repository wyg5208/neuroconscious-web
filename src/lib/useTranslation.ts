'use client';

import { useSearchParams } from 'next/navigation';
import { useState, useEffect } from 'react';
import enTranslations from '../locales/en.json';
import zhTranslations from '../locales/zh.json';

const translations: { [key: string]: any } = {
  en: enTranslations,
  zh: zhTranslations,
};

export function useNCT() {
  const [searchParams, setSearchParams] = useState<URLSearchParams | null>(null);
  const [locale, setLocale] = useState<'zh' | 'en'>('zh');
  const [isInitialized, setIsInitialized] = useState(false);

  // 客户端初始化时获取 searchParams
  useEffect(() => {
    // 在客户端运行时获取 searchParams
    const params = new URLSearchParams(window.location.search);
    setSearchParams(params);
  }, []);
  
  useEffect(() => {
    // 从 URL 参数或 localStorage 读取语言设置
    const urlLang = searchParams?.get('lang') as 'zh' | 'en' | null;
    const savedLang = typeof window !== 'undefined' ? localStorage.getItem('locale') as 'zh' | 'en' | null : null;
    const defaultLang: 'zh' | 'en' = urlLang || savedLang || 'zh';
    setLocale(defaultLang);
    setIsInitialized(true);
  }, [searchParams]);
  
  const t = (key: string) => {
    if (!isInitialized) return '';
    const keys = key.split('.');
    let value: any = translations[locale];
    for (const k of keys) {
      value = value?.[k];
    }
    return value !== undefined ? String(value) : key;
  };
  
  return {
    locale,
    hero: {
      badge: t('Hero.badge'),
      titlePrefix: t('Hero.title_prefix'),
      titleHighlight: t('Hero.title_highlight'),
      titleSuffix: t('Hero.title_suffix'),
      sloganCn: t('Hero.slogan_cn'),
      sloganEn: t('Hero.slogan_en'),
      subtitle: t('Hero.subtitle'),
      subtitleHighlight: t('Hero.subtitle_highlight'),
      subtitleEnd: t('Hero.subtitle_end'),
      ctaStart: t('Hero.cta_start'),
      ctaLearn: t('Hero.cta_learn'),
      ctaGithub: t('Hero.cta_github'),
    },
    metrics: {
      phiValue: t('Metrics.phi_value'),
      freeEnergy: t('Metrics.free_energy'),
      stdpLatency: t('Metrics.stdp_latency'),
      convergenceSpeed: t('Metrics.convergence_speed'),
    },
    features: {
      title: t('Features.title'),
      subtitle: t('Features.subtitle'),
      gwtTitle: t('Features.gwt_title'),
      gwtDesc: t('Features.gwt_desc'),
      iitTitle: t('Features.iit_title'),
      iitDesc: t('Features.iit_desc'),
      predictiveCodingTitle: t('Features.predictive_coding_title'),
      predictiveCodingDesc: t('Features.predictive_coding_desc'),
      stdpTitle: t('Features.stdp_title'),
      stdpDesc: t('Features.stdp_desc'),
      neuromodulatorTitle: t('Features.neuromodulator_title'),
      neuromodulatorDesc: t('Features.neuromodulator_desc'),
      gammaSyncTitle: t('Features.gamma_sync_title'),
      gammaSyncDesc: t('Features.gamma_sync_desc'),
      crossModalTitle: t('Features.cross_modal_title'),
      crossModalDesc: t('Features.cross_modal_desc'),
    },
    technology: {
      title: t('Technology.title'),
      subtitle: t('Technology.subtitle'),
      theoryGwtTitle: t('Technology.theory_gwt_title'),
      theoryGwtDesc: t('Technology.theory_gwt_desc'),
      theoryGwtImpl: t('Technology.theory_gwt_impl'),
      theoryGwtImprove: t('Technology.theory_gwt_improve'),
      theoryIitTitle: t('Technology.theory_iit_title'),
      theoryIitDesc: t('Technology.theory_iit_desc'),
      theoryIitImpl: t('Technology.theory_iit_impl'),
      theoryIitImprove: t('Technology.theory_iit_improve'),
      theoryPcTitle: t('Technology.theory_pc_title'),
      theoryPcDesc: t('Technology.theory_pc_desc'),
      theoryPcImpl: t('Technology.theory_pc_impl'),
      theoryPcImprove: t('Technology.theory_pc_improve'),
      theoryStdpTitle: t('Technology.theory_stdp_title'),
      theoryStdpDesc: t('Technology.theory_stdp_desc'),
      theoryStdpImpl: t('Technology.theory_stdp_impl'),
      theoryStdpImprove: t('Technology.theory_stdp_improve'),
      theoryNeuroTitle: t('Technology.theory_neuro_title'),
      theoryNeuroDesc: t('Technology.theory_neuro_desc'),
      theoryNeuroImpl: t('Technology.theory_neuro_impl'),
      theoryNeuroImprove: t('Technology.theory_neuro_improve'),
      theoryGammaTitle: t('Technology.theory_gamma_title'),
      theoryGammaDesc: t('Technology.theory_gamma_desc'),
      theoryGammaImpl: t('Technology.theory_gamma_impl'),
      theoryGammaImprove: t('Technology.theory_gamma_improve'),
      implementation: t('Technology.implementation'),
      improvement: t('Technology.improvement'),
      chartsTitle: t('Technology.charts_title'),
      architectureTitle: t('Technology.architecture_title'),
      architectureDesc: t('Technology.architecture_desc'),
      ctaTitle: t('Technology.cta_title'),
      ctaDesc: t('Technology.cta_desc'),
      ctaButton: t('Technology.cta_button'),
    },
    about: {
      title: t('About.title'),
      subtitle: t('About.subtitle'),
      missionTitle: t('About.mission_title'),
      missionP1: t('About.mission_p1'),
      missionP2: t('About.mission_p2'),
      missionP3: t('About.mission_p3'),
      teamTitle: t('About.team_title'),
      teamRole: t('About.team_role'),
      teamUniv: t('About.team_univ'),
      teamBio: t('About.team_bio'),
      timelineTitle: t('About.timeline_title'),
      milestoneV22Title: t('About.milestone_v22_title'),
      milestoneV22Desc: t('About.milestone_v22_desc'),
      milestoneV30Title: t('About.milestone_v30_title'),
      milestoneV30Desc: t('About.milestone_v30_desc'),
      milestoneV31Title: t('About.milestone_v31_title'),
      milestoneV31Desc: t('About.milestone_v31_desc'),
      milestoneV31pTitle: t('About.milestone_v31p_title'),
      milestoneV31pDesc: t('About.milestone_v31p_desc'),
      achievementsTitle: t('About.achievements_title'),
      achievementTheories: t('About.achievement_theories'),
      achievementAccuracy: t('About.achievement_accuracy'),
      achievementSpeed: t('About.achievement_speed'),
      contactTitle: t('About.contact_title'),
      contactDesc: t('About.contact_desc'),
      contactUniv: t('About.contact_univ'),
    },
    docs: {
      title: t('Docs.title'),
      subtitle: t('Docs.subtitle'),
      quickstartTitle: t('Docs.quickstart_title'),
      quickstartDesc: t('Docs.quickstart_desc'),
      installTitle: t('Docs.install_title'),
      installDesc: t('Docs.install_desc'),
      apiTitle: t('Docs.api_title'),
      apiDesc: t('Docs.api_desc'),
      tutorialsTitle: t('Docs.tutorials_title'),
      tutorialsDesc: t('Docs.tutorials_desc'),
      architectureTitle: t('Docs.architecture_title'),
      architectureDesc: t('Docs.architecture_desc'),
      faqTitle: t('Docs.faq_title'),
      faqDesc: t('Docs.faq_desc'),
      quickstartSectionTitle: t('Docs.quickstart_section_title'),
      quickstartLink: t('Docs.quickstart_link'),
      modulesTitle: t('Docs.modules_title'),
      moduleManager: t('Docs.module_manager'),
      moduleConfig: t('Docs.module_config'),
      moduleWorkspace: t('Docs.module_workspace'),
      modulePhi: t('Docs.module_phi'),
      moduleLearning: t('Docs.module_learning'),
      modulePredictive: t('Docs.module_predictive'),
      moduleCrossmodal: t('Docs.module_crossmodal'),
      moduleGamma: t('Docs.module_gamma'),
      ctaTitle: t('Docs.cta_title'),
      ctaDesc: t('Docs.cta_desc'),
      ctaGithub: t('Docs.cta_github'),
      ctaCommunity: t('Docs.cta_community'),
    },
    quickstart: {
      title: t('Quickstart.title'),
      subtitle: t('Quickstart.subtitle'),
      step1Title: t('Quickstart.step1_title'),
      step1Desc: t('Quickstart.step1_desc'),
      step2Title: t('Quickstart.step2_title'),
      step3Title: t('Quickstart.step3_title'),
      step4Title: t('Quickstart.step4_title'),
      step4Desc: t('Quickstart.step4_desc'),
      expMnist: t('Quickstart.exp_mnist'),
      expCifar: t('Quickstart.exp_cifar'),
      expAnomaly: t('Quickstart.exp_anomaly'),
      expCat: t('Quickstart.exp_cat'),
      step5Title: t('Quickstart.step5_title'),
      step5Desc: t('Quickstart.step5_desc'),
      dashboardPhi: t('Quickstart.dashboard_phi'),
      dashboardFreeEnergy: t('Quickstart.dashboard_free_energy'),
      dashboardAttention: t('Quickstart.dashboard_attention'),
      dashboardCompetition: t('Quickstart.dashboard_competition'),
      nextStepsTitle: t('Quickstart.next_steps_title'),
      nextStepsDesc: t('Quickstart.next_steps_desc'),
      nextApi: t('Quickstart.next_api'),
      nextTutorials: t('Quickstart.next_tutorials'),
    },
    performance: {
      title: t('Performance.title'),
      subtitle: t('Performance.subtitle'),
      dimension: t('Performance.dimension'),
      accuracy: t('Performance.accuracy'),
      trainingTime: t('Performance.training_time'),
      params: t('Performance.params'),
      inferenceSpeed: t('Performance.inference_speed'),
      energyEfficiency: t('Performance.energy_efficiency'),
      improvement: t('Performance.improvement'),
      convergenceSpeed: t('Performance.convergence_speed'),
    },
    nav: {
      technology: t('Navigation.technology'),
      docs: t('Navigation.docs'),
      docsHome: t('Navigation.docs_home'),
      quickstart: t('Navigation.quickstart'),
      api: t('Navigation.api'),
      tutorials: t('Navigation.tutorials'),
      faq: t('Navigation.faq'),
      about: t('Navigation.about'),
      github: t('Navigation.github'),
      getStarted: t('Navigation.get_started'),
    },
    footer: {
      copyright: t('Footer.copyright'),
      builtWith: t('Footer.built_with'),
    },
  };
}
