# VibeCoding 教程网站

基于 VitePress 1.6.4 构建的 AI 协作软件开发教程网站。

## 快速开始

```bash
# 安装依赖
npm install

# 启动开发服务器
npm run docs:dev

# 构建生产版本
npm run docs:build

# 预览生产版本
npm run docs:preview
```

## 部署到 Cloudflare Pages

```bash
# 构建
npm run docs:build

# 使用 wrangler 部署
npx wrangler pages deploy .vitepress/dist
```

### 配置 Google Analytics

1. 在 Cloudflare Pages 设置环境变量 `GA_ID`，值为你的 Google Analytics ID（如 `G-XXXXXXXXXX`）
2. 或在 `.env` 文件中设置：
   ```
   GA_ID=G-XXXXXXXXXX
   ```
3. 开发环境不会加载统计代码，只有生产构建时才会注入

## 项目结构

```
www/
├── docs/                    # 文档内容
├── .vitepress/
│   ├── config.mts          # VitePress 配置
│   ├── theme/              # 自定义主题
│   └── plugins/            # Markdown 插件
├── public/
│   ├── logo.svg            # 网站 Logo
│   ├── banner.svg          # 首页 Banner
│   └── robots.txt          # SEO 配置
├── scripts/                 # 构建脚本
├── index.md                 # 首页
└── package.json
```

## 功能特性

- ✅ VitePress 1.6.4
- ✅ Mermaid 图表支持
- ✅ 全书侧边栏导航
- ✅ SEO 优化（sitemap, robots.txt, meta 标签）
- ✅ Vue 代码块正确渲染
- ✅ 响应式设计
- ✅ 深色模式支持
