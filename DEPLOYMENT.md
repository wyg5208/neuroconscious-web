# NeuroConscious Website 部署指南

## 📋 前提条件

- Node.js 18+ 已安装
- npm 或 yarn 包管理器
- Vercel 账号（可选，用于云端部署）

---

## 🚀 本地开发

### 1. 安装依赖

```bash
cd neuroconscious-web
npm install
```

### 2. 启动开发服务器

```bash
npm run dev
```

访问 http://localhost:3000 查看网站

### 3. 构建生产版本

```bash
npm run build
npm start
```

---

## 🌐 部署到 Vercel

### 方式一：Vercel CLI（推荐）

#### 安装 Vercel CLI

```bash
npm install -g vercel
```

#### 登录 Vercel

```bash
vercel login
```

#### 部署

```bash
cd neuroconscious-web
vercel
```

按照提示操作：
- Set up and deploy? **Y**
- Which scope do you want to link to? **选择你的账号**
- Link to existing project? **N**
- Project name? **neuroconscious-link**
- Directory? **./neuroconscious-web**
- Want to override the settings? **N**

#### 生产环境部署

```bash
vercel --prod
```

### 方式二：GitHub 集成

1. **推送代码到 GitHub**

```bash
cd neuroconscious-web
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/wyg5208/nct.git
git push -u origin main
```

2. **在 Vercel 导入项目**
   - 访问 https://vercel.com/new
   - 点击 "Import Git Repository"
   - 选择 `nct` 仓库
   - Framework Preset 自动检测为 Next.js
   - 点击 "Deploy"

---

## 🔧 域名配置

### 1. 在 Vercel 添加域名

1. 进入项目设置
2. 导航到 "Domains"
3. 添加 `neuroconscious.link`
4. 按照提示配置 DNS

### 2. DNS 配置（以 Namecheap 为例）

登录域名注册商，添加以下记录：

**Type**: `A Record`  
**Host**: `@`  
**Value**: `76.76.21.21` (Vercel IP)  
**TTL**: `Automatic`

**Type**: `CNAME`  
**Host**: `www`  
**Value**: `cname.vercel-dns.com`  
**TTL**: `Automatic`

### 3. 等待 DNS 传播

通常 5-30 分钟内生效，最长可能需要 48 小时

验证：
```bash
ping neuroconscious.link
```

---

## 📊 性能优化

### Lighthouse 评分目标

- Performance: ≥90
- Accessibility: ≥90
- Best Practices: ≥90
- SEO: ≥90

### 优化建议

1. **图片优化**
   - 使用 Next.js Image 组件
   - 转换为 WebP 格式
   - 添加适当的尺寸

2. **字体优化**
   - 使用 `next/font` 自动优化
   - 预加载关键字体

3. **代码分割**
   - Next.js 自动进行
   - 按需加载大型组件

4. **缓存策略**
   - 静态资源使用 CDN
   - 设置适当的 Cache-Control 头

---

## 🔍 监控和分析

### 1. Vercel Analytics

自动启用，在项目仪表板查看：
- 页面浏览量
- 独立访客数
- 平均停留时间
- 跳出率

### 2. Google Search Console

1. 提交 sitemap.xml
2. 监控搜索表现
3. 修复索引问题

### 3. 错误监控

推荐使用：
- Sentry
- LogRocket
- Vercel Error Overlay

---

## 📝 更新内容

### 修改文本内容

直接编辑对应的 `.tsx` 文件：
- 首页：`src/app/page.tsx`
- 技术页：`src/app/technology/page.tsx`
- 文档页：`src/app/docs/page.tsx`
- 关于页：`src/app/about/page.tsx`

### 添加新页面

1. 在 `src/app/` 下创建新目录
2. 添加 `page.tsx` 文件
3. 更新 Header 和 Footer 的导航链接

### 更新数据

编辑组件中的数据数组，例如：
- `FeaturesSection.tsx` - 特性卡片
- `TechnologyPage.tsx` - 理论框架

---

## 🆘 故障排查

### 构建失败

```bash
# 清除缓存
rm -rf .next
rm -rf node_modules
npm install
npm run build
```

### 样式问题

检查 Tailwind CSS 配置：
```bash
cat tailwind.config.js
cat postcss.config.mjs
```

### 路由 404

确保页面文件命名正确：
- 动态路由：`[slug]/page.tsx`
- 静态路由：`about/page.tsx`

---

## 📞 支持

遇到问题？

- GitHub Issues: https://github.com/wyg5208/nct/issues
- Email: weng@graduate.utm.my
- Vercel 文档：https://nextjs.org/docs

---

**最后更新**: 2026-02-28  
**版本**: v1.0.0
