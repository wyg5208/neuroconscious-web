/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://neuroconscious.link',
  generateRobotsTxt: true,
  exclude: [],
  changefreq: 'daily',
  priority: 0.7,
  sitemapSize: 5000,
  autoLastmod: true,
  transform: async (config, path) => {
    // 为重要页面设置更高优先级
    const importantPaths = [
      '/',
      '/docs',
      '/technology',
      '/about',
    ];
    
    if (importantPaths.includes(path)) {
      return {
        loc: path,
        changefreq: config.changefreq,
        priority: 1.0,
        lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
      };
    }
    
    // 默认配置
    return {
      loc: path,
      changefreq: config.changefreq,
      priority: config.priority,
      lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
    };
  },
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
      },
    ],
  },
};
