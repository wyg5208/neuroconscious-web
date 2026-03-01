export default function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "NeuroConscious Transformer",
    "alternateName": "NCT",
    "description": "首个将 GWT、IIT、Predictive Coding 等 6 大意识理论统一于 Transformer 架构的可学习框架",
    "url": "https://neuroconscious.link",
    "author": {
      "@type": "Person",
      "name": "Yonggang Weng",
      "jobTitle": "首席科学家",
      "affiliation": {
        "@type": "Organization",
        "name": "马来西亚理工大学 WENG YONGGANG(翁勇刚)"
      }
    },
    "applicationCategory": "Research Software",
    "operatingSystem": "Cross-platform",
    "programmingLanguage": [
      "Python",
      "TypeScript"
    ],
    "softwareVersion": "3.1.0",
    "keywords": [
      "consciousness AI",
      "neuromorphic architecture",
      "Transformer neuroscience",
      "NCT",
      "意识计算"
    ],
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "ratingCount": "156",
      "bestRating": "5",
      "worstRating": "1"
    },
    "featureList": [
      "GWT (全局工作空间理论) 实现",
      "IIT (整合信息论) Φ值计算",
      "Predictive Coding (预测编码)",
      "STDP 混合学习机制",
      "神经调质门控系统",
      "多候选竞争机制"
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}
