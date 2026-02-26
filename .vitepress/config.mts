import { defineConfig, HeadConfig } from 'vitepress'
import { withMermaid } from 'vitepress-plugin-mermaid'
import { escapeVueInCodePlugin } from './plugins/escape-vue-in-code'

const GA_ID = process.env.GA_ID || ''

const gaHead: HeadConfig[] = GA_ID
  ? [
      ['script', { async: '', src: `https://www.googletagmanager.com/gtag/js?id=${GA_ID}` }],
      ['script', {}, `window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${GA_ID}');`],
    ]
  : []

export default withMermaid(
  defineConfig({
    title: 'VibeWork Lab',
    description: '用 AI 赋能创造力 - 实战课程，从零到一，快速上手',
    lang: 'zh-CN',
    srcDir: 'docs',

    lastUpdated: true,
    cleanUrls: true,
    ignoreDeadLinks: [
      /^http:\/\/localhost/,
      './L08-user-register',
      './../02-requirements/L04-idea',
      '/coding/zero-to-one/index',
    ],

    head: [
      ['meta', { charset: 'utf-8' }],
      ['meta', { name: 'viewport', content: 'width=device-width, initial-scale=1' }],
      ['meta', { name: 'theme-color', content: '#42b983' }],
      ['meta', { name: 'author', content: 'VibeWork Lab' }],
      ['link', { rel: 'icon', href: '/logo.svg' }],
      ['link', { rel: 'apple-touch-icon', href: '/logo.svg' }],
      ['meta', { property: 'og:type', content: 'website' }],
      ['meta', { property: 'og:title', content: 'VibeWork Lab - 用 AI 赋能创造力' }],
      ['meta', { property: 'og:description', content: '实战课程，从零到一，快速上手' }],
      ['meta', { property: 'og:image', content: '/banner.svg' }],
      ['meta', { name: 'twitter:card', content: 'summary_large_image' }],
      ['meta', { name: 'twitter:title', content: 'VibeWork Lab - 用 AI 赋能创造力' }],
      ['meta', { name: 'twitter:description', content: '实战课程，从零到一，快速上手' }],
      ['meta', { name: 'keywords', content: 'AI编程,VibeWork Lab,AI协作,软件开发,Vue教程,从零到一,高职计算机' }],
      ...gaHead,
    ],

    sitemap: {
      hostname: 'https://docs.vibeworklab.com',
    },

    mermaid: {
      theme: 'default',
    },

    markdown: {
      lineNumbers: true,
      config: (md) => {
        md.use(escapeVueInCodePlugin())
      },
    },

    themeConfig: {
      logo: '/logo.svg',
      siteTitle: 'VibeWork Lab',

      nav: [
        { text: '首页', link: '/' },
        { text: '课程', link: '/coding/' },
        { text: '关于', link: '/about' },
      ],

      sidebar: {
        '/coding/zero-to-one/': [
          {
            text: '从零到一',
            items: [
              { text: '课程简介', link: '/coding/zero-to-one/' },
              { text: '学习路线图', link: '/coding/zero-to-one/roadmap' },
            ],
          },
          {
            text: '阶段0：认知与方法',
            collapsed: false,
            items: [
              { text: 'L01 AI时代，你的角色变了', link: '/coding/zero-to-one/L01-ai-era' },
              { text: 'L02 工具准备', link: '/coding/zero-to-one/L02-tooling' },
              { text: 'L02.5 终端入门', link: '/coding/zero-to-one/L02.5-terminal' },
              { text: 'L03 人机协作范式', link: '/coding/zero-to-one/L03-collaboration' },
            ],
          },
          {
            text: '阶段1：需求与设计',
            collapsed: false,
            items: [
              { text: 'L04 发现需求', link: '/coding/zero-to-one/L04-discovery' },
              { text: 'L05 定义需求', link: '/coding/zero-to-one/L05-definition' },
              { text: 'L06 产品设计', link: '/coding/zero-to-one/L06-design' },
            ],
          },
          {
            text: '阶段2：开发实现',
            collapsed: false,
            items: [
              { text: 'L07 项目搭建', link: '/coding/zero-to-one/L07-setup' },
              { text: 'L07.5 Vue基础知识', link: '/coding/zero-to-one/L07.5-vue-basics' },
              { text: 'L08 用户认证', link: '/coding/zero-to-one/L08-user-auth' },
              { text: 'L09 发布物品', link: '/coding/zero-to-one/L09-item-publish' },
              { text: 'L10 浏览搜索', link: '/coding/zero-to-one/L10-browse-search' },
              { text: 'L11 物品详情', link: '/coding/zero-to-one/L11-item-detail' },
              { text: 'L12 界面美化', link: '/coding/zero-to-one/L12-ui-polish' },
              { text: 'L13 测试修复', link: '/coding/zero-to-one/L13-test-fix' },
            ],
          },
          {
            text: '阶段3：上线运营',
            collapsed: false,
            items: [
              { text: 'L14 部署上线', link: '/coding/zero-to-one/L14-deploy' },
              { text: 'L15 推广物料', link: '/coding/zero-to-one/L15-promotion' },
              { text: 'L16 推广运营', link: '/coding/zero-to-one/L16-operations' },
            ],
          },
          {
            text: '阶段4：总结与就业',
            collapsed: false,
            items: [
              { text: 'L17 方法论总结', link: '/coding/zero-to-one/L17-methodology' },
              { text: 'L18 成果展示', link: '/coding/zero-to-one/L18-showcase' },
              { text: 'L19 就业指导', link: '/coding/zero-to-one/L19-career' },
            ],
          },
          {
            text: '附录',
            items: [
              { text: '术语表', link: '/coding/zero-to-one/GLOSSARY' },
            ],
          },
        ],
        '/coding/': [
          {
            text: 'Coding',
            items: [
              { text: '课程列表', link: '/coding/' },
              { text: '从零到一', link: '/coding/zero-to-one/' },
            ],
          },
        ],
        '/design/': [
          {
            text: 'Design',
            items: [
              { text: '简介', link: '/design/' },
            ],
          },
        ],
        '/ai/': [
          {
            text: 'AI',
            items: [
              { text: '简介', link: '/ai/' },
            ],
          },
        ],
      },

      socialLinks: [
        { icon: 'github', link: 'https://github.com/vibeworklab' },
      ],

      footer: {
        message: '基于 CC BY-NC-SA 4.0 发布',
        copyright: 'Copyright © 2026 VibeWork Lab',
      },

      editLink: {
        pattern: 'https://github.com/vibeworklab/vibecoding-zero-to-one/edit/main/:path',
        text: '在 GitHub 上编辑此页',
      },

      lastUpdated: {
        text: '最后更新于',
        formatOptions: {
          dateStyle: 'short',
        },
      },

      docFooter: {
        prev: '上一篇',
        next: '下一篇',
      },

      outline: {
        label: '页面导航',
      },

      returnToTopLabel: '返回顶部',
      sidebarMenuLabel: '菜单',
      darkModeSwitchLabel: '主题',
      lightModeSwitchTitle: '切换到浅色模式',
      darkModeSwitchTitle: '切换到深色模式',
    },
  })
)
