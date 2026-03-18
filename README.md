# NeuroConscious Web

**版本**: V1.0

NeuroConscious 是一个基于 Next.js 15 + React 19 构建的现代化、响应式网站，专注于神经网络与脑机接口技术的科普与分享。

## ✨ 特性

- 🚀 **高性能** - 基于 Next.js 15 App Router，支持服务端渲染和静态生成
- 🌐 **国际化** - 支持中文和英文双语切换（next-intl）
- 🎨 **现代 UI** - 使用 Tailwind CSS v4 构建的响应式设计
- 🌓 **明暗主题** - 支持自动/手动切换明暗模式
- 📱 **响应式布局** - 完美适配桌面端和移动端
- 📊 **数据可视化** - 集成 Recharts 图表库
- 🔍 **SEO 优化** - 自动生成 sitemap 和元标签
- ⚡ **TypeScript** - 完整的类型支持
- 📈 **性能分析** - 内置性能监控和分析功能

## 🛠️ 技术栈

**框架与核心**：
- Next.js 15.1.6
- React 19.2.3
- TypeScript 5

**样式与 UI**：
- Tailwind CSS v4
- Lucide React 图标库

**国际化**：
- next-intl

**数据可视化**：
- Recharts 3.7.0

**部署与分析**：
- Vercel Analytics
- Vercel 平台部署

## 📦 安装

### 前置要求

- Node.js 18.17 或更高版本
- npm、yarn、pnpm 或 bun

### 克隆项目

```bash
git clone https://github.com/wyg5208/neuroconscious-web.git
cd neuroconscious-web
```

### 安装依赖

```bash
npm install
# 或
yarn install
# 或
pnpm install
# 或
bun install
```

## 🚀 开发

### 启动开发服务器

```bash
npm run dev
# 或
yarn dev
# 或
pnpm dev
# 或
bun dev
```

打开 [http://localhost:3000](http://localhost:3000) 查看结果。

编辑 `src/app/page.tsx` 开始修改页面，保存后会自动更新。

## 📁 项目结构

```
neuroconscious-web/
├── src/
│   ├── app/                  # Next.js App Router 路由
│   │   ├── about/           # 关于页面
│   │   ├── docs/            # 文档页面
│   │   ├── technology/      # 技术页面
│   │   ├── globals.css      # 全局样式
│   │   ├── layout.tsx       # 根布局
│   │   └── page.tsx         # 首页
│   ├── components/          # React 组件
│   │   ├── Header.tsx       # 页头
│   │   ├── Footer.tsx       # 页脚
│   │   ├── HeroSection.tsx  # 主视觉区域
│   │   └── ...
│   ├── lib/                 # 工具库
│   │   ├── useTranslation.ts
│   │   └── docsConfig.ts
│   └── locales/             # 国际化翻译文件
├── public/                  # 静态资源
├── package.json
└── README.md
```

## 🏗️ 构建与部署

### 生产构建

```bash
npm run build
npm start
```

### 部署到 Vercel

最简单的方式是使用 [Vercel 平台](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme)。

1. 推送代码到 GitHub/GitLab
2. 在 Vercel 导入项目
3. 自动完成部署

更多部署详情查看 [Next.js 部署文档](https://nextjs.org/docs/app/building-your-application/deploying)。

## 📝 脚本命令

- `npm run dev` - 启动开发服务器
- `npm run build` - 构建生产版本
- `npm start` - 启动生产服务器
- `npm run lint` - 运行 ESLint 代码检查
- `npm run postbuild` - 构建后生成 sitemap

## 🌐 国际化

项目支持中英文双语：

- 访问 `/?lang=zh` 切换到中文
- 访问 `/?lang=en` 切换到英文
- 语言设置会保存在 localStorage

翻译文件位于 `src/locales/` 目录。

## 🤝 贡献

欢迎提交 Issue 和 Pull Request！

## 📄 许可证

MIT License

## 👥 致谢

感谢以下开源项目：
- [Next.js](https://nextjs.org)
- [React](https://react.dev)
- [Tailwind CSS](https://tailwindcss.com)
- [Recharts](https://recharts.org)
- [Lucide Icons](https://lucide.dev)

---

**Built with ❤️ by NeuroConscious Team**
